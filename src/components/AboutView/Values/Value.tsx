import * as React from 'react'
import { $p, $v, Icon } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import { breakpoints } from '../../../utils/constants'

interface Props {
  icon: string,
  color: string,
  headline: string,
  copy: string
}

const Root = styled.div`
  width: 100%;
  max-width: 450px;
  box-sizing: border-box;
  padding: 3% 0;
  display: flex;
  padding: 0 ${$v.size38} ${$v.size38} 0;
  
  p {
    font-size: ${$v.size16};
    font-weight: 400;
    color: ${$v.gray50};
  }
  
  h3 {
    padding-top: 8px;
  }

  @media (min-width: ${breakpoints.p400}px) {
    padding: 0 ${$v.size60} ${$v.size60} 0
  }
  
  @media (min-width: ${breakpoints.p500}px) {
    h3 {
      padding-top: 0px;
    }
  }
  
  @media (max-width: ${breakpoints.p650 - 1}px) {
    &:last-child {
      padding-bottom: 0;
    }
  }  
    
  @media (min-width: ${breakpoints.p650}px) {
    width: 50%;
  }
  
  @media (min-width: ${breakpoints.p750}px) {
    padding: 0 ${$v.size96} ${$v.size96} 0
  }
  
  @media (min-width: ${breakpoints.p900}px) {
    padding: 3% 0;
    width: 44%;
  }
  
  @media (min-width: ${breakpoints.p1200}px) {
    width: 27%;
  }
`

const IconContainer = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  margin-right: ${$v.size16};
  &:before {
    content: "";
    border-radius: 500px;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${props => props.color};
    opacity: .2;
  }
`

export default class Feature extends React.Component<Props, {}> {
  render() {
    return (
      <Root>
        <IconContainer color={this.props.color}>
          <Icon
            src={require(`../../../assets/icons/values/${this.props.icon}.svg`)}
            height={45}
            width={45}
            color={this.props.color}
          />
        </IconContainer>
        <div>
          <h3 className={cx($p.pb16)}>{this.props.headline}</h3>
          <p>{this.props.copy}</p>
        </div>
      </Root>
    )
  }
}
