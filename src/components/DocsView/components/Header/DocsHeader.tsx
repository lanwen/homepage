import * as React from 'react'
import * as cx from 'classnames'
import { Link } from 'react-router'
import { $p, Icon, $v, $g } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../../../utils/constants'
import ResourcesHover from './ResourcesHover'
import EndpointPopup from './EndpointPopup'
import Search from './Search'
import * as cookiestore from 'cookiestore'
import { excludeProps } from '../../../../utils/components'

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1332px;
  z-index: 10;
  
  @media (max-width: ${breakpoints.p1000}px) {
    padding-top: ${$v.size25}
  }
`

const Button = styled.a`
  font-size: ${$v.size14} !important;
  text-decoration: none;
  
  @media (min-width: ${breakpoints.p900}px) {
    font-size: ${$v.size16} !important;
  }
`

const NavigationLinkActive = `
  &:before {
    content: "";
    position: absolute;
    top: calc(-${$v.size38} - ${$v.size10} - 6px);
    border: 6px solid ${$v.green};
    border-radius: 2px;
    height: 0px;
    left: -5px;
    right: -6px;
  }
  
  @media (max-width: ${breakpoints.p1000}px) {
    display: none;
  }
`

const NavigationLinkQuickstartActive = `
  &:before {
    left: -5px;
    width: calc(100%);
    right: -7px;
  }
`

const NavigationLink = styled(excludeProps(Link, ['active', 'quickstart']))`
  transition: color ${$v.duration} linear;
  margin-right: 23px;

  &:hover {
    color: ${$v.gray50};
  }
  
  ${props => props.active && NavigationLinkActive}
  ${props => props.quickstart && NavigationLinkQuickstartActive}
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

const HoverGreen = styled.a`
  transition: .3s all;
  &:hover {
    color: ${$v.green} !important;
  }
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
  
  &:hover + div {
    &>.search-input {
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

const Links = styled.div`  
  @media (max-width: ${breakpoints.p1200}px) {
  }
`

const Container = styled.div`
  padding-left: 51px;
  padding-right: 58px;
  @media (max-width: ${breakpoints.p1200}px) {
    padding: 0 25px;
  }
`

const RightNav = styled.div`
  @media (max-width: ${breakpoints.p1200}px) {
    right: 0;
  }
