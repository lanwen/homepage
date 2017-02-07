import * as React from 'react'
import * as cx from 'classnames'
import { $v, $p, Icon } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../../utils/constants'

const Root = styled.div`

  &:first-child {
    margin-left: 0;
  }
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${props => props.opacity};
    background: ${props => props.color};
  }
  
  i {
    width: 60%;
    height: 60%;
  }
  
  svg {
    width: 100% !important;
    height: 100% !important;
  }
  
  @media (max-width: ${breakpoints.p900}px) {
    margin: ${$v.size12};
    
    &:first-child {
      margin: ${$v.size12};
    }
  }
  
  @media (max-width: 800px) {
    width: 70px;
    height: 70px;
  }
`

interface Props {
  technology: string,
  color: string,
  opacity: number,
}

export default class Quickstart extends React.Component<Props, {}> {
  render() {
    return (
      <Root
        className={cx(
          $p.brPill,
          $p.wS96,
          $p.hS96,
          $p.relative,
          $p.overflowHidden,
          $p.flex,
          $p.justifyCenter,
          $p.itemsCenter,
          $p.ml25,
        )}
        opacity={this.props.opacity}
        color={this.props.color}
      >
        <Icon
          src={require(`graphcool-styles/icons/fill/${this.props.technology}LogoCentered.svg`)}
          width={50}
          height={50}
          color={this.props.color}
        />
      </Root>
    )
  }
}
