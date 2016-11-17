import * as React from 'react' // tslint:disable-line
import * as ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import HomeView from './components/HomeView/HomeView'
import { AppContainer } from 'react-hot-loader'

function render() {
  ReactDOM.render(
    <AppContainer>
      <Router history={browserHistory}>
        <Route path='/' component={HomeView}/>
      </Router>
    </AppContainer>,
    document.getElementById('root')
  )
}

render()

if (module.hot) {
  module.hot.accept(render)
}
