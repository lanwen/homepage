import React from 'react'
import Icon from 'components/Icon/Icon'
import classes from './Pricing.scss'

export default class Pricing extends React.Component {

  render () {
    return (
      <div className={classes.root}>
        <div className={classes.sectionTitle}>
          Pricing
        </div>
        <div className={classes.sectionSubTitle}>
          We provide a simple and flexible pricing model. Development is free of course.
        </div>
        <div className={classes.table}>
          <div className={classes.sidebar}>
            <div className={classes.line}>Max. Users</div>
            <div className={classes.line}>Incl. Requests</div>
            <div className={classes.line}>DB Storage</div>
            <div className={classes.line}>Backups</div>
          </div>
          <div className={classes.plan}>
            <div className={classes.icon}>
              <Icon width={60} height={75} src={require('assets/icons/development.svg')} />
            </div>
            <div className={classes.title}>Developer</div>
            <div className={classes.priceAmount}>Free</div>
            <div className={classes.priceMonth}></div>
            <div className={classes.line}>50</div>
            <div className={classes.line}>20,000</div>
            <div className={classes.line}>100 MB</div>
            <div className={classes.line}>
              <Icon width={19} height={19} color='#596062' src={require('assets/icons/close.svg')} />
            </div>
          </div>
          <div className={classes.plan}>
            <div className={classes.icon}>
              <Icon width={60} height={75} src={require('assets/icons/development.svg')} />
            </div>
            <div className={classes.title}>Project</div>
            <div className={classes.priceAmount}>$9</div>
            <div className={classes.priceMonth}>per month</div>
            <div className={classes.line}>200</div>
            <div className={classes.line}>100,000</div>
            <div className={classes.line}>500 MB</div>
            <div className={classes.line}>
              <Icon width={19} height={19} color='#27AE60' src={require('assets/icons/check.svg')} />
            </div>
          </div>
          <div className={classes.plan}>
            <div className={classes.icon}>
              <Icon width={60} height={75} src={require('assets/icons/startup.svg')} />
            </div>
            <div className={classes.title}>Startup</div>
            <div className={classes.priceAmount}>$29</div>
            <div className={classes.priceMonth}>per month</div>
            <div className={classes.line}>1000</div>
            <div className={classes.line}>1 million</div>
            <div className={classes.line}>2 GB</div>
            <div className={classes.line}>
              <Icon width={19} height={19} color='#27AE60' src={require('assets/icons/check.svg')} />
            </div>
          </div>
          <div className={classes.plan}>
            <div className={classes.icon}>
              <Icon width={60} height={75} src={require('assets/icons/production.svg')} />
            </div>
            <div className={classes.title}>Production</div>
            <div className={classes.priceAmount}>$149</div>
            <div className={classes.priceMonth}>per month</div>
            <div className={classes.line}>50,000</div>
            <div className={classes.line}>10 million</div>
            <div className={classes.line}>10 GB</div>
            <div className={classes.line}>
              <Icon width={19} height={19} color='#27AE60' src={require('assets/icons/check.svg')} />
            </div>
          </div>
          <div className={classes.plan}>
            <div className={classes.icon}>
              <Icon width={60} height={75} src={require('assets/icons/enterprise.svg')} />
            </div>
            <div className={classes.title}>Growth</div>
            <div className={classes.priceAmount}>$499</div>
            <div className={classes.priceMonth}>per month</div>
            <div className={classes.line}>1 million</div>
            <div className={classes.line}>100 million</div>
            <div className={classes.line}>100 GB</div>
            <div className={classes.line}>
              <Icon width={19} height={19} color='#27AE60' src={require('assets/icons/check.svg')} />
            </div>
          </div>
        </div>
        <div className={classes.enterprise}>
          <span className={classes.description}>
            Looking for more? Let's talk about our enterprise plans.
          </span>
          <a className={classes.button} href='http://graph.cool/create/'>Get in touch</a>
        </div>
        <div className={classes.section2}>
          <div className={classes.sectionTitle}>
            Frequently Asked Questions
          </div>
          <div className={classes.sectionSubTitle}>
            What are the features
          </div>
        </div>
          <div className={classes.pricedes}>
            <div className={classes.picon}>
              <Icon width={30} height={30} color='#ACAFC6' src={require('assets/icons/user.svg')} />
            </div>
            <div className={classes.ptitle}>
              Maximal Users
            </div>
          </div>
          <div className={classes.pdes}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <div className={classes.pdes}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </div>
          <div className={classes.pdes2}>
             when an unknown printer took a galley of type and scrambled it to make a type
          </div>
          <div className={classes.pricedes}>
            <div className={classes.picon}>
              <Icon width={30} height={30} color='#ACAFC6' src={require('assets/icons/request.svg')} />
            </div>
            <div className={classes.ptitle}>
              Incl. Requests
            </div>
          </div>
          <div className={classes.pdes}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <div className={classes.pdes}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </div>
          <div className={classes.pdes2}>
             when an unknown printer took a galley of type and scrambled it to make a type
          </div>
          <div className={classes.pricedes}>
            <div className={classes.picon}>
              <Icon width={30} height={30} color='#ACAFC6' src={require('assets/icons/database.svg')} />
            </div>
            <div className={classes.ptitle}>
              Database Storage
            </div>
          </div>
          <div className={classes.pdes}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <div className={classes.pdes}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </div>
          <div className={classes.pdes2}>
             when an unknown printer took a galley of type and scrambled it to make a type
          </div>
          <div className={classes.pricedes}>
            <div className={classes.picon}>
              <Icon width={40} height={40} color='#ACAFC6' src={require('assets/icons/backup.svg')} />
            </div>
            <div className={classes.ptitle}>
              Backups
            </div>
          </div>
          <div className={classes.pdes}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <div className={classes.pdes}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </div>
          <div className={classes.pdes3}>
             when an unknown printer took a galley of type and scrambled it to make a type
          </div>
          <div className={classes.enterprise}>
            <span className={classes.description}>
              You have a question?
            </span>
            <a className={classes.button} href='http://graph.cool/create/'>Get in touch</a>
          </div>
      </div>
    )
  }
}
