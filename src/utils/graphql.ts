import { introspectionQuery } from 'graphql/utilities/introspectionQuery'
import { GraphQLSchema } from 'graphql/type/schema'
import { buildClientSchema } from 'graphql'
// import * as fetch from 'isomorphic-fetch'
const fetch = require('isomorphic-fetch')

export function getSchema(endpoint: string): Promise<GraphQLSchema> {
  return queryEndpoint(endpoint, introspectionQuery)
    .then(json => buildClientSchema(json.data))
}

export function queryEndpoint(endpoint: string, query: string): Promise<any> {
  return fetch(endpoint, {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ query }),
  })
  .then(res => res.json())
}
