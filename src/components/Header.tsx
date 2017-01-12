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
    box-shadow: 0 1px 10px 0 rgba(0,0,0,0.15);
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

const NavLink = styled(SplitLink)`
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

interface State {
  menuOpened: boolean
}

export default class Header extends React.Component<{}, State> {

  state: State = {
    menuOpened: false,
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
          <NavLink to='/docs'>Docs</NavLink>
          <NavLink to='/docs/faq'>FAQ</NavLink>
          <NavLink to='/pricing'>Pricing</NavLink>
          <NavLink to='/about'>About</NavLink>
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
