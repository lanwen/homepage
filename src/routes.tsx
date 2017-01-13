import RootView from './components/RootView'

function loadRoute(cb) {
  return module => cb(null, module.default)
}

function errorLoading(err) {
  console.error('Dynamic page loading failed', err)
}

const docsOverview = {
  getComponent(_, cb) {
    System.import('./components/DocsView/pages/Overview/DocsOverview').then(loadRoute(cb))
      .catch(errorLoading)
  },
}

export default {
  component: RootView,
  childRoutes: [
    {
      path: '/',
      getComponent(_, cb) {
        System.import('./components/HomeView/HomeView').then(loadRoute(cb))
          .catch(errorLoading)
      },
    },
    {
      path: '/pricing',
      getComponent(_, cb) {
        System.import('./components/PricingView/PricingView').then(loadRoute(cb))
          .catch(errorLoading)
      },
    },
    {
      path: '/about',
      getComponent(_, cb) {
        System.import('./components/AboutView/AboutView').then(loadRoute(cb))
          .catch(errorLoading)
      },
    },
    {
      getComponent(_, cb) {
        System.import('./components/DocsView/DocsView').then(loadRoute(cb))
          .catch(errorLoading)
      },
      childRoutes: [
        {
          path: '/blog',
          getComponent(_, cb) {
            System.import('./components/AboutView/AboutView').then(loadRoute(cb))
              .catch(errorLoading)
          },
        },
        {
          path: '/docs',
          getIndexRoute(_, cb) {
            cb(null, docsOverview)
          },
          childRoutes: [
            {
              path: 'reference',
              onEnter(_, replace, callback) {
                replace('reference/platform/overview-chohbah0eo')
                callback()
              },
            },
            {
              path: 'quickstart',
              getComponent(_, cb) {
                System.import('./components/DocsView/pages/QuickstartPage').then(loadRoute(cb))
                  .catch(errorLoading)
              },
            },
            {
              path: 'tutorials',
              getComponent(_, cb) {
                System.import('./components/DocsView/pages/TutorialsPage').then(loadRoute(cb))
                  .catch(errorLoading)
              },
            },
            {
              path: 'faq',
              getComponent(_, cb) {
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
      getComponent(_, cb) {
        System.import('./components/DocsView/components/ContentHandler').then(loadRoute(cb))
          .catch(errorLoading)
      },
    },
  ],
}
