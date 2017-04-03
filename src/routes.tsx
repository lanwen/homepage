import * as React from 'react'
import {Route, Redirect, IndexRoute} from 'react-router'
import RootView from './components/RootView'
import HomeView from './components/HomeView/HomeView'
import FeaturesGraphQLView from './components/FeaturesGraphQLView/FeaturesGraphQLView'
import GraphQLUpView from './components/GraphQLUpView/GraphQLUpView'
import PricingView from './components/PricingView/PricingView'
import FeaturesFunctionsView from './components/FeaturesFunctionsView/FeaturesFunctionsView'
import OpenSourceView from './components/OpenSourceView/OpenSourceView'
import AboutView from './components/AboutView/AboutView'
import GraphQLUpGetStartedView from './components/GraphQLUpView/GraphQLUpGetStartedView/GraphQLUpGetStartedView'
import DocsView from './components/DocsView/DocsView'
import BlogPage from './components/DocsView/pages/BlogPage/BlogPage'
import NotFoundView from './components/404/404'
import FAQPage from './components/DocsView/pages/FAQPage'
import TutorialsPage from './components/DocsView/pages/TutorialsPage'
import DocsOverview from './components/DocsView/pages/Overview/DocsOverview'
import QuickstartPage from './components/DocsView/pages/QuickstartPage'
import ContentHandler from './components/DocsView/components/ContentHandler'

function forceTrailingSlash(nextState, replace) {
  const path = nextState.location.pathname
  if (path.slice(-1) !== '/') {
    replace({
      ...nextState.location,
      pathname: path + '/',
    })
  }
}

function rootOnChange(_, nextState, replace) {
  forceTrailingSlash(nextState, replace)
}

export default (
  <Route component={RootView} onEnter={forceTrailingSlash} onChange={rootOnChange}>
    <Route path='/' component={HomeView} />
    <Route path='/graphql/' component={FeaturesGraphQLView} />
    <Route path='/graphql-up/' component={GraphQLUpView} />
    <Route path='/graphql-up/new/' component={GraphQLUpGetStartedView} />
    <Route path='/functions/' component={FeaturesFunctionsView} />
    <Route path='/pricing/' component={PricingView} />
    <Route path='/open-source/' component={OpenSourceView} />
    <Route path='/about/' component={AboutView} />
    <Route path='/404/' component={NotFoundView} />
    <Route component={DocsView}>
      <Route path='/blog/' component={BlogPage} />
      <Route path='/docs/'>
        <IndexRoute component={DocsOverview} />
        <Redirect from='reference/' to='reference/platform/overview-chohbah0eo' />
        <Redirect from='graphql-up/' to='reference/simple-api/overview-heshoov3ai/' />
        <Route path='quickstart/' component={QuickstartPage} />
        <Route path='tutorials/' component={TutorialsPage} />
        <Route path='faq/' component={FAQPage} />
      </Route>
      <Route path='*' component={ContentHandler} />
    </Route>
  </Route>
)
