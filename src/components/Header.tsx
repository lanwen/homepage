import * as React from 'react'
import * as cx from 'classnames'
import { Link } from 'react-router'
import { $p, $g, Icon, $v } from 'graphcool-styles'
import styled from 'styled-components'
import {breakpoints, maxWidth} from '../utils/constants'
import * as cookiestore from 'cookiestore'

const Root = styled.div`
  padding: ${$v.size38};
  max-width: ${maxWidth}px;
  
  @media (min-width: ${breakpoints.p1200}px) {
    padding: ${$v.size60};
  }
  @media (max-width: ${breakpoints.p400}px) {
    padding: ${$v.size25};
  }
`

const Logo = styled.img`
  height: 36px;
  width: auto;
  
  @media (min-width: ${breakpoints.p900}px) {
    height: 41px;
  }
`

const NavOpened = `
  @media (max-width: ${breakpoints.p750}px) {
    display: flex;
  }
`
const Nav = styled.nav`
  font-size: ${$v.size14};
  z-index: 1000;
  
  @media (max-width: ${breakpoints.p750}px) {
    display: none;
    position: absolute;
    right: 22px;
    top: 22px;
    background: ${$v.white};
    flex-direction: column;
    align-items: flex-start;
    padding: ${$v.size16};
    border-radius: 2px;
    box-shadow: 0 1px 10px 0 rgba(0,0,0,0.15)
  }
  
  @media (max-width: ${breakpoints.p400}px) {
    right: 9px;
    top: 9px;
  }
  
  @media (min-width: ${breakpoints.p900}px) {
    font-size: ${$v.size16};
  }
  
  ${props => props.opened && NavOpened}
`

const SplitLink = ({ to, children, className }: {to: string, children: JSX.Element, className: string}) => (
  to.startsWith('http')
    ? <a href={to} className={className}>{children}</a>
    : <Link to={to} className={className}>{children}</Link>
)

const NavLinkBase = `
  color: ${$v.gray30};
  margin-right: ${$v.size25};
  cursor: pointer;
  line-height: 1;
  transition: color ${$v.duration} linear;
  text-decoration: none;

  &:hover {
    color: ${$v.gray50};
  }
  
  @media (min-width: ${breakpoints.p900}px) {
    margin-right: ${$v.size38};
  }
  
  @media (max-width: ${breakpoints.p750}px) {
    padding: ${$v.size10};
  }
`

const NavLink = styled(SplitLink)`
  ${NavLinkBase}
`

const TwoRowLink = styled(NavLink)`
  line-height: 1.3;
`

const MultiNavLink = styled.button`
  ${NavLinkBase}
  position: relative;
  background: none;
  text-transform: inherit;
  letter-spacing: inherit;
  font-size: inherit;
  font-weight: inherit;
  padding: ${$v.size10} 0;
  cursor: default;
`

const NavTooltip = styled.span`
  top: 35px;
  left: 50%;
  white-space: initial;
  overflow: visible;
  width: 225px;
  transform: translate(-50%, 0);
  font-size: ${$v.size16};
  
  @media (min-width: ${breakpoints.p900}px) {
    font-size: ${$v.size20};
    width: 270px;
  }
  
  &:before {
    content: "";
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translate(-50%,0);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 6px 6px 6px;
    border-color: transparent transparent ${$v.white} transparent;
  }
`

const Signin = styled.div`
  @media (max-width: ${breakpoints.p750}px) {
    padding-top: ${$v.size16};
    display: flex;
  }
`

const Button = styled.a`
  font-size: ${$v.size14} !important;
  text-decoration: none;
  
  @media (min-width: ${breakpoints.p900}px) {
    font-size: ${$v.size16} !important;
  }
`

const Hamburger = styled.div`
  position: absolute;
  cursor: pointer;
  top: ${$v.size38};
  right: ${$v.size38};
  
  @media (max-width: ${breakpoints.p400}px) {
    top: ${$v.size25}
    right: ${$v.size25}
  }
`

const Close = styled.div`
  position: absolute;
  top: ${$v.size16};
  right: ${$v.size16};
  width: 36px;
  height: 36px;
  opacity: .2;
  cursor: pointer;
  transition: opacity ${$v.duration} linear;
  
  &:hover {
    opacity: .4;
  }
  
  &:before, &:after {
    content: "";
    position: absolute;
    background: ${$v.black};
    left: 50%;
    top: 50%;
    width: 80%;
    height: 2px;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  
  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`

const FeatureLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: none;
  letter-spacing: 0;
  font-weight: 400;
  color: ${$v.gray50};
  padding: ${$v.size16} ${$v.size16} ${$v.size06};
  
  &:last-child {
    padding: ${$v.size06} ${$v.size16} ${$v.size16};
  }
  
  @media (min-width: ${breakpoints.p900}px) {
    padding: ${$v.size20} ${$v.size20} ${$v.size10};

    &:last-child {
      padding: ${$v.size10} ${$v.size20} ${$v.size20};
    }
  }
  
`

const FeatureIconContainer = styled.div`
  position: relative;
  margin-right: ${$v.size10};
  
  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${$v.size20};
    height: ${$v.size20};
    border-radius: 500px;    
  }
`

const GraphQLBackendIconContainer = styled(FeatureIconContainer)`
  &:before {
    background: ${$v.purple20};
  }
`

const FunctionsIconContainer = styled(FeatureIconContainer)`
  &:before {
    background: ${$v.lightOrange20};
  }
`

interface State {
  menuOpened: boolean,
  tooltipActive: boolean,
}

export default class Header extends React.Component<{}, State> {

  state: State = {
    menuOpened: false,
    tooltipActive: false,
  }

  render() {
    const loggedIn = cookiestore.has('graphcool_auth_token')

    return (
      <Root className={cx($p.flex, $p.itemsCenter, $p.justifyBetween, $p.center)}>
        <Link to='/'>
          <Logo src={require('../assets/graphics/logos/graphcoolFull.svg')}/>
        </Link>
        {window.innerWidth < breakpoints.p750 &&
          <Hamburger onClick={() => this.setState({ menuOpened: true } as State)}>
            <Icon src={require('../assets/icons/hamburger.svg')} width={36} height={36} color={$v.gray20}/>
          </Hamburger>
        }
        <Nav
          className={cx($p.fw6, $p.black30, $p.tracked, $p.ttu, $p.flex, $p.itemsCenter)}
          opened={this.state.menuOpened}
        >
          {window.innerWidth < breakpoints.p750 &&
            <Close onClick={() => this.setState({ menuOpened: false } as State)} />
          }
          {window.innerWidth >= breakpoints.p750 &&
            <MultiNavLink
              onMouseEnter={() => this.setState({ tooltipActive: true } as State)}
              onMouseLeave={() => this.setState({ tooltipActive: false } as State)}
            >
              Features
              {this.state.tooltipActive &&
              <NavTooltip className={cx($g.overlay, $p.absolute)}>
                <FeatureLink to='/graphql'>
                  <GraphQLBackendIconContainer>
                    <Icon
                      src={require('../assets/icons/graphqlBackendLogo.svg')}
                      height={25}
                      width={25}
                      color={$v.purple}
                    />
                  </GraphQLBackendIconContainer>
                  <span className={cx($p.flexFixed)}>GraphQL Backend</span>
                </FeatureLink>
                <FeatureLink to='/functions'>
                  <FunctionsIconContainer>
                    <Icon
                      src={require('../assets/icons/functionsLogo.svg')}
                      height={25}
                      width={25}
                      color={$v.lightOrange}
                    />
                  </FunctionsIconContainer>
                  <span className={cx($p.flexFixed)}>Serverless Functions</span>
                </FeatureLink>
              </NavTooltip>
              }
            </MultiNavLink>
          }
          {window.innerWidth < breakpoints.p750 &&
            <TwoRowLink to='/graphql'>GraphQL<br/>Backend</TwoRowLink>
          }
          {window.innerWidth < breakpoints.p750 &&
            <TwoRowLink to='/functions'>Serverless<br/>Functions</TwoRowLink>
          }
          <NavLink to='/pricing'>Pricing</NavLink>
          <NavLink to='/docs'>Docs</NavLink>
          {loggedIn ? (
            <Signin>
              <Button
                href='https://console.graph.cool'
                className={cx($g.uppercaseButton, $p.bgGreen, $p.white)}
              >
                Go to Console
              </Button>
            </Signin>
          ) : (
            <Signin>
              <Button
                href='https://console.graph.cool/login'
                className={cx($g.uppercaseButton, $p.bgLightgreen20, $p.green, $p.mr10)}
              >
                Log in
              </Button>
              <Button
                href='https://console.graph.cool/signup'
                className={cx($g.uppercaseButton, $p.bgGreen, $p.white)}
              >
                Sign up
              </Button>
            </Signin>
          )}
        </Nav>
      </Root>
    )
  }
}
