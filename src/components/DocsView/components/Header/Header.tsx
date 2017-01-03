import * as React from 'react'
import * as cx from 'classnames'
import { Link } from 'react-router'
import { $p, Icon, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../../../utils/constants'
import ResourcesHover from './ResourcesHover'
import GoToConsole from './GoToConsole'

const Root = styled.div`
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  width: 1337px;
  
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
  box-shadow: 0 1px 3px rgba(0,0,0,.15);
  border-radius: 2px;
  font-size: 16px;
  background-color: #fff;
  padding: 12px 20px 12px 46px;
  transition: all .3s;
  @media (max-width: ${breakpoints.p1360}px) {
    width: 250px;
  }
  
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    transition: .3s white;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    transition: .3s white;
  }
  :-ms-input-placeholder { /* IE 10+ */
    transition: .3s white;
  }
  :-moz-placeholder { /* Firefox 18- */
    transition: .3s white;
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

const SearchIcon = styled(Icon)`
  
`

const LogoLink = styled.div`
  width: 113px;
  transition: .3s all;
  &:hover {
    width: 339px;
    a > div {
      color: ${$v.green} !important;
    }
  }
  
  &:hover + .search {
    input {
      width: 40px;
      padding: 12px 24px;
      ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: white;
      }
      ::-moz-placeholder { /* Firefox 19+ */
        color: white;
      }
      :-ms-input-placeholder { /* IE 10+ */
        color: white;
      }
      :-moz-placeholder { /* Firefox 18- */
        color: white;
      }
    }
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
      <div className={cx(
          $p.flex,
          window.innerWidth < breakpoints.p1200 ? $p.flexColumn : $p.flexRow,
          {
            [$p.mb10]: window.innerWidth < breakpoints.p1200,
          },
        )}>
        <NavigationLink
          className={cx(
            $p.mt10,
            $p.fw6,
            $p.noUnderline,
            $p.ttu,
            $p.black30,
            {
              [$p.ph16]: window.innerWidth >= breakpoints.p1200,
            },
          )}
          to='/docs/quickstart'
          active={location.pathname.startsWith('/docs/quickstart')}
        >
          Quickstart
        </NavigationLink>
        <ResourcesHover active={false}/>
        <NavigationLink
          className={cx(
            $p.mt10,
            $p.fw6,
            $p.noUnderline,
            $p.ttu,
            $p.black30,
            {
              [$p.ph16]: window.innerWidth >= breakpoints.p1200,
            },
          )}
          to='/docs/reference'
          active={location.pathname.startsWith('/docs/reference')}
        >
          Reference
        </NavigationLink>
        <NavigationLink
          className={cx(
            $p.mt10,
            $p.fw6,
            $p.noUnderline,
            $p.ttu,
            $p.black30,
            {
              [$p.ph16]: window.innerWidth >= breakpoints.p1200,
            },
          )}
          to='/docs/blog'
          active={location.pathname.startsWith('/docs/blog')}
        >
          Blog
        </NavigationLink>
        <NavigationLink
          className={cx(
            $p.mt10,
            $p.fw6,
            $p.noUnderline,
            $p.ttu,
            $p.black30,
            {
              [$p.ph16]: window.innerWidth >= breakpoints.p1200,
            },
          )}
          to='/docs/community'
          active={location.pathname.startsWith('/docs/community')}
        >
          Community
        </NavigationLink>
      </div>
    )

    const WideHeader = () => (
      <Root className={cx($p.flex, $p.pv38)}>
          <LogoLink className={cx($p.flex, $p.itemsCenter, $p.overflowHidden)}>
            <Link to='/' className={cx($p.noUnderline, $p.flex, $p.flexRow, $p.itemsCenter)}>
              <img className={cx()} src={require('../../../../assets/graphics/GraphcoolLogoOnltG.svg')}/>
              <div className={cx($p.f20, $p.fw4, $p.lightgreen50, $p.ttu, $p.ml16)}>
                Docs
              </div>
            </Link>
            <div className={cx($p.f20, $p.ttc, $p.fw4, $p.lightgreen50, $p.ml16)}>
              <a className={cx($p.noUnderline, $p.mr16)} href='https://console.graph.cool' target='_blank'>Console</a>
              <a className={cx($p.noUnderline, $p.mr25)} href='/' target='_blank'>Homepage</a>
            </div>
          </LogoLink>
        <div className={cx('search', $p.relative)}>
          <SearchIcon
            width={16}
            height={16}
            src={require('graphcool-styles/icons/stroke/search.svg')}
            stroke={true}
            color={$v.black}
            strokeWidth={2}
            className={cx($p.absolute, $p.left0, $p.pt16, $p.pl16)}
          />
          <Searchbox type='text' name='search' placeholder='Search..'/>
        </div>
        {links}
        <div className={cx($p.mt4)}>
          <img className={cx($p.bbox, $p.db)} src={require('../../../../assets/graphics/APIendpoints.svg')}/>
        </div>
      </Root>
    )

    const NarrowHeader = () => (
      <Root className={cx($p.flex, $p.pv38)}>
        <LogoLink className={cx($p.flex, $p.itemsCenter, $p.overflowHidden)}>
          <Link to='/' className={cx($p.noUnderline, $p.flex, $p.flexRow, $p.itemsCenter)}>
            <img className={cx()} src={require('../../../../assets/graphics/GraphcoolLogoOnltG.svg')}/>
            <div className={cx($p.f20, $p.fw4, $p.lightgreen50, $p.ttu, $p.ml16)}>
              Docs
            </div>
          </Link>
          <div className={cx($p.f20, $p.ttc, $p.fw4, $p.lightgreen50, $p.ml16)}>
            <a className={cx($p.noUnderline, $p.mr16)} href='https://console.graph.cool' target='_blank'>Console</a>
            <a className={cx($p.noUnderline, $p.mr25)} href='/' target='_blank'>Homepage</a>
          </div>
        </LogoLink>
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
            <form className={cx($p.pb16, $p.relative)}>
              <SearchIcon
                width={16}
                height={16}
                src={require('graphcool-styles/icons/stroke/search.svg')}
                stroke={true}
                color={$v.black}
                strokeWidth={2}
                className={cx($p.absolute, $p.left0, $p.pt16, $p.pl16)}
              />
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
      <div className={cx($p.absolute, $p.top0, $p.right0, $p.left0, $p.ph38, $p.flex, $p.flexRow, $p.justifyCenter)}>
        {window.innerWidth > breakpoints.p1200 ? WideHeader() : NarrowHeader()}
      </div>
    )
  }
}
