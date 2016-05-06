import React from 'react'
import Icon from 'components/Icon/Icon'
import classes from './Pricing.scss'
import Smooch from 'smooch'

export default class Pricing extends React.Component {

  render () {
    return (
      <div className={classes.root}>
        <div className={classes.sectionTitle}>
          Pricing
        </div>
        <div className={classes.sectionSubTitle}>
          We provide a simple and flexible pricing model. We also have a free plan.
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
              <Icon width={60} height={75} src={require('assets/icons/project.svg')} />
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
          <div onClick={Smooch.open} className={classes.button}>Get in touch</div>
        </div>
      </div>
    )
  }
}
