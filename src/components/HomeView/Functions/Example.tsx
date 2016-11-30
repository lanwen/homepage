import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g } from 'graphcool-styles'
import styled from 'styled-components'

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
    margin-bottom: none;
  }
  
  ${props => props.active && ActiveRoot} 
`

interface Props {
  case: string,
  description: string,
  active?: boolean,
}

export default class Functions extends React.Component<Props, {}> {

  render() {
    return (
      <Root active={this.props.active}>
        <div className={cx($g.uppercaseLabel, $p.lightgreen50)}>{this.props.case}</div>
        <h3 className={cx($p.green, $p.pt16)}>{this.props.description}</h3>
      </Root>
    )
  }
}
