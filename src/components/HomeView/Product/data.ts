interface ProductFeature {
  title: string
  description: string
  image: string
  videoUrl: string
}

// tslint:disable
export const features: ProductFeature[] = [{
  title: 'Data Browser',
  description: `Explore your data in the powerful data browser. With built in tools to filter and update data many teams find that they they can use the Graphcool data browser as their primary admin tool.`,
  image: require('../../../assets/graphics/homepage/product-1.png'),
  videoUrl: '/videos/product-1.mp4',
}, {
  title: 'Relations',
  description: 'Create advanced data models with relations. For example a relation could specify that a customer has a list of purchases. Graphcool ensures that your data stays consistent and automatically extends your api so you can query related data nodes.',
  image: require('../../../assets/graphics/homepage/product-2.png'),
  videoUrl: '/videos/product-2.mp4',
}, {
  title: 'Permissions',
  description: 'Make your project secure by setting up permissions. Graphcool allows you to define permission rules using custom code or by writing a query specifying who should have access to the given data. The permission system is easy to set up and designed to be flexible enough to work with any application.',
  image: require('../../../assets/graphics/homepage/product-3.png'),
  videoUrl: '/videos/product-3.mp4',
}, {
  title: 'Mutation Callbacks',
  description: 'Perform custom business logic in response to data changes. With Graphcool your data is at the center, but often just storing and querying data is not enough. Mutation Callbacks allow you to execute arbitrary code whenever your data is created or updated.',
  image: require('../../../assets/graphics/homepage/product-4.png'),
  videoUrl: '/videos/product-4.mp4',
}, {
  title: 'Playground',
  description: 'Explore your api in the interactive query builder. The best way to get familiar with your GraphQL api is to use it. The Graphcool Playground provides auto complete and build in documentation making it easy for you to get started writing and querying data. When you are ready to start implementing your application you can simply copy and paste queries directly from the Playground.',
  image: require('../../../assets/graphics/homepage/product-5.png'),
  videoUrl: '/videos/product-5.mp4',
}, {
  title: 'API Endpoints',

  description: 'Connect your Graphcool project to your web or mobile app. As GraphQL is an open standard you can use the client that best suits your needs whether you are developing websites or native apps. Your Graphcool api will work with all of them, and if you are using Relay we even have a special endpoint with dedicated Relay support.',
  image: require('../../../assets/graphics/homepage/product-6.png'),
  videoUrl: '/videos/product-6.mp4',
}]
