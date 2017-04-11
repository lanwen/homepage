const {Lokka} = require('lokka')
const {Transport} = require('lokka-transport-http')

exports.default = () => {
  const client = new Lokka({
    transport: new Transport(process.env.DOCS_API_ADDR),
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
      '/about/',
      '/open-source/',
      '/freecom/',
      '/pricing/',
      '/graphql',
      '/functions/',
      '/graphql-up/',
      '/blog/',
      '/docs/',
      '/docs/faq/',
      '/docs/tutorials/',
      '/docs/quickstart/',
    ]

    return {
      routes: routes.concat(docsItemRoutes),
      // routes: routes,
      https: true,
      timeout: 15000,
      hostname: 'https://www.graph.cool',
      useragent: 'SSR',
      concurrency: 50,
      minify: {
        minifyCSS: true,
        minifyJS: true,
      },
      additionalSitemapUrls: ['/forum'],
    }
  })

}
