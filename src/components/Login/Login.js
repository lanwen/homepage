import React from 'react'
import Icon from 'components/Icon/Icon'
import classes from './Login.scss'

export default class Login extends React.Component {

  render () {
    return (
      <div className={classes.login}>
        <div className={classes.des}>
          <p>Getting started is easy. Be up and running in minutes.</p>
        </div>
        <div className={classes.button}>
          <div className={classes.text}>
            <p>CREATE A FREE ACCOUNT </p>
          </div>
        </div>
      </div>
    )
  }
}
