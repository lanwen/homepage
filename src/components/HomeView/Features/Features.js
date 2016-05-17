import React from 'react'
import Icon from 'components/Icon/Icon'
import classes from './Features.scss'

export default class Features extends React.Component {

  render () {
    return (
      <div className={classes.root}>
        <div className={classes.sectionTitle}>
          Product Features
        </div>
        <div className={classes.sectionSubTitle}>
          We provide you with a flexible GraphQL backend that just works.
        </div>
        <div className={classes.features}>
          <div className={classes.feature}>
            <div className={classes.featureIcon}>
              <Icon width={80} height={80} src={require('assets/icons/f1.svg')} />
            </div>
            <div className={classes.featureTitle}>
              Flexible Data Layer
            </div>
            <div className={classes.featureDescription}>
              We provide a flexible backend <br />
              including data storage and API hosting.<br />
              Instead of manually creating server endpoints, <br />
              just define your data model in our dashboard. <br />
            </div>
          </div>
          <div className={classes.feature}>
            <div className={classes.featureIcon}>
              <Icon width={80} height={80} src={require('assets/icons/f3.svg')} />
            </div>
            <div className={classes.featureTitle}>
              Already Familiar
            </div>
            <div className={classes.featureDescription}>
              Graph.cool works with your favorite framework<br />
              including React, Angular and many more.<br />
              Take a look at one of our <a href=''>examples</a> to see<br />
              how easy it is to get started.
            </div>
          </div>
          <div className={classes.feature}>
            <div className={classes.featureIcon}>
              <Icon width={80} height={80} src={require('assets/icons/f2.svg')} />
            </div>
            <div className={classes.featureTitle}>
              Based on GraphQL
            </div>
            <div className={classes.featureDescription}>
              GraphQL is the successor of REST APIs <br />
              and a declarative way to fetch and update data.<br />
              It's perfect for teams and individual developers <br />
              and helped Facebook to scale easily. <br />
            </div>
          </div>
          <div className={classes.feature}>
            <div className={classes.featureIcon}>
              <Icon width={80} height={80} src={require('assets/icons/f4.svg')} />
            </div>
            <div className={classes.featureTitle}>
              Saves You Time
            </div>
            <div className={classes.featureDescription}>
              Get an API endpoint in less than a minute and<br />
              manage your data model in our dashboard.<br />
              No need to setup your own servers.<br />
              Just focus on what you love: Your product!
            </div>
          </div>
          <div className={classes.feature}>
            <div className={classes.featureIcon}>
              <Icon width={80} height={80} src={require('assets/icons/f5.svg')} />
            </div>
            <div className={classes.featureTitle}>
              No Maintenance
            </div>
            <div className={classes.featureDescription}>
              We make sure your backend is up and running.<br />
              No need to think about backups or scaling.<br />
              No more getting up at 3am to fix critical bugs.<br />
              We take care of all of that.
            </div>
          </div>
          <div className={classes.feature}>
            <div className={classes.featureIcon}>
              <Icon width={80} height={80} src={require('assets/icons/f6.svg')} />
            </div>
            <div className={classes.featureTitle}>
              Security
            </div>
            <div className={classes.featureDescription}>
              Security is essential for every application.<br />
              Flexible permissions allow you to specify<br />
              who has access to which data and industry<br />
              standard encryption keeps your data safe.
            </div>
          </div>
        </div>
      </div>
    )
  }
}
