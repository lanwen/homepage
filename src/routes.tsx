import RootView from './components/RootView'

function loadRoute(cb) {
  return module => cb(null, module.default)
}

function errorLoading(err) {
  console.error('Dynamic page loading failed', err)
}

const docsOverview = {
  getComponent(location, cb) {
    System.import('./components/DocsView/pages/Overview/DocsOverview').then(loadRoute(cb))
      .catch(errorLoading)
  },
}

export default {
  component: RootView,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('./components/HomeView/HomeView').then(loadRoute(cb))
          .catch(errorLoading)
      },
    },
    {
      path: '/pricing',
      getComponent(location, cb) {
        System.import('./components/PricingView/PricingView').then(loadRoute(cb))
          .catch(errorLoading)
      },
    },
    {
      path: '/about',
      getComponent(location, cb) {
        System.import('./components/AboutView/AboutView').then(loadRoute(cb))
          .catch(errorLoading)
      },
    },
    {
      getComponent(location, cb) {
        System.import('./components/DocsView/DocsView').then(loadRoute(cb))
          .catch(errorLoading)
      },
      childRoutes: [
        {
          path: '/blog',
          getComponent(location, cb) {
            System.import('./components/AboutView/AboutView').then(loadRoute(cb))
              .catch(errorLoading)
          },
        },
        {
          path: '/docs',
          getIndexRoute(location, cb) {
            cb(null, docsOverview)
          },
          childRoutes: [
            {
              path: 'reference',
              onEnter(nextState, replace, callback) {
                replace('reference/platform/overview-chohbah0eo')
                callback()
              },
            },
            {
              path: 'quickstart',
              getComponent(location, cb) {
                System.import('./components/DocsView/pages/QuickstartPage').then(loadRoute(cb))
                  .catch(errorLoading)
              },
            },
            {
              path: 'tutorials',
              getComponent(location, cb) {
                System.import('./components/DocsView/pages/TutorialsPage').then(loadRoute(cb))
                  .catch(errorLoading)
              },
            },
            {
              path: 'faq',
              getComponent(location, cb) {
                System.import('./components/DocsView/pages/FAQPage').then(loadRoute(cb))
                  .catch(errorLoading)
              },
            },
          ],
        },
      ],
    },
    {
      path: '*',
      getComponent(location, cb) {
        System.import('./components/DocsView/components/ContentHandler').then(loadRoute(cb))
          .catch(errorLoading)
      },
    },
  ],
}
