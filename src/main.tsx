import * as React from 'react' // tslint:disable-line
import * as ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import HomeView from './components/HomeView/HomeView'
import { AppContainer } from 'react-hot-loader'
import PricingView from './components/PricingView/PricingView'
import AboutView from './components/AboutView/AboutView'

import { $v } from 'graphcool-styles'
import { injectGlobal } from 'styled-components'
import { breakpoints } from './utils/constants'

// tslint:disable-next-line
injectGlobal`
  
  body {
    color: ${$v.gray80};
    
    #root {
      overflow: hidden;
    }
  }
  
  h1 {
    font-size: ${$v.size25};
    font-weight: 300;
  
    @media (min-width: ${breakpoints.p1000}px) {
      font-size: ${$v.size30};
    }
    
    @media (min-width: ${breakpoints.p1200}px) {
      font-size: ${$v.size32};
    }
    
    @media (min-width: ${breakpoints.p1440}px) {
      font-size: ${$v.size38};
    }
  }
  
  h2 {
    font-size: ${$v.size25};
    font-weight: 300;
    
    @media (min-width: ${breakpoints.p1000}px) {
      font-size: ${$v.size30};
    }
    
    @media (min-width: ${breakpoints.p1200}px) {
      font-size: ${$v.size32};
    }
  }
  
  h3 {
    font-size ${$v.size20};
    font-weight: 300;
    
    @media (min-width: ${breakpoints.p500}px) {
      font-size: ${$v.size25};
    }
  }
  
  p {
    font-size ${$v.size16};

    @media (min-width: ${breakpoints.p1000}px) {
      font-size: ${$v.size20};
      font-weight: 300;
    }
  }
  
  pre {
    font-size: ${$v.size16};
  }
  
  code {
    font-size: ${$v.size16};
    line-height: 1.5;
  }
  
`

function render() {
  ReactDOM.render(
    <AppContainer>
      <Router history={browserHistory}>
        <Route path='/' component={HomeView}/>
        <Route path='/pricing' component={PricingView}/>
        <Route path='/about' component={AboutView}/>
      </Router>
    </AppContainer>,
    document.getElementById('root'),
  )
}

render()

if (module.hot) {
  module.hot.accept(render)
}
