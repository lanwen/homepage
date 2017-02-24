import * as React from 'react'
import { $v, Icon } from 'graphcool-styles'

interface Props {
  image: string,
  name: string,
  title: string,
  links: {
    linkedin: string,
    github: string,
    twitter: string,
  },
}

interface State {
  showOverlay: boolean,
}

export default class TeamMember extends React.Component<Props, State> {

  state: State = {
    showOverlay: false,
  }

  render() {
    return (
      <div
        className='root'
        onMouseEnter={() => this.setState({showOverlay: true} as State)}
        onMouseLeave={() => this.setState({showOverlay: false} as State)}
      >
        <style jsx={true}>{`
          .root {
            @p: .relative, .ma16;
          }

          .image {
            @p: .brPill;
          }

          .overlayContainer {
            @p: .absolute, .left50, .tlHCenter, .flex;
            width: 240px;
            top: 90%;
          }

          .overlay {
            @p: .bgWhite, .br2, .overflowHidden, .overlayShadow, .tc, .center, .wAuto;
            max-width: 100%;

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
              border-color: transparent transparent #fff transparent;
            }
          }

          .content {
            @p: .pa25
          }

          .title {
            @p: .f14, .black30, .ttu, .lhSolid, .fw6, .nowrap, .tracked, .mt10;
          }

          .links {
            @p: .flex, .justifyCenter, .itemsCenter, .bgBlack04
          }

          .link {
            @p: .ph6, .pv10;
          }
        `}</style>
        <img className='image' width='96' height='96' src={this.props.image} />
        {this.state.showOverlay &&
        <div className='overlayContainer'>
          <div className='overlay'>
            <div className='content'>
              <h4>{this.props.name}</h4>
              <p className='title'>{this.props.title}</p>
            </div>
            <div className='links'>
              <a href={this.props.links.linkedin} className='link' target='_blank'>
                <Icon
                  src={require('../../../assets/icons/logos/linkedin.svg')}
                  width={20}
                  height={20}
                  color={$v.gray20}
                />
              </a>
              <a href={this.props.links.twitter} className='link' target='_blank'>
                <Icon
                  src={require('../../../assets/icons/logos/twitter.svg')}
                  width={20}
                  height={20}
                  color={$v.gray20}
                />
              </a>
              <a href={this.props.links.github} className='link' target='_blank'>
                <Icon
                  src={require('../../../assets/icons/logos/github.svg')}
                  width={20}
                  height={20}
                  color={$v.gray20}
                />
              </a>
            </div>
          </div>
        </div>
        }
      </div>
    )
  }
}
