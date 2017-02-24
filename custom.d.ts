declare module 'react-router-scroll'
declare module 'styled-components'
declare module 'react-hot-loader'
declare module 'react-copy-to-clipboard'
declare module 'fastclick'
declare module 'graphql'
declare module 'graphiql'
declare module 'graphiql/*'
declare module 'react-collapsible'
declare module 'react-youtube'
declare module 'front-matter'
declare module 'react-algoliasearch'
declare module 'slug'
declare module 'drumstick'

declare var System: any
declare var Intercom: any
declare var __INTERCOM_ID__: string
declare var __BACKEND_ADDR__: string
declare var __DOCS_API_ADDR__: string
declare var __HEARTBEAT_ADDR__: string | boolean

declare interface Window {
  analytics: any
  __APOLLO_STATE__: any
  Intercom: any
}

interface NodeModule {
  hot: { accept: Function }
}
