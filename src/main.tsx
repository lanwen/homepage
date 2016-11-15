import * as React from 'react' // tslint:disable-line
import * as ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import HomeView from './components/HomeView/HomeView'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={HomeView}/>
  </Router>,
  document.getElementById('root')
)
