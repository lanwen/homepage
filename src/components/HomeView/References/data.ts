interface Reference {
  quote: string
  who: string
  url: string
}

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