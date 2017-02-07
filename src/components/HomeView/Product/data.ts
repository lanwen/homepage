interface ProductFeature {
  title: string
  description: string
  image: string
  videoUrl: string
}

// tslint:disable
export const features: ProductFeature[] = [{
  title: 'Data Browser',
  description: `Explore your data in the powerful data browser. With built in tools to.`,
  image: require('../../../assets/graphics/homepage/product-1.png'),
  videoUrl: '/videos/product-1.mp4',
}, {
  title: 'Work with Relations',
  description: 'Create advanced data models with relations. For example a relation could specify.',
  image: require('../../../assets/graphics/homepage/product-2.png'),
  videoUrl: '/videos/product-2.mp4',
}, {
  title: 'Permissions',
  description: 'Make your project secure by setting up permissions. Graphcool allows you to define.',
  image: require('../../../assets/graphics/homepage/product-3.png'),
  videoUrl: '/videos/product-3.mp4',
}, {
  title: 'Mutation Callbacks',
  description: 'Perform custom business logic in response to data changes. With Graphcool your.',
  image: require('../../../assets/graphics/homepage/product-4.png'),
  videoUrl: '/videos/product-4.mp4',
}, {
  title: 'Playground',
  description: 'Explore your api in the interactive query builder. The best way to get familiar.',
  image: require('../../../assets/graphics/homepage/product-5.png'),
  videoUrl: '/videos/product-5.mp4',
}, {
  title: 'API Endpoints',

  description: 'Connect your Graphcool project to your web or mobile app. As GraphQL is an.',
  image: require('../../../assets/graphics/homepage/product-6.png'),
  videoUrl: '/videos/product-6.mp4',
}]
