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
  layout: Layout
  tags: string[]
  relatedMore: Item[]
  relatedFurther: Item[]
}

export interface NestedItem extends Item {
  children?: NestedItem[]
}

export interface QuickExample {
  title: string
  layout: Layout
  imageSrc: string
  imageWidth: number
  imageHeight: number
  link: string
}

export interface Color {
  r: number
  g: number
  b: number
}
