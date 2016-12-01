import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g, Icon } from 'graphcool-styles'
import styled from 'styled-components'

const Root = styled.div`
  padding: ${$v.size38} ${$v.size38} 0;
`

const IconContainer = styled.div`
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
`

const Overlay = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  box-sizing: border-box;
  width: 100%
  min-width: 260px;
  transform: translate(-50%,0)  
`

const OverlayIconContainer = styled(IconContainer)`
  background: ${$v.darkBlue};
  
  svg {
    fill: ${$v.white};
  }
`

interface State {
  showOverlay: boolean,
}

interface Props {
  icon: string,
  title: string,
  description: string,
}

export default class Field extends React.Component<Props, State> {

  state: State = {
    showOverlay: false,
  }

  render() {
    return (
      <Root
        className={cx($p.relative, $p.flex, $p.flexColumn, $p.itemsCenter, $p.pt38)}
        onMouseEnter={() => this.setState({showOverlay: true} as State)}
        onMouseLeave={() => this.setState({showOverlay: false} as State)}
      >
        <IconContainer>
          <Icon src={require(`../../../assets/icons/${this.props.icon}.svg`)} width={32} height={32} />
        </IconContainer>
        <h4 className={cx($g.uppercaseLabel, $p.white50)}>{this.props.title}</h4>
        {this.state.showOverlay &&
        <Overlay
          className={cx(
            $g.overlay,
            $p.flex, $p.flexColumn, $p.itemsCenter, $p.pv38, $p.ph25,
          )}
        >
          <OverlayIconContainer>
            <Icon src={require(`../../../assets/icons/${this.props.icon}.svg`)} width={32} height={32}/>
          </OverlayIconContainer>
          <h4 className={cx($g.uppercaseLabel, $p.darkBlue)}>{this.props.title}</h4>
          <p className={cx($p.f16, $p.fw4, $p.black50, $p.mt25)}>{this.props.description}</p>
        </Overlay>
        }
      </Root>
    )
  }
}
