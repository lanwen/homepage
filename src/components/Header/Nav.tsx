import * as React from 'react'
import {$p, Icon, $v} from 'graphcool-styles'
import * as cx from 'classnames'
import {breakpoints} from '../../utils/constants'
import {Link} from 'react-router'
import EndpointPopup from '../DocsView/components/Header/EndpointPopup'
import CircleIcon from '../DocsView/components/CircleIcon'

interface Props {
  menuOpened: boolean
  loggedIn: boolean
  view: string
  onMenuClosed: () => void
}

interface State {
  tooltipActive: boolean
  endpointPopupOpened: boolean
}

export default class Nav extends React.Component<Props, State> {

  state: State = {
    tooltipActive: false,
    endpointPopupOpened: false,
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
            @p: .fw6, .black30, .tracked, .ttu, .f14;

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

          @media (max-width: 750px)  {
            .root.opened {
              @p: .flex;
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
            @p: .absolute, .db, .left50, .overflowVisible, .tlHCenter, .bgWhite, .br2, .overlayShadow, .z999;
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

            &.isOnDocs {
              @media (max-width: 899px) {
                width: 145px;
              }
              @media (min-width: 900px) {
                width: 170px;
              }
            }
          }

          .tooltip :global(.tooltipLink) {
            @p: .flex, .itemsCenter, .noUnderline, .ttn, .fw4, .black50;
            letter-spacing: 0;
            transition: opacity .1s ease;

            @media (max-width: 899px) {
              @p: .ph16, .pt10, .pb10;
            }

            @media (min-width: 900px) {
              @p: .ph20, .pv12;
            }
          }

          .tooltip :global(.tooltipLink):hover {
              opacity: .75;
          }

          @media (max-width: 899px) {
            .tooltip :global(.tooltipLink):first-child {
              @p: .ph16, .pt20, .pb10;
            }
            .tooltip :global(.tooltipLink):last-child {
              @p: .pt10, .pb20;
            }
          }

          @media (min-width: 900px) {
            .tooltip :global(.tooltipLink):first-child {
              @p: .ph20, .pt25, .pb12;
            }
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

            &.tutorials {
              &:before {
                @p: .bgPurple20;
              }
            }
            &.examples {
              &:before {
                @p: .bgLightOrange20;
              }
            }
            &.faq {
              &:before {
                @p: .bgBlue20;
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
          <button className='close' onClick={this.props.onMenuClosed}/>
        }
        {links[this.props.view].map(link => (
          link.hasOwnProperty('links') ? (
              <div key={link.name}>
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
                    {link.name}
                    {this.state.tooltipActive &&
                      <span
                        className={cx(
                          'tooltip', {
                            'isOnDocs': this.props.view === 'DOCS',
                          },
                        )}
                      >
                        {link.links.map(link1 => (
                          link1.link.includes('http') ? (
                            <a href={link1.link} key={link1.link} className='tooltipLink' target='_blank'>
                              {link1.circleIcon ? (
                                  <CircleIcon type={link1.circleIcon} />
                                ) : (
                                  <div className={`featureIcon ${link1.icon}`}>
                                    <Icon
                                      src={link1.url}
                                      height={25}
                                      width={25}
                                      color={link1.color || $v.purple}
                                    />
                                  </div>
                                )}
                              <span className={cx($p.flexFixed)}>{link1.name}</span>
                            </a>
                          ) : (
                            <Link to={link1.link} key={link1.link} className='tooltipLink'>
                              {link1.circleIcon ? (
                                  <CircleIcon type={link1.circleIcon} />
                                ) : (
                                  <div className={`featureIcon ${link1.icon}`}>
                                    <Icon
                                      src={link1.url}
                                      height={25}
                                      width={25}
                                      color={link1.color || $v.purple}
                                    />
                                  </div>
                                )}
                              <span className={cx($p.flexFixed)}>{link1.name}</span>
                            </Link>
                          )
                        ))}
                      </span>
                    }
                  </div>
                }
                {window.innerWidth < breakpoints.p750 && (
                  link.links.map(link1 => (
                    <Link
                      className='link twoRow'
                      to={link1.link}
                      key={link1.link}
                    >{link1.name}</Link>
                  ))
                )}
              </div>
            ) : (
              <Link
                key={link.link}
                className={cx('link', {'active' : window.location.pathname === link.link})}
                to={link.link}
              >
                {link.name}
              </Link>
            )
        ))}
        {this.props.loggedIn ? (
            <div className='entryPoints'>
              {this.props.view === 'HOMEPAGE' && (
                <a
                  href='https://console.graph.cool'
                  className='button secondary'
                >
                  Go to Console
                </a>
              )}
              {this.props.view === 'DOCS' && (
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
                    $p.nowrap,
                    $p.pointer,
                  )}
                  onClick={() => {
                    this.handleOpenEndpointPopup()
                    this.props.onMenuClosed()
                  }}
                >
                  <img
                    src={require('../../assets/graphics/docs/share.svg')}
                  />
                  <div className={cx($p.ml10)}>Api Endpoints</div>
                </div>
              )}
            </div>
          ) : (
            <div className='entryPoints'>
              <a href='https://console.graph.cool/login/' className='button secondary'>
                Log in
              </a>
              <a href='https://console.graph.cool/signup/' className='button primary'>
                Sign up
              </a>
            </div>
          )}
        {this.props.loggedIn && this.state.endpointPopupOpened && (
          <EndpointPopup
            isOpen={this.state.endpointPopupOpened}
            onRequestClose={this.handleCloseEndpointPopup}
          />
        )}
      </nav>
    )
  }

  private handleOpenEndpointPopup = () => {
    this.setState({endpointPopupOpened: true} as State)
  }

  private handleCloseEndpointPopup = () => {
    this.setState({endpointPopupOpened: false} as State)
  }
}

const links = {
  HOMEPAGE: [
    {
      name: 'Features',
      links: [
        {
          name: 'GraphQL Backend',
          link: '/graphql/',
          icon: 'graphqlBackend',
          url: require('assets/icons/graphqlBackendLogo.svg'),
          color: $v.purple,
        },
        {
          name: 'Serverless Functions',
          link: '/functions/',
          icon: 'serverlessFunctions',
          url: require('assets/icons/functionsLogo.svg'),
          color: $v.lightOrange,
        },
      ],
    },
    {
      name: 'Pricing',
      link: '/pricing/',
    },
    {
      name: 'Docs',
      link: '/docs/',
    },
  ],
  DOCS: [
    {
      name: 'Quickstart',
      link: '/docs/quickstart/',
    },
    {
      name: 'Resources',
      links: [
        {
          name: 'Tutorials',
          link: '/docs/tutorials/',
          icon: 'tutorials',
          url: require('graphcool-styles/icons/fill/docsTutorial.svg'),
          color: $v.purple,
        },
        {
          name: 'Examples',
          link: 'https://github.com/graphcool-examples',
          icon: 'examples',
          url: require('graphcool-styles/icons/fill/docsExample.svg'),
          color: $v.lightOrange,
        },
        {
          name: 'FAQ',
          link: '/docs/faq/',
          icon: 'faq',
          url: require('graphcool-styles/icons/fill/docsQuestion.svg'),
          color: $v.blue,
        },
      ],
    },
    {
      name: 'Reference',
      link: '/docs/reference/',
    },
    {
      name: 'Blog',
      link: '/blog/',
    },
  ],
}
