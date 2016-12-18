import gql from 'graphql-tag/index'

export const getItemsByLayout = gql`query getItemsByLayout($layout: ITEM_LAYOUT) {
  allItems(filter: {layout: $layout}) {
    id
    body
    alias
    path
    title
    layout
    tags
    description
  }
}`
