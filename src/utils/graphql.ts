import { introspectionQuery } from 'graphql/utilities/introspectionQuery'
import { GraphQLSchema } from 'graphql/type/schema'
import { buildClientSchema } from 'graphql'

export async function getSchema(endpoint: string): Promise<GraphQLSchema> {
  const json = await queryEndpoint(endpoint, introspectionQuery)
  return buildClientSchema(json.data)
}

export async function queryEndpoint(endpoint: string, query: string): Promise<any> {
  const result = await fetch(endpoint, {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ query }),
  })

  return result.json()
}
