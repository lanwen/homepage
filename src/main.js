import React from 'react'
import ReactDOM from 'react-dom'
import {
  Router,
  IndexRoute,
  Route,
  browserHistory,
} from 'react-router'
import useScroll from 'scroll-behavior'
import Smooch from 'smooch'
import cookies from 'js-cookie'
import App from 'components/App/App'
import HomeView from 'components/HomeView/HomeView'
import PricingView from 'components/PricingView/PricingView'
import AboutView from 'components/AboutView/AboutView'
import ImprintView from 'components/ImprintView/ImprintView'
import loadAnalytics from './utils/analytics.js'

loadAnalytics()

const clientId = cookies.get('graphcool_client_id')
if (clientId) {
  analytics.identify(clientId, {
    'Product': 'Homepage',
  }, {
    integrations: {
      'All': false,
      'Mixpanel': true,
    },
  })
}

browserHistory.listen((location) => {
  analytics.page()
  analytics.track(`view homepage: ${location.pathname}`)
})

ReactDOM.render(
  <Router history={useScroll(browserHistory)}>
    <Route path='/' component={App}>
      <IndexRoute component={HomeView} />
      <Route path='pricing' component={PricingView} />
      <Route path='about' component={AboutView} />
      <Route path='imprint' component={ImprintView} />
      <Route path='hack' onEnter={() => { window.location = 'https://docs.graph.cool/hackathon/hackzurich2016' }} />
    </Route>
  </Router>,
  document.getElementById('root')
)

Smooch.init({ appToken: __SMOOCH_TOKEN__ })
