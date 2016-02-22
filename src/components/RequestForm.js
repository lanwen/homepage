import React from 'react'
import { findDOMNode } from 'react-dom'
import classes from './RequestForm.scss'

function validateEmail (email) {
  const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  return re.test(email)
}

export default class RequestForm extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      invalidInput: false,
      submitted: false,
      loading: false
    }

    this.watchForEnter = this.watchForEnter.bind(this)
    this.submitRequest = this.submitRequest.bind(this)
  }

  componentDidMount () {
    findDOMNode(this.refs.email).focus()
  }

  watchForEnter (e) {
    if (e.keyCode === 13) {
      this.submitRequest()
    }
  }

  submitRequest () {
    const email = findDOMNode(this.refs.email).value
    if (email && validateEmail(email)) {
      this.setState({ loading: true })

      var request = new XMLHttpRequest()
      var url = 'https://api.parse.com/1/classes/invite'

      request.open('POST', url, true)
      request.setRequestHeader('Content-Type', 'application/json')
      request.setRequestHeader('X-Parse-Application-Id', 'z17SUVXKL2JqHShB3jMSjphyMqPiCZ9nqTX7Fn7M')
      request.setRequestHeader('X-Parse-REST-API-Key', 'f3uFeCxiRQkgDWMYmMEGinF53VpIffhg1m5jWgdu')

      request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
          this.setState({ submitted: true })
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
        <div className={classes.message}><strong>Hold on.</strong></div>
      )
    } else if (this.state.submitted) {
      return (
        <div className={classes.message}>Good News. We added you to our waiting list. <strong>You will get a notification email soon.</strong></div>
      )
    } else {
      return (
        <div className={classes.form}>
          <input className={this.state.invalidInput ? classes.invalid : ''} name='email' onKeyUp={this.watchForEnter} placeholder='Email' ref='email' type='email' />
          <span className={classes.button} onClick={this.submitRequest}>Request</span>
        </div>
      )
    }
  }
}

