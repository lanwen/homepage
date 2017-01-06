import * as React from 'react'
import { Node, Parser } from 'commonmark'
import * as ReactRenderer from 'commonmark-react-renderer'
import { PrismCode } from 'react-prism'
import MouseEventHandler = React.MouseEventHandler
import styled from 'styled-components'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import { Layout, Item } from '../../../../types/types'
import {childrenToString} from '../../../../utils/index'
import QuestionMarkOnHover from './QuestionMarkOnHover'
import YoutubeVideo from './YoutubeVideo'
import * as Smooch from 'smooch'

interface Props {
  ast: Node
  layout: Layout
  item: Item
}

const Container = styled.div`
  p { 
    line-height: 1.7;
    color: ${$v.gray60}; 
    font-size: ${props => props.biggerFont ? $v.size20 : $v.size16}
  }
  
  ul {
    color: ${$v.gray60}; 
    list-style-position: inside;
    margin: ${$v.size25} 0;
  }
  
  ul li {
    line-height: 1.7;
  }
  
  blockquote {
    border-left: ${$v.size06} solid ${$v.green50};
    padding: ${$v.size12} ${$v.size25};
    margin-left: 0;
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
    size: ${$v.size25};
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
  }
`

const QuestionWrapper = styled.div`
  .hover {
    display: none;
  }
  &:hover .hover {
    display: block;
  }
`

const QuestionMarkWrapper = styled.div`
  right: -40px;
`

export default class Markdown extends React.Component<Props, {}> {

  render() {
    // const self = this
    const renderers = {
      Paragraph: (props) => {
        return (
          <QuestionWrapper className={cx($p.flex, $p.itemsCenter, $p.w100, $p.relative)}>
            <p>{props.children}</p>
            <QuestionMarkWrapper className={cx($p.pl25, 'hover', $p.absolute)}>
              <QuestionMarkOnHover onClick={() => this.openChat(childrenToString(props.children))} />
            </QuestionMarkWrapper>
          </QuestionWrapper>
        )
      },
      List: (props) => {
        return (
          <QuestionWrapper className={cx($p.flex, $p.itemsCenter, $p.w100)}>
            {ReactRenderer.renderers.List(props)}
            <QuestionMarkWrapper className={cx($p.pl25, 'hover', $p.absolute)}>
              <QuestionMarkOnHover onClick={() => this.openChat(childrenToString(props.children))} />
            </QuestionMarkWrapper>
          </QuestionWrapper>
        )
      },
      CodeBlock (props) {
        const className = props.language && 'language-' + props.language
        return (
          <pre className={cx($p.overflowScroll)}>
            <PrismCode className={className}>
              {props.literal}
            </PrismCode>
          </pre>
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

        if (literal.includes('iframe') && literal.includes('youtube')) {
          const videoId = this.extractYoutubeVideoId(literal)
          if (videoId) {
            return <YoutubeVideo id={videoId} />
          }
        }

        return ReactRenderer.renderers.HtmlBlock(props)
      },
    }

    const renderer = new ReactRenderer({
      renderers,
    })

    return (
      <Container biggerFont={this.props.layout === 'BLOG'}>
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

  private openChat (message: string) {
    console.log(message)
    if (!Smooch.isOpened()) {
      Smooch.open()
    }
    if (!window.localStorage.getItem('chat_initiated')) {
      Smooch.sendMessage(`Hey! Can you help me with this part of the "${this.props.item.shorttitle}" docs?`)
        .then(() => Smooch.sendMessage(message.substr(0, 200) + (message.length > 200 ? '...' : ''))
        .then(() => window.localStorage.setItem('chat_initiated', 'true'))
    }
  }
}
