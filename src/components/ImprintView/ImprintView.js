import React from 'react'
import classes from './ImprintView.scss'

export default class ImprintView extends React.Component {

  render () {
    return (
      <div className={classes.root}>
        <div className={classes.sectionTitle}>
          Imprint
        </div>
        <div className={classes.sectionSubTitle}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. <br />
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </div>
      </div>
    )
  }
}
