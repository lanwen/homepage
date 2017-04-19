#### Connect the example project with the GraphQL server

`ApolloClient` connects the app with your GraphQL API. You therefore have to configure it with the URL of the `Simple API` from the previous step.

Open `./src/main.js` and provide the endpoint as the `uri` argument to the `createNetworkInterface` call:

```js
const networkInterface = createNetworkInterface({ uri: '__SIMPLE_API_ENDPOINT__' })
const client = new ApolloClient({ networkInterface })
```

Awesome! The `ApolloClient` that gets instantiated with the `networkInterface` now knows which server it can talk to.
