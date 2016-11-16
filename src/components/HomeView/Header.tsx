import * as React from 'react'
import * as cx from 'classnames'
import { $p, $g, Icon, $v } from 'graphcool-styles'
import styled from 'styled-components'
import {breakpoints, maxWidth} from '../../utils/constants'

const Root = styled.div`
  padding: ${$v.size38};
  max-width: ${maxWidth}px;
  
  @media (min-width: ${breakpoints.p4}px) {
    padding: ${$v.size60};
  }
  @media (max-width: ${breakpoints.p1}px) {
    padding: ${$v.size25};
  }
`

const Logo = styled.img`
  height: 36px;
  width: auto;
  
  @media (min-width: ${breakpoints.p3}px) {
    height: 41px;
  }
`

const NavOpened = `
  @media (max-width: ${breakpoints.p2}px) {
    display: block !important;
  }
`
const Nav = styled.nav`
  font-size: ${$v.size14};
  
  @media (max-width: ${breakpoints.p2}px) {
    display: none !important;
    position: absolute;
    right: 22px;
    top: 22px;
    background: ${$v.white};
    flex-direction: column;
    align-items: flex-start !important;
    padding: ${$v.size16};
    border-radius: 2px;
    box-shadow: 0 1px 6px 0 rgba(0,0,0,0.15);
  }
  
  @media (max-width: ${breakpoints.p1}px) {
    right: 9px;
    top: 9px;
  }
  
  @media (min-width: ${breakpoints.p3}px) {
    font-size: ${$v.size16};
  }
  
  ${props => props.opened && NavOpened}
`

const NavPoint = styled.div`
  color: ${$v.gray30};
  margin-right: ${$v.size25};
  cursor: pointer;
  line-height: 1;
  transition: color ${$v.duration} linear;

  &:hover {
    color: ${$v.gray50};
  }
  
  @media (min-width: ${breakpoints.p3}px) {
    margin-right: ${$v.size38};
  }
  
  @media (max-width: ${breakpoints.p2}px) {
    padding: ${$v.size10};
  }
`

const Signin = styled.div`
  @media (max-width: ${breakpoints.p2}px) {
    padding-top: ${$v.size16};
  }
`

const Button = styled.button`
  font-size: ${$v.size14} !important;
  
  @media (min-width: ${breakpoints.p3}px) {
    font-size: ${$v.size16} !important;
  }
`

const Hamburger = styled.div`
  position: absolute;
  cursor: pointer;
  top: ${$v.size38};
  right: ${$v.size38};
  
  @media (max-width: ${breakpoints.p1}px) {
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
    return (
      <Root className={cx($p.bgWhite, $p.flex, $p.itemsCenter, $p.justifyBetween, $p.center)}>
        <Logo src={require('../../assets/graphics/graphcool.svg')}/>
        {window.innerWidth < breakpoints.p2 &&
          <Hamburger onClick={() => this.setState({ menuOpened: true } as State)}>
            <Icon src={require('../../assets/icons/hamburger.svg')} width={36} height={36} color={$v.gray20}/>
          </Hamburger>
        }
        <Nav
          className={cx($p.fw6, $p.black30, $p.tracked, $p.ttu, $p.flex, $p.itemsCenter)}
          opened={this.state.menuOpened}
        >
          {window.innerWidth < breakpoints.p2 &&
            <Close onClick={() => this.setState({ menuOpened: false } as State)} />
          }
          <NavPoint>Docs</NavPoint>
          <NavPoint>FAQ</NavPoint>
          <NavPoint>Pricing</NavPoint>
          <NavPoint>About</NavPoint>
          <Signin>
            <Button className={cx($g.uppercaseButton, $p.bgLightgreen20, $p.green, $p.mr10)}>Log in</Button>
            <Button className={cx($g.uppercaseButton, $p.bgGreen, $p.white)}>Sign up</Button>
          </Signin>
        </Nav>
      </Root>
    )
  }
}
