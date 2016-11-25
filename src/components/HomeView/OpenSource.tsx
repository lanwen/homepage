import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../utils/constants'

const Heart = styled.div`
    margin-top: -20px;
`
const Copy = styled.div`
  width: 60%;
  
  @media(max-width: ${breakpoints.p750}px) {
      width: 80%;
  }
  @media(max-width: ${breakpoints.p500}px) {
      width: 90%;
  }
`
const Learn = styled.div`
  background: linear-gradient(to top, #fff 25%, rgba(0, 0, 0, 0.03) 25%,rgba(0, 0, 0, 0.03) 75%,#fff 75%);
`
const Button = styled.button`
  font-size: ${$v.size14} !important;
  
  @media (min-width: ${breakpoints.p900}px) {
    font-size: ${$v.size16} !important;
  }
`

export default class OpenSource extends React.Component<{}, {}> {

  render() {
    return (
      <div className={cx($p.justifyCenter, $p.flex, $p.flexColumn, $p.pb96)}>
        <div className={cx($p.pt96, $p.tc, $p.f38, $p.fw3, $p.flex, $p.flexRow, $p.justifyCenter)}>
          <div>
            <div className={cx($p.mb0, $p.pb0)}>
              <span>W </span>
              <img src={require('../../assets/graphics/Heart.svg')} alt='Heart'/>
              <span> Open Source</span>
            </div>
            <Heart className={$p.tl}>e</Heart>
          </div>
        </div>
        <Copy className={cx($p.f20, $p.o50, $p.tc, $p.pb16, $p.selfCenter)}>
          I have hinted that I would often jerk poor Queequeg from between the whale and the ship where he would occasionally fall, from the incessant rolling and swaying of both.
        </Copy>
        <Learn className={cx($p.flex, $p.justifyCenter, $p.flexWrap, $p.pv60, $p.ph38)}>
          <span className={cx($p.mh10, $p.mv10)}>
            <img className={cx($p.w100, $p.hAuto)} src={require('../../assets/graphics/LearnRelay.png')}
                 alt='Learn Relay'/>
          </span>
          <span className={cx($p.mh10, $p.mv10)}>
            <img className={cx($p.w100, $p.hAuto)} src={require('../../assets/graphics/LearnApollo.png')}
                 alt='Learn Apollo'/>
          </span>
        </Learn>
        <Copy className={cx($p.f25, $p.tc, $p.pb16, $p.selfCenter)}>
          Try it out for free – and setup your own backend in less than 5 minutes.
        </Copy>
        <Button className={cx($g.uppercaseButton, $p.bgGreen, $p.white, $p.selfCenter, $p.mv38)}>Sign up</Button>
      </div>
    )
  }
}
