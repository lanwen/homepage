#### Connect the example project with the GraphQL server

Next, you have to tell the `ApolloClient` in the example project which GraphQL backend it should connect to. That is where we have to use the endpoint we generated in the first step.

Open `./src/main.js` and provide the endpoint as the `uri` argument to the `createNetworkInterface` call:

```js
const networkInterface = createNetworkInterface({ uri: https://api.graph.cool/simple/v1/__PROJECT_ID__ })
```

Awesome! The `ApolloClient` that gets instantiated with the `networkInterface` now knows which server it can talk to.

