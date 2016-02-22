import React from 'react'
import { connect } from 'react-redux'
import classes from './HomeView.scss'
import logoImage from './logo.jpg'

export class HomeView extends React.Component {
  render () {
    return (
      <div className={classes.root}>
        <img className={classes.duck}
          src={logoImage}
          alt='This is a duck, because Redux.' />
        <h1>Flexible GraphQL backend as a service</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})
export default connect((mapStateToProps))(HomeView)
