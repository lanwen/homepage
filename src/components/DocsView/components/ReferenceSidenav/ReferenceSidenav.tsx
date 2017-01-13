import * as React from 'react'
import styled from 'styled-components'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import { breakpoints } from '../../../../utils/constants'
import ListItems from './ListItems'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { ReferenceSidebarElement, elements } from './data'
import { Item, NestedItem } from '../../../../types/types'

const FixedNavigation = styled.div`
  margin-top: 144px;
  height: 100%;
`

const VerticalContainer = styled.div`
  flex: 0 0 300px;
  background-color: rgba(0, 0, 0, 0.02);
  
  @media (max-width: ${breakpoints.p1360}px) {
    flex: 0 0 250px;
  }
`

interface Props {
  currentAlias: string,
  data: {
    loading: boolean,
    allItems: Item[],
  },
}

interface State {
  visibleItemIndex: number,
}

class ReferenceSidenav extends React.Component<Props, State> {

  state = {
    visibleItemIndex: 0,
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.data.loading) {
      return
    }
    const nestedItems = mapToNestedItems(elements, nextProps.data.allItems)
    const findRecursive = (item: NestedItem) => item.alias === nextProps.currentAlias ||
      item.children && !!item.children.find(findRecursive)
    const visibleItemIndex = nestedItems.findIndex(findRecursive)

    this.setState({visibleItemIndex})
  }

  render() {
    if (this.props.data.loading) {
      return null
    }

    const nestedItems = mapToNestedItems(elements, this.props.data.allItems)
    const {currentAlias} = this.props

    return (
      <VerticalContainer>
        <FixedNavigation className={cx($p.flex, $p.flexColumn)}>
          {nestedItems.map((item, index) => (
            <ListItems
              key={item.alias}
              expanded={this.state.visibleItemIndex === index}
              item={item}
              currentAlias={currentAlias}
            />
          ))}
        </FixedNavigation>
      </VerticalContainer>
    )
  }
}

function mapToNestedItems(elements: ReferenceSidebarElement[], items: Item[]): NestedItem[] {
  return elements.map(el => {
    const item = items.find(i => i.alias === el.alias)!
    const children = el.children ? {children: mapToNestedItems(el.children, items)} : {}
    return Object.assign({}, item, children)
  })
}

function extractAliases(elements: ReferenceSidebarElement[]): string[] {
  return elements.reduce(
    (acc, element) => acc.concat([element.alias].concat(element.children ? extractAliases(element.children) : [])),
    [] as string[],
  )
}

const query = gql`query items($aliases: [String!]!) {
  allItems(filter: { alias_in: $aliases }) {
    title
    shorttitle
    alias
    path
  }
}`

const ReferenceSidenavWithData = graphql(query, {
  options: () => {
    const aliases = extractAliases(elements)
    return {
      variables: {aliases},
    }
  },
})(ReferenceSidenav)

export default ReferenceSidenavWithData
