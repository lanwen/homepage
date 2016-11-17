import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, Icon } from 'graphcool-styles'
import styled from 'styled-components'
import { maxWidth, breakpoints } from '../../utils/constants'
import ServiceStatus from './ServiceStatus'
import LogoBar from './LogoBar'

const Root = styled.footer`
  padding: 0 ${$v.size38} ${$v.size96};
  font-size: ${$v.size14};
  
  @media (min-width: ${breakpoints.p1000}px) {
    font-size: ${$v.size16}
  }
  
  @media (min-width: ${breakpoints.p1360}px) {
    padding: 0 ${$v.size96} ${$v.size96};
  }
`

const Container = styled.div`
  max-width: ${maxWidth}px;
  padding-top: ${$v.size60}; 
  margin-bottom: ${$v.size96};
`

const Column = styled.div`
  flex: 0 0 auto;
`

const MissionColumn = styled(Column)`
  width: 30%;
  @media (min-width: ${breakpoints.p750}px) {
    width: 25%;
  }
  
  @media (min-width: ${breakpoints.p1360}px) {
    width: 20%;
  }
`

const SocialColumn = styled(Column)`
  width: 175px;
  
  @media (min-width: ${breakpoints.p1000}px) {
    width: 201px;
  }
`

const LogoFlag = styled.div`
  top: -3px;
  width: 35px;
  height: 35px;
`

const Headline = styled.h4`
  font-size: inherit;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${$v.white30};
  line-height: 1;
  height: ${parseFloat($v.size25) + parseFloat($v.size10)}px;
  
  @media (min-width: ${breakpoints.p1000}px) {
    height: ${parseFloat($v.size38) + parseFloat($v.size10)}px;
  }

`

const List = styled.ul`
  list-style-type: none;
  
  li {
    margin-bottom: ${$v.size10}; 
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`

const SocialLinks = styled.div`
  margin-bottom: ${$v.size25};
  
  @media (min-width: ${breakpoints.p1000}px) {
    margin-bottom: ${$v.size38};
  }
`

const SocialLink = styled.a`
  text-decoration: none;
  opacity: .5;
  margin-right: ${$v.size16};
  transition: opacity ${$v.duration} linear;
  
  &:last-child {
    margin-right: 0;
  }
  
  &:hover {
    opacity: .7;
  }
  
  img {
    height: 26px;
    width: auto;
  }
  
  @media (min-width: ${breakpoints.p1000}px) {
    img {
      height: 31px;
    }
  }

`

const NewsletterInput = styled.input`
  font-size: ${$v.size14};
    
  @media (min-width: ${breakpoints.p1000}px) {
    font-size: ${$v.size16}
  }
`

export default class Footer extends React.Component<{}, {}> {

  render() {
    return (
      <Root className={cx($p.bgDarkBlue, $p.white70)}>
        <Container className={cx($p.relative, $p.center, $p.flex, $p.justifyBetween)}>
          <LogoFlag
            className={cx($p.absolute, $p.left0, $p.bgGreen, $p.br2, $p.flex, $p.itemsCenter, $p.justifyCenter)}
          >
            <Icon src={require('../../assets/icons/graphcool.svg')} width={18} height={21} color={$v.white}/>
          </LogoFlag>

          <MissionColumn>
            {window.innerWidth < breakpoints.p1360 &&
              <div>
                <Headline className={cx($p.pb16)}>
                  Service Status
                  <div className={cx($p.f12, $p.mt4)}>Last 30 days</div>
                </Headline>
                <div>
                  <ServiceStatus />
                  <ServiceStatus />
                </div>
              </div>
            }
            <Headline className={cx(window.innerWidth < breakpoints.p1360 ? $p.mt38 : '')}>Our Mission</Headline>
            <p>
              {
                `It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast at both ends.` // tslint:disable-line
              }
            </p>
          </MissionColumn>

          {window.innerWidth >= breakpoints.p1360 &&
          <Column>
            <Headline>
              Service Status
              <div className={cx($p.f12, $p.mt4)}>Last 30 days</div>
            </Headline>
            <div>
              <ServiceStatus />
              <ServiceStatus />
            </div>
          </Column>
          }

          <Column>
            <Headline>Product</Headline>
            <List>
              <li><a href=''>Getting Started</a></li>
              <li><a href=''>Examples</a></li>
              <li><a href=''>Pricing</a></li>
              <li><a href=''>FAQ</a></li>
            </List>
            {window.innerWidth < breakpoints.p1000 &&
            <div>
              <Headline className={cx($p.mt38)}>Docs</Headline>
              <List>
                <li><a href=''>Guides</a></li>
                <li><a href=''>Platform</a></li>
                <li><a href=''>Simple API</a></li>
                <li><a href=''>Relay API</a></li>
              </List>
            </div>
            }
          </Column>

          {window.innerWidth >= breakpoints.p1000 &&
          <Column>
            <Headline>Docs</Headline>
            <List>
              <li><a href=''>Guides</a></li>
              <li><a href=''>Platform</a></li>
              <li><a href=''>Simple API</a></li>
              <li><a href=''>Relay API</a></li>
            </List>
          </Column>
          }

          {window.innerWidth >= breakpoints.p750 &&
          <Column>
            <Headline>Company</Headline>
            <List>
              <li><a href=''>About</a></li>
              <li><a href=''>Jobs</a></li>
              <li><a href=''>Blog</a></li>
              <li><a href=''>Open Source</a></li>
              <li><a href=''>Imprint</a></li>
            </List>
          </Column>
          }

          <SocialColumn>
            {window.innerWidth < breakpoints.p750 &&
            <div>
              <Headline>Company</Headline>
              <List>
                <li><a href=''>About</a></li>
                <li><a href=''>Jobs</a></li>
                <li><a href=''>Blog</a></li>
                <li><a href=''>Open Source</a></li>
                <li><a href=''>Imprint</a></li>
              </List>
            </div>
            }
            <Headline className={cx(window.innerWidth < breakpoints.p750 ? $p.mt38 : '')}>Stay in touch</Headline>
            <SocialLinks className={cx($p.flex)}>
              <SocialLink href=''><img src={require('../../assets/graphics/logos/twitter.svg')}/></SocialLink>
              <SocialLink href=''><img src={require('../../assets/graphics/logos/github.svg')}/></SocialLink>
              <SocialLink href=''><img src={require('../../assets/graphics/logos/facebook.svg')}/></SocialLink>
              <SocialLink href=''><img src={require('../../assets/graphics/logos/youtube.svg')}/></SocialLink>
            </SocialLinks>
            <p>Sign up for our monthly newsletter</p>
            <NewsletterInput
              type='text'
              className={cx($p.mt16, $p.w100, $p.pa16, $p.lhSolid, $p.br2, $p.bgDarkerBlue, $p.white, $p.bbox)}
              placeholder='Just type your Email...'
            />
          </SocialColumn>

        </Container>
        <LogoBar white/>
      </Root>
    )
  }
}
