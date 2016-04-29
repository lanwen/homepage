import React from 'react'
import ReactDOM from 'react-dom'
import {
  Router,
  Route,
  browserHistory,
} from 'react-router'
import App from 'components/App/App'
import Smooch from 'smooch'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} />
  </Router>,
  document.getElementById('root')
)

Smooch.init({ appToken: '505tvtkv5udrd4kc5dbpppa6x' })
