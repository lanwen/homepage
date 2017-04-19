#### Connect the example project with the GraphQL server

Copy the `Relay API` endpoint into `package.json` replacing `__RELAY_API_ENDPOINT__` in the following line:

```js
"start": "GRAPHQL_ENDPOINT=${GRAPHQL_ENDPOINT:= __RELAY_API_ENDPOINT__} webpack-dev-server -d --hot --inline --history-api-fallback --no-info --port 3000",
```

The line will look similar to this afterwards:

```js
"start": "GRAPHQL_ENDPOINT=${GRAPHQL_ENDPOINT:=https://api.graph.cool/relay/v1/abcdefghijklmnop} webpack-dev-server -d --hot --inline --history-api-fallback --no-info --port 3000",
```
