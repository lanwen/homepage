import * as React from 'react'
import * as cx from 'classnames'
import { $p, $g, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints, maxWidth } from '../../utils/constants'
import LandingCallToAction from './LandingCallToAction'

const Root = styled.div`
  max-width: ${maxWidth}px;
`

const Hero = styled.div`
  padding-left: ${$v.size38};
  padding-right: ${$v.size60};  
`

const Headline = styled.h1`
  font-size: ${$v.fontSize30};
  padding-top: ${$v.size38};
  
  @media (min-width: ${breakpoints.p5}px) {
    font-size: ${$v.fontSize32};
  }
  
  @media (min-width: ${breakpoints.p6}px) {
    font-size: ${$v.size38};
  }
`

const Copy = styled.p`
  font-size: ${$v.fontSize20};
  margin-top: ${$v.size25};
  
  @media (min-width: ${breakpoints.p5}px) {
    font-size: ${$v.size25};
    margin-top: ${$v.size60};      
  }
  
  @media (min-width: ${breakpoints.p6}px) {
    margin-top: ${$v.size60};
  }
`

const Steps = styled.div`
  counter-reset: step;
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  height: ${parseInt($v.fontSize20) + parseInt($v.size16) * 2}px
  background: ${$v.white}
  border-radius: 2px;
  box-shadow: 0 1px 6px 0 rgba(0,0,0,0.15);
  
  @media (min-width: ${breakpoints.p5}px) {
    height: ${parseInt($v.size25) + parseInt($v.size16) * 2}px;
  }
`

const ActiveStep = `
  background: ${$v.green};
  color: ${$v.white};
  cursor: default;
`

const Step = styled.div`
  
  color: ${$v.gray30};
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: ${$v.size16};
  padding-left: ${$v.size10};
  cursor: pointer;
  
  &:last-child {
    padding-right: ${$v.size10};
  }
  
  > span {
    display: inline-block;
    margin-left: ${$v.size10};
    margin-right: ${$v.size16};
  }
  
  &:before {
    counter-increment: step;
    content: counter(step);
    display: inline-block;
    height: ${$v.size16};
    width: ${$v.size16};
    text-align: center;
    line-height: 1;
    font-weight: 600;
    padding: ${$v.size10};
    border-radius: 500px;
    background: ${$v.lightGreen20};
    color: ${$v.green}
    
    ${props => props.active && ActiveStep}
  }
`

export default class Landing extends React.Component<{}, {}> {

  render() {
    return (
      <Root className={cx($p.center)}>
        <Hero className={cx($p.flex, $p.itemsStretch)}>
          <div className={cx($p.w50, $p.flexFixed, $p.relative)}>
            <img className={cx($p.w100, $p.hAuto)} src={require('../../assets/graphics/browser.svg')} />
            <Steps>
              <Step active>
                <span>Define Data Model</span>
              </Step>
              <Step></Step>
              <Step></Step>
              <Step></Step>
            </Steps>
          </div>
          <div className={cx($p.ml60, $p.flex, $p.flexColumn, $p.justifyBetween)}>
            <div>
              <Headline className={cx($p.fw3)}>
                Flexible backend platform combining GraphQL + <span className={cx($p.nowrap)}>AWS Lambda</span>
                <div className={cx($p.green, $p.nowrap)}>built for frontend developers.</div>
              </Headline>
              <Copy className={cx($p.f25, $p.fw3, $p.black50)}>
                {
                  `Setup a production-ready GraphQL backend in 5 minutes. Use any language to implement your business logic. Includes realtime subscriptions, managed database, service integrations and more.` // tslint:disable-line
                }
              </Copy>
            </div>
            {window.innerWidth > breakpoints.p4 &&
              <LandingCallToAction/>
            }
          </div>
        </Hero>
        {window.innerWidth <= breakpoints.p4 &&
          <LandingCallToAction/>
        }
      </Root>
    )
  }
}


