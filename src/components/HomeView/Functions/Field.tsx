import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g, Icon } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../../utils/constants'
import Overlay from './Overlay'

const Root = styled.div`
  .iconContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${$v.size20};
    border-radius: 500px;
    width: ${$v.size60};
    height: ${$v.size60};
    background: ${$v.white10};
    
    svg {
      fill: ${$v.white50};
    }
  }
  
  @media (max-width: 650px) {
    padding: 0 ${$v.size06} ${$v.size16};
    
    &:first-child {
      padding-left: ${$v.size60};
    }
    
    &:last-child {
      padding-right: ${$v.size60};
    }
    
    // HACK (consider the widths if changing content)
    
    &:nth-child(4) {
      > div {
        width: 250px;
      }
    }
    
    &:nth-child(5) {
      > div {
        width: 330px;
      }
    }
  }

  @media (max-width: ${breakpoints.p500}px) {
    &:first-child {
      padding-left: ${$v.size38};
    }
    
    &:last-child {
      padding-right: ${$v.size38};
    }
  }

  @media (max-width: ${breakpoints.p400}px) {
    &:first-child {
      padding-left: ${$v.size25};
    }
    
    &:last-child {
      padding-right: ${$v.size25};
    }
  }
`

const Container = styled.div`
  padding: ${$v.size38};
  
  @media (min-width: ${breakpoints.p1000}px) {
    padding: ${$v.size38} ${$v.size25};
  }

  @media (min-width: ${breakpoints.p1200}px) {
    padding: ${$v.size38};
  }
`

interface State {
  showOverlay: boolean,
}

interface Props {
  icon: string,
  title: string,
  description: string,
  comingSoon?: boolean,
}

export default class Field extends React.Component<Props, State> {

  state: State = {
    showOverlay: false,
  }

  render() {
    return (
      <Root>
        {window.innerWidth > breakpoints.p650 &&
        <Container
          className={cx($p.relative, $p.flex, $p.flexColumn, $p.itemsCenter)}
          onMouseEnter={() => this.setState({showOverlay: true} as State)}
          onMouseLeave={() => this.setState({showOverlay: false} as State)}
        >
          <div className='iconContainer'>
            <Icon src={require(`../../../assets/icons/${this.props.icon}.svg`)} width={32} height={32} />
          </div>
          <h4 className={cx($g.uppercaseLabel, $p.white50)}>{this.props.title}</h4>
          {this.state.showOverlay &&
          <Overlay
            icon={this.props.icon}
            title={this.props.title}
            description={this.props.description}
            comingSoon={this.props.comingSoon}
          />
          }
        </Container>
        }
        {window.innerWidth <= breakpoints.p650 &&
        <Overlay
          icon={this.props.icon}
          title={this.props.title}
          description={this.props.description}
          comingSoon={this.props.comingSoon}
        />
        }
      </Root>
    )
  }
}
