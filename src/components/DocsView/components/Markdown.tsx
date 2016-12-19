import * as React from 'react'
import { Node, Parser } from 'commonmark'
import * as ReactRenderer from 'commonmark-react-renderer'
import { PrismCode } from 'react-prism'
import MouseEventHandler = React.MouseEventHandler
import styled from 'styled-components'
import * as cx from 'classnames'
import {$p} from 'graphcool-styles'

interface Props {
  ast: Node
}

const Container = styled.div`
  h1 {
    color: pink !important;
  }
`

export default class Markdown extends React.Component<Props, {}> {

  render() {
    // const self = this
    const renderers = {
      Heading (props) {
        // const padding = {
        //   1: () => 2.3,
        //   2: () => 1.5,
        //   3: () => 1.3,
        //   4: () => 1.2,
        //   5: () => 1,
        // }[props.level]()
        const elProps = {
          key: props.nodeKey,
          // id: slug(childrenToString(props.children)),
          className: 'accent',
          style: {
            fontWeight: 300,
            paddingTop: 30,
            paddingBottom: `1rem`,
            marginTop: `calc(1rem - 30px)`,
            marginBottom: '1.6rem',
            borderBottom: 'solid rgba(0,0,0,0.1) 1px',
          },
        }
        return React.createElement('h' + props.level, elProps, props.children)
      },
      CodeBlock (props) {
        const className = props.language && 'language-' + props.language
        // return (
        //   <pre className={cx($p.overflowScroll)}>
        //     <PrismCode className={className}>
        //       {props.literal}
        //     </PrismCode>
        //   </pre>
        // )
        return <h1>CODE</h1>
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
