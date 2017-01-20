
export type Endpoint = 'SIMPLE' | 'RELAY'
export type Viewer = 'ADMIN' | 'EVERYONE' | 'USER'

export interface Session {
  schema: any
  selectedEndpoint: Endpoint
  selectedViewer: Viewer
  query: string
  variables: string
  result: string
  operationName?: string
  editorFlex: number
  variableEditorHeight: number
  docExploreWidth: number
  doxExploreOpen: boolean
  id: string
}
