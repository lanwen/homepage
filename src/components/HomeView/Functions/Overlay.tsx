import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g, Icon } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../../utils/constants'
import ComingSoonTag from '../ComingSoonTag'

const Root = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  box-sizing: border-box;
  width: 100%
  min-width: 220px;
  transform: translate(-50%,0);
  
  @media (max-width: ${breakpoints.p650}px) {
    position: relative;
    width: initial;
  } 
    
  @media (min-width: ${breakpoints.p1200}px) {
    min-width: 260px;
  }
`

const IconContainer = styled.div`
  background: ${$v.darkBlue} !important;
  
  svg {
    fill: ${$v.white} !important;
  }
`

interface Props {
  icon: string,
  title: string,
  description: string,
  comingSoon?: boolean,
}

export default class Overlay extends React.Component<Props, {}> {

  render() {
    return (
      <Root
        className={cx(
          $g.overlay,
          $p.flex, $p.flexColumn, $p.itemsCenter, $p.pv38, $p.ph25,
        )}
      >
        <IconContainer className='iconContainer'>
          <Icon src={require(`../../../assets/icons/${this.props.icon}.svg`)} width={32} height={32}/>
        </IconContainer>
        <h4 className={cx($g.uppercaseLabel, $p.darkBlue)}>{this.props.title}</h4>
        {this.props.comingSoon && <ComingSoonTag/>}
        <p className={cx($p.f16, $p.fw4, $p.black50, $p.mt25)}>
          {this.props.description}
        </p>
      </Root>
    )
  }
}
