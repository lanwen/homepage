import * as React from 'react' // tslint:disable-line
import * as ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { AppContainer } from 'react-hot-loader'
import HomeView from './components/HomeView/HomeView'
import PricingView from './components/PricingView/PricingView'
import AboutView from './components/AboutView/AboutView'
import DocsView from './components/DocsView/DocsView'
import * as FastClick from 'fastclick'
import './style'
import HeaderDocs from "./components/DocsView/HeaderDocs";

function render() {
  ReactDOM.render(
    <AppContainer>
      <Router history={browserHistory}>
        <Route path='/' component={HomeView}/>
        <Route path='/pricing' component={PricingView}/>
        <Route path='/about' component={AboutView}/>
        <Route path='/docs' component={DocsView}>
          <Route path='quickstart' component={DocsView}/>
          <Route path='resources' component={DocsView}/>
          <Route path='reference' component={DocsView}/>
          <Route path='blog' component={DocsView}/>
          <Route path='community' component={DocsView}/>
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
