#### Connect the example project with the GraphQL server

Copy the `Relay API` endpoint to `./src/app.js` as the argument for the constructor of `Relay.DefaultNetworkLayer`, replacing `__RELAY_API_ENDPOINT__ `:

```js
// replace `__RELAY_API_ENDPOINT__ ` with the endpoint from the previous step
Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('__RELAY_API_ENDPOINT__')
);
```

Further, open `package.json` and paste the endpoint as the value for the `url` key, again replacing `__RELAY_API_ENDPOINT__ `:

```js
"graphql": {
  "request": {
    "url": "__RELAY_API_ENDPOINT__"
  }
},
```

Awesome! Relay now knows which GraphQL server it can talk to.