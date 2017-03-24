#### Connect the example project with the GraphQL server 🛰

You now have to tell the `ApolloClient` in the example project which GraphQL backend it should connect to. That is where we have to use the endpoint we generated in the previous step.

Open `./src/index.js` and provide the endpoint as the `uri` argument to the `createNetworkInterface` call:

```js
const networkInterface = createNetworkInterface({ uri: '__SIMPLE_API_ENDPOINT__' })
```

Awesome! The `ApolloClient` that gets instantiated with the `networkInterface` now knows which server it can talk to.