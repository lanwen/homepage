import React from 'react'
import { connect } from 'react-redux'
import classes from './HomeView.scss'

export class HomeView extends React.Component {
  render () {
    return (
      <div className={classes.root}>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})
export default connect((mapStateToProps))(HomeView)
