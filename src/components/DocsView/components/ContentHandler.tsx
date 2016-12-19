import * as React from 'react'
import {Node, Parser} from 'commonmark'
import Markdown from './Markdown'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'react-router'
import DocsView from '../DocsView'
import {$p} from 'graphcool-styles'
import LeftSidebar from './LeftSidebar'
import RelatedContent from './RelatedContent'
import styled from 'styled-components'
import * as cx from 'classnames'
import ContentWindow from './ContentWindow'

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
    alias
    path
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
      alert('Resource not found, redirecting')
      this.props.router.push('/docs')
    } else if (typeof nextProps.data.Item.path !== 'undefined') {
      const contentUrl = `${nextProps.data.Item.path}/${nextProps.data.Item.alias}`
      const currentPath = this.props.location.pathname
      if (contentUrl !== currentPath) {
        this.props.router.replace(contentUrl)
      }
    }
  }

  shouldComponentUpdate(nextProps) {
    return !(nextProps.data.Item === null && !nextProps.data.loading)
  }

  render() {
    const str64ToAst = (str: string): Node => new Parser().parse(atob(str))
    const RightSection = styled.div`
       flex: 1 1 100px;
    `
    const children = (
      <div className={cx($p.flex)} ref='root'>
        <LeftSidebar/>
         <RightSection className={cx($p.flexWrap)}>
            <section className={cx($p.flex, $p.flexWrap, $p.ph60)} style={{paddingTop: '12rem'}}>
              <div>{
                !this.props.data.loading &&
                <Markdown ast={str64ToAst(this.props.data.Item.body)} />
              }</div>
            </section>
            <RelatedContent />
          </RightSection>
      </div>
    )
    return (
      <DocsView children={children} location={this.props.location}/>
    )
  }
}

const ContentHandlerWithData = graphql(getItem, {
  options: (ownProps) => {
    const pathname = ownProps.location.pathname.split('/')
    const contentAlias = pathname[pathname.length - 1]
    return ({
      variables: {
        alias: contentAlias,
      },
    })
  },
})(ContentHandler)

export default withRouter(ContentHandlerWithData)
