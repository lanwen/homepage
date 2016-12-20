export type Layout = 'BLOG' | 'REFERENCE' | 'TUTORIAL' | 'FAQ'

export interface Item {
  id: string
  body: string
  alias: string
  title: string
  shorttitle: string
  path: string
  lastModified: string
  sourceFilePath: string
  layout: Layout
  tags: string[]
  relatedMore: Item[]
  relatedFurther: Item[]
}

export interface NestedItem extends Item {
  children?: NestedItem[]
}
