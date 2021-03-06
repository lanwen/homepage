import * as React from 'react'
import { Link } from 'react-router'
import { Icon, $v } from 'graphcool-styles'
import * as cookiestore from 'cookiestore'
import Search from '../DocsView/components/Header/Search'
import Nav from './Nav'
import {withRouter} from 'react-router'
import * as MediaQuery from 'react-responsive'

// const SplitLink = ({ to, children, className }: {to: string, children: JSX.Element, className: string}) => (
//   to.startsWith('http')
//     ? <a href={to} className={className}>{children}</a>
//     : <Link to={to} className={className}>{children}</Link>
// )

interface Props {
  view: string
  router?: ReactRouter.InjectedRouter
}

interface State {
  menuOpened: boolean
  loggedIn: boolean
}

class Header extends React.Component<Props, State> {

  state: State = {
    menuOpened: false,
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
            @p: .flex, .itemsCenter, .justifyBetween, .center, .relative, .w100, .bbox;
            z-index: 21;
            max-width: 1440px;
            min-height: 51px;

            @media (max-width: 400px) {
              @p: .pa25;
            }

            @media (min-width: 401px) {
              @p: .pa38;
            }

            @media (min-width: 1200px) {
              @p: .pa60;
            }

            /*
            &:before {
              content: '';
              @p: .absolute, .left0, .top0, .right0, .bottom0;
              background: linear-gradient(to bottom, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 100%);
            }
            */
          }

          .root :global(.logo) {
            @p: .flex, .itemsCenter, .overflowHidden, .flexFixed, .noUnderline, .relative;
            transition: width .4s ease-in-out;
          }

          .root :global(.logo) {
            @media (max-width: 899px) {
              @p: .f16;
            }

            @media (min-width: 900px) {
              @p: .f20;
            }
          }

          .root .logo.withLinks {
            @p: .pointer, .pr16;
            @media (max-width: 899px) {
              width: 100px;
            }

            @media (min-width: 900px) {
              width: 115px;
            }
          }

          .root :global(.logo.withLinks):hover {

            @media (max-width: 899px) {
              width: 310px;
            }

            @media (min-width: 900px) {
              width: 374px;
            }
          }

          .root :global(.logo.withLinks):hover :global(.logoLink).active {
            @p: .green;
          }

          .root :global(.logo) :global(.logoIcon) {

            @media (max-width: 899px) {
              @p: .mr16;

              svg {
                height: 36px;
                width: 31px;
              }
            }

            @media (min-width: 900px) {
              @p: .mr20;

              svg {
                height: 42px;
                width: 36px;
              }
            }
          }

          .root :global(.logo) :global(.logoLink) {
            @p: .ttu, .lhSolid, .fw6, .nowrap, .tracked, .lightgreen50, .mr20, .noUnderline;
            transition: color .1s linear;
          }

          .root :global(.logo) :global(.logoLink):hover {
            @p: .green;
          }

          .root :global(.logo) :global(.logoLink):last-child {
            @p: .mr0;
          }

          .root :global(.logo.withLinks) :global(.logoLink).active {
            @p: .cursorDefault;
            transition: color .1s linear, margin .2s ease-in-out;
          }

          @media (max-width: 899px) {

            .root :global(.logo):hover :global(.logoLink).active {
              @p: .mr16;
            }

            .root :global(.logo) :global(.logoLink) {
              @p: .mr16;
            }

            .root :global(.logo) :global(.logoLink).active {
              @p: .mr25;
            }
          }

          @media (min-width: 900px) {

            .root :global(.logo):hover :global(.logoLink).active {
              @p: .mr20;
            }

            .root :global(.logo) :global(.logoLink) {
              @p: .mr20;
            }

            .root :global(.logo) :global(.logoLink).active {
              @p: .mr38;
            }
          }

          .hamburger {
            @p: .bgNone, .pointer, .pa0;
          }
        `}</style>
        {this.props.view === 'HOMEPAGE' &&
          <Link to='/' className='logo'>
            <Icon
              height={42}
              width={36}
              src={require('../../assets/icons/graphcool.svg')}
              color={$v.green}
              className='logoIcon'
            />
            <span className='logoLink active'>Graphcool</span>
          </Link>
        }

        {this.props.view === 'DOCS' &&
          <div className='logo withLinks'>
            <Link to='/docs/'>
              <Icon
                height={42}
                width={36}
                src={require('../../assets/icons/graphcool.svg')}
                color={$v.green}
                className='logoIcon'
              />
            </Link>
            <Link className='logoLink' to='/docs/'>Docs</Link>
            <a href='https://console.graph.cool' target='_blank' className='logoLink'>Console</a>
            <Link to='/' className='logoLink'>Homepage</Link>
          </div>
        }

        {this.props.view === 'DOCS' &&
          <Search />
        }
        <MediaQuery maxWidth={750}>
          <button className='hamburger' onClick={() => this.setState({ menuOpened: true } as State)}>
            <Icon src={require('../../assets/icons/hamburger.svg')} width={36} height={36} color={$v.gray20}/>
          </button>
        </MediaQuery>
        <Nav
          menuOpened={this.state.menuOpened}
          loggedIn={this.state.loggedIn}
          view={this.props.view}
          onMenuClosed={this.handleMenuClosed}
        />
      </div>
    )
  }

  private handleMenuClosed = () => {
    this.setState({menuOpened: false} as State)
  }
}

export default withRouter(Header)
