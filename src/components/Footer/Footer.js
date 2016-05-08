import React from 'react'
import { Link } from 'react-router'
import classes from './Footer.scss'

export default class Footer extends React.Component {

  render () {
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <div className={classes.status}>
            <h4>Online Status</h4>
            <div className={classes.check}>
              <i /> Relay Endpoint
            </div>
            <div className={classes.check}>
              <i /> Simple GraphQL Endpoint
            </div>
            <a className={classes.mixpanel} href='https://mixpanel.com/f/partner' rel='nofollow'>
              <img src='//cdn.mxpnl.com/site_media/images/partner/badge_blue.png' alt='Mobile Analytics' />
            </a>
          </div>
          <div className={classes.lists}>
            <div className={classes.list}>
              <h4>Product</h4>
              <ul>
                <li><Link to='/pricing'>Pricing</Link></li>
                {
                  // <li><Link to='https://blog.graph.cool'>Update Notes</Link></li>
                }
                <li><a href='http://docs.graph.cool' target='_blank'>Documentation</a></li>
              </ul>
            </div>
            <div className={classes.list}>
              <h4>Company</h4>
              <ul>
                <li><Link to='/about'>About</Link></li>
                <li><a href='https://medium.com/@graphcool' target='_blank'>Blog</a></li>
                <li><Link to='/imprint'>Imprint</Link></li>
              </ul>
            </div>
            <div className={classes.list}>
              <h4>Social</h4>
              <ul>
                <li><a href='https://twitter.com/graphcool' target='_blank'>Twitter</a></li>
                <li><a href='https://www.facebook.com/Graphcool-1570682923256087' target='_blank'>Facebook</a></li>
                <li><a href='https://github.com/graphcool' target='_blank'>Github</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
