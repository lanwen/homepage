import React from 'react'
import { Link } from 'react-router'
import cookies from 'js-cookie'
import classes from './Header.scss'

export default class Header extends React.Component {

  render () {
    const userId = cookies.get('graphcool_user_id')

    return (
      <div className={classes.header}>
        <Link className={classes.headerLogo} to='/'>
          <img height={40} src={require('assets/graphics/logo-text.svg')} />
        </Link>
        <div className={classes.headerRight}>
          <div className={classes.headerLinks}>
            <a href='https://medium.com/@graphcool'>Blog</a>
            <a href='http://docs.graph.cool'>Docs</a>
            <Link to='/pricing'>Pricing</Link>
            <Link to='/about'>About</Link>
          </div>
          <a className={classes.headerSignin} href='https://dashboard.graph.cool'>
            {userId ? 'OPEN DASHBOARD' : 'SIGN IN'}
          </a>
        </div>
      </div>
    )
  }
}
