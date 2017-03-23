#### Get your GraphQL endpoint

As a very first step, you need to obtain a GraphQL endpoint so that you can connect to a backend from the example application. 
Using the [Graphcool CLI](https://www.npmjs.com/package/graphcool), you simply provide the data model for the application and the GraphQL server will be provided out of the box.


The data model is already included in the GitHub repo, so first you need to download or clone the repository and then use `graphcool create` to create your GraphQL server: 

```sh
git clone https://github.com/graphcool-examples/react-apollo-instagram-example.git
cd react react-apollo-instagram-example
graphcool create graphcool.schema 
```

This will generate two GraphQL endpoints:

- `Relay API`: Optimized for usage with [Relay]()
- `Simple API`: Can be used with any GraphQL client but optimized for [Apollo]()

Since this a tutorial about Apollo, we use the endpoint for the Simple API.


> **What is the Graphcool CLI and how do I get it?**
> 
> The Graphcool CLI is a command-line tool that allows to interact with our platform from a terminal. It provides similar capabalities as the [Graphcool console](https://console.graph.cool) and particularly makes it easy to create new projects using the `graphcool create` command.
You can easily install the the Graphcool CLI by calling `npm install graphcool` in a terminal. 


