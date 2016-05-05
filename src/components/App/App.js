import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import './App.scss'

export default class App extends React.Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  render () {
    return (
      <div>
        <Helmet
          titleTemplate='graph.cool | %s'
          defaultTitle='GraphQL Backend as a Service | graph.cool'
        />
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
