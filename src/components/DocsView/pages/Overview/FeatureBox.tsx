import * as React from 'react'
import {$p, Icon, $v, $g} from 'graphcool-styles'
import * as cx from 'classnames'
import {Link} from 'react-router'
import styled from 'styled-components'

interface Props {
  title: string
  iconSrc: string
  text: string
  link: string
}

const Root = styled(Link)`
  width: 33%;
  margin: 0 ${$v.size25} 0 0;
  
  &:last-child {
    margin-right: 0;
  }
  
  @media (max-width: 800px) {
    width: 100%;
    margin: 0 0 ${$v.size25} 0;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
`

const FeatureBox = ({title, iconSrc, text, link}: Props) => (
  <Root className={cx($p.db, $g.overlay, $p.noUnderline)} to={link}>
    <div className={cx($p.flex, $p.bgLightgreen10, $p.pa16, $p.itemsCenter)}>
      <Icon
        src={iconSrc}
        width={28}
        height={28}
        color={$v.green50}
      />
      <div className={cx($g.uppercaseLabel, $p.green, $p.ml16, $p.f16)}>{title}</div>
    </div>
    <p className={cx($p.pa25, $p.f16, $p.fw4, $p.black50)}>
      {text}
    </p>
  </Root>
)

export default FeatureBox
