import * as React from 'react'
import * as cx from 'classnames'
import { $p, $g, Icon, $v } from 'graphcool-styles'
import styled from 'styled-components'

const bp1 = '600px'
const bp2 = '900px'
const bp3 = '1200px'

const Header = styled.div`
  padding: ${$v.size38};
  max-width: 1440px;
  
  @media (min-width: ${bp3}) {
    padding: ${$v.size60};
  }
`

const Logo = styled.img`
  height: 36px;
  width: auto;
  
  @media (min-width: ${bp2}) {
    height: 41px;
  }
`

const Nav = styled.nav`
  font-size: ${$v.size14};
  
  @media (max-width: ${bp1}) {
    display: none;
  }
  
  @media (min-width: ${bp2}) {
    font-size: ${$v.size16};
  }
`

const NavPoint = styled.div`
  color: ${$v.gray30};
  margin-right: ${$v.size25};
  cursor: pointer;
  transition: color ${$v.duration} linear;

  &:hover {
    color: ${$v.gray50};
  }
  
  @media (min-width: ${bp2}) {
    margin-right: ${$v.size38};
  }
`

const Button = styled.button`
  font-size: ${$v.size14} !important;
  
  @media (min-width: ${bp2}) {
    font-size: ${$v.size16} !important;
  }
`

export default class Navbar extends React.Component<{}, {}> {

  render() {
    return (
      <Header className={cx($p.bgWhite, $p.flex, $p.itemsCenter, $p.justifyBetween, $p.center)}>
        <Logo src={require('../../assets/graphics/graphcool.svg')}/>
        <Nav className={cx($p.fw6, $p.black30, $p.tracked, $p.ttu, $p.flex, $p.itemsCenter)}>
          <NavPoint>Docs</NavPoint>
          <NavPoint>FAQ</NavPoint>
          <NavPoint>Pricing</NavPoint>
          <NavPoint>About</NavPoint>
          <div>
            <Button className={cx($g.uppercaseButton, $p.bgLightgreen20, $p.green, $p.mr10)}>Log in</Button>
            <Button className={cx($g.uppercaseButton, $p.bgGreen, $p.white)}>Sign up</Button>
          </div>
        </Nav>
      </Header>
    )
  }
}