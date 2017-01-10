import * as React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import DocsView from '../DocsView'

interface Props {
  data: any
}

class DocsOverview extends React.Component<Props, {}> {
  render() {
    const {data} = this.props
    return (
      <div>
        <DocsView location={location}>
          <h1>Reference Documentation</h1>
          <h1>Quick Start</h1>
          <h1>Tutorial &amp; Guides</h1>
          {data.loading ? (
              <div>Loading...</div>
            ) : (
              <div>
                {data.tutorials.map(tutorial => (
                  <div>{tutorial.title}</div>
                ))}
              </div>
            )}
          <h1>Frequently Asked Questions</h1>
          {data.loading ? (
              <div>Loading...</div>
            ) : (
              <div>
                {data.faqs.map(faq => (
                  <div>{faq.title}</div>
                ))}
              </div>
            )}
          <h1>Community</h1>
        </DocsView>
      </div>
    )
  }
}

const getItemsQuery = gql`
  {
    faqs: allItems(
      filter: {
        layout: FAQ
      }
      first: 3
    ) {
      id
      alias
      title
      preview
      description
      tags
    }

    tutorials: allItems(
      filter: {
        layout: TUTORIAL
      }
      first: 3
    ) {
      id
      alias
      title
      preview
      description
      tags
    }
  }
`

export default graphql(getItemsQuery)(DocsOverview)
