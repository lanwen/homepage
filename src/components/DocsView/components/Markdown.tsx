import * as React from 'react'
import { Node, Parser } from 'commonmark'
import * as ReactRenderer from 'commonmark-react-renderer'
import { PrismCode } from 'react-prism'
import MouseEventHandler = React.MouseEventHandler
import styled from 'styled-components'
import * as cx from 'classnames'
import {$p, $v} from 'graphcool-styles'

interface Props {
  ast: Node
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  p, blockquote, h1, h2, h3, code, pre, div {
    line-height: 1.7;
    margin-top: ${$v.size38};
    max-width: 920px;
    dislay: flex;
    margin-bottom: 0;
  }
  
  p { 
    color: ${$v.gray60}; 
    font-size: ${$v.size20}
  }
  
  blockquote {
    border-left: solid ${$v.size06} ${$v.green50};
    padding: ${$v.size20};
  }
  
  blockquote p {
    margin-top: 0;
  }
  
  a {
    color: ${$v.gray80};
  }
  
  h2, h3 {
    color: ${$v.black};
    font-weight: 600; 
    margin-top: ${$v.size60};
  }
  
  h2 {
    size: ${$v.size25};
    opacity: .80;
  }
  
  h3 {
    opacity: 0.6;
    font-size: ${$v.size20};
  }
  
  code {
    background-color: ${$v.gray04};
    border-radius: 2px;
    padding: ${$v.size04}
  }
  
  .GraphqlCodeBlock {
    // https://codepen.io/elomatreb/pen/hbgxp
    
    margin-top: 0;
    counter-reset: line;

    pre {
      margin-top: 0;
      
      &:before {
        font-size: ${$v.size12};
        counter-increment: line;
        content: counter(line);
        display: inline-block;
        margin-right: ${$v.size12};
        color: black;
        opacity: 0.2;
      }
    }
  }
`

export default class Markdown extends React.Component<Props, {}> {

  render() {
    // const self = this
    const renderers = {
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
      HtmlBlock (props) {
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

        return ReactRenderer.renderers.HtmlBlock(props)
      },
    }

    const renderer = new ReactRenderer({
      renderers,
    })

    return (
      <Container className={cx($p.flexColumn)}>
        {renderer.render(this.props.ast)}
      </Container>
    )
  }
}
