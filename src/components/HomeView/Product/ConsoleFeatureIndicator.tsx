import * as React from 'react'
import { $v } from 'graphcool-styles'
import styled, { keyframes } from 'styled-components'

const pulseAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  
  30% {
    opacity: 1
  }
  
  50% {
    opacity: 1;
  }
  
  100% {
    transform: scale(1);
    opacity: 0;
  }
`

const Root = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  cursor: pointer;
  
  &:before, &:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background: ${$v.blue};
    border-radius: 500px;
    width: 100%;
    height: 100%;
  }
  
  &:before {
    animation: ${pulseAnimation} 1.5s linear infinite;
  }
  
  &:after {
    animation: ${pulseAnimation} 1.5s linear .6s infinite;        
  }
`

interface Props {
  top: number,
  left: number,
  onClick: () => any
}

export default class FeatureIndicator extends React.Component<Props, {}> {

  render() {
    return (
      <Root
        style={{
          top: `${this.props.top}%`,
          left: `${this.props.left}%`,
        }}
        onClick={this.props.onClick}
      />
    )
  }
}
