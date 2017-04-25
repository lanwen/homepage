import * as React from 'react'
import * as ReactRenderer from 'commonmark-react-renderer'
import * as CodeMirror from 'react-codemirror'
import * as slug from 'slugify'
import styled from 'styled-components'
import * as cx from 'classnames'
import {$p, $v} from 'graphcool-styles'
import {Layout, Item} from '../../../../types/types'
import {childrenToString} from '../../../../utils/index'
import QuestionMarkOnHover from './QuestionMarkOnHover'
import YoutubeVideo from './YoutubeVideo'
import MarkdownGraphiQL, {dslValid, getGraphQLCode} from './MarkdownGraphiQL'
import ExampleBox from './ExampleBox'
import {breakpoints} from '../../../../utils/constants'
import {Heading} from './ScrollSpy'
import LoadingArticle from '../LoadingArticle'
import FreecomSignup from '../../../FreecomView/FreecomSignup'
import PermissionsExamplesBox from '../../Standalone/PermissionsExamplesBox'

interface ImageData {
  caption: string
  url: string
  width: number | undefined
}

interface MarkdownConfiguration {
  displayLinkOnHeadings: boolean
  displayLineNumbers: boolean
  lineWrapping: boolean
}

interface Props {
  ast: any
  layout: Layout
  item: Item
  loading: boolean
  markdownConfig?: MarkdownConfiguration
  // only needed for scrollspy
  onChangeHeadings?: (headingsId: number, headings: Heading[]) => void
  removeHeadings?: (headingsId: number) => void
  headingsId?: number
  noResize?: boolean
}

const Container = styled.div`
  margin-left: 50px;
  max-width: ${props => props.faq ? 880 : 920}px;
  margin-right: ${props => props.faq && window.innerWidth > breakpoints.p900 ? 40 : 50}px;
  
  @media (max-width: 1050px) {
    max-width: calc(100vw - 370px);
  }
  
  @media (max-width: 750px) {
    max-width: 750px;
  }
 
  p { 
    line-height: ${props => props.blog ? 2 : 1.8};
    color: ${$v.gray60};
    font-size: ${props => props.blog ? $v.size20 : $v.size16};
    // font-size: ${$v.size16};
    overflow: hidden;
    font-weight: 400;
  }
  
  ul {
    color: ${$v.gray60};
    list-style-position: inside;
    margin: 0;
  }
  
  ul li {
    position: relative;
    line-height: 2;
    font-size: ${props => props.blog ? $v.size20 : $v.size16};
    // font-size: ${$v.size16};
    list-style-type: none;
    padding-left: ${$v.size16};
    // width: calc(100% - 12px);
    
    .docs-codemirror {
      margin-left: -${parseFloat($v.size25) + parseFloat($v.size16)}px;
    }
  }

  ul li:before {
    content: '\\2022 \\00a0 \\00a0 \\00a0';
    position: absolute;
    top: 0;
    left: 0;
  }
  
  blockquote {
    border-left: ${$v.size06} solid ${$v.green50};
    padding: ${$v.size12} ${$v.size25};
    
    margin: 0;
    margin-bottom: ${props => props.blog ? $v.size38 : $v.size25};
    
    width: 100%;
    box-sizing: border-box;
    
    p {
      margin-bottom: 0;
    }
    
    > div {
      margin-bottom: 0 !important;
      padding-right: 30px;
    }
  }
  
  blockquote p {
    margin-top: 0;
  }
  
  a {
    color: ${$v.green};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  a.no-hover:hover {
    text-decoration: none;
  }
  
  h2, h3 {
    font-weight: 600; 
  }
  
  h2 {
    font-size: ${$v.size25};
    color: ${$v.gray80};
    margin-top: ${$v.size38};
    margin-bottom: ${props => props.blog ? $v.size38 : $v.size25};
  }
  
  h3 {
    color: ${$v.gray80};
    font-size: ${$v.size20};
    margin: ${$v.size25} 0;
  }
  
  h4 {
    font-size: ${props => props.blog ? $v.size20 : $v.size16}
    font-weight: 600;
    color: ${$v.gray80};
    margin: ${$v.size16} 0;
  }
  
  code {
    background-color: ${$v.gray04};
    border-radius: 2px;
    padding: ${$v.size04}
  }
  
  .CodeMirror-gutters {
    height: auto !important;
  }

  @media (max-width: ${breakpoints.p500}px) {

    p {
      color: ${$v.gray60}; 
      // font-size: ${props => props.blog ? $v.size16 : $v.size14}; 
    }
    
    code {
      font-size: ${$v.size14};
    }

    ul li { 
      line-height: 1.8;
    }
    
    h2 {
      font-size: ${$v.size20};
      color: ${$v.gray80};
      margin: ${$v.size25} 0 ${$v.size20};
    }
  
    h3 {
      color: ${$v.gray60};
      margin: ${$v.size20} 0;
    }
    
    h4 {
      margin: ${$v.size10} 0;
    }
    
    blockquote {
      border-left: ${$v.size06} solid ${$v.green50};
      padding: ${$v.size06} ${$v.size10};
      margin-left: 0;
      width: 100%;
    }
  }
    
  @media (max-width: ${breakpoints.p580}px) {
    code {
      word-break: break-word;
    }
  }
    
  @media (max-width: ${breakpoints.p900}px) {
    margin-left: 0;
    margin-right: 0;
  }
  
  @media (max-width: ${breakpoints.p1000}px) {
    p, ul li {
      font-size: ${$v.size16};
    }
    
    blockquote, ul li, h2 {
      margin-bottom: ${$v.size25};
    }
  }
  
  .docs-codemirror .CodeMirror-scroll {
    height: auto;
  }
  
  .markdown-container {
    flex: 1;
  }
`

