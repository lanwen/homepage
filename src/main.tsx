import {getDataFromTree} from './utils/server'
require('babel-core/register')
require('babel-polyfill')
import * as React from 'react' // tslint:disable-line
import * as ReactDOM from 'react-dom'
import { Router, browserHistory, applyRouterMiddleware } from 'react-router'
import { createStore, combineReducers, applyMiddleware, compose, Reducer } from 'redux'
import { useScroll } from 'react-router-scroll'
import { AppContainer } from 'react-hot-loader'
import ApolloClient, { createBatchingNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import * as FastClick from 'fastclick'
import * as cookiestore from 'cookiestore'
import * as WebFont from 'webfontloader'
import routes from './routes'
import {AsyncComponentProvider, createAsyncContext} from 'react-async-component'
import asyncBootstrapper from 'react-async-bootstrapper'
import './utils/polyfills'
import './style'
import * as offline from 'offline-plugin/runtime'
import './styles/mdn-like.css'
offline.install()

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

export function updateAsyncState(state: any): void {
  const el = document.getElementById('ASYNC_COMPONENTS_STATE') as HTMLScriptElement
  const text = `window.ASYNC_COMPONENTS_STATE = ${JSON.stringify(state)}`
  if (el) {
    el.text = text
  } else {
    const newEl = document.createElement('script') as HTMLScriptElement
    newEl.text = text
    newEl.id = 'ASYNC_COMPONENTS_STATE'
    document.head.appendChild(newEl)
  }
}

// save last referral
if (!cookiestore.has('graphcool_last_referral')) {
  cookiestore.set('graphcool_last_referral', document.referrer)
}

const client = new ApolloClient({
  initialState: window.__APOLLO_STATE__,
  networkInterface: createBatchingNetworkInterface({
    uri: __DOCS_API_ADDR__,
    batchInterval: 10,
  }),
  dataIdFromObject: (o: any) => o.id,
})

const store = createStore(
  combineReducers({
    apollo: client.reducer() as Reducer<any>,
  }),
  {}, // initial state
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

function hashLinkScroll() {
  const { hash } = window.location
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(
      () => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView()
        }
      },
      0,
    )
  }
}

const asyncContext = createAsyncContext()

const rehydratedState = window['ASYNC_COMPONENTS_STATE']

const app = (
  <AppContainer>
    <AsyncComponentProvider asyncContext={asyncContext} rehydrateState={rehydratedState}>
      <ApolloProvider store={store} client={client}>
        <Router
          history={browserHistory}
          render={applyRouterMiddleware(useScroll(shouldScrollUp))}
          routes={routes}
          onUpdate={hashLinkScroll}
        >
        </Router>
      </ApolloProvider>
    </AsyncComponentProvider>
  </AppContainer>
)

function render() {
  console.log('rendering root')
  ReactDOM.render(
    app,
    document.getElementById('root'),
  )
}

asyncBootstrapper(app)
  .then(() => getDataFromTree(app)) // TODO: make it work with the async components
  .then(() => {
    if (navigator.userAgent === 'SSR') {
      const asyncState = asyncContext.getState()
      updateAsyncState(asyncState)
    }
    render()
  })

// const interval = setInterval(initIntercom, 1000)
initIntercom()

function initIntercom() {
  if (window.Intercom && navigator.userAgent !== 'SSR') {
    Intercom('boot', {
      app_id: __INTERCOM_ID__,
      user_id: cookiestore.has('graphcool_customer_id') ? cookiestore.get('graphcool_customer_id') : undefined,
    })
    // clearInterval(interval)
  }
}

if (navigator.userAgent !== 'SSR') {
  FastClick.attach(document.body)

  WebFont.load({
    google: {
      families: ['Open Sans:300,400,600', '' +
      'Source Code Pro:500,700'],
    },
  })
}
