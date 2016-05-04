import React from 'react'
import classes from './Faq.scss'

export default class Faq extends React.Component {

  render () {
    return (
      <div className={classes.root}>
        <div className={classes.sectionTitle}>
          FAQ
        </div>
        <div className={classes.sectionSubTitle}>
          We already have the answers for your questions.
        </div>
        <div className={classes.questions}>
          <h3></h3>
          <p></p>
        </div>
      </div>
    )
  }
}
