import * as React from 'react'
import {Node, Parser} from 'commonmark'
import Markdown from '../../Markdown/Markdown'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'react-router'
import DocsView from '../DocsView'

interface Props {
  location: any
  history: any
  data: any
  router: any
}

const getItem = gql`query getItem($alias: String) {
    Item(alias: $alias) {
        id
        body
        layout
        tags
    }
}`

interface Item {
  body: string
}

class ContentHandler extends React.Component<Props, {}> {
  constructor(props) {
    super(props)
    this.state = {
      ast: null,
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.data.Item === null && !nextProps.data.loading) {
      console.log(nextProps.data, 'about to redirect')
      alert('error, redirecting')
      this.props.router.push('/404')
    } else {
      console.log('no error')
    }
    console.log(nextProps)
  }

  render() {
    const str64ToAst = (str: string): Node => new Parser().parse(atob(str))

    return (
      <div>
        <div>{this.props.data.loading ?
          'loading...'
          : <DocsView><Markdown ast={str64ToAst(this.props.data.Item.body)} /></DocsView>
        }</div>
      </div>
    )
  }
}

const ContentHandlerWithData = graphql(getItem, {
  options: (ownProps) => {
    const pathname = ownProps.location.pathname.split('/')
    const contentAlias = pathname[pathname.length - 1]
    console.log(contentAlias)
    return ({
      variables: {
        alias: contentAlias,
      },
    })
  },
})(ContentHandler)

export default withRouter(ContentHandlerWithData)
