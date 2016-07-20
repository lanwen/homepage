import React from 'react'
import { findDOMNode } from 'react-dom'
import { Lokka } from 'lokka'
import { Transport } from 'lokka-transport-http'
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

  _showInvite () {
    this.setState({ invite: true })
    findDOMNode(this.refs.email).focus()
  }

  _submitRequest () {
    const email = findDOMNode(this.refs.email).value
    const code = this.refs.code ? findDOMNode(this.refs.code).value : ''
    if (email && validateEmail(email)) {
      this.setState({ loading: true })

      const client = new Lokka({
        transport: new Transport('https://api.graph.cool/simple/v1/cioq95oep02kk01o0ijosxq4z')
      })

      client.mutate(`{
        createRequest(
          email: "${email}"
          code: "${code}"
        ) { id }
      }`)
        .then(() => {
          this.setState({
            submitted: true,
            loading: false,
          })
          analytics.track('beta requested', { email, code })
        })

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
          Want to give it a try?
        </span>
        <input
          className={classes.email}
          name='email'
          type='email'
          placeholder='Email'
          onFocus={this._trackFocus}
          onKeyUp={::this._watchForEnter}
          ref='email'
        />
        {this.state.invite &&
          <input
            className={classes.invite}
            type='text'
            placeholder='Invite code'
            onKeyUp={::this._watchForEnter}
            ref='code'
          />
        }
        <div
          className={classes.button}
          onClick={::this._submitRequest}
        >
          Request early access
        </div>
        {!this.state.invite &&
          <div
            className={classes.showInvite}
            onClick={::this._showInvite}
          >
            Use invite code
          </div>
        }
      </div>
    )
  }
}
