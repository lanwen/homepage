import React from 'react'
import classes from './Cover.scss'

export default class Cover extends React.Component {

  render () {
    return (
      <div className={classes.root}>
        <div className={classes.img}>
          <img height={600} src={require('assets/graphics/Cover.png')} />
        </div>
      </div>
    )
  }
}
