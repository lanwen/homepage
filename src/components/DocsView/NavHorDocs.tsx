import * as React from 'react'
import * as cx from 'classnames'
import { Link } from 'react-router'
import { $p, $g, Icon, $v } from 'graphcool-styles'
import styled from 'styled-components'
import {breakpoints, maxWidth} from '../../utils/constants'

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

const NavLink = styled(Link)`
  color: ${$v.gray30};
  margin-right: ${$v.size25};
  cursor: pointer;
  line-height: 1;
  transition: color ${$v.duration} linear;
  text-decoration: none;

  &:hover {
    color: ${$v.gray50};
  }
  @media (max-width: ${breakpoints.p1440}px) {
    color: lila;
  }
  @media (max-width: ${breakpoints.p1360}px) {
    color: pink;
  }
  @media (max-width: ${breakpoints.p1250}px) {
    color: green;
  }
  @media (max-width: ${breakpoints.p1200}px) {
    color: orange;
    }
  @media (max-width: ${breakpoints.p1000}px) {
    padding: ${$v.size10};
    color: red;
  }
  @media (max-width: ${breakpoints.p900}px) {
    margin-right: ${$v.size38};
    color: blue;
  }
  @media (max-width: ${breakpoints.p750}px) {
    padding: ${$v.size10};
    color: yellow;
  }
   @media (max-width: ${breakpoints.p650}px) {}
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
  const Searchbox = styled.input`
    width: 300px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 2px;
    font-size: 16px;
    background-color: #fff;
    background-image: url(require('../../assets/graphics/Lupa.png'));
    background-position: 10px 10px; 
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    margin-right: ${$v.size60};
    
      @media (max-width: ${breakpoints.p1440}px) {
        margin-right: 0;
        width: 220px;
      }
  `

interface State {
  menuOpened: boolean
}

export default class NavHorDocs extends React.Component<{}, State> {

  state: State = {
    menuOpened: false,
  }

  render() {
    return (
      <Root className={cx($p.bgWhite, $p.flex, $p.itemsCenter, $p.justifyBetween, $p.center)}>
        {window.innerWidth < breakpoints.p750 &&
          <Hamburger onClick={() => this.setState({ menuOpened: true } as State)}>
            <Icon src={require('../../assets/icons/hamburger.svg')} width={36} height={36} color={$v.gray20}/>
          </Hamburger>
        }
        <Nav
          className={cx($p.fw6, $p.black30, $p.tracked, $p.ttu, $p.flex, $p.itemsCenter)}
          opened={this.state.menuOpened}
        >
          {window.innerWidth < breakpoints.p750 &&
            <Close onClick={() => this.setState({ menuOpened: false } as State)} />
          }
            <NavLink>
              <form>
               <Searchbox type='text' name='search' placeholder='Search..'/>
              </form>
            </NavLink>
            <NavLink>QUICKSTART</NavLink>
            <NavLink>RESOURCES</NavLink>
            <NavLink>REFERENCE</NavLink>
            <NavLink>BLOG</NavLink>
            <NavLink>Comunity</NavLink>
            <NavLink>
              <img src={require('../../assets/graphics/APIEndpoints.png')}/>
            </NavLink>
        </Nav>
      </Root>
    )
  }
}
