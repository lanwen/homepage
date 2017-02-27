import * as React from 'react'
import * as cx from 'classnames'
import { Link } from 'react-router'
import { $p, Icon, $v } from 'graphcool-styles'
import styled from 'styled-components'
import {breakpoints} from '../utils/constants'
import * as cookiestore from 'cookiestore'

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

const ActiveNavLink = `
  color: ${$v.green};
  &:hover {
    color: ${$v.green};
  }
  
  &:before {
    content: "";
  }
`

const NavLink = styled(SplitLink)`
  ${NavLinkBase}
  ${props => props.active && ActiveNavLink}
`

const TwoRowLink = styled(NavLink)`
  line-height: 1.3;
`

interface State {
  menuOpened: boolean,
  tooltipActive: boolean,
  loggedIn: boolean,
}

export default class Header extends React.Component<{}, State> {

  state: State = {
    menuOpened: false,
    tooltipActive: false,
    loggedIn: false,
  }

  componentDidMount() {
    const loggedIn = cookiestore.has('graphcool_auth_token')
    this.setState({
      loggedIn,
    } as State)
  }

  render() {

    return (
      <div className='root'>
        <style jsx={true}>{`
          .root {
            @p: .flex, .itemsCenter, .justifyBetween, .center, .relative;
            max-width: 1440px;

            @media (max-width: 400px) {
              @p: .pa25;
            }

            @media (min-width: 401px) {
              @p: .pa38;
            }

            @media (min-width: 1200px) {
              @p: .pa60;
            }
          }

          .logo {
            @p: .wAuto, .relative;

            @media (max-width: 899px) {
              height: 36px;
            }

            @media (min-width: 900px) {
              height: 41px;
            }
          }

          .nav {
            @p: .fw6, .black30, .tracked, .ttu, .f14, .zMax;

            @media (max-width: 400px) {
              right: 9px;
              top: 9px;
            }

            @media (max-width: 750px) {
              @p: .dn, .absolute, .flexColumn, .itemsStart, .pa16;
              @p: .bgWhite, .br2, .overflowHidden, .overlayShadow, .zMax;
              right: 22px;
              top: 22px;

              &.opened {
                @p: .flex;
              }
            }

            @media (min-width: 751px) {
              @p: .flex, .relative, .itemsCenter;
            }

            @media (min-width: 900px) {
              @p: .f16;
            }
          }

          .hamburger {
            @p: .bgNone, .absolute, .pointer;

            @media (max-width: 400px) {
              @p: .top25, .right25;
            }

            @media (min-width: 401px) {
              @p: .top38, .right38;
            }
          }

          .close {
            @p: .absolute, .top16, .right16, .o20, .pointer, .bgNone;
            width: 36px;
            height: 36px;
            transition: opacity .1s linear;

            &:hover {
              @p: .o40;
            }

            &:before, &:after {
              content: '';
              @p: .absolute, .bgBlack, .left50, .top50, .w80;
              height: 2px;
              transform: translate(-50%, -50%) rotate(45deg);
            }

            &:after {
              transform: translate(-50%, -50%) rotate(-45deg);
            }
          }

          .link {
            @p: .black30, .pointer, .lhSolid, .ttu;
            transition: color .1s linear;

            &:hover {
              @p: .black50;
            }

            @media (max-width: 899px) {
              @p: .mr25;
            }

            @media (min-width: 900px) {
              @p: .mr38;
            }

            @media (max-width: 750px) {
              @p: .pa10;
            }

            &.withTooltip {
              @p: .relative, .bgNone, .pv25, .cursorDefault;
            }

            &.active {
              @p: .green;

              &:hover {
                @p: .green;
              }
            }
          }

          .tooltip {
            @p: .absolute, .db, .left50, .overflowVisible, .tlHCenter, .bgWhite, .br2, .overlayShadow;
            top: 55px;
            white-space: initial;

            @media (max-width: 899px) {
              @p: .f16;
              width: 225px;
            }

            @media (min-width: 900px) {
              @p: .f20;
              width: 270px;
            }

            &:before {
              @p: .absolute, .left50, .tlHCenter;
              content: '';
              width: 0;
              height: 0;
              top: -8px;
              border-style: solid;
              border-width: 0 8px 8px 8px;
              border-color: transparent transparent #fff transparent;
            }
          }

          .tooltip :global(.tooltipLink) {
            @p: .flex, .itemsCenter, .noUnderline, .ttn, .fw4, .black50;
            letter-spacing: 0;
            transition: opacity .1s ease;

            &:hover {
              opacity: .75;
            }

            @media (max-width: 899px) {
              @p: .ph16, .pt20, .pb10;
            }

            @media (min-width: 900px) {
              @p: .ph20, .pt25, .pb12;
            }
          }

          @media (max-width: 899px) {
            .tooltip :global(.tooltipLink):last-child {
              @p: .pt10, .pb20;
            }
          }

          @media (min-width: 900px) {
            .tooltip :global(.tooltipLink):last-child {
              @p: .pt12, .pb25;
            }
          }

          .featureIcon {
            @p: .relative, .mr10;

            &:before {
              content: '';
              @p: .absolute, .left50, .top50, .tlCenter, .wS20, .hS20, .brPill;
            }

            &.graphqlBackend {
              &:before {
                @p: .bgPurple20;
              }
            }

            &.serverlessFunctions {
              &:before {
                @p: .bgLightOrange20;
              }
            }
          }

          .entryPoints {
            @media (max-width: 750px) {
              @p: .flex, .pt16;
            }
          }

          .button {
            @p: .noUnderline, .dim, .ttu, .pa10, .lhSolid, .br2, .f16, .fw6, .pointer, .nowrap, .tracked;

            @media (max-width: 899px) {
              font-size: 14px !important;
            }

            @media (min-width: 900px) {
              font-size: 16px !important;
            }

            &.secondary {
              @p: .bgLightgreen20, .green, .mr10;
            }

            &.primary {
              @p: .bgGreen, .white;
            }
          }
        `}</style>
        <Link to='/'>
          <img className='logo' src={require('../assets/graphics/logos/graphcoolFull.svg')} />
        </Link>
        {window.innerWidth < breakpoints.p750 &&
          <button className='hamburger' onClick={() => this.setState({ menuOpened: true } as State)}>
            <Icon src={require('../assets/icons/hamburger.svg')} width={36} height={36} color={$v.gray20}/>
          </button>
        }
        <nav
          className={cx(
            'nav', {
              'opened': this.state.menuOpened,
            },
          )}
        >
          {window.innerWidth < breakpoints.p750 &&
            <button className='close' onClick={() => this.setState({ menuOpened: false } as State)} />
          }
          {window.innerWidth >= breakpoints.p750 &&
            <div
              className={cx(
                'link',
                'withTooltip', {
                  'active': ['/graphql', '/functions'].includes(window.location.pathname),
                },
              )}
              onMouseEnter={() => this.setState({ tooltipActive: true } as State)}
              onMouseLeave={() => this.setState({ tooltipActive: false } as State)}
            >
              Features
              {this.state.tooltipActive &&
              <span className='tooltip'>
                <Link to='/graphql' className='tooltipLink'>

                  <div className='featureIcon graphqlBackend'>
                    <Icon
                      src={require('../assets/icons/graphqlBackendLogo.svg')}
                      height={25}
                      width={25}
                      color={$v.purple}
                    />
                  </div>
                  <span className={cx($p.flexFixed)}>GraphQL Backend</span>
                </Link>
                <Link to='/functions' className='tooltipLink'>
                  <div className='featureIcon serverlessFunctions'>
                    <Icon
                      src={require('../assets/icons/functionsLogo.svg')}
                      height={25}
                      width={25}
                      color={$v.lightOrange}
                    />
                  </div>
                  <span className={cx($p.flexFixed)}>Serverless Functions</span>
                </Link>
              </span>
              }
            </div>
          }
          {window.innerWidth < breakpoints.p750 &&
            <TwoRowLink to='/graphql'>GraphQL<br/>Backend</TwoRowLink>
          }
          {window.innerWidth < breakpoints.p750 &&
            <TwoRowLink to='/functions'>Serverless<br/>Functions</TwoRowLink>
          }
          <NavLink
            active={window.location.pathname === '/pricing'}
            to='/pricing'
          >
            Pricing
          </NavLink>
          <NavLink className='link' to='/docs'>Docs</NavLink>
          {this.state.loggedIn ? (
            <div className='entryPoints'>
              <a
                href='https://console.graph.cool'
                className='button secondary'
              >
                Go to Console
              </a>
            </div>
          ) : (
            <div className='entryPoints'>
              <a href='https://console.graph.cool/login' className='button secondary'>
                Log in
              </a>
              <a href='https://console.graph.cool/signup' className='button primary'>
                Sign up
              </a>
            </div>
          )}
        </nav>
      </div>
    )
  }
}
