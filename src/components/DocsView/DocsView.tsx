import * as React from 'react'
import HeaderDocs from './HeaderDocs'
import Footer from '../Footer/Footer'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import * as cx from 'classnames'
import { breakpoints } from '../../utils/constants'
import Markdown from '../Markdown/Markdown';
import Lokka from 'lokka'
import Transport from 'lokka-transport-http'
import * as _ from 'lodash'
import {Node, Parser} from 'commonmark'

const decode64 = (str: string): string => atob(str);

const client = new Lokka({
  transport: new Transport('https://api.graph.cool/simple/v1/ciwlyk90l0gq80101eao599fk')
});

interface State {
  ast: any
}

export default class DocsView extends React.Component<{}, {}> {

  state = {
    ast: null
  }

  componentDidMount() {
    client.query(`
      query {
        allItems {
          id
          body
          layout
          tags
        }
      }
  `).then(result => {
        const parser = new Parser();
        const parsedDecodedResult = _.map(result.allItems, (item) => parser.parse(decode64(item.body as string)))
        console.log(parsedDecodedResult)
        this.setState({ast: parsedDecodedResult[0]} as State)
        console.log(this.state)
      });

    window.addEventListener('resize', this.rerender)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.rerender)
  }

  render() {
    return (
      <div>
        <Markdown ast={this.state.ast}/>
      </div>
    )
  }

  private rerender = () => {
    this.forceUpdate()
  }
}
