#### Get your GraphQL endpoint

Next, you need to obtain a GraphQL endpoint so that you can connect to your own backend from the example application. 

Using the [Graphcool CLI](https://www.npmjs.com/package/graphcool), you simply provide a data model and the GraphQL API will be generated for you. We already included the required [schema](https://github.com/graphcool-examples/vue-apollo-instagram-example/blob/master/instagram.schema) in the GitHub repo, here is what it looks like:

```graphql
type Post {
  description: String!
  imageUrl: String!
}
```

All you have to do now is provide this schema as an input argument to `graphcool create` in a terminal:

```sh
graphcool create instagram.schema 
```

This will generate two GraphQL endpoints:

- `Relay API`: Optimized for usage with [Relay](https://facebook.github.io/relay/)
- `Simple API`: Can be used with any GraphQL client but optimized for [Apollo](http://dev.apollodata.com/)

Since we're using Apollo in this example, we need to use the endpoint for the Simple API!


> **What is the Graphcool CLI and how do I get it?**
> 
> The Graphcool CLI is a command-line tool that allows to interact with our platform from a terminal. It provides similar capabalities as the [Graphcool console](https://console.graph.cool) and particularly makes it easy to create new projects using the `graphcool create` command.
You can easily install the the Graphcool CLI by calling `npm install graphcool` in a terminal. 


