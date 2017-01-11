import * as React from 'react' // tslint:disable-line
import * as ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory, applyRouterMiddleware } from 'react-router'
import { useScroll } from 'react-router-scroll'
import { AppContainer } from 'react-hot-loader'
import HomeView from './components/HomeView/HomeView'
import PricingView from './components/PricingView/PricingView'
import AboutView from './components/AboutView/AboutView'
import DocsView from './components/DocsView/DocsView'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import * as FastClick from 'fastclick'
import QuickstartPage from './components/DocsView/pages/QuickstartPage'
import ReferencePage from './components/DocsView/pages/ReferencePage'
import ResourcesPage from './components/DocsView/pages/ResourcesPage/ResourcesPage'
import BlogPage from './components/DocsView/pages/BlogPage/BlogPage'
import CommunityPage from './components/DocsView/pages/CommunityPage'
import ContentHandler from './components/DocsView/components/ContentHandler'
import RootView from './components/RootView'
import * as Smooch from 'smooch'
import DocsOverview from './components/DocsView/pages/Overview/DocsOverview'

import './style'
import TutorialsPage from './components/DocsView/pages/TutorialsPage'
import FAQPage from './components/DocsView/pages/FAQPage'

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
        >
          <Route component={RootView}>
            <Route path='/' component={HomeView}/>
            <Route path='/pricing' component={PricingView}/>
            <Route path='/about' component={AboutView}/>
            <Route path='/docs' component={DocsView}>
              <IndexRoute component={DocsOverview}/>
              <Route path='quickstart' component={QuickstartPage}/>
              <Route path='resources' component={ResourcesPage}/>
              <Route path='reference' component={ReferencePage}/>
              <Route path='blog' component={BlogPage}/>
              <Route path='tutorials' component={TutorialsPage} />
              <Route path='faq' component={FAQPage} />
              <Route path='community' component={CommunityPage}/>
            </Route>
            <Route path='*' component={ContentHandler}/>
          </Route>
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
