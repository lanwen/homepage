import * as React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'react-router'
import TemporaryNavigation from '../components/TemporaryNavigation'
import {getItemsByLayout} from '../fragments/getItemsByLayout'

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

const ReferencePageWithData = graphql(getItemsByLayout, {
  options: {
      variables: {
        layout: 'REFERENCE',
      },
    },
  })(ReferencePage)

export default withRouter(ReferencePageWithData)
