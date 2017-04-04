import * as React from 'react'
import * as cn from 'classnames'
import * as MediaQuery from 'react-responsive'

interface Props {
  light?: boolean
}

interface State {
  sending: boolean
  sent: boolean
  email: string
}

export default class FreecomSignup extends React.Component<Props, State> {

  constructor(props) {
    super(props)

    this.state = {
      sending: false,
      sent: false,
      email: '',
    }
  }

  renderButton() {
    const invalid = !this.emailValid()
    return (
      <button className={cn({invalid})} onClick={this.submit}>
        <style jsx>{`
          button {
            @p: .bgGreen, .white, .br2, .flexFixed, .f16, .fw6, .pv10, .ph16, .pointer, .ttu, .buttonShadow;
          }
          button.invalid {
            cursor: not-allowed;
          }
          @media (max-width: 480px) {
            button {
              @p: .w100, .pv16;
            }
          }
        `}</style>
        Join Course
      </button>
    )
  }

  render() {
    const {light} = this.props
    const {sending, sent} = this.state

    if (sent) {
      return (
        <p className={cn({light})}>
          <style jsx>{`
            p {
              @p: .tc;
            }
            p.light {
              @p: .white
            }
          `}</style>
          Thanks for signing up.
          You are now a part of the Freecom Course!
        </p>
      )
    }

    if (sending) {
      return (
        <p className={cn({light})}>
          <style jsx>{`
            p {
              @p: .white, .tc;
            }
            p.light {
              @p: .white
            }
          `}</style>
          Signing up...
        </p>
      )
    }

    return (
      <div>
        <div className={cn('freecom-signup', {light})}>
          <style jsx>{`
            .freecom-signup {
              @p: .bgBlack04, .br2, .pa10, .flex, .center;
              max-width: 512px;
            }
            input {
              @p: .f20, .w100, .pl10, .black80;
              background: none;
            }
            .freecom-signup.light {
              @p: .bgWhite10;
            }
            .freecom-signup.light input {
              @p: .white80;
            }
          `}</style>
          <input
            type='text'
            placeholder='Just type your Email'
            onChange={this.onChangeEmail}
            onKeyDown={this.onKeyDown}
          />
          <MediaQuery minWidth={650}>
            {this.renderButton()}
          </MediaQuery>
        </div>
        <MediaQuery maxWidth={650}>
          {this.renderButton()}
        </MediaQuery>
      </div>
    )
  }

  private onChangeEmail = e => {
    this.setState({email: e.target.value} as State)
  }

  private onKeyDown = e => {
    if (e.keyCode === 13) {
      this.submit()
    }
  }

  private submit = () => {
    if (this.emailValid()) {
      this.setState({sending: true} as State, async () => {
        const {email} = this.state
        const mutation = `
          mutation signup($email: String!) {
            createSignup(email: $email) {
              id
            }
          }
        `
        const variables = {
          email,
        }
        await fetch('https://api.graph.cool/simple/v1/cj13hs4rab6ix0188qcaofp50', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({query: mutation, variables}),
        })
        this.setState({sending: false, sent: true} as State)
      })
    }
  }

  private emailValid() {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ /* tslint:disable-line */
    return regex.test(this.state.email)
  }
}
