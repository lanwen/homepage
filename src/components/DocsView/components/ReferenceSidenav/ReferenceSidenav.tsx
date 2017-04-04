import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import { breakpoints } from '../../../../utils/constants'
import ListItems from './ListItems'
import { ReferenceSidebarElement, elements } from './data'
import { Item, NestedItem } from '../../../../types/types'
import { throttle } from 'lodash'

const VerticalContainer = styled.div`
  flex: 0 0 250px;
  position: relative;
  top: -194px;
  height: calc(100% + 194px);
  
  // Fix to prevent overflowing with footer
  background-color: #fafafa;
  z-index: 20;
  
  @media (max-width: ${breakpoints.p1360}px) {
    flex: 0 0 250px;
  }
  
  @media (max-width: ${breakpoints.p750}px) {
    display: none;
  }
`

const FixedWrapper = styled.div`
  margin-top: 144px;
  height: 100%;
  width: 250px;
`

interface Props {
  currentAlias: string
  items: Item[]
}

interface State {
  activeItemIndex: number
  fixed: boolean
  absolute: boolean
  containerOffset: number
}

const TOP = 97

class ReferenceSidenav extends React.Component<Props, State> {

  state = {
    activeItemIndex: 0,
    fixed: false,
    absolute: false,
    containerOffset: 0,
  }

  private offsets: number[] = []
  private containerRef: HTMLElement
  private bodyTopAtIntersection: number = -1

  private handleScroll = throttle(
    () => {
      const top = window.scrollY

      const {activeItemIndex, fixed} = this.state
      const activeOffset = this.offsets[activeItemIndex] - 32
      const container = ReactDOM.findDOMNode(this.containerRef)
      if (container) {
        const footer = document.getElementById('footer')
        const reactRoot = document.getElementById('react-root')
        if (!footer || !reactRoot) {
          return
        }
        const footerHeight = footer.clientHeight
        const bodyHeight = reactRoot.clientHeight
        const bodyTop = document.body.scrollTop
        const threshold = bodyHeight - footerHeight
        const containerHeight = container.clientHeight
        const containerTop = container.getBoundingClientRect().top + bodyTop

        const overThreshold = containerTop + containerHeight > (threshold - 45)
        // leave the logging for later debugging
        // console.log('\n\n\n')
        // console.log(`containerTop + containerHeight ${containerTop+containerHeight}
        // (threshold - 45) ${threshold - 45}`)
        // console.log(`bodyHeight ${bodyHeight}\nbodyTop${bodyTop}\nthreshold ${threshold}`)
        // console.log(`footerHeight ${footerHeight}`)
        // console.log(`containerTop ${containerTop}\ncontainerHeight ${containerHeight}`)
        // console.log(`containerTop+containerHeight ${containerTop + containerHeight}`)
        // console.log(`overThreshold ${overThreshold}`)

        let greaterThanLastIntersection = true

        if (this.bodyTopAtIntersection > -1) {
          greaterThanLastIntersection = bodyTop > this.bodyTopAtIntersection
        }

        if (overThreshold && fixed && greaterThanLastIntersection) {
          if (this.bodyTopAtIntersection === -1) {
            this.bodyTopAtIntersection = bodyTop
          }
          const containerOffset = threshold - containerHeight - TOP - 95
          this.setState({
            absolute: true,
            fixed: false,
            containerOffset,
          } as State)
        }

        let lowerThanLastIntersection = true

        if (this.bodyTopAtIntersection > -1) {
          lowerThanLastIntersection = bodyTop <= this.bodyTopAtIntersection
        }

        if (lowerThanLastIntersection && (!this.state.fixed && ((top > activeOffset && !overThreshold)))) {
          this.setState({fixed: true, containerOffset: 0, absolute: false} as State)
        } else if (top <= activeOffset && this.state.fixed) {
          this.setState({fixed: false, containerOffset: 0, absolute: false} as State)
        }
      }
    },
    50,
  )

  componentWillReceiveProps(nextProps: Props) {
    const nestedItems = mapToNestedItems(elements, nextProps.items)
    const findRecursive = (item: NestedItem) => item.alias === nextProps.currentAlias ||
    item.children && !!item.children.find(findRecursive)
    const activeItemIndex = nestedItems.findIndex(findRecursive)

    if (this.props.currentAlias !== nextProps.currentAlias) {
      this.offsets = []
      this.bodyTopAtIntersection = -1
      this.setState({absolute: false, fixed: false, containerOffset: 0} as State)
    }

    this.setState({activeItemIndex} as State)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const nestedItems = mapToNestedItems(elements, this.props.items)
    const {currentAlias} = this.props

    const {activeItemIndex, fixed, absolute, containerOffset} = this.state
    const activeOffset = this.offsets[activeItemIndex]

    let style = {}
    if (fixed) {
      style['transform'] = `translateY(-${activeOffset + TOP + 25}px)`
    }

    if (containerOffset) {
      style['top'] = `${containerOffset}px`
    }

    return (
      <VerticalContainer
        className={cx(
          window.innerWidth > breakpoints.p1360 ? $p.pl60 : 0,
        )}
        style={{
          top: -194,
        }}
      >
        <FixedWrapper
          className={cx(
            $p.z3,
            {
              [$p.fixed]: fixed,
              [$p.absolute]: absolute,
            },
          )}
          style={style}
        >
          <div
            className={cx($p.flex, $p.flexColumn)}
            ref={this.registerContainerRef}
          >
            {nestedItems.map((item, index) => (
              <ListItems
                key={item.alias}
                expanded={this.state.activeItemIndex === index}
                item={item}
                currentAlias={currentAlias}
                ref={ref => this.registerRef(index, ref)}
              />
            ))}
          </div>
        </FixedWrapper>
      </VerticalContainer>
    )
  }

  private registerContainerRef = (ref: any) => {
    // TODO investigate why this doesn't work with prep
    if (navigator.userAgent === 'SSR') {
      return
    }

    this.containerRef = ReactDOM.findDOMNode(ref) as HTMLElement
  }

  private getTop(element: HTMLElement) {
    const bodyTop = document.body.scrollTop

    return element.getBoundingClientRect().top + bodyTop
  }

  private registerRef = (index: number, ref: React.Component<any,any>) => {
    // TODO investigate why this doesn't work with prep
    if (navigator.userAgent === 'SSR') {
      return
    }

    const element = ReactDOM.findDOMNode(ref) as HTMLElement

    if (element === null) {
      return
    }

    if (this.offsets[index]) {
      return
    }

    let containerTop = 0

    if (this.containerRef) {
      containerTop = this.getTop(this.containerRef) - TOP // TOP is the margin of the sidebar to the top of the document
    }

    const top = this.getTop(element)

    this.offsets[index] = top - containerTop
  }
}

function mapToNestedItems(elements: ReferenceSidebarElement[], items: Item[]): NestedItem[] {
  return elements.map(el => {
    const item = items.find(i => i.alias === el.alias)!
    const children = el.children ? {children: mapToNestedItems(el.children, items)} : {}
    return Object.assign({}, item, children)
  })
}

export function extractAliases(elements: ReferenceSidebarElement[]): string[] {
  return elements.reduce(
    (acc, element) => acc.concat([element.alias].concat(element.children ? extractAliases(element.children) : [])),
    [] as string[],
  )
}

export default ReferenceSidenav
