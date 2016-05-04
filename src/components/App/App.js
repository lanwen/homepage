import React, { PropTypes } from 'react'
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
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
