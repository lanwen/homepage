import * as React from 'react'
import Lokka from 'lokka'
import Transport from 'lokka-transport-http'
import {Node, Parser} from 'commonmark'
import Markdown from '../../Markdown/Markdown'

interface Props {
  location: any
  history: any
}

interface State {
  ast: any
}

const decode64 = (str: string): string => atob(str)

const client = new Lokka({
  transport: new Transport('https://api.graph.cool/simple/v1/ciwlyk90l0gq80101eao599fk'),
})


interface Item {
  body: string
}

interface Context {
  router: any
}

export default class ContentHandler extends React.Component<Props, State> {
  context: Context
  constructor(props) {
    super(props)
    this.state = {
      ast: null,
    }
  }

  componentDidMount() {
    const pathname = this.props.location.pathname.split('/')
    const contentAlias = pathname[pathname.length - 1]
    const queryParams = {alias: contentAlias}
    const query = `
      query getItem($alias: String) {
        Item(alias: $alias) {
          id
          body
          layout
          tags
        }
      }
    `

    client.query(query, queryParams).then(result => {
      if (result.Item) {
        const parsedDecodedResult = new Parser().parse(decode64(result.Item.body))
        this.setState({ast: parsedDecodedResult} as State)
      } else {
        this.context.router.push('/404')
      }
    })
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render() {
    return (
      <div>
        <h1>Content handler</h1>
        <p>{this.state.ast ?
          <Markdown ast={this.state.ast}/>
          : 'loading...'}</p>
        {location.toString()}
      </div>
    )
  }
}
