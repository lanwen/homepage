import * as React from 'react'

interface State {
  schemaUrl: string
}

interface Props {

}

const booksEmoji = "📚" // not rendered in webstorm

export default class AddGraphQLUpSection extends React.Component<Props, State> {

  state = {
    schemaUrl: '',
    markdown: '',
  }

  render() {
    return (
      <div className='root'>
        <style jsx={true}>{`
          .root {
            @p: .flex, .flexColumn, .itemsCenter, .pl96, .pr96, .center, .bgGreen10;
            max-width: 1440px;
          }
        `}</style>
        <div>Add graphql-up to your repositories/docs {booksEmoji}</div>
        <div>
          You can add a graphql-up badge to your own repositories or docs to give your users a
          quick way to get their own GraphQL endpoint based on your schema.
        </div>

        <div>Step 1: Paste URL to your schema</div>
        <input
          value={this.state.schemaUrl}
          onChange={(e: any) => this.setState({schemaUrl: e.target.value})}
        />

        <div>Step 2: Copy generated markdown</div>
        <input
          value={this.state.markdown}
          disabled={true}
        />

      </div>
    )
  }
}
