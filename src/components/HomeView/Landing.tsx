import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints, maxWidth } from '../../utils/constants'
import LandingCallToAction from './LandingCallToAction'

const Root = styled.div`
  margin-top: ${$v.size38};
  
  @media (max-width: ${breakpoints.p500}px) {
    margin-top: ${$v.size25};
  }
`

const Hero = styled.div`
  padding-left: ${$v.size16};
  padding-right: ${$v.size38};
  max-width: ${maxWidth}px;

  @media (max-width: ${breakpoints.p900}px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 0 ${$v.size38};
  }
  
  @media (max-width: ${breakpoints.p400}px) {
    padding: 0 ${$v.size25};
  }
  
  @media (min-width: ${breakpoints.p1200}px) {
    padding-left: ${$v.size38};
    padding-right: ${$v.size60};
    margin-bottom: ${$v.size60};
  }
`

const HeroImage = styled.div`
  width: 55%;

  @media (max-width: ${breakpoints.p900}px) {
    width: 100%;
    max-width: 95vh;
    margin-bottom: ${$v.size60};
  }
  
  @media (min-width: ${breakpoints.p1200}px) {
    width: 50%;
  }
`

const HeroText = styled.div`
  justify-content: center;
  margin-left: ${$v.size38};
  
  @media (max-width: ${breakpoints.p900}px) {
    margin-left: 0;
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.p500}px) {
    text-align: left;
  }

  @media (min-width: ${breakpoints.p1200}px) {
    justify-content: space-between;
    margin-left: ${$v.size60};
  }
`

const Headline = styled.h1`
  font-size: ${$v.size25};
  
  @media (min-width: ${breakpoints.p1000}px) {
    font-size: ${$v.fontSize30};
  }
  
  @media (min-width: ${breakpoints.p1200}px) {
    font-size: ${$v.fontSize32};
  }
  
  @media (min-width: ${breakpoints.p1250}px) {
    padding-top: ${$v.size38};
  }
  
  @media (min-width: ${breakpoints.p1360}px) {
    font-size: ${$v.fontSize32};
  }
  
  @media (min-width: ${breakpoints.p1440}px) {
    font-size: ${$v.size38};
  }
`

const BuiltFor = styled.div`
  font-weight: 400;
  margin-top: ${$v.size16};
    
  @media (min-width: ${breakpoints.p1000}px) {
    font-weight: 300;
  }  
  
  @media (min-width: ${breakpoints.p1200}px) {
    margin-top: 0;
  }
`

const Copy = styled.p`
  font-size: ${$v.size16};
  margin-top: ${$v.size25};
  font-weight: 400;
  
  @media (min-width: ${breakpoints.p1000}px) {
    font-size: ${$v.fontSize20};
    font-weight: 300;
  }
  
  @media (min-width: ${breakpoints.p1360}px) {
    font-size: ${$v.size25};
    margin-top: ${$v.size60};      
  }
  
  @media (min-width: ${breakpoints.p1440}px) {
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
  transform: translate(0, 100%);
  padding: ${$v.size10} 0 0;
  
  @media (max-width: ${breakpoints.p900}px) {
    position: relative;
    transform: none;
    justify-content: center;
  }
  
  @media (max-width: ${breakpoints.p400}px) {
    flex-direction: column;
    align-items: flex-start;
  }
  
  @media (min-width: ${breakpoints.p1200}px) {
    padding: 0;
    height: ${parseFloat($v.fontSize20) + parseFloat($v.size16) * 2}px
    background: ${$v.white}
    border-radius: 2px;
    box-shadow: 0 1px 6px 0 rgba(0,0,0,0.15);
    transform: none;
  }
  
  @media (min-width: ${breakpoints.p1360}px) {
    height: ${parseFloat($v.size25) + parseFloat($v.size16) * 2}px;
  }
`

const ActiveStep = `
  cursor: default;
  
  > span {
    display: inline-block;
  }

  &:before {
    background: ${$v.green};
    color: ${$v.white};
  }
  
  @media {
    > span {
      opacity: 1;
    }
  }
`

