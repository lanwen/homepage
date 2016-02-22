import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import classes from './HomeView.scss'
import logoImage from './logo.svg'
import step1Image from './step1.svg'
import step2Image from './step2.svg'
import Script from 'components/Script'
import RequestForm from 'components/RequestForm'

export class HomeView extends React.Component {
  render () {
    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <div className={classes.headerLeft}>
            <Link className={classes.logo} to='/'>
              <img src={logoImage} height={57} />
            </Link>
          </div>
          <div className={classes.headerRight}>
            <div className={classes.headerRightTwitter}>
              <a className='twitter-follow-button' href='https://twitter.com/TwitterDev'>Follow @TwitterDev</a>
            </div>
            <Script className={classes.slack} url='http://slack.graph.cool/slackin.js' />
          </div>
        </div>
        <h1>Flexible GraphQL backend as a service</h1>
        <div className={classes.content}>
          <div className={classes.contentItem}>
            <img src={step1Image} height={230} />
            <h4>Define your data model</h4>
            <p>Easily manage the structure of your data in our <strong>intuitive dashboard</strong>. You can browse and edit your data and even import existing data sets.</p>
          </div>
          <div className={classes.contentItem}>
            <img src={step2Image} height={230} />
            <h4>Works with your stack</h4>
            <p>Our service works with all technologies and is super <strong>simple to integrate</strong>. Setting up a project until it works in your app, shouldn't take longer than 5 minutes.</p>
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
