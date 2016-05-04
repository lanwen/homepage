import React from 'react'
import classes from './Signup.scss'

export default class Signup extends React.Component {

  render () {
    return (
      <div className={classes.root}>
        <div className={classes.description}>
          Getting started is easy. Be up and running in minutes.
        </div>
        <a className={classes.button} href='http://graph.cool/create/'>Create a free account</a>
      </div>
    )
  }
}
