import * as React from 'react'
import * as GraphiQL from 'graphiql'
import { $p, Icon, $v } from 'graphcool-styles'
import * as cx from 'classnames'
import frontmatter = require('front-matter')

interface Props {
  literal: string
}

interface State {
  query: string
  response: string
}

interface DSL {
  disabled: boolean
  endpoint: string
  query: string
  data: string
}

interface Frontmatter {
  attributes: {[key: string]: any}
  body: string
}

function parseDSL(literal: string): DSL {
  const fm: Frontmatter = frontmatter(literal)

  const [queryPart, dataPart] = fm.body.split('---')

  return {
    disabled: fm.attributes['disabled'] || false,
    endpoint: fm.attributes['endpoint'],
    query: queryPart.trim(),
    data: dataPart.trim(),
  }
}

export function dslValid(literal: string): boolean {
  const fm: Frontmatter = frontmatter(literal)

  const [queryPart, dataPart] = fm.body.split('---')

  if (fm.body.split('---').length !== 2) {
    return false
  }

  if (!fm.attributes['disabled'] && !fm.attributes['endpoint']) {
    return false
  }

  return true
}

export default class MarkdownGraphiQL extends React.Component<Props, State> {

  constructor(props) {
    super(props)

    const dsl = parseDSL(props.literal)
    this.state = {
      query: dsl.query,
      response: dsl.data,
    }
  }

  render() {
    const dsl = parseDSL(this.props.literal)

    const graphQLFetcher = async(graphQLParams) => {
      if (dsl.disabled && !graphQLParams.query.includes('IntrospectionQuery')) {
        return JSON.parse(dsl.data)
      }

      const response = await fetch(dsl.endpoint, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(graphQLParams),
      })

      if (!graphQLParams.query.includes('IntrospectionQuery')) {
        this.setState({
          query: graphQLParams.query,
          response: graphQLParams.response,
        } as State)
      }

      return response.json()
    }

    return (
      <div style={{ height: 400 }} className={cx($p.bgDarkerBlue, $p.mv25)}>
        <GraphiQL
          fetcher={graphQLFetcher}
          query={this.state.query}
          response={this.state.response}
          onEditQuery={(query) => this.setState({ query } as State)}
        />
      </div>
    )
  }
}