`

interface State {
  menuOpened: boolean
  endpointPopupOpened: boolean
}

export default class DocsHeader extends React.Component<{}, State> {

  state: State = {
    menuOpened: false,
    endpointPopupOpened: false,
  }

  render() {

    const loggedIn = cookiestore.has('graphcool_auth_token')

    const links = (
      <Links
        className={cx(
          $p.flex,
          window.innerWidth < breakpoints.p1000 ? $p.flexColumn : $p.flexRow,
          window.innerWidth < breakpoints.p1000 && $p.mb10,
          window.innerWidth > breakpoints.p1000 && $p.mr10,
          $p.mlAuto,
        )}
        onClick={this.closeMenu}
      >
        <NavigationLink
          quickstart={true}
          className={cx(
            $p.mt10,
            $p.fw6,
            $p.noUnderline,
            $p.ttu,
            $p.black30,
            $p.relative,
            window.innerWidth >= breakpoints.p1000 && $p.ph6,
          )}
          to='/docs/quickstart'
          active={location.pathname.startsWith('/docs/quickstart')}
        >
          Quickstart
        </NavigationLink>
        <ResourcesHover />
        <NavigationLink
          className={cx(
            $p.mt10,
            $p.fw6,
            $p.noUnderline,
            $p.ttu,
            $p.black30,
            $p.relative,
            window.innerWidth >= breakpoints.p1000 && $p.ph6,
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
            $p.relative,
            window.innerWidth >= breakpoints.p1000 && $p.ph6,
          )}
          to='/blog'
          active={location.pathname.startsWith('/blog')}
        >
          Blog
        </NavigationLink>
      </Links>
    )

    const logo = (
      <LogoLink className={cx($p.flex, $p.itemsCenter, $p.overflowHidden)}>
        <Link to='/docs' className={cx($p.noUnderline, $p.flex, $p.flexRow, $p.itemsCenter)}>
          <img className={cx()} src={require('../../../../assets/graphics/logos/graphcool.svg')}/>
          <div className={cx($p.f20, $p.fw4, $p.lightgreen50, $p.ttu, $p.ml16)}>
            Docs
          </div>
        </Link>
        <div className={cx($p.f20, $p.ttc, $p.fw4, $p.lightgreen50, $p.ml16)}>
          <HoverGreen
            className={cx($p.noUnderline, $p.mr16)}
            href='https://console.graph.cool'
            target='_blank'
          >
            Console
          </HoverGreen>
          <HoverGreen
            className={cx($p.noUnderline, $p.mr25)}
            href='/'
          >
            Homepage
          </HoverGreen>
        </div>
      </LogoLink>
    )

    const endpoints = (
      loggedIn ? (
          <RightNav className={cx($p.mt6, $p.pointer)}>
            <div className={cx($p.relative)}>
              <div
                className={cx(
                  $p.flex,
                  $p.bgLightgreen20,
                  $p.green,
                  $p.f16,
                  $p.fw6,
                  $p.ttu,
                  $p.br2,
                  $p.pv6,
                  $p.ph10,
                )}
                onClick={() => {
                  this.openEndpointPopup()
                  this.closeMenu()
                }}
              >
                <img
                  src={require('../../../../assets/graphics/docs/share.svg')}
                />
                <div className={cx($p.ml10)}>Api Endpoints</div>
              </div>
            </div>
          </RightNav>
        ) : (
          <RightNav className={cx($p.mt10, $p.bgWhite)}>
            <div className={cx($p.relative, 'left-gradient')}>
              <Button
                href='https://console.graph.cool'
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
            </div>
          </RightNav>
        )
    )

    const WideHeader = () => (
      <Root
        className={cx(
          $p.flex, $p.pv38, $p.justifyStart, $p.relative, $p.mlAuto, $p.mrAuto,
        )}
      >
        {logo}
        <Search className={$p.ml16}/>
        {links}
        {endpoints}
      </Root>
    )

    const NarrowHeader = () => {

      return (
        <Root className={cx($p.flex, $p.pv38)}>
          {logo}
          {this.state.menuOpened ? (
              <FirstUlStyle className={cx(
                window.innerWidth > breakpoints.p500 && $p.pa60,
                window.innerWidth < breakpoints.p500 && $p.pv38,
                window.innerWidth < breakpoints.p500 && $p.pl16,
                window.innerWidth < breakpoints.p500 && $p.pr60,
                $p.bgWhite90,
                $p.z1,
              )}>
                <Close onClick={() => this.setState({ menuOpened: !this.state.menuOpened } as State)}/>
                <NavigationLink>
                  <Search
                    className={cx(
                      $p.pb16,
                      window.innerWidth < breakpoints.p500 && $p.mr6,
                      window.innerWidth < breakpoints.p500 && $p.ml16,
                      window.innerWidth > breakpoints.p500 && $p.mh16,
                    )}/>
                </NavigationLink>
                {links}
                {endpoints}
              </FirstUlStyle>
            ) : (
              <Hamburger>
                <Icon
                  onClick={() => this.setState({ menuOpened: !this.state.menuOpened } as State)}
                  src={require('../../../../assets/icons/hamburger.svg')}
                  width={36}
                  height={36}
                  color={$v.gray20}
                />
              </Hamburger>
            )}
        </Root>)
    }

    return (
      <Container
        className={cx(
          $p.absolute, $p.top0, $p.right0, $p.left0,
        )}
      >
        {window.innerWidth > breakpoints.p1000 ? WideHeader() : NarrowHeader()}
        {loggedIn && (
          <EndpointPopup
            isOpen={this.state.endpointPopupOpened}
            onRequestClose={this.closeEndpointPopup}
          />
        )}
      </Container>
    )
  }

  private closeMenu = () => {
    this.setState({menuOpened: false} as State)
  }

  private openEndpointPopup = () => {
    this.setState({endpointPopupOpened: true} as State)
  }

  private closeEndpointPopup = () => {
    this.setState({endpointPopupOpened: false} as State)
  }
}
