import * as React from 'react'
import { $p, $v, Icon } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import { breakpoints } from '../../../utils/constants'
import SecondaryCallToAction from '../../SecondaryCallToAction';

interface Props {
  icon: string,
  color: string,
  headline: string,
  copy: string
  link: string
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

const CallToAction = styled(SecondaryCallToAction)`
  color: ${$v.gray30};
  opacity: 1;
  transition: color ${$v.duration} ease;
  
  svg {
    fill: ${$v.gray30};
    transition: transform ${$v.duration} ease, fill .4s ease;
  }
  
  &:hover {
    opacity: 1;
    color: ${$v.blue};
    transition: color ${$v.duration} ease;
    
    svg {
      transition: transform ${$v.duration} ease, fill .4s ease;
      fill: ${$v.blue};
    }
  }
`

export default class Feature extends React.Component<Props, {}> {
  render() {
    const {link} = this.props
    return (
      <Root>
        <IconContainer color={this.props.color}>
          <Icon
            src={require(`../../../assets/icons/features/${this.props.icon}.svg`)}
            height={45}
            width={45}
            color={this.props.color}
          />
        </IconContainer>
        <div>
          <h3 className={cx($p.pb16)}>{this.props.headline}</h3>
          <p>{this.props.copy}</p>
          <CallToAction
            text='Learn more'
            link={link}
            className={cx($p.mt16)}
            newWindow
          />
        </div>
      </Root>
    )
  }
}
