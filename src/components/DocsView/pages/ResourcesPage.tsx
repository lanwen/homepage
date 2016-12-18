import * as React from 'react'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router'
import TemporaryNavigation from '../components/TemporaryNavigation'
import {getItemsByLayout} from '../fragments/getItemsByLayout'

interface Props {
  data: any
}

class ResourcesPage extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <h1>Landing page for the resources page</h1>
        {this.props.data.loading ? 'loading...' : <TemporaryNavigation links={this.props.data.allItems} />}
      </div>
    )
  }
}

const ResourcesPageWithData = graphql(getItemsByLayout, {
  options: {
    variables: {
      layout: 'REFERENCE',
    },
  },
})(ResourcesPage)

export default withRouter(ResourcesPageWithData)
