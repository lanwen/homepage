import React from 'react'
import { findDOMNode } from 'react-dom'
import classes from './BetaRequest.scss'

function validateEmail (email) {
  const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  return re.test(email)
}

export default class BetaRequest extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      invalidInput: false,
      submitted: false,
      loading: false,
      invite: false,
    }
  }

  _watchForEnter (e) {
    if (e.keyCode === 13) {
      this._submitRequest()
    }
  }

  _trackFocus () {
    analytics.track('beta enters email')
  }

  _submitRequest () {
    const email = findDOMNode(this.refs.email).value
    if (email && validateEmail(email)) {
      this.setState({ loading: true })

      var request = new XMLHttpRequest()
      var url = 'https://api.parse.com/1/classes/beta'

      request.open('POST', url, true)
      request.setRequestHeader('Content-Type', 'application/json')
      request.setRequestHeader('X-Parse-Application-Id', 'z17SUVXKL2JqHShB3jMSjphyMqPiCZ9nqTX7Fn7M')
      request.setRequestHeader('X-Parse-REST-API-Key', 'f3uFeCxiRQkgDWMYmMEGinF53VpIffhg1m5jWgdu')

      request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
          this.setState({ submitted: true })
          analytics.track('beta requested', { email })
        }

        this.setState({ loading: false })
      }

      var data = JSON.stringify({ email })
      request.send(data)
    } else {
      this.setState({ invalidInput: true })
      setTimeout(() => {
        this.setState({ invalidInput: false })
      }, 500)
    }
  }

  render () {
    if (this.state.loading) {
      return (
        <div className={classes.root}><strong>Hold on.</strong></div>
      )
    }

    if (this.state.submitted) {
      return (
        <div className={classes.root}>
          Good News. We added you to our waiting list. <strong>You will get a notification email soon.</strong>
        </div>
      )
    }

    return (
      <div className={classes.root}>
        <span className={classes.description}>
          We're currently in beta.
        </span>
        <input
          name='email'
          type='email'
          placeholder='Email'
          onFocus={this._trackFocus}
          onKeyUp={::this._watchForEnter}
          ref='email'
        />
        <div
          className={classes.button}
          onClick={::this._submitRequest}
        >
          Request beta access
        </div>
      </div>
    )
  }
}
