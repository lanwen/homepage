interface Advisor {
  name: string,
  title: string,
  image: string,
}

// tslint:disable
export const advisors: Advisor[] = [{
  name: 'Ilya Sukhar',
  title: 'CEO Parse / Matrix Ventures',
  image: require('../../../assets/graphics/advisors/ilya.jpg'),
}, {
  name: 'Lee Byron',
  title: 'Co-Creator of GraphQL (Facebook)',
  image: require('../../../assets/graphics/advisors/lee.jpg'),
}]
