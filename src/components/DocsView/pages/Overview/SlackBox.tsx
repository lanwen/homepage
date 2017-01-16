import * as React from 'react'
import {$p, $v} from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import Icon from 'graphcool-styles/dist/components/Icon/Icon'
import {breakpoints} from '../../../../utils/constants'

interface State {
  email: string
  emailSent: boolean
}

interface Props {
  className?: string
}

const StyledInput = styled.input`
  padding: 15px 20px 18px;

  &::placeholder {
    color: ${$v.gray50};
  }
`

const ImgWrapper = styled.div`
  height: 36px;
`

const Arrow = styled.div`
  width: 34px;
  height: 34px;
  flex: 0 0 34px;
`

export default class SlackBox extends React.Component<Props, State> {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      emailSent: false,
    }
  }

  render() {
    const {email, emailSent} = this.state
    const emailValid = this.emailValid(email)

    return (
      <div className={cx($p.buttonShadow, $p.bgWhite, $p.overflowHidden, this.props.className)}>
        <ImgWrapper className={cx($p.flex, $p.itemsCenter, $p.justifyCenter)}>
          <img src={require('../../../../assets/graphics/docs/community/slack.svg')} />
        </ImgWrapper>
        <div className={cx($p.mt16, $p.ph25)}>
          To join our slack channel, just type your email-address. You’ll get invited.
        </div>
          {emailSent ?
            (
              <div className={cx($p.flex, $p.mt25, $p.itemsCenter, $p.pa25, $p.bgGreen20)}>
                <div
                  className={cx($p.green)}
                >
                  Thanks for joining! You should have an email in your inbox.
                </div>
              </div>
            ) : (
              <div className={cx($p.flex, $p.mt25, $p.itemsCenter, $p.pb38, $p.ph25)}>
                <StyledInput
                  type='text'
                  onChange={this.onChange}
                  onKeyDown={this.onKeyDown}
                  value={email}
                  placeholder='Your email address...'
                  className={cx(
                    $p.flex1,
                    window.innerWidth < breakpoints.p1000 ? $p.f14 : $p.f20,
                    $p.black50,
                    $p.bgBlack04,
                    $p.black,
                  )}/>
                {emailValid && (
                  <Arrow
                    className={cx(
                      $p.bgGreen20,
                      $p.br100,
                      $p.flex,
                      $p.itemsCenter,
                      $p.justifyCenter,
                      $p.ml6,
                      $p.pointer,
                    )}
                    onClick={this.register}
                  >
                    <Icon
                      src={require('graphcool-styles/icons/stroke/arrowRight.svg')}
                      stroke={true}
                      strokeWidth={5}
                      color={$v.green}
                    />
                  </Arrow>
                )}
              </div>
            )}
      </div>
    )
  }

  private emailValid(email: string) {
    // tslint:disable
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return regex.test(email)
  }

  private onChange = (e: any) => {
    this.setState({email: e.target.value} as State)
  }

  private onKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      this.register()
    }
  }

  private register = () => {
    const {email} = this.state

    if (!this.emailValid(email)) {
      return
    }

    fetch('https://slack.graph.cool/invite', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email })
    })
    .then(() => {
      this.setState({emailSent: true} as State)
    })
  }
}