import * as React from 'react'
import { Node, Parser } from 'commonmark'
import Markdown from './Content/Markdown'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'react-router'
import DocsView from '../DocsView'
import { Item } from '../../../types/types'
import ReferenceSidenav from './ReferenceSidenav/ReferenceSidenav'
import { $p } from 'graphcool-styles'
import styled from 'styled-components'
import * as cx from 'classnames'
import FAQ from './FAQ'
import ContentHeader from './Content/ContentHeader'
import RelatedContentFooter from './Content/RelatedContentFooter'
import Feedback from './Content/Feedback'
import EditGithub from './Content/EditGithub'
import MultipleTopicBoxes from './Content/MultipleTopicBoxes'

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

    const item = this.props.data.Item
    const ast = new Parser().parse(atob(this.props.data.Item.body))
    const RightSection = styled.div`
       flex: 1 1 100px;
    `

    return (
      <div onClick={this.onClick}>
        <DocsView location={this.props.location}>
          {item.layout === 'REFERENCE' && <ReferenceSidenav currentAlias={item.alias}/>}
          <RightSection className={cx($p.flexWrap)}>
            <section className={cx($p.flex, $p.flexWrap, $p.ph60, $p.pt96)}>
              <ContentHeader item={item}/>
              <Markdown ast={ast}/>
            </section>
            <Feedback />
            <RelatedContentFooter item={item}/>
            {item.layout !== 'BLOG' && <EditGithub sourceFilePath={item.sourceFilePath}/>}
           <MultipleTopicBoxes item={item}/>
          </RightSection>
          {item.layout === 'FAQ' && <FAQ/>}
        </DocsView>
      </div>
    )
  }

  // capture internal links to navigate via react-router
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
    lastModified
    title
    sourceFilePath
    relatedFurther {
      alias
      shorttitle
      path
      layout
    }
    relatedMore {
      alias
      shorttitle
      path
      layout
    }
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