const CodeContainer = styled.div`
  width: 100%;
  margin-left: -25px;
  margin-right: -25px;
  border-radius: 2px;
  @media (min-width: 920px) {
    width: auto;
  }
`

const QuestionWrapper = styled.div`
  margin-bottom: ${props => props.blog ? $v.size38 : $v.size25};
  
  @media (max-width: ${breakpoints.p1000}px) {
    margin-bottom: ${$v.size25};
  }
  
  .hover {
    display: none;
  }
    
  &:hover .hover {
    display: block;

    @media (max-width: ${breakpoints.p750}px) {
      display: none;
    }   
  }

  &:hover .no-hover .hover {
    display: none;
  }
`

const QuestionMarkWrapper = styled.div`
  right: -50px;
`

const HeadingLink = styled.a`
  h1, h2, h3, h4, h5, h6 {
    position: relative;
    left: -1em;
    padding-left: 1em;
  }
  h1:hover::before, h2:hover::before, h3:hover::before, h4:hover::before, h5:hover::before, h6:hover::before {
    content: "#";
    position: absolute;
    left: 0;
    padding-right: 1em;
    color: ${$v.gray60};
  }
`

export default class Markdown extends React.Component<Props, {}> {
  // do this outside of state as we use the render function to provide us the ast walk
  private headings: { [id: string]: Heading } // key value to prevent dups

  componentDidMount() {
    this.updateHeadings()
  }

  componentWillUnmount() {
    if (typeof this.props.removeHeadings === 'function') {
      this.props.removeHeadings(this.props.headingsId)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.item !== nextProps.item) {
      this.updateHeadings()
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.item !== this.props.item) {
      this.updateHeadings()
    }
  }

  setHeading(id: string, heading: Heading) {
    this.headings = {
      ...this.headings,
      [id]: heading,
    }
  }

  updateHeadings() {
    if (typeof this.props.onChangeHeadings === 'function' && this.headings) {
      const headings = Object.keys(this.headings).map(id => {
        return this.headings[id] || {title: '', id: ''}
      })
      this.props.onChangeHeadings(this.props.headingsId, headings)
      this.headings = {}
    }
  }

