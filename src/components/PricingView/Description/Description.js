import React from 'react'
import Icon from 'components/Icon/Icon'
import classes from './Description.scss'
import Smooch from 'smooch'

export default class Description extends React.Component {

  render () {
    return (
      <div className={classes.root}>
        <div className={classes.section}>
          <div className={classes.sectionTitle}>
            All plans come batteries included
          </div>
          <div className={classes.sectionSubTitle}>
            We structure our plans by number of users, requests and data.
          </div>
        </div>
        <div className={classes.pricedes}>
          <div className={classes.picon}>
            <Icon width={40} height={40} color='#ACAFC6' src={require('assets/icons/user.svg')} />
          </div>
          <div className={classes.ptitle}>
            Maximum Users
          </div>
        </div>
        <div className={classes.pdes}>
          GraphCool includes a flexible User Type that allows you to easily sign up and authenticate users.<br />
          You can sign up users via email as well as social logins such as facebook or twitter. <br />
          A user counts towards your quota as soon as they have signed up.
        </div>
        <div className={classes.pricedes}>
          <div className={classes.picon}>
            <Icon width={40} height={40} color='#ACAFC6' src={require('assets/icons/request.svg')} />
          </div>
          <div className={classes.ptitle}>
            Included Requests
          </div>
        </div>
        <div className={classes.pdes}>
          With GraphQL you make two types of request: queries and mutations. <br />
          Both count towards your monthly request limit. <br />
          Because GraphQL allows you to specify all the data you need in a single request GraphQL applications <br />
          typically make 3-10 times less requests than a REST based application. <br />
        </div>
        <div className={classes.pricedes}>
          <div className={classes.picon}>
            <Icon width={40} height={40} color='#ACAFC6' src={require('assets/icons/database.svg')} />
          </div>
          <div className={classes.ptitle}>
            Database Storage
          </div>
        </div>
        <div className={classes.pdes}>
          All items you store in GraphQL counts towards your storage quota.<br />
          If you are only storing text and numbers you should be able to store millions of items
          even on the smallest plan.
        </div>
        <div className={classes.pricedes}>
          <div className={classes.picon}>
            <Icon width={40} height={40} color='#ACAFC6' src={require('assets/icons/backup.svg')} />
          </div>
          <div className={classes.ptitle}>
            Automatic Backups
          </div>
        </div>
        <div className={classes.pdes}>
          The integrity of your data is really important to us. This is why we always store your data
          in multiple physical locations. <br />
          In addition to this all paid plans includes automatic backups.
        </div>
        <div className={classes.enterprise}>
          <span className={classes.description}>
            Looking for more? Let's talk about our enterprise plans.
          </span>
          <div onClick={Smooch.open} className={classes.button}>Get in touch</div>
        </div>
      </div>
    )
  }
}
