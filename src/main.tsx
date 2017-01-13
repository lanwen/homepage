import * as React from 'react' // tslint:disable-line
import * as ReactDOM from 'react-dom'
import { Router, browserHistory, applyRouterMiddleware } from 'react-router'
import { createStore, combineReducers, applyMiddleware, compose, Reducer } from 'redux'
import { useScroll } from 'react-router-scroll'
import { AppContainer } from 'react-hot-loader'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import * as FastClick from 'fastclick'
import routes from './routes'
import * as Smooch from 'smooch'

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
  networkInterface: createNetworkInterface({uri: 'https://api.graph.cool/simple/v1/ciwkuhq2s0dbf0131rcb3isiq'}),
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

store.subscribe(() => {
  const state = store.getState()
  updateApolloState(state)
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
//
// if (module.hot) {
//   module.hot.accept(render)
// }

FastClick.attach(document.body)

if (Smooch) {
  Smooch.init({
    appToken: __SMOOCH_TOKEN__,
  })
}
