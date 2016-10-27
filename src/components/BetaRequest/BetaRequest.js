import React from 'react'
import classes from './BetaRequest.scss'

export default class BetaRequest extends React.Component {

  render () {
    return (
      <div className={classes.root}>
        <span className={classes.description}>
          Want to give it a try?
        </span>
        <a
          href='https://console.graph.cool/signup'
          className={classes.button}
        >
          Sign up for early access
        </a>
      </div>
    )
  }
}
