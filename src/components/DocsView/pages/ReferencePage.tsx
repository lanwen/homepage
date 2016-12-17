import * as React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'react-router'
import TemporaryNavigation from '../components/TemporaryNavigation'

interface Props {
  data: any
}

class ReferencePage extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <h1>Landing page for the references</h1>
        {this.props.data.loading ? 'loading...' : <TemporaryNavigation links={this.props.data.allItems} />}
      </div>
    )
  }
}

const getItem = gql`query getItemsByLayout($layout: ITEM_LAYOUT) {
    allItems(filter: {layout: $layout}) {
        id
        body
        alias
        path
        title
        layout
        tags
    }
}`

const ReferencePageWithData = graphql(getItem, {
  options: {
      variables: {
        layout: 'REFERENCE',
      },
    },
  })(ReferencePage)

export default withRouter(ReferencePageWithData)
