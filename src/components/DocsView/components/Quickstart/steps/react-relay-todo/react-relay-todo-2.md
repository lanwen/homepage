#### Connect the example project with the GraphQL server

Next, you have to tell Relay which GraphQL backend it should connect to. That is where we have to use the endpoint we generated in the first step.

Open `./src/app.js` and provide the endpoint as an argument to the call where the `Relay.DefaultNetworkLayer` is being created:

```js
Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('https://api.graph.cool/relay/v1/__PROJECT_ID__')
);
```

Since Relay verifies your GraphQL queries and mutations at build-time, we also need to add the endpoint to the `package.json` like so:

```
"graphql": {
  "request": {
    "url": "https://api.graph.cool/relay/v1/__YOUR_PROJECT_ID__/"
  }
},
```

You can read more about why that's necessary [here](https://github.com/graphcool/babel-plugin-react-relay).

Awesome, Relay is now prepared to talk to the GraphQL server that you created in the step 1!