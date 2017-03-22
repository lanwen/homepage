export type Layout = 'BLOG' | 'REFERENCE' | 'TUTORIAL' | 'FAQ' | 'EXAMPLE' | 'QUICKSTART' | 'COMMUNITY'

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
  simpleRelayTwin: string
  layout: Layout
  tags: string[]
  relatedMore: Item[]
  relatedFurther: Item[]
  publicationDate?: Date
}

export interface NestedItem extends Item {
  children?: NestedItem[]
}

export interface QuickExample {
  type: string
  link: string
}

export interface Color {
  r: number
  g: number
  b: number
}
