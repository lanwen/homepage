import React from 'react'
import ReactDOM from 'react-dom'
<<<<<<< HEAD
import {
  Router,
  Route,
  browserHistory,
} from 'react-router'
import App from 'components/App/App'
=======
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import makeRoutes from './routes'
import Root from './containers/Root'
import configureStore from './redux/configureStore'
>>>>>>> master
import Smooch from 'smooch'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} />
  </Router>,
  document.getElementById('root')
)

Smooch.init({ appToken: '505tvtkv5udrd4kc5dbpppa6x' })
