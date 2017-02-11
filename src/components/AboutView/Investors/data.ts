interface Investor {
  name: string,
  title?: string,
  image?: string,
  companyLogo?: string,
  isCompany?: boolean
}

// tslint:disable
export const investors: Investor[] = [{
  name: 'System One',
  companyLogo: require('../../../assets/graphics/investors/systemoneLogo.svg'),
  isCompany: true,
}, {
  name: 'Christian Bach',
  title: 'CEO',
  image: require('../../../assets/graphics/investors/christian.jpg'),
  companyLogo: require('../../../assets/graphics/investors/netlifyLogo.svg')
}, {
  name: 'Adam Wiggins',
  title: 'Founder',
  image: require('../../../assets/graphics/investors/adam.jpg'),
  companyLogo: require('../../../assets/graphics/investors/herokuLogo.svg')
}, {
  name: 'Jeremy Yap',
  title: 'Angel',
  image: require('../../../assets/graphics/investors/jeremy.jpg'),
}]
