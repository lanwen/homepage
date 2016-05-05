import React from 'react'
import classes from './BetaRequest.scss'

export default class BetaRequest extends React.Component {

  render () {
    return (
      <div className={classes.root}>
        <span className={classes.description}>
          Like this? Request a beta invite. Replace this text.
        </span>
        <input type='text' placeholder='Email' />
        <a className={classes.button} href='http://graph.cool/create/'>Request beta access</a>
      </div>
    )
  }
}
