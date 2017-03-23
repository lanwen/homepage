#### Connect the example project with the GraphQL server

Next, you have to tell Relay which GraphQL backend it should connect to. That is where we have to use the endpoint we generated in the first step.

Open `./src/index.js` and provide the endpoint as an argument to the call where the `Relay.DefaultNetworkLayer` is being created:

```js
Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('https://api.graph.cool/relay/v1/__PROJECT_ID__', , {
    headers: {
      'x-graphcool-source': 'example:react-relay-instagram',
    },
  })
);
```

Since Relay verifies your GraphQL queries and mutations at build-time, we also need to add the endpoint to the `package.json` like so:

```
  "start": "GRAPHQL_ENDPOINT=${GRAPHQL_ENDPOINT:=https://api.graph.cool/relay/v1/__PROJECT_ID__} webpack-dev-server -d --hot --inline --history-api-fallback --no-info --port 3000",
```

You can read more about why that's necessary [here](https://github.com/graphcool/babel-plugin-react-relay).

Awesome, Relay is now prepared to talk to the GraphQL server that you created in the step 1!