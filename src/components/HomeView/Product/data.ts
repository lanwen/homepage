interface ProductFeature {
  title: string
  description: string
  imageUrl: string
  videoUrl: string
}

export const features: ProductFeature[] = [{
  title: 'Relations',
  description: 'Create advanced data models with relations',
  imageUrl: '/videos/product-1.mp4',
  videoUrl: '/videos/product-1.mp4',
}, {
  title: 'Permissions',
  description: 'Make your project secure by setting up permissions',
  imageUrl: '/videos/product-2.mp4',
  videoUrl: '/videos/product-2.mp4',
}, {
  title: 'Mutation Callbacks',
  description: 'Perform custom business logic in response to data changes',
  imageUrl: '/videos/product-2.mp4',
  videoUrl: '/videos/product-2.mp4',
}, {
  title: 'Playground',
  description: 'Explore your api in the interactive query builder',
  imageUrl: '/videos/product-2.mp4',
  videoUrl: '/videos/product-2.mp4',
}, {
  title: 'API Endpoints',
  description: 'Connect your Graphcool project to your web or mobile app',
  imageUrl: '/videos/product-2.mp4',
  videoUrl: '/videos/product-2.mp4',
}]
