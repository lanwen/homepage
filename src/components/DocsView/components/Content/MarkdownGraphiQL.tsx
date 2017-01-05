import * as React from 'react'
import * as GraphiQL from 'graphiql'
import {$p, Icon, $v} from 'graphcool-styles'
import * as cx from 'classnames'
import frontmatter = require('front-matter')

interface Props {
  literal: string
}

interface State {
  query: string,
}

interface DSL {
  disabled: boolean,
  endpoint: string,
  query: string,
  data: string,
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

export default class MarkdownGraphiQL extends React.Component<Props, State> {

  constructor(props) {
    super(props)

    this.state = {
      query: parseDSL(this.props.literal).query,
    }
  }

  render() {
    const dsl = parseDSL(this.props.literal)

    const graphQLFetcher = (graphQLParams) => {
      return fetch(dsl.endpoint, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(graphQLParams),
      })
        .then(response => response.json())
    }

    return (
      <div style={{ height: 400 }} className={cx($p.bgDarkerBlue)}>
        <GraphiQL
          fetcher={graphQLFetcher}
          query={this.state.query}
          response={dsl.data}
          onEditQuery={(query) => this.setState({ query } as State)}
        />
      </div>
    )
  }
}