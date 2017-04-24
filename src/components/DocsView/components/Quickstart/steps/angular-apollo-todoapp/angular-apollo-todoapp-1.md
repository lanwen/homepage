#### Create your GraqhQL backend

You're now ready to set up your GraphQL backend using the [Graphcool CLI](https://www.npmjs.com/package/graphcool) which can be installed via npm:

```sh
npm install -g graphcool
```

The data schema for this example is specified in a syntax called [GraphQL IDL](https://www.graph.cool/docs/faq/graphql-idl-schema-definition-language-kr84dktnp0/) and is the foundation for your GraphQL backend. Here is what it looks like:

```graphql
type Todo {
  text: String!
  complete: Boolean!
}
```

To create your GraphQL backend, provide a URL to the schema to the `graphcool init` command:

```sh
graphcool init --url http://graphqlbin.com/todo.graphql
```

From the two generated GraphQL endpoints, we're using the [`Simple API`](https://www.graph.cool/docs/reference/simple-api/overview-heshoov3ai/) endpoint since it works best with [Apollo Client](http://dev.apollodata.com/).

In the future, you can change your GraphQL schema by editing the generated configuration file `project.graphcool` and running `graphcool push`.

> Note: You can also use the [Graphcool Console](https://console.graph.cool) to create your GraphQL backend using a UI.

