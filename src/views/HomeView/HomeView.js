import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import classes from './HomeView.scss'
import logoImage from './logo.jpg'
import Script from 'components/Script'
import RequestForm from 'components/RequestForm'

export class HomeView extends React.Component {
  render () {
    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <div className={classes.headerLeft}>
            <Link className={classes.logo} to='/'>
              <img src={logoImage} />
            </Link>
          </div>
          <div className={classes.headerRight}>
            <Script className={classes.slack} url='http://slack.graph.cool/slackin.js' />
          </div>
        </div>
        <h1>Flexible GraphQL backend as a service</h1>
        <div className={classes.content}>
          <div className={classes.contentItem}>
            <img src={logoImage} />
            <h4>Define your data model</h4>
            <p>Never again communicate with your data store using an imperative API. Simply declare your data requirements using GraphQL and let Relay figure out how and when to fetch your data.</p>
          </div>
          <div className={classes.contentItem}>
            <img src={logoImage} />
            <h4>Works with your stack</h4>
            <p>Never again communicate with your data store using an imperative API. Simply declare your data requirements using GraphQL and let Relay figure out how and when to fetch your data.</p>
          </div>
        </div>
        <div className={classes.beta}>
          <h3>Request beta access</h3>
          <RequestForm />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})
export default connect((mapStateToProps))(HomeView)
