import React from 'react'
import classes from './BetaRequest.scss'

export default class BetaRequest extends React.Component {

  render () {
    return (
      <div className={classes.root}>
        <span className={classes.description}>
          Join our private beta
        </span>
        <input type='text' placeholder='Email' className={classes.field}/>
        <a className={classes.button} href='http://graph.cool/create/'>Request access</a>
      </div>
    )
  }
}
