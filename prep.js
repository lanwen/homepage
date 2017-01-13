const Lokka = require('lokka').Lokka
const Transport = require('lokka-transport-http').Transport

exports.default = () => {
  const client = new Lokka({
    transport: new Transport('https://api.graph.cool/simple/v1/ciwkuhq2s0dbf0131rcb3isiq')
  })

  return client.query(`{
    allItems {
      alias
      path
    }
  }`).then(result => {
    const docsItemRoutes = result.allItems.map(({alias, path}) => `${path}-${alias}`)
    const routes = [
      '/',
      '/docs',
      '/docs/faq',
      '/docs/tutorials',
      '/docs/quickstart',
      '/about',
      '/pricing',
    ]

    return {
      routes: routes.concat(docsItemRoutes)
      https: true,
      hostname: 'https://www.graph.cool',
    }
  })

}
