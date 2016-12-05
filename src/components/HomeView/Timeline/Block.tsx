import * as React from 'react'
import { $v } from 'graphcool-styles'
import styled from 'styled-components'
import Bar from './Bar'
import Overlay from './Overlay'
import { breakpoints } from '../../../utils/constants'

const Root = styled.div`
  position: relative;
  width: ${100 / 3}%;
  padding-right: ${$v.size16};
  flex: 0 0 auto;
  min-width: 280px; /* Adjust to longest item */
  
  &:first-child {
    padding-left: ${$v.size25};
  }
  
  &:last-child {
    padding-right: ${$v.size25};
  }

  @media (min-width: ${breakpoints.p1000}px) {
    flex: 0 1 auto;
    border-left: 1px solid rgba(0,0,0,0.15);
    padding: ${$v.size10};
    
    &:first-child {
      padding: ${$v.size10};
    }

    &:last-child {
      padding: ${$v.size10};

      &:after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: ${$v.size96}
        background: linear-gradient(to right, rgba(255,255,255,0) 0%, #fafafa 70%)
      }
    }
  }
`

interface Props {
  label: string,
  old: string[],
  new: string[],
  oldSegments: number[],
  newSegments: number[],
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
      <Root>
        {window.innerWidth >= breakpoints.p1000 &&
        <div
          onMouseEnter={() => this.setState({showOverlay: true} as State)}
          onMouseLeave={() => this.setState({showOverlay: false} as State)}
        >
          <div className='label'>{this.props.label}</div>
          <Bar segments={this.props.oldSegments}/>
          <Bar graphcool segments={this.props.newSegments}/>
          {this.state.showOverlay &&
          <Overlay
            label={this.props.label}
            old={this.props.old}
            new={this.props.new}
            oldSegments={this.props.oldSegments}
            newSegments={this.props.newSegments}
          />
          }
        </div>
        }

        {window.innerWidth < breakpoints.p1000 &&
        <Overlay
          label={this.props.label}
          old={this.props.old}
          new={this.props.new}
          oldSegments={this.props.oldSegments}
          newSegments={this.props.newSegments}
        />
        }
      </Root>
    )
  }
}
