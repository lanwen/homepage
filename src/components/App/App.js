import React from 'react'
import Header from 'components/Header/Header'
import Cover from 'components/Cover/Cover'
import Signup from 'components/Signup/Signup'
import Features from 'components/Features/Features'
import How from 'components/How/How'
import Pricing from 'components/Pricing/Pricing'
import './App.scss'

export default class App extends React.Component {

  render () {
    return (
      <div>
        <Header />
        <Cover />
        <Signup />
        <Features />
        <How />
        <Pricing />
        <Signup />
      </div>
    )
  }
}
