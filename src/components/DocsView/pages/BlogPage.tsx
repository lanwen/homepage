import * as React from 'react'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router'
import TemporaryNavigation from '../components/TemporaryNavigation'
import {getItemsByLayout} from '../fragments/getItemsByLayout'

interface Props {
  data: any
}

class BlogPage extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <h1>Landing page for the blog page</h1>
        {this.props.data.loading ? 'loading...' : <TemporaryNavigation links={this.props.data.allItems} />}
      </div>
    )
  }
}

const BlogPageWithData = graphql(getItemsByLayout, {
  options: {
    variables: {
      layout: 'BLOG',
    },
  },
})(BlogPage)

export default withRouter(BlogPageWithData)
