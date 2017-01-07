import * as React from 'react'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router'
import TemporaryNavigation from '../components/TemporaryNavigation'
import {getItemsByLayout} from '../fragments/getItemsByLayout'
import ContentWindow from '../components/ContentWindow'
import * as Helmet from 'react-helmet'
import gql from 'graphql-tag'

interface Props {
  data: any
}

class ResourcesPage extends React.Component<Props, {}> {
  render() {
    return (
      <ContentWindow>
        <Helmet title='Resources' />
        <h1>Landing page for the resources page</h1>
        {this.props.data.loading ? 'loading...' : <TemporaryNavigation links={this.props.data.allItems} />}
      </ContentWindow>
    )
  }
}

const query = gql`
  query getItemsByLayout($ids: ) {
    allItems(filter: {layout: $layout}) {
      id
      body
      alias
      path
      title
      layout
      tags
      description
    }
  }
`

const ResourcesPageWithData = graphql(getItemsByLayout, {
  options: {
    variables: {
      layout: 'FAQ',
    },
  },
})(ResourcesPage)

export default withRouter(ResourcesPageWithData)

