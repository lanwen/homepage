import * as React from 'react'
import {$p} from 'graphcool-styles'
import * as cx from 'classnames'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

interface Props {
  data: any
}

class FAQ extends React.Component<Props, {}> {
  render() {
    const {data} = this.props

    if (data.loading) {
      return <div>Loading...</div>
    }

    return (
      <div className={cx($p.flex, $p.flexWrap)}>
        {data.allItems.map(item => (
          <div key={item.alias}>

          </div>
        ))}
      </div>
    )
  }
}


const getItemsQuery = gql`
  query ($first: Int){
    allItems(
      filter: {
        layout: FAQ
      }
      first: $first
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

export default graphql(getItemsQuery, {
  options: ({count}) => ({ variables: {first: count || 3} })
})(FAQ)
