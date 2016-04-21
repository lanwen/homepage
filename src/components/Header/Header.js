import React from 'react'
import classes from './Header.scss'

export default class Header extends React.Component {

  render () {
    return (
      <div className={classes.header}>
        <div className={classes.headerLogo}>
          <a href='http://graph.cool/'>
            <img height={40} src={require('assets/graphics/logo-text.svg')} />
          </a>
        </div>
        <div className={classes.headerSignin}>
          <a className={classes.headerSigninText} href='http://graph.cool/signin/'>Sign In</a>
        </div>
        <div className={classes.headerLinks}>
          <li><a href='http://graph.cool/blog/'>Blog</a></li>
          <li><a href='http://graph.cool/docs/'>Docs</a></li>
          <li><a href='http://graph.cool/pricing/'>Pricing</a></li>
          <li><a href='http://graph.cool/about/'>About</a></li>
        </div>
      </div>
    )
  }
}
