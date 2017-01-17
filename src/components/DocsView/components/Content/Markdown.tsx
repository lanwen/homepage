import * as React from 'react'
import {Node} from 'commonmark'
import * as ReactRenderer from 'commonmark-react-renderer'
import * as CodeMirror from 'react-codemirror'
import * as slug from 'slug'
import styled from 'styled-components'
import * as cx from 'classnames'
import {$p, $v} from 'graphcool-styles'
import {Layout, Item} from '../../../../types/types'
import {childrenToString} from '../../../../utils/index'
import QuestionMarkOnHover from './QuestionMarkOnHover'
import YoutubeVideo from './YoutubeVideo'
import * as Smooch from 'smooch'
import MarkdownGraphiQL, {dslValid} from './MarkdownGraphiQL'
import ExampleBox from './ExampleBox'
import {breakpoints} from '../../../../utils/constants'

interface Props {
  ast: Node
  layout: Layout
  item: Item
}

const Container = styled.div`
  margin-left: 50px;
  max-width: 920px;
 
  p { 
    line-height: 1.7;
    color: ${$v.gray60};
    font-size: ${props => props.biggerFont ? $v.size16 : $v.size14}
  }
  
  ul {
    color: ${$v.gray60};
    list-style-position: outside;
    margin: ${$v.size25} 0;
  }
  
  ul li {
    line-height: 1.7;
    font-size: ${props => props.biggerFont ? $v.size16 : $v.size14}
  }
  
  blockquote {
    border-left: ${$v.size06} solid ${$v.green50};
    padding: ${$v.size12} ${$v.size25};
    margin-left: 0;
    width: 100%;
  }
  
  blockquote p {
    margin-top: 0;
  }
  
  a {
    color: ${$v.gray80};
  }
  
  h2, h3 {
    font-weight: 600; 
  }
  
  h2 {
    font-size: ${$v.size25};
    color: ${$v.gray80};
    margin: ${$v.size38} 0 ${$v.size25};
  }
  
  h3 {
    color: ${$v.gray60};
    font-size: ${props => props.biggerFont ? $v.size20 : $v.size16}
    margin: ${$v.size25} 0;
  }
  
  code {
    background-color: ${$v.gray04};
    border-radius: 2px;
    padding: ${$v.size04}
  }
  
  img {
    max-width: 100%;
    height: auto;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 60px;
    margin-bottom: 60px;
  }
  
  @media (max-width: ${breakpoints.p900}px) {
    margin-left: 6px;
  }
    
  @media (max-width: ${breakpoints.p500}px) {
  
    p {
      line-height: 1.5;
      color: ${$v.gray60}; 
      font-size: ${props => props.biggerFont ? $v.size16 : $v.size14}    
    }
    
    ul li {
      line-height: 1.5;
      font-size: ${props => props.biggerFont ? $v.size16 : $v.size14}    
    }
    
    h2 {
      font-size: ${$v.size20};
      color: ${$v.gray80};
      margin: ${$v.size25} 0 ${$v.size20};
    }
  
    h3 {
      color: ${$v.gray60};
      font-size: ${props => props.biggerFont ? $v.size16 : $v.size14}
      margin: ${$v.size20} 0;
    }
    
  }
`

const QuestionWrapper = styled.div`
  .hover {
    display: none;
  }
  &:hover .hover {
    display: block;
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
  }
  h1:hover::before, h2:hover::before, h3:hover::before, h4:hover::before, h5:hover::before, h6:hover::before {
    content: "#";
    position: absolute;
    left: -1em;
    padding-right: 1em;
    color: ${$v.gray60};
  }
`

export default class Markdown extends React.Component<Props, {}> {

  render() {
    // const self = this
    const renderers = {
      Paragraph: (props) => {
        return (
          window.innerWidth > breakpoints.p500 && (
            <QuestionWrapper className={cx($p.inlineFlex, $p.itemsCenter, $p.w100)}>
              <p>{props.children}</p>
              <QuestionMarkWrapper className={cx($p.pl25, 'hover', $p.absolute)}>
                <QuestionMarkOnHover onClick={() => this.openChat(childrenToString(props.children))}/>
              </QuestionMarkWrapper>
            </QuestionWrapper>
          )
        )
      },
      List: (props) => {
        return (
          window.innerWidth > breakpoints.p500 && (
            <QuestionWrapper className={cx($p.inlineFlex, $p.itemsCenter, $p.w100)}>
              <div className={cx('no-hover')}>
                {ReactRenderer.renderers.List(props)}
              </div>
              <QuestionMarkWrapper className={cx($p.pl25, 'hover', $p.absolute)}>
                <QuestionMarkOnHover onClick={() => this.openChat(childrenToString(props.children))}/>
              </QuestionMarkWrapper>
            </QuestionWrapper>
          )
        )
      },
      Heading: (props) => {
        const id = slug(childrenToString(props.children), {lower: true})
        const newProps = Object.assign({}, props, {
          id,
        })
        return (
          <HeadingLink href={`#${id}`} className={$p.noUnderline}>
            {React.createElement('h' + props.level, getCoreProps(newProps), props.children)}
          </HeadingLink>
        )
      },
      CodeBlock (props) {
        if (props.language === 'graphql' && dslValid(props.literal.trim())) {
          return (
            <MarkdownGraphiQL literal={props.literal.trim()}/>
          )
        }

        return (
          <div className={cx($p.bgDarkerBlue, $p.mv25, $p.pa10)}>
            <CodeMirror
              value={props.literal.trim()}
              options={{
                lineNumbers: true,
                mode: props.language,
                readOnly: true,
                lineWrapping: true,
              }}
            />
          </div>
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

        return ReactRenderer.renderers.HtmlBlock(props)
      },
    }

    const renderer = new ReactRenderer({
      renderers,
    })

    return (
      <Container biggerFont={this.props.layout !== 'REFERENCE'} className={cx($p.relative)}>
        {renderer.render(this.props.ast)}
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
    if (!Smooch.isOpened()) {
      Smooch.open()
    }
    if (!window.localStorage.getItem('chat_initiated')) {
      await Smooch.sendMessage(`Hey! Can you help me with this part of the "${this.props.item.shorttitle}" docs?`)
      await Smooch.sendMessage(message.substr(0, 200) + (message.length > 200 ? '...' : ''))
      window.localStorage.setItem('chat_initiated', 'true')
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
