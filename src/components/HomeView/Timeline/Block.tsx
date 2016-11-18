import * as React from 'react'
import { $v } from 'graphcool-styles'
import styled from 'styled-components'
import Bar from './Bar'
import Overlay from './Overlay'

const Root = styled.div`
  position: relative;
  border-left: 1px solid rgba(0,0,0,0.15);
  width: 30%;
  padding: ${$v.size10};
  
  &:last-child {
    &:after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: ${$v.size96}
      background: linear-gradient(to right, rgba(0,0,0,0) 0%, #fafafa 70%)
    }
  }
`

interface Props {
  label: string,
}

interface State {
  showOverlay: boolean,
}

export default class Block extends React.Component<Props, State> {

  state: State = {
    showOverlay: false,
  }

  render() {
    return (
      <Root
        onMouseEnter={() => this.setState({showOverlay: true} as State)}
        onMouseLeave={() => this.setState({showOverlay: false} as State)}
      >
        <div className='label'>{this.props.label}</div>
        <Bar />
        <Bar graphcool />
        {this.state.showOverlay &&
          <Overlay label={this.props.label} />
        }
      </Root>
    )
  }
}