  render() {
    const { markdownConfig } = this.props

    const renderers = {
      Paragraph: (props) => {
        return (
          <QuestionWrapper
            className={cx($p.inlineFlex, $p.itemsCenter, $p.w100)}
            blog={this.props.layout === 'BLOG'}
            paragraph=''
          >
            <p className={cx($p.w100)}>{props.children}</p>
            <QuestionMarkWrapper className={cx($p.pl25, 'hover', $p.absolute)}>
              <QuestionMarkOnHover onClick={() => this.openChat(childrenToString(props.children))}/>
            </QuestionMarkWrapper>
          </QuestionWrapper>
        )
      },
      List: (props) => {
        return (
          <QuestionWrapper
            className={cx($p.inlineFlex, $p.itemsCenter, $p.w100)}
            blog={this.props.layout === 'BLOG'}
          >
            <div className={cx('no-hover', $p.w100)}>
              {ReactRenderer.renderers.List(props)}
            </div>
            <QuestionMarkWrapper className={cx($p.pl25, 'hover', $p.absolute)}>
              <QuestionMarkOnHover onClick={() => this.openChat(childrenToString(props.children))}/>
            </QuestionMarkWrapper>
          </QuestionWrapper>
        )
      },
      Heading: (props) => {
        const title = childrenToString(props.children)
        const id = slug(title.toLowerCase())
        const newProps = Object.assign({}, props, { id })
        if (props.level < 3) {
          this.setHeading(id, {title, id})
        }

        if (markdownConfig && !markdownConfig.displayLinkOnHeadings) {
          return React.createElement('h' + props.level, getCoreProps(newProps), props.children)
        }

        return (
          <HeadingLink href={`#${id}`} className={cx($p.noUnderline, 'no-hover')}>
            {React.createElement('h' + props.level, getCoreProps(newProps), props.children)}
          </HeadingLink>
        )
      },
      CodeBlock (props) {
        const language = {
          'js': 'javascript',
          'json': { name: 'application/javascript', json: true },
          'sh': 'shell',
          'graphql': 'graphql',
          'idl': 'graphql',
        }[props.language]

        if (window.innerWidth > breakpoints.p650 &&
          language === 'graphql' &&
          dslValid(props.literal.trim())) {
          return (
            <MarkdownGraphiQL literal={props.literal.trim()}/>
          )
        } else if (
          window.innerWidth < breakpoints.p650 &&
          language === 'graphql' &&
          dslValid(props.literal.trim())
        ) {
          return (
            <CodeContainer
              className={cx(
                $p.bgBlack02,
                $p.mb38,
                $p.pv10,
                'docs-codemirror',
                (markdownConfig && !markdownConfig.displayLineNumbers) && $p.ph20,
            )}>
              <CodeMirror
                value={getGraphQLCode(props.literal.trim())}
                options={{
                  lineNumbers: markdownConfig ? markdownConfig.displayLineNumbers : true,
                  mode: language,
                  readOnly: true,
                  lineWrapping: markdownConfig ? markdownConfig.lineWrapping : true,
                  theme: 'mdn-like',
                }}
              />
            </CodeContainer>
          )
        }
        return (
          <CodeContainer
            className={cx(
              $p.bgBlack02,
              $p.mb38,
              $p.pv10,
              $p.bbox,
              'docs-codemirror',
              (markdownConfig && !markdownConfig.displayLineNumbers) && $p.ph20,
          )}>
            <CodeMirror
              value={props.literal.trim()}
              options={{
                lineNumbers: markdownConfig ? markdownConfig.displayLineNumbers : true,
                mode: language,
                readOnly: true,
                lineWrapping: markdownConfig ? markdownConfig.lineWrapping : true,
                theme: 'mdn-like',
              }}
            />
          </CodeContainer>
        )
      },
      HtmlBlock: (props) => {
        const {literal} = props
        // if (props.literal.indexOf('__INJECT_GRAPHQL_ENDPOINT__') > -1) {
        //   return <ContentEndpoint location={self.props.location} />
        // }
        //
        // if (props.literal.indexOf('__DOWNLOAD_REACT__') > -1) {
        //   return <Download location={self.props.location} repository='pokedex-react' />
        // }
        //
        // if (props.literal.indexOf('__DOWNLOAD_RNVANILLA__') > -1) {
        //   return <Download location={self.props.location} repository='pokedex-react-native-vanilla' />
        // }
        //
        // if (props.literal.indexOf('__INJECT_SHARING__') > -1) {
        //   return <Sharing />
        // }

        if (literal.includes('IMAGE')) {
          const {noResize} = this.props
          const imageData = JSON.parse(literal.match(/<!-- IMAGE\((.*)\) -->/)![1]) as ImageData
          const width = imageData.width || Math.ceil(Math.max(window.innerWidth * 0.8, 1100) * window.devicePixelRatio)
          const hasFixedWidth = !!imageData.width
          const url = imageData.url.replace('files', 'images') + (noResize ? '' : `/${width}x10000`)
          return (
            <div
              className={cx(
                'imageContainer', {
                  'hasFixedWidth': hasFixedWidth,
                },
              )}
            >
              <style jsx={true}>{`
                .imageContainer {
                  @p: .relative;
                  margin-left: -70px;
                  margin-right: -70px;
                  width: auto;

                  @media (max-width: 580px) {
                    margin-left: -25px;
                    margin-right: -25px;
                    margin-top: 25px;
                    margin-bottom: 25px;
                  }

                  @media (min-width: 581px) {
                    margin-top: 60px;
                    margin-bottom: 60px;
                  }
                }
                .imageContainer.hasFixedWidth {
                  margin-left: 0 !important;
                  margin-right: 0 !important;
                }

                .imageContainer.hasFixedWidth .image {
                  @p: .wAuto, .mw100;
                }

                .image {
                  @p: .w100, .hAuto, .center, .db;

                  @media (max-width: 400px) {
                    @p: .br0;
                  }

                  @media (max-width: 580px) {
                    @p: .br2;
                  }

                  @media (max-width: 750px) {
                    @p: .br0;
                  }

                  @media (min-width: 751px) {
                    @p: .br2;
                  }
                }

                .caption {
                  @p: .black30, .tc;
                }

              `}</style>
              <img
                className='image'
                width={width}
                src={url}
              />
              <p className='caption'>
                {imageData.caption}
              </p>
            </div>
          )
        }

        if (literal.includes('GITHUB_EXAMPLE')) {
          return (
            <div className={cx($p.flex, $p.itemsCenter, $p.justifyCenter, $p.mv25)}>
              <ExampleBox literal={literal} item={this.props.item}/>
            </div>
          )
        }

        if (literal.includes('iframe') && literal.includes('youtube')) {
          const videoId = this.extractYoutubeVideoId(literal)
          if (videoId) {
            return <YoutubeVideo id={videoId}/>
          }
        }

        if (literal.includes('FREECOM_SIGNUP')) {
          return (
            <div className='mt25'>
              <style jsx={true}>{`
                .title {
                  @p: .tc, .f20, .black50, .mb25;
                }
              `}</style>
              <div className='title'>Get a notification when we release a new chapter!</div>
              <FreecomSignup />
            </div>
          )
        }

        if (literal.includes('PERMISSION_EXAMPLES')) {
          return (
            <div className={cx($p.flex, $p.itemsCenter, $p.justifyCenter, $p.mv25)}>
              <PermissionsExamplesBox />
            </div>
          )
        }

        return ReactRenderer.renderers.HtmlBlock(props)
      },
    }

    const renderer = new ReactRenderer({
      renderers,
    })

    return (
      <Container
        blog={this.props.layout === 'BLOG'}
        className={cx($p.relative)}
        faq={this.props.item.layout === 'FAQ'}
        tutorial={this.props.layout === 'TUTORIAL'}
      >
        <div className='markdown-container'>
          {this.props.loading ? (
              <LoadingArticle />
            ) : (
              renderer.render(this.props.ast)
            )}
        </div>
      </Container>
    )
  }

  private extractVideoUrl(literal) {
    let rest = literal
    const srcIndex = rest.indexOf('src="')
    rest = rest.slice(srcIndex + 5, rest.length)
    const quoteIndex = rest.indexOf('"')

    return rest.slice(0, quoteIndex)
  }

  private extractVideoId(url) {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i
    const result = regex.exec(url)
    if (result !== null) {
      return result[1]
    }
    return null
  }

  private extractYoutubeVideoId(literal) {
    return this.extractVideoId(this.extractVideoUrl(literal))
  }

  private async openChat(message: string) {
    if (typeof Intercom === 'undefined') {
      return
    }
    if (!window.localStorage.getItem('chat_initiated')) {
      const preview = message.substr(0, 200) + (message.length > 200 ? '...' : '')
      const msg = `Hey! Can you help me with this part of the "${this.props.item.shorttitle}" docs?\n${preview}`
      Intercom('showNewMessage', msg)
      window.localStorage.setItem('chat_initiated', 'true')
    } else {
      Intercom('show')
    }
  }
}

function getCoreProps(props) {
  return {
    'key': props.nodeKey,
    'data-sourcepos': props['data-sourcepos'],
    'id': props.id,
  }
}
