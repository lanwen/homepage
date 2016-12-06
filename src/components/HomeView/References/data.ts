interface Reference {
  quote: string
  who: string
  url: string
}

/*
Who could give a quote:

Hackerbay (agency + twitter)
Emil (indie)
Kitze (repeat agency)
 (big company - hackerbay L`Oreal connection would be great)
 (somebody inside facebook, airbnb - quick prototyping)

*/

export const references: Reference[] = [{
  quote: 'We help big companies innovate like startups. Graphcools integrated console enabled us to build a product for Twitter and quickly iterate as we gathered analytics from users.',
  who: 'Hackerbay CEO',
  url: 'https://hackerbay.com/',
}, {
  quote: 'I am an experienced Angular developer but had never used GraphQL before. With Graphcool I can focus on the user experience and rely on Graphcool to handle the data and service integrations I need.',
  who: 'Emil',
  url: 'https://github.com/emolr',
}]