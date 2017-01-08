import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../utils/constants'
import SectionHeader from '../SectionHeader'

const Copy = styled.div`
  width: 60%;
  
  @media(max-width: ${breakpoints.p750}px) {
    width: 80%;
  }
  @media(max-width: ${breakpoints.p500}px) {
    padding-left: ${$v.size38};
    padding-right: ${$v.size38};
    text-align: left;
  }
 
 @media(max-width: ${breakpoints.p400}px) {
    padding-left: ${$v.size25};
    padding-right: ${$v.size25};
  }
`

const Learn = styled.div`
  background: linear-gradient(to top, #fff 25%, rgba(0, 0, 0, 0.03) 25%,rgba(0, 0, 0, 0.03) 75%,#fff 75%);
  
  @media(max-width: 891px) {
    background: linear-gradient(to top, #fff 15%, rgba(0, 0, 0, 0.03) 15%,rgba(0, 0, 0, 0.03) 85%,#fff 85%);
  }
`

const Button = styled.a`
  font-size: ${$v.size16};
  
  @media (min-width: ${breakpoints.p1000}px) {
    font-size: ${$v.size20};
  }
  
  @media (min-width: ${breakpoints.p1360}px) {
    font-size: ${$v.size25};
  }
`

export default class OpenSource extends React.Component<{}, {}> {

  render() {
    const headline = (
      <div className={cx($p.mb0, $p.pb0)}>
        <span>We </span>
        <img className={cx($p.ph10)} src={require('../../assets/graphics/Heart.svg')} alt='Heart'/>
        <span> Open Source</span>
      </div>
    )

    return (
      <div className={cx($p.justifyCenter, $p.flex, $p.flexColumn, $p.pb96)}>
        <SectionHeader
          headline={headline}
          copy='Help us move the GraphQL community forward. The Graphcool team works on various open source projects and would love your help. The easiest way to get started is to submit improvements to the examples or create examples and guides for new technologies.' // tslint:disable-line
        />
        <Learn className={cx($p.flex, $p.justifyCenter, $p.flexWrap, $p.pv60, $p.ph38)}>
          <a className={cx($p.mh25, $p.mv10)} href='https://learnrelay.org' target='_blank'>
            <img
              className={cx($p.w100, $p.hAuto, $p.bbox, $p.db)}
              src={require('../../assets/graphics/LearnRelay.png')}
              alt='Learn Relay'/>
          </a>
          <a className={cx($p.mh25, $p.mv10)} href='https://learnapollo.com' target='_blank'>
            <img
              className={cx($p.w100, $p.hAuto, $p.bbox, $p.db)}
              src={require('../../assets/graphics/LearnApollo.png')}
              alt='Learn Apollo'
            />
          </a>
        </Learn>
        <Copy className={cx($p.f25, $p.tc, $p.pb16, $p.selfCenter, $p.fw3)}>
          {'Try it out for free - and setup your own backend in less than 5 minutes.'}
        </Copy>
        <Button
          className={cx($g.uppercaseButton, $p.bgGreen, $p.white, $p.selfCenter, $p.pa16, $p.noUnderline)}
          href='https://console.graph.cool/signup'
        >
          Sign up
        </Button>
      </div>
    )
  }
}
