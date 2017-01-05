import * as React from 'react'
import { Node, Parser } from 'commonmark'
import * as ReactRenderer from 'commonmark-react-renderer'
import * as CodeMirror from 'react-codemirror'
import MouseEventHandler = React.MouseEventHandler
import styled from 'styled-components'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import { Layout } from '../../../../types/types'

interface Props {
  ast: Node
  layout: Layout
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

export default class Markdown extends React.Component<Props, {}> {

  render() {
    // const self = this
    const renderers = {
      CodeBlock (props) {
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
      <Container biggerFont={this.props.layout !== 'REFERENCE'}>
        {renderer.render(this.props.ast)}
      </Container>
    )
  }
}
