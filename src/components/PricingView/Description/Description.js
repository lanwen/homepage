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
            Maximal Users
          </div>
        </div>
        <div className={classes.pdes}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br />
          when an unknown printer took a galley of type and scrambled it to make a type
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
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br />
          when an unknown printer took a galley of type and scrambled it to make a type
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
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br />
          when an unknown printer took a galley of type and scrambled it to make a type
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
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br />
          when an unknown printer took a galley of type and scrambled it to make a type
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
