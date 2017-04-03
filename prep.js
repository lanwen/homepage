const {Lokka} = require('lokka')
const {Transport} = require('lokka-transport-http')

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
      '/about/',
      '/open-source/',
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
      // routes: routes.concat(docsItemRoutes),
      routes: ['/', '/graphql/', '/graphql-up/'],
      https: true,
      timeout: 2000,
      hostname: 'https://www.graph.cool',
      useragent: 'SSR',
      concurrency: 10,
      minify: {
        minifyCSS: true,
        minifyJS: true,
      },
      additionalSitemapUrls: ['/forum'],
    }
  })

}
