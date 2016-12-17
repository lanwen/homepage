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
import ContentHandler from './components/DocsView/ContentHandler/ContentHandler'
import NotFound from './components/DocsView/ContentHandler/NotFound'
import ApolloClient, {createNetworkInterface} from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/ciwlyk90l0gq80101eao599fk' }),
})

function render() {
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider client={client}>
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
          <Route path='/404' component={NotFound}/>
          <Route path='**' component={ContentHandler}></Route>
        </Router>
      </ApolloProvider>
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
