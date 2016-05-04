import React from 'react'
import ReactDOM from 'react-dom'
import {
  Router,
  IndexRoute,
  Route,
  browserHistory,
} from 'react-router'
import Smooch from 'smooch'
import App from 'components/App/App'
import HomeView from 'components/HomeView/HomeView'
import PricingView from 'components/PricingView/PricingView'
import AboutView from 'components/AboutView/AboutView'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HomeView} />
      <Route path='pricing' component={PricingView} />
      <Route path='about' component={AboutView} />
    </Route>
  </Router>,
  document.getElementById('root')
)

Smooch.init({ appToken: '505tvtkv5udrd4kc5dbpppa6x' })
