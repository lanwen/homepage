import React from 'react'
import classes from './Cover.scss'

export default class Cover extends React.Component {

  render () {
    return (
      <div className={classes.root}>
        <div className={classes.img}>
          <img height={550} src={require('assets/graphics/cover.png')} />
        </div>
      </div>
    )
  }
}
