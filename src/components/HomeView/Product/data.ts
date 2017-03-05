interface ProductFeature {
  title: string
  description: string
  image: string
  videoUrl: string
}

// tslint:disable
export const features: ProductFeature[] = [{
  title: 'Design your Data Schema',
  description: 'Create advanced data models with custom fields and relations using GraphQL IDL or the visual Console.',
  image: require('../../../assets/graphics/homepage/product-2.png'),
  videoUrl: '/videos/product-2.mp4',
}, {
  title: 'Manage your Data',
  description: `Explore and manage your data visually in the Console or use our powerful GraphQL API.`,
  image: require('../../../assets/graphics/homepage/product-1.png'),
  videoUrl: '/videos/product-1.mp4',
}, {
  title: 'Secure your Data',
  description: 'Secure your data with elegant ACL rules and define powerful permission rules to handle more complex scenarios.',
  image: require('../../../assets/graphics/homepage/product-3.png'),
  videoUrl: '/videos/product-3.mp4',
}, {
  title: 'Custom Logic',
  description: 'Extend Graphcool by implementing and running custom logic with your favourite technologies & languages.',
  image: require('../../../assets/graphics/homepage/product-4.png'),
  videoUrl: '/videos/product-4.mp4',
}, {
  title: 'GraphQL Workflow',
  description: 'Use our optimized Playground to test your GraphQL queries and rapidly implement new features.',
  image: require('../../../assets/graphics/homepage/product-5.png'),
  videoUrl: '/videos/product-5.mp4',
}]