const Step = styled.div`
  color: ${$v.gray30};
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: ${$v.size16};
  padding-left: ${$v.size10};
  cursor: pointer;
  white-space: nowrap;
  
  > span {
    display: none;
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
  }
  
  @media (max-width: ${breakpoints.p500}px) {
    font-size: ${$v.size14};
    
    > span {
      margin-right: 0;
    }
    
    &:before {
      height: ${$v.size14};
      width: ${$v.size14};
    }
  
    &:first-child {
      padding-left: 0
    }
  }
  
  @media (max-width: ${breakpoints.p400}px) {
    padding-left: 0;
    padding-top: ${$v.size16};
    
    > span {
      display: inline-block;
      opacity: .5;
    }
    
  }
  
  @media (min-width: ${breakpoints.p1200}px) {
    &:last-child {
      padding-right: ${$v.size10};
    }
  }

  ${props => props.active && ActiveStep}
`

const Logo = styled.img`
  margin: ${$v.size16};
`

interface State {
  activeStep: number
}

export default class Landing extends React.Component<{}, {}> {

  state: State = {
    activeStep: 0,
  }

  render() {
    return (
      <Root>
        <Hero className={cx($p.flex, $p.itemsStretch, $p.center)}>
          <HeroImage className={cx($p.flexFixed, $p.relative)}>
            <img className={cx($p.w100, $p.hAuto, $p.db)} src={require('../../assets/graphics/browser.svg')} />
            <Steps>
              <Step
                active={this.state.activeStep === 0}
                onClick={() => this.setState({ activeStep: 0 } as State)}
              >
                <span>Define your schema</span>
              </Step>
              <Step
                active={this.state.activeStep === 1}
                onClick={() => this.setState({ activeStep: 1 } as State)}
              >
                <span>Manage your data</span>
              </Step>
              <Step
                active={this.state.activeStep === 2}
                onClick={() => this.setState({ activeStep: 2 } as State)}
              >
                <span>Developer-friendly GraphQL API</span>
              </Step>
              <Step
                active={this.state.activeStep === 3}
                onClick={() => this.setState({ activeStep: 3 } as State)}
              >
                <span>Connect your app</span>
              </Step>
            </Steps>
          </HeroImage>
          <HeroText className={cx($p.flex, $p.flexColumn)}>
            <div>
              <Headline className={cx($p.fw3)}>
                Flexible backend platform combining GraphQL + <span className={cx($p.nowrap)}>AWS Lambda</span>
                <BuiltFor className={cx($p.green, $p.nowrap)}>built for frontend developers.</BuiltFor>
              </Headline>
              <Copy className={cx($p.f25, $p.fw3, $p.black50)}>
                {
                  `Setup a production-ready GraphQL backend in 5 minutes. Use any language to implement your business logic. Includes realtime subscriptions, managed database, service integrations and more.` // tslint:disable-line
                }
              </Copy>
            </div>
            {(window.innerWidth >= breakpoints.p1200 || window.innerWidth <= breakpoints.p900) &&
              <LandingCallToAction/>
            }
          </HeroText>
        </Hero>
        {breakpoints.p900 < window.innerWidth && window.innerWidth < breakpoints.p1200 &&
          <LandingCallToAction/>
        }
        <div className={cx($p.flex, $p.justifyCenter, $p.flexWrap)}>
          <Logo src={require('../../assets/graphics/logos/react.svg')} />
          <Logo src={require('../../assets/graphics/logos/angular.svg')} />
          <Logo src={require('../../assets/graphics/logos/relay.svg')} />
          <Logo src={require('../../assets/graphics/logos/apollo.svg')} />
          <Logo src={require('../../assets/graphics/logos/ios.svg')} />
          <Logo src={require('../../assets/graphics/logos/android.svg')} />
          <Logo src={require('../../assets/graphics/logos/serverless.svg')} />
          <Logo src={require('../../assets/graphics/logos/googlecloudfunctions.svg')} />
          <Logo src={require('../../assets/graphics/logos/azurefunctions.svg')} />
        </div>
      </Root>
    )
  }
}
