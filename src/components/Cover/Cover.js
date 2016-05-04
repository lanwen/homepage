import React from 'react'
import classes from './Cover.scss'

export default class Cover extends React.Component {

  render () {
    return (
      <div className={classes.root}>
        <h1>Hosted <strong>GraphQL Backend</strong> for your React/Relay Apps</h1>
        <img src={require('assets/graphics/cover.png')} />
      </div>
    )
  }
}
