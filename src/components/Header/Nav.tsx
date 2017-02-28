import * as React from 'react'
import { $p, Icon, $v } from 'graphcool-styles'
import * as cx from 'classnames'
import { breakpoints } from '../../utils/constants'
import { Link } from 'react-router'

const links = {
  homepage: [
    {
      name: 'Features',
      links: [
        {
          name: 'GraphQL Backend',
          link: '/graphql',
          icon: 'graphqlBackend'
        },
        {
          name: 'Serverless Functions',
          link: '/functions',
          icon: 'serverlessFunctions'
        }
      ]
    },
    {
      name: 'Pricing',
      link: '/pricing'
    },
    {
      name: 'Docs',
      link: '/docs'
    }
  ],
  docs: [
    {
      name: 'Quickstart',
      link: 'docs/quickstart'
    },
    {
      name: 'Resources',
      links: [
        {
          name: 'Tutorials',
          link: '/docs/tutorials',
          icon: 'docsTutorial'
        },
        {
          name: 'Examples',
          link: '/docs/examples',
          icon: 'docsExamples'
        },
        {
          name: 'FAQ',
          link: '/docs/faq',
          icon: 'docsQuestion'
        }
      ]
    },
    {
      name: 'Reference',
      link: 'docs/reference'
    },
    {
      name: 'Blog',
      link: '/blog'
    }
  ]
}

interface Props {
  menuOpened: boolean,
  loggedIn: boolean,
}

interface State {
  tooltipActive: boolean,
}

export default class Nav extends React.Component<Props, State> {

  state: State = {
    tooltipActive: false,
  }

  render() {
    return (
      <nav
        className={cx(
            'root', {
              'opened': this.props.menuOpened,
            },
          )}
      >
        <style jsx={true}>{`
          .root {
            @p: .fw6, .black30, .tracked, .ttu, .f14, .zMax;

            @media (max-width: 400px) {
              right: 9px;
              top: 9px;
            }

            @media (max-width: 750px) {
              @p: .dn, .absolute, .flexColumn, .itemsStart, .pa16;
              @p: .bgWhite, .br2, .overflowHidden, .overlayShadow, .zMax;
              right: 22px;
              top: 30px;

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

          .root :global(.link) {
            @p: .black30, .pointer, .lhSolid, .ttu;
            transition: color .1s linear;

            @media (max-width: 899px) {
              @p: .mr25, .f14;
            }

            @media (min-width: 900px) {
              @p: .mr38, .f16;
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

            &.twoRow {
              line-height: 1.3;
            }
          }

          .root :global(.link):hover {
            @p: .black50;
          }

          .root :global(.link).active {
            @p: .green;
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

            @media (max-width: 899px) {
              @p: .ph16, .pt20, .pb10;
            }

            @media (min-width: 900px) {
              @p: .ph20, .pt25, .pb12;
            }
          }

          .tooltip :global(.tooltipLink):hover {
              opacity: .75;
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
                      src={require('../../assets/icons/graphqlBackendLogo.svg')}
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
                      src={require('../../assets/icons/functionsLogo.svg')}
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
        <Link className='link twoRow' to='/graphql'>GraphQL<br />Backend</Link>
        }
        {window.innerWidth < breakpoints.p750 &&
        <Link className='link twoRow' to='/functions'>Serverless<br />Functions</Link>
        }
        <Link
          className={cx('link', {'active' : window.location.pathname === '/pricing'})}
          to='/pricing'
        >
          Pricing
        </Link>
        <Link className='link' to='/docs'>Docs</Link>
        {this.props.loggedIn ? (
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
    )
  }
}





