import * as React from 'react' // tslint:disable-line
import * as ReactDOM from 'react-dom'
import { Router, browserHistory, applyRouterMiddleware } from 'react-router'
import { useScroll } from 'react-router-scroll'
import { AppContainer } from 'react-hot-loader'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import * as FastClick from 'fastclick'
import routes from './routes'

import * as Smooch from 'smooch'

import './style'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({uri: 'https://api.graph.cool/simple/v1/ciwkuhq2s0dbf0131rcb3isiq'}),
})

function shouldScrollUp(previousProps, {location}) {
  return location.hash === '' && (previousProps === null || previousProps.location.pathname !== location.pathname)
}

function render() {
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider client={client}>
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
