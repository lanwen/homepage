export type Layout = 'BLOG' | 'REFERENCE' | 'GUIDE' | 'FAQ'

export interface Item {
  id: string
  body: string
  alias: string
  path: string
  layout: Layout
  tags: string[]
}