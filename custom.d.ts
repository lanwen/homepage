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

declare var System: any
declare var Smooch: any
declare var __SMOOCH_TOKEN__: string
declare var __BACKEND_ADDR__: string

declare interface Window {
  analytics: any
  __APOLLO_STATE__: any
}

interface NodeModule {
  hot: { accept: Function }
}
