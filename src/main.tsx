import * as React from 'react' // tslint:disable-line
import * as ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { AppContainer } from 'react-hot-loader'
import HomeView from './components/HomeView/HomeView'
import PricingView from './components/PricingView/PricingView'
import AboutView from './components/AboutView/AboutView'
import DocsView from './components/DocsView/DocsView'
import FAQ from './components/DocsView/FAQ/FAQ'
import * as FastClick from 'fastclick'
import './style'
import HeaderDocs from './components/DocsView/HeaderDocs'
import QuickstartPage from './pages/quickstart/QuickstartPage'
import ReferencePage from './pages/reference/ReferencePage'
import ResourcesPage from './pages/resources/ResourcesPage'
import BlogPage from './pages/blog/BlogPage'
import CommunityPage from './pages/community/CommunityPage'

function render() {
  ReactDOM.render(
    <AppContainer>
      <Router history={browserHistory}>
        <Route path='/' component={HomeView}/>
        <Route path='/pricing' component={PricingView}/>
        <Route path='/about' component={AboutView}/>
        <Route path='/faq' component={FAQ}/>
        <Route path='/docs' component={DocsView}>
          <Route path='quickstart' component={QuickstartPage}/>
          <Route path='resources' component={ResourcesPage}/>
          <Route path='reference' component={ReferencePage}/>
          <Route path='blog' component={BlogPage}/>
          <Route path='community' component={CommunityPage}/>
        </Route>
      </Router>
    </AppContainer>,
    document.getElementById('root'),
  )
}

render()

if (module.hot) {
  module.hot.accept(render)
}

FastClick.attach(document.body)

if (Smooch) {
  Smooch.init({
    appToken: __SMOOCH_TOKEN__,
  })
}
