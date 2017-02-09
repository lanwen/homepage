import * as React from 'react'
import { $p, $v, $g, Icon } from 'graphcool-styles'

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

          .overlay {
            @p: .absolute, .left50, .top100, .tlHCenter, .bgWhite, .br2, .overflowHidden, .overlayShadow, .pa25, .pb0;
            @p: .tc;
          }

          .title {
            @p: .f14, .black30, .ttu, .lhSolid, .fw6, .nowrap, .tracked, .mt10;
          }

          .links {
            @p: .pa10, .flex, .justifyCenter
          }
        `}</style>
        <img className='image' width='100' height='100' src={this.props.image} />
        {this.state.showOverlay &&
        <div className='overlay'>
          <h4>{this.props.name}</h4>
          <p className='title'>{this.props.title}</p>
          <div className='links'>
            <a href={this.props.links.linkedIn} className='link' target='_blank'>
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
        }
      </div>
    )
  }
}
