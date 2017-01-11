export type Layout = 'BLOG' | 'REFERENCE' | 'TUTORIAL' | 'FAQ' | 'EXAMPLE'

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

export interface QuickStep {
  primaryColor: Color
  title: string
  logoSrc: string
  isPopuplar?: boolean
  nextSteps: QuickStep[] | QuickExample[]
}

export interface QuickExample {
  imageSrc: string
  link: string
  layout: Layout
  title: string
}

export interface Color {
  r: number
  g: number
  b: number
}
