import * as React from 'react'
import * as cx from 'classnames'
import { Link } from 'react-router'
import { $p, Icon, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../../../utils/constants'
import ResourcesHover from './ResourcesHover'

const Root = styled.div`
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  
  @media (max-width: ${breakpoints.p1200}px) {
    padding-top: ${$v.size25}
  }
`

const NavigationLinkActive = `
  &:before {
    content: "";
    position: absolute;
    top: calc(-${$v.size38} - ${$v.size10} - 6px);
    left: 0;
    border: 6px solid ${$v.green};
    border-radius: 2px;
    width: 100%;
    height: 0px;
  }
`

const NavigationLink = styled(Link)`
  transition: color ${$v.duration} linear;
  position: relative;

  &:hover {
    color: ${$v.gray50};
  }
  
  ${props => props.active && NavigationLinkActive}
`

const Searchbox = styled.input`
  width: 300px;
  box-sizing: border-box;
  box-shadow:0 8px 18px rgba(0, 0, 0, 0.1), 0 -8px 18px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  font-size: 16px;
  background-color: #fff;
  background-image: url(${require('../../../../assets/graphics/Lupa.png')});
  background-position: 10px 15px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  
  @media (max-width: ${breakpoints.p1360}px) {
    width: 250px;
  }
`

const Hamburger = styled.div`
  position: absolute;
  cursor: pointer;
  top: ${$v.size38};
  right: ${$v.size38};
`

const FirstUlStyle = styled.div`
  background-color: #fff;
  margin: -${$v.size10} ${$v.size16} ${$v.size38} ${$v.size16};
  box-shadow:0 8px 18px rgba(0, 0, 0, 0.1),
  0 -8px 18px rgba(0, 0, 0, 0.1);
  position: absolute;
  cursor: pointer;
  top: ${$v.size38};
  right: ${$v.size10};

  .border {
    border-left: solid 3px rgba(28, 191, 50, 0.2);
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
    const links = (
      <div className={cx($p.flex, window.innerWidth < breakpoints.p1200 ? $p.flexColumn : $p.flexRow)}>
        <NavigationLink
          className={cx($p.ph16, $p.mt10, $p.fw6, $p.noUnderline, $p.ttu, $p.black30)}
          to='/docs/quickstart'
          active={location.pathname.startsWith('/docs/quickstart')}
        >
          Quickstart
        </NavigationLink>
        <ResourcesHover active={false}/>
        <NavigationLink
          className={cx($p.ph16, $p.mt10, $p.fw6, $p.noUnderline, $p.ttu, $p.black30)}
          to='/docs/reference'
          active={location.pathname.startsWith('/docs/reference')}
        >
          Reference
        </NavigationLink>
        <NavigationLink
          className={cx($p.ph16, $p.mt10, $p.fw6, $p.noUnderline, $p.ttu, $p.black30)}
          to='/docs/blog'
          active={location.pathname.startsWith('/docs/blog')}
        >
          Blog
        </NavigationLink>
        <NavigationLink
          className={cx($p.ph16, $p.mt10, $p.fw6, $p.noUnderline, $p.ttu, $p.black30)}
          to='/docs/community'
          active={location.pathname.startsWith('/docs/community')}
        >
          Community
        </NavigationLink>
      </div>
    )

    const WideHeader = () => (
      <Root className={cx($p.flex, $p.pv38)}>
        <Link to='/'>
          <img className={cx()} src={require('../../../../assets/graphics/logos/DockLogo.svg')}/>
        </Link>
        <Searchbox type='text' name='search' placeholder='Search..'/>
        {links}
        <div className={cx($p.mt4)}>
          <img className={cx($p.bbox, $p.db)} src={require('../../../../assets/graphics/APIendpoints.svg')}/>
        </div>
      </Root>
    )

    const NarrowHeader = () => (
      <Root className={cx($p.flex, $p.pv38)}>
        <Link to='/'>
          <img className={cx()} src={require('../../../../assets/graphics/logos/DockLogo.svg')}/>
        </Link>
        <Hamburger>
          {!this.state.menuOpened &&
          <Icon
            onClick={() => this.setState({ menuOpened: !this.state.menuOpened } as State)}
            src={require('../../../../assets/icons/hamburger.svg')}
            width={36}
            height={36}
            color={$v.gray20}
          />
          }
        </Hamburger>
        {this.state.menuOpened &&
        <FirstUlStyle className={cx($p.pa60, $p.bgWhite90, $p.z1)}>
          <Close onClick={() => this.setState({ menuOpened: !this.state.menuOpened } as State)}/>
          <NavigationLink>
            <form className={cx($p.pl38, $p.pb16)}>
              <Searchbox
                type='text'
                name='search'
                placeholder='Search..'
              />
            </form>
          </NavigationLink>
          {links}
          <NavigationLink className={cx($p.mt16)}>
            <img className={cx($p.bbox, $p.db)} src={require('../../../../assets/graphics/APIendpoints.svg')}/>
          </NavigationLink>
        </FirstUlStyle>
        }
      </Root>
    )

    return (
      <div className={cx($p.absolute, $p.top0, $p.right0, $p.left0, $p.ph38)}>
        {window.innerWidth > breakpoints.p1200 ? WideHeader() : NarrowHeader()}
      </div>
    )
  }
}
