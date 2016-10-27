import React from 'react'
import { Link } from 'react-router'
import cookies from 'js-cookie'
import classes from './Header.scss'

export default class Header extends React.Component {

  render () {
    const clientId = cookies.get('graphcool_client_id')

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Link className={classes.headerLogo} to='/'>
            <img height={40} src={require('assets/graphics/logo-text.svg')} />
          </Link>
          <div className={classes.headerRight}>
            <div className={classes.headerLinks}>
              <a href='https://blog.graph.cool' target='_blank'>Blog</a>
              <a href='http://docs.graph.cool'>Docs</a>
              <Link to='/pricing'>Pricing</Link>
              <Link to='/about'>About</Link>
            </div>
            <a className={classes.headerSignin} href='https://console.graph.cool/login'>
              {clientId ? 'OPEN CONSOLE' : 'SIGN IN'}
            </a>
          </div>
        </div>
      </div>
    )
  }
}
