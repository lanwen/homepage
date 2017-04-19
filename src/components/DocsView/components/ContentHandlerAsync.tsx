import * as React from 'react'
import { Parser } from 'commonmark'
import Markdown from './Content/Markdown'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'react-router'
import { Item } from '../../../types/types'
import ReferenceSidenav from './ReferenceSidenav/ReferenceSidenav'
import { $p } from 'graphcool-styles'
import * as cx from 'classnames'
import FAQSidebar from './FAQSidebar'
import ContentHeader from './Content/ContentHeader'
import RelatedContentFooter from './Content/RelatedContentFooter'
import Feedback from './Content/Feedback'
import EditGithub from './Content/EditGithub'
import { getAliasFromUrl } from '../../../utils'
import {Helmet} from 'react-helmet'
import { breakpoints } from '../../../utils/constants'
import ScrollSpy from './Content/ScrollSpy'
import {Heading} from './Content/ScrollSpy'
import ContentPagination from './ContentPagination'
import {elements} from './ReferenceSidenav/data'
import {extractAliases} from './ReferenceSidenav/ReferenceSidenav'
import LoadingArticle from './LoadingArticle'
import {omit, flatMap, orderBy} from 'lodash'

interface Props {
  location: any,
  history: any,
  data: {
    loading: boolean,
    Item: Item,
    allItems: Item[],
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

interface State {
  headings: { [headingsId: number]: Heading[] }
}

class ContentHandler extends React.Component<Props, State> {

  static contextTypes = {
    setIsLoading: React.PropTypes.func.isRequired,
  }

  context: Context
  private lastItem: Item

  constructor(props) {
    super(props)

    this.state = {
      headings: {},
    }
    console.log('ContentHandlerAsync: constructor')
    global['h'] = this
  }

  componentWillReceiveProps(nextProps: Props) {

    const isLoading = nextProps.data.loading !== this.props.data.loading
    if (isLoading) {
      this.context.setIsLoading(nextProps.data.loading)
    }

    if (nextProps.data.loading) {
      return
    }

    // resource not found
    if (nextProps.data.Item === null) {
      this.logFailedLink(nextProps.location.pathname, true)
      this.props.router.push('/404/')
      return
    }

    // rewrite url if it doesn't already match item path
    const contentUrl = `${nextProps.data.Item.path}-${nextProps.data.Item.alias}/`
    let currentPath = this.props.location.pathname
    if (contentUrl !== currentPath) {
      this.logFailedLink(nextProps.location.pathname, false)
      this.props.router.replace(contentUrl)
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.data.Item !== null
  }

  render() {
    console.log('ContentHandlerAsync: render', this.props)
    if (this.props.data.loading && !this.props.data.allItems) {
      return <LoadingArticle />
    }

    // merge all objects
    const headings = flatMap(Object.keys(this.state.headings), id => this.state.headings[id])

    const item: Item = this.props.data.Item || this.lastItem
    this.lastItem = item
    const aliases: string[] = extractAliases(elements)
    const items: Item[] = orderBy(
      this.props.data.allItems,
      a => aliases.indexOf(a.alias),
      ['desc'],
    ) || []
    const parser = new Parser()
    const ast = parser.parse(decodeURIComponent(atob(this.props.data.Item.body)))

    const subitemAsts = item.subitems.map(subitem =>
      parser.parse(decodeURIComponent(atob(subitem.body))),
    )

    let imageMeta: Meta[] = []

    if (item.preview && item.preview.length > 0) {
      imageMeta = imageMeta.concat([
        {property: 'og:image', content: item.preview},
        {name: 'twitter:image', content: item.preview},
      ])
    }

    let contentBoxMarginLeft = 0
    if (window.innerWidth < breakpoints.p1360) {
      contentBoxMarginLeft = 40
    } else if (item.layout === 'FAQ') {
      contentBoxMarginLeft = 121
    } else if (item.layout === 'REFERENCE') {
      contentBoxMarginLeft = 61
    }

    if (window.innerWidth < breakpoints.p500) {
      contentBoxMarginLeft = 38
    }

    if (window.innerWidth < breakpoints.p400) {
      contentBoxMarginLeft = 25
    }

    let contentBoxMarginRight = 0
    if (item.layout === 'FAQ' && window.innerWidth > breakpoints.p1200) {
      contentBoxMarginRight = 50
    } else if (window.innerWidth < breakpoints.p1360) {
      contentBoxMarginRight = 40
    }

    if (window.innerWidth < breakpoints.p900) {
      contentBoxMarginRight = 38
    }

    if (window.innerWidth < breakpoints.p400) {
      contentBoxMarginRight = 25
    }
    const pageTitle = item.title + (item.layout === 'REFERENCE' ? ' - Graphcool' : '')
    return (
      <div onClick={this.onClick} className={cx($p.w100)}>
        <style jsx>{`
          .side {
            @p: .relative;
            top: -194px;
            height: calc(100% + 194px);
            z-index: 20;
          }
          .scrollspy-container {
            display: block;
            margin-left: 50px;
            width: 250px;
            height: 0px;
            flex: 0 0 200px;
          }
          @media (max-width: 960px) {
            .scrollspy-container {
              display: none;
            }
          }
          .content-container {
            @p: .flex;
          }
          .content {
            @p: .w100;
            flex-basis: auto;
            flex-grow: 1;
          }
          .content-footer {
            @p: .flex, .justifyBetween, .pv38, .bt, .bBlack10, .mv60;
          }
          .spread {
            @p: .w100;
          }
          @media (max-width: 580px) {
            .content-footer {
              @p: .mv38;
            }
          }
        `}</style>
        <div className={cx($p.flex)}>
          <Helmet
            title={pageTitle}
            meta={[
              { name: 'description', content: item.description },
              { property: 'og:type', content: 'article' },
              { property: 'og:title', content: item.title },
              { property: 'og:description', content: item.description },
              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'twitter:title', content: item.title },
              { name: 'twitter:description', content: item.description },
              ...imageMeta,
            ]}
          />
          <div className={cx($p.flexAuto, $p.flex)}>
            <div
              className={cx($p.flex1, 'side')}
              style={{
                backgroundColor: item.layout === 'REFERENCE' ? 'rgba(0,0,0,.02)' : 'transparent',
              }}
            >
            </div>
            <section
              className={cx(
                $p.flex,
                $p.w100,
                {
                  [$p.justifyCenter]: item.layout === 'TUTORIAL' || item.layout === 'BLOG',
                },
              )}
              style={{
                flex: '1 1 1384px',
              }}
            >
              {item.layout === 'REFERENCE' && (
                <ReferenceSidenav items={items} currentAlias={item.alias}/>
              )}
              <div
                className={cx(
                  $p.bbox,
                  $p.mw100,
                )}
                style={{
                  paddingLeft: contentBoxMarginLeft,
                  paddingRight: contentBoxMarginRight,
                }}
              >
                <div className='content-container'>
                  <div className='content'>
                    {!this.props.data.loading && (
                      <ContentHeader item={item}/>
                    )}
                    <Markdown
                      ast={ast}
                      layout={item.layout}
                      item={item}
                      onChangeHeadings={this.handleChangeHeadings}
                      removeHeadings={this.handleRemoveHeadings}
                      loading={this.props.data.loading}
                      headingsId={0}
                    />
                    {subitemAsts.map((subitemAst, index) => (
                      <Markdown
                        ast={subitemAst}
                        layout={item.layout}
                        item={item}
                        onChangeHeadings={this.handleChangeHeadings}
                        removeHeadings={this.handleRemoveHeadings}
                        loading={this.props.data.loading}
                        headingsId={index}
                      />
                    ))}
                    <ContentPagination items={items} currentAlias={item.alias}/>
                    <div className='content-footer'>
                      <Feedback item={item}/>
                      {item.layout !== 'BLOG' && <EditGithub sourceFilePath={item.sourceFilePath}/>}
                    </div>
                  </div>
                  {item.layout === 'TUTORIAL' && (
                    <div className='scrollspy-container'>
                      <ScrollSpy headings={headings} />
                    </div>
                  )}
                </div>
              </div>
              {item.layout === 'FAQ' && window.innerWidth > breakpoints.p1200 && (
                <FAQSidebar item={item}/>
              )}
            </section>
            <div
              className={cx($p.flex1, 'side')}
              style={{
                backgroundColor: item.layout === 'FAQ' ? 'rgba(0,0,0,.02)' : 'transparent',
              }}
            >
            </div>
          </div>
        </div>
        {item.layout !== 'FAQ' && (
          <RelatedContentFooter displayAsColumns={window.innerWidth < breakpoints.p1000} item={item}/>
        )}
        {(item.layout === 'FAQ' && window.innerWidth < breakpoints.p1200) && (
          <RelatedContentFooter displayAsColumns={window.innerWidth < breakpoints.p1000} item={item}/>
        )}
      </div>
    )
  }

  // capture internal links to navigate via react-router
  private onClick = (e: React.MouseEvent<HTMLElement>): void => {
    if (e.target instanceof HTMLAnchorElement && e.target.hostname === window.location.hostname) {
      // skip if click on local hash link
      if (e.target.pathname === window.location.pathname && e.target.hash !== '') {
        return
      }

      if (!e.ctrlKey && !e.metaKey) {
        e.preventDefault()
        this.props.router.push(e.target.pathname)
      }
    }
  }

  private handleChangeHeadings = (headingsId, headings) => {
    this.setState(state => ({
      ...state,
      headings: {
        ...state.headings,
        [headingsId]: headings,
      },
    }))
  }

  private handleRemoveHeadings = (headingsId) => {
    this.setState(state => ({
      ...state,
      headings: omit(state.headings, headingsId),
    } as State))
  }

  private logFailedLink = (pathname: string, missing: boolean) => {
    const query = `
      mutation {
        createFailedLink(pathname: "${pathname}" referral: "${document.referrer}" missing: ${missing}) { id }
      }
    `
    return fetch(__DOCS_API_ADDR__, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
}
}

const getItemQuery = gql`query getItem($alias: String, $aliases: [String!]!) {
  Item(alias: $alias) {
    id
    body
    alias
    path
    layout
    beta
    tags
    lastModified
    shorttitle
    title
    description
    sourceFilePath
    preview
    simpleRelayTwin
    publicationDate
    relatedFurther {
      alias
      title
      shorttitle
      path
      layout
    }
    relatedMore {
      alias
      title
      shorttitle
      path
      layout
    }
    relatedMoreTitle
    relatedMoreDescription
    subitems {
      id
      alias
      body
    }
  }
  allItems(filter: { alias_in: $aliases }) {
    id
    title
    shorttitle
    alias
    path
  }
}`

export default compose(
  graphql(getItemQuery, {
    options: (ownProps) => {
      const alias = getAliasFromUrl(ownProps.location.pathname)
      const aliases = extractAliases(elements)
      return {
        variables: {alias, aliases},
      }
    },
  }),
  withRouter,
)(ContentHandler)
