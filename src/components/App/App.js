import React from 'react'
import Header from 'components/Header/Header'
import Cover from 'components/Cover/Cover'
import Signup from 'components/Signup/Signup'
import Feature from 'components/Feature/Feature'
import How from 'components/How/How'
// import Pricing from 'components/Pricing/Pricing'
import classes from './App.scss'

export default class App extends React.Component {

  render () {
    return (
      <div className={classes.container}>
        <Header />
        <Cover />
        <Signup />
        <Feature />
        <How />
        <Signup />
      </div>
    )
  }
}
