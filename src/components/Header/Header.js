import React from 'react'
import { Link } from 'react-router'
import classes from './Header.scss'

export default class Header extends React.Component {

  render () {
    return (
      <div className={classes.header}>
        <div className={classes.spacer}></div>
        <Link className={classes.headerLogo} to='/'>
          <img height={40} src={require('assets/graphics/logo-text.svg')} />
        </Link>
        <div className={classes.headerLinks}>
          <a href='https://medium.com/@graphcool'>Blog</a>
          <a href='http://docs.graph.cool'>Docs</a>
          <Link to='/pricing'>Pricing</Link>
          <Link to='/about'>About</Link>
        </div>
        <div className={classes.headerSignin}>
          <a className={classes.headerSigninText} href='https://dashboard.graph.cool'>SIGN IN</a>
        </div>
        <div className={classes.spacer}></div>
      </div>
    )
  }
}
