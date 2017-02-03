import * as React from 'react' // tslint:disable-line
import * as ReactDOM from 'react-dom'
import { Router, browserHistory, applyRouterMiddleware } from 'react-router'
import { createStore, combineReducers, applyMiddleware, compose, Reducer } from 'redux'
import { useScroll } from 'react-router-scroll'
import { AppContainer } from 'react-hot-loader'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import * as FastClick from 'fastclick'
import * as cookiestore from 'cookiestore'
import * as WebFont from 'webfontloader'
import routes from './routes'

import './style'

function shouldScrollUp(previousProps, {location}) {
  return location.hash === '' && (previousProps === null || previousProps.location.pathname !== location.pathname)
}

export function updateApolloState(state: any): void {
  const el = document.getElementById('__APOLLO_STATE__') as HTMLScriptElement
  const text = `window.__APOLLO_STATE__ = ${JSON.stringify(state)}`
  if (el) {
    el.text = text
  } else {
    const newEl = document.createElement('script') as HTMLScriptElement
    newEl.text = text
    newEl.id = '__APOLLO_STATE__'
    document.head.appendChild(newEl)
  }
}

const client = new ApolloClient({
  networkInterface: createNetworkInterface({uri: __DOCS_API_ADDR__ }),
})

const store = createStore(
  combineReducers({
    apollo: client.reducer() as Reducer<any>,
  }),
  window.__APOLLO_STATE__ || {}, // initial state
  compose(
    applyMiddleware(client.middleware()),
  ),
)

if (navigator.userAgent === 'SSR') {
  store.subscribe(() => {
    const state = store.getState()
    updateApolloState(state)
  })
}

WebFont.load({
  google: {
    families: ['Open Sans:300,400,600', 'Source Code Pro:400,700'],
  },
})

function render() {
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider store={store} client={client}>
        <Router
          history={browserHistory}
          render={applyRouterMiddleware(useScroll(shouldScrollUp))}
          routes={routes}
        >
        </Router>
      </ApolloProvider>
    </AppContainer>,
    document.getElementById('root'),
  )
}

render()

const interval = setInterval(initIntercom, 1000)

function initIntercom() {
  if (window.Intercom && navigator.userAgent !== 'SSR') {
    Intercom('boot', {
      app_id: __INTERCOM_ID__,
      user_id: cookiestore.has('graphcool_customer_id') ? cookiestore.get('graphcool_customer_id') : undefined,
    })
    clearInterval(interval)
  }
}

if (navigator.userAgent !== 'SSR') {
  FastClick.attach(document.body)
}
