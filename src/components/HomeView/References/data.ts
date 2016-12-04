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
  quote: 'We really, really like this product. We don’t need backend-devs anymore. That’s great!',
  who: 'Random CTO',
  url: 'https://google.com',
}, {
  quote: 'We 2, really like this product. We don’t need backend-devs anymore. That’s great!',
  who: 'Random CTO2',
  url: 'https://google.com',
}, {
  quote: 'We 3, really like this product. We don’t need backend-devs anymore. That’s great! We 3, really like this product. We don’t need backend-devs anymore. That’s great!',
  who: 'Random CTO3',
  url: 'https://google.com',
}]