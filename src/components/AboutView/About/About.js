import React from 'react'
import classes from './About.scss'

export default class About extends React.Component {

  render () {
    return (
      <div className={classes.root}>
        <div className={classes.sectionTitle}>
          About
        </div>
        <div className={classes.sectionSubTitle}>
          Our vision goes here...
        </div>
      </div>
    )
  }
}
