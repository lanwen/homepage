export type Layout = 'BLOG' | 'REFERENCE' | 'GUIDE' | 'FAQ'

export interface Item {
  id: string
  body: string
  alias: string
  title: string
  shorttitle: string
  path: string
  lastModified: string
  layout: Layout
  tags: string[]
}

export interface NestedItem extends Item {
  children?: NestedItem[]
}
