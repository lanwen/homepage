export type Layout = 'BLOG' | 'REFERENCE' | 'TUTORIAL' | 'FAQ'

export interface Item {
  id: string
  body: string
  alias: string
  title: string
  beta: boolean
  shorttitle: string
  description: string
  path: string
  preview: string
  lastModified: string
  sourceFilePath: string
  relatedMoreTitle: string
  relatedMoreDescription: string
  layout: Layout
  tags: string[]
  relatedMore: Item[]
  relatedFurther: Item[]
}

export interface NestedItem extends Item {
  children?: NestedItem[]
}
