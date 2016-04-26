import React from 'react'
import Icon from 'components/Icon/Icon'
import classes from './Feature.scss'

export default class Feature extends React.Component {

  render () {
    return (
      <div className={classes.features}>
        <div className={classes.featuretitle1}>
          <p>Product Features</p>
        </div>
        <div className={classes.featuretitle2}>
          <p>Enjoy all the bells and whistles.</p>
        </div>
        <div className={classes.fline1}>
          <div className={classes.fea}>
            <div className={classes.fsvg}>
              <Icon width={80} height={80} src={require('assets/icons/f1.svg')} />
            </div>
            <div className={classes.ftitle}>
              <p>Flexible Data Layer</p>
            </div>
            <div className={classes.fdes}>
              We provide a flexible backend <br />
              including data storage and API hosting.<br />
              Instead of manually defining endpoints on a server, <br />
              just specify the data you need in your app. <br />
            </div>
          </div>
          <div className={classes.fea}>
            <div className={classes.fsvg}>
              <Icon width={80} height={80} src={require('assets/icons/f3.svg')} />
            </div>
            <div className={classes.ftitle}>
              <p>Already familiar</p>
            </div>
            <div className={classes.fdes}>
              Graph.cool works with your favorite framework<br />
              including React, Angular and many more.<br />
              Take a look at one of our <a href=''>examples</a> to see<br />
              how easy it is to get started.
            </div>
          </div>
          <div className={classes.fea}>
            <div className={classes.fsvg}>
              <Icon width={80} height={80} src={require('assets/icons/f2.svg')} />
            </div>
            <div className={classes.ftitle}>
              <p>Based on GraphQL</p>
            </div>
            <div className={classes.fdes}>
              GraphQL is the successor of REST APIs <br />
              and <a href=''>a better way</a> to fetch and update data.<br />
              GraphQL is perfect for teams and individual developers <br />
              and helped Facebook to scale easily. <br />
            </div>
          </div>
        </div>
        <div className={classes.fline2}>
          <div className={classes.fea}>
            <div className={classes.fsvg}>
              <Icon width={80} height={80} src={require('assets/icons/f4.svg')} />
            </div>
            <div className={classes.ftitle}>
              <p>Timesaver</p>
            </div>
            <div className={classes.fdes}>
              Get an API endpoint in less than a minute and<br />
              manage your data model in our visual dashboard.<br />
              No need to setup your own servers.<br />
              Just focus on what you love: Your product!
            </div>
          </div>
          <div className={classes.fea}>
            <div className={classes.fsvg}>
              <Icon width={80} height={80} src={require('assets/icons/f5.svg')} />
            </div>
            <div className={classes.ftitle}>
              <p>No Maintenance</p>
            </div>
            <div className={classes.fdes}>
              It's our job to keep your backend up and running,<br />
              so you don't have to think about backups or scaling.<br />
              No more getting up at 3am and fixing critical bugs.<br />
              We take care of all of that.
            </div>
          </div>
          <div className={classes.fea}>
            <div className={classes.fsvg}>
              <Icon width={80} height={80} src={require('assets/icons/f6.svg')} />
            </div>
            <div className={classes.ftitle}>
              <p>Security</p>
            </div>
            <div className={classes.fdes}>
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
