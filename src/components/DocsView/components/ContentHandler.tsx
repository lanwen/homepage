import * as React from 'react'
import { Node, Parser } from 'commonmark'
import Markdown from './Markdown'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'react-router'
import DocsView from '../DocsView'
import { Item } from '../../../types/types'

interface Props {
  location: any,
  history: any,
  data: {
    loading: boolean,
    Item: Item,
  },
  router: ReactRouter.InjectedRouter,
}

class ContentHandler extends React.Component<Props, {}> {

  componentWillReceiveProps(nextProps: Props) {

    if (nextProps.data.loading) {
      return
    }

    // resource not found
    if (nextProps.data.Item === null) {
      alert('Resource not found, redirecting')
      this.props.router.push('/docs')
      return
    }

    // rewrite url if it doesn't already match item path
    const contentUrl = `${nextProps.data.Item.path}-${nextProps.data.Item.alias}`
    const currentPath = this.props.location.pathname
    if (contentUrl !== currentPath) {
      this.props.router.replace(contentUrl)
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.data.Item !== null && !nextProps.data.loading
  }

  render() {
    if (this.props.data.loading) {
      return null
    }

    const ast = new Parser().parse(atob(this.props.data.Item.body))
    const markdown = <Markdown ast={ast}/>

    return (
      <div onClick={this.onClick}>
        <DocsView
          children={markdown}
          location={this.props.location}
        />
      </div>
    )
  }

  private onClick = (e: React.MouseEvent<HTMLElement>): void => {
    if (e.target instanceof HTMLAnchorElement) {
      if (e.target.hostname === window.location.hostname) {
        e.preventDefault()
        this.props.router.push(e.target.pathname)
      }
    }
  }
}

const getItemQuery = gql`query getItem($alias: String) {
  Item(alias: $alias) {
    id
    body
    alias
    path
    layout
    tags
  }
}`

const ContentHandlerWithData = graphql(getItemQuery, {
  options: (ownProps) => {
    // get last element of a path that looks like this: /some/url/with-some-title-alias15235
    const alias = ownProps.location.pathname.split('/').reverse()[0].split('-').reverse()[0]
    return {
      variables: {alias},
    }
  },
})(ContentHandler)

export default withRouter(ContentHandlerWithData)
