import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../../utils/constants'

const ActiveRoot = `
  opacity: 1;
`

const Root = styled.div`
  margin-bottom: ${$v.size38};
  opacity: 0.4;
  transition: opacity ${$v.duration} linear;
  cursor: default;
  
  &:hover {
    opacity: 1;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: ${breakpoints.p1000}px) {
    margin-bottom: ${$v.size25};
  }
  
  @media (max-width: ${breakpoints.p900}px) {
    width: 450px;
    max-width: 60vw;
    flex: 0 0 auto;
    margin: 0;
    padding-right: ${$v.size25}; 
    
    &:first-child {
      padding-left: ${$v.size25};
    }
  }
  
  ${props => props.active && ActiveRoot} 
`

const Label = styled.div`
  @media (max-width: ${breakpoints.p1200}px) {
    font-size: ${$v.size14};
  }
`

const Text = styled.h3`
  
  padding-top: ${$v.size16};

  @media (max-width: ${breakpoints.p1200}px) {
    font-size: ${$v.size20};
  }
  
  @media (max-width: ${breakpoints.p1000}px) {
    padding-top: ${$v.size10};
  }
`

interface Props {
  case: string,
  description: string,
  active?: boolean,
  onClick: () => void,
}

export default class Functions extends React.Component<Props, {}> {

  render() {
    return (
      <Root active={this.props.active} onClick={this.props.onClick}>
        <Label className={cx($g.uppercaseLabel, $p.lightgreen50)}>{this.props.case}</Label>
        <Text className={cx($p.green, $p.pt16)}>{this.props.description}</Text>
      </Root>
    )
  }
}
