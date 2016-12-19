import * as React from 'react'
import { $p, $v, $g } from 'graphcool-styles'
import styled from 'styled-components'
import * as cx from 'classnames'
import { breakpoints } from '../../../utils/constants'
import { Node, Parser } from 'commonmark'
import ListItems from './ListItems'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { ReferenceSidebarElement, elements } from './reference-sidebar'
import { Item } from '../../../types/types'

interface Props {
  data: {
    loading: boolean
    allItems: Item[]
  }
}

class ReferenceSidenav extends React.Component<Props, {}> {
  render() {
    console.log(this.props.data)

    const FixedNavigation = styled.div`
      margin-top: 120px;
      height: 100%;
    `
    const VerticalContainer = styled.div`
      flex: 0 0 300px;
      background-color: rgba(0, 0, 0, 0.02);
      
      @media (max-width: ${breakpoints.p1360}px) {
        flex: 0 0 250px;
      }
    `
    const RightSection = styled.div`
       flex: 1 1 100px;
    `
    return (
      <VerticalContainer>
        <FixedNavigation>
          <ListItems
            title='GETTING STARTED'
            subtitle=''
            subsubtitle=''
            subsubsubtitle=''
          />
        </FixedNavigation>
      </VerticalContainer>
    )
  }
}

function extractAliases(elements: ReferenceSidebarElement[]): string[] {
  return elements.reduce(
    (acc, element) => acc.concat([element.alias].concat(element.children ? extractAliases(element.children) : [])),
    [] as string[]
  )
}

const getItemQuery = gql`query items($aliases: [String!]!) {
  allItems(filter: { alias_in: $aliases }) {
    title
    shorttitle
    alias
  }
}`

const ReferenceSidenavWithData = graphql(getItemQuery, {
  options: (ownProps) => {
    const aliases = extractAliases(elements)
    return {
      variables: {aliases},
    }
  },
})(ReferenceSidenav)

export default ReferenceSidenavWithData