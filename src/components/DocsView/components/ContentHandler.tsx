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
import FAQSidebar from './FAQSidebar'
import ContentHeader from './Content/ContentHeader'
import RelatedContentFooter from './Content/RelatedContentFooter'
import Feedback from './Content/Feedback'
import EditGithub from './Content/EditGithub'
import {getAliasFromUrl} from '../../../utils/index'
import * as Helmet from 'react-helmet'

interface Props {
  location: any,
  history: any,
  data: {
    loading: boolean,
    Item: Item,
  },
  router: ReactRouter.InjectedRouter,
}

interface Context {
  setIsLoading: (isLoading: boolean) => void
}

interface Meta {
  name?: string
  property?: string
  content?: string
  charset?: string
  httpEquiv?: string
}

class ContentHandler extends React.Component<Props, {}> {

  static contextTypes = {
    setIsLoading: React.PropTypes.func.isRequired,
  }

  context: Context

  componentWillReceiveProps(nextProps: Props) {

    if (nextProps.data.loading !== this.props.data.loading) {
      this.context.setIsLoading(nextProps.data.loading)
    }

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

    const item: Item = this.props.data.Item
    const ast = new Parser().parse(atob(this.props.data.Item.body))
    const ContentContainer = styled.div`
       flex: 1 1 100px;
    `

    let imageMeta: Meta[] = []

    if (item.preview && item.preview.length > 0) {
      imageMeta = imageMeta.concat([
        { property: 'og:image', content: item.preview },
        { name: 'twitter:image', content: item.preview },
      ])
    }

    return (
      <div onClick={this.onClick}>
        <Helmet
          title={item.shorttitle}
          meta={[
            { property: 'og:type', content: 'article' },
            { property: 'og:title', content: item.title },
            { property: 'og:description', content: item.description },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:description', content: item.description },
            ...imageMeta,
          ]}
        />
        <DocsView location={this.props.location}>
          {item.layout === 'REFERENCE' && <ReferenceSidenav currentAlias={item.alias}/>}
          <ContentContainer>
            <section className={cx($p.ph60, $p.pt96)} style={{ maxWidth: 920, margin: '0 auto' }}>
              <ContentHeader item={item}/>
              <Markdown
                ast={ast}
                layout={item.layout}
                item={item}
              />
            </section>
            <Feedback />
            <RelatedContentFooter item={item}/>
            {item.layout !== 'BLOG' && <EditGithub sourceFilePath={item.sourceFilePath}/>}
          </ContentContainer>
          {item.layout === 'FAQ' && <FAQSidebar/>}
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
    shorttitle
    title
    description
    sourceFilePath
    preview
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
    const alias = getAliasFromUrl(ownProps.location.pathname)
    return {
      variables: {alias},
    }
  },
})(ContentHandler)

export default withRouter(ContentHandlerWithData)
