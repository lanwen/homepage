export interface ReferenceItem {
  quote: string
  who: string
  url: string
  picture: string
  logo: string
}

// tslint:disable
export const references: ReferenceItem[] = [{
  quote: 'Graphcool makes working with various 3rd party APIs so much easier for us.',
  who: 'Eric, Founder',
  url: 'https://authory.com/',
  picture: require('../../../assets/graphics/homepage/testimonials/eric.jpg'),
  logo: require('../../../assets/icons/logos/authory.svg'),
}, {
  quote: 'Graphcool helped me to put together a reactive backend in record time.',
  who: 'Matthew Mueller, Founder',
  url: 'https://standupjack.com',
  picture: require('../../../assets/graphics/homepage/testimonials/mattmueller.jpg'),
  logo: require('../../../assets/icons/logos/standupjack.svg'),
}, {
  quote: 'Graphcool enabled us to build a product for Twitter and iterate rapidly.',
  who: 'Christian Strobl, CEO',
  url: 'https://hackerbay.com/',
  picture: require('../../../assets/graphics/homepage/testimonials/christianstrobl.jpg'),
  logo: require('../../../assets/icons/logos/hackerbay.svg'),
}]
