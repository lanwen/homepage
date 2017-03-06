import * as React from 'react'
import {throttle} from 'lodash'

export interface Heading {
  title: string
  id: string
}

export interface Props {
  headings: Heading[]
}

interface State {
  activeIndex: number
}

export default class ScrollSpy extends React.Component<Props, State> {
  private handleScroll = throttle(
    () => {
      let visibleIndex = this.props.headings.findIndex(heading => {
        const element = document.getElementById(heading.id)
        return this.isOverOrInViewport(element)
      })

      visibleIndex = visibleIndex === -1 ? 0 : visibleIndex

      if (this.state.activeIndex !== visibleIndex) {
        this.setState({
          activeIndex: visibleIndex,
        })
      }
    },
    50,
  )
  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0,
    }
  }
  isOverOrInViewport(element) {
    return element.getBoundingClientRect().top >= 0
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  render() {
    const {headings} = this.props
    const {activeIndex} = this.state
    return (
      <div className='scroll-spy'>
        <style jsx>{`
          .scroll-spy {
            @p: .fixed, .top0, .bl, .pl16, .overflowYScroll;
            border-color: rgba(28,191,50,.5);
            margin-top: 190px;
            width: 200px;
            max-height: calc(100vh - 250px);
          }
          .steps {
            @p: .ttu, .fw6, .f14, .black30;
          }
          .contents {
            @p: .mt25;
          }
          .content {
            @p: .mt16, .black50, .db, .noUnderline;
          }
          .content.active, .content:hover {
            @p: .green;
          }
        `}</style>
        <div className='steps'>Steps</div>
        <div className='contents'>
          {headings.map((content, i) => (
            <a href={`#${content.id}`} key={content.title} className={'content' + (activeIndex === i ? ' active' : '')}>
              {content.title}
            </a>
          ))}
        </div>
      </div>
    )
  }
}
