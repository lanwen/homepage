import React from 'react'
import classes from './Header.scss'

export default class Header extends React.Component {

  render () {
    return (
      <div className={classes.header}>
        <div className={classes.spacer}></div>
        <a className={classes.headerLogo} href='http://graph.cool/'>
          <img height={40} src={require('assets/graphics/logo-text.svg')} />
        </a>
        <div className={classes.headerLinks}>
          <a href='http://graph.cool/blog/'>Blog</a>
          <a href='http://graph.cool/docs/'>Docs</a>
          <a href='http://graph.cool/pricing/'>Pricing</a>
          <a href='http://graph.cool/about/'>About</a>
        </div>
        <div className={classes.headerSignin}>
          <a className={classes.headerSigninText} href='http://graph.cool/signin/'>Sign In</a>
        </div>
        <div className={classes.spacer}></div>
    </div>
    )
  }
}
