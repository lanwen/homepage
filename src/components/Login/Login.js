import React from 'react'
import classes from './Login.scss'

export default class Login extends React.Component {

  render () {
    return (
      <div className={classes.login}>

        <div className={classes.spacer}>
        </div>

        <div className={classes.des}>
          <p>Getting started is easy. Be up and running in minutes.</p>
        </div>

          <div className={classes.button}>

            <div>
              <div className={classes.create}>
                <a className={classes.createtext} href='http://graph.cool/create/'>CREATE A FREE ACCOUNT</a>
              </div>
            </div>

          </div>

        <div className={classes.spacer}>
        </div>

      </div>
    )
  }
}
