import * as React from 'react'
import * as cx from 'classnames'
import { Link } from 'react-router'
import { $p, $g, Icon, $v } from 'graphcool-styles'
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

// const MultiNavLink = styled.button`
//   ${NavLinkBase}
//   position: relative;
//   background: none;
//   text-transform: inherit;
//   letter-spacing: inherit;
//   font-size: inherit;
//   font-weight: inherit;
//   padding: ${$v.size20} 0;
//   cursor: default;
//
//   ${props => props.active && ActiveNavLink}
// `

const NavTooltip = styled.span`
  top: 55px;
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

const FeatureLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: none;
  letter-spacing: 0;
  font-weight: 400;
  color: ${$v.gray50};
  padding: ${$v.size20} ${$v.size16} ${$v.size10};
  
  &:last-child {
    padding: ${$v.size10} ${$v.size16} ${$v.size20};
  }
  
  @media (min-width: ${breakpoints.p900}px) {
    padding: ${$v.size25} ${$v.size20} ${$v.size12};

    &:last-child {
      padding: ${$v.size12} ${$v.size20} ${$v.size25};
    }
  }
  
  transition: opacity ${$v.duration} ease;
  
  &:hover {
    opacity: .75;
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
              content: "";
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
                className={cx($g.uppercaseButton, $p.bgLightgreen20, $p.green, $p.mr10, $p.dim)}
              >
                Log in
              </Button>
              <Button
                href='https://console.graph.cool/signup'
                className={cx($g.uppercaseButton, $p.bgGreen, $p.white, $p.dim)}
              >
                Sign up
              </Button>
            </Signin>
          )}
        </nav>
      </div>
    )
  }
}
