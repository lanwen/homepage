import * as React from 'react'
import { $p, Icon, $v } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import {TechnologyData} from './data/technologies'

const AnimatingOpacityView = styled.div`
  box-sizing: border-box;
  width: 146px;
  transition: opacity 0.5s;
`

const Circle = styled.div`
  width: 96px;
  height: 96px;
  flex: 0 0 96px;
`

const Label = styled.div`
  position: absolute;
  bottom: -12px;
  line-height: 1;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
  background: ${$v.green};
  font-size: ${$v.size12};
  text-transform: uppercase;
  font-weight: 600;
  color: ${$v.white};
  padding: 5px 6px;
`

interface Props {
  technology: TechnologyData
  onClick?: (technology: TechnologyData) => void
  className?: string
  isPopular?: boolean
}

const Technology = (props: Props) => {

  const {technology: {
    title, logoName, logoColor, logoWidth, logoHeight, backgroundColor, isDisabled, isPopular,
  }} = props
  const {technology, onClick, className} = props

  return (
    <AnimatingOpacityView
      style={{
        opacity: isDisabled ? 0.25 : 1,
        cursor: 'default',
      }}
      className={cx($p.flex, $p.flexColumn, $p.itemsCenter, $p.pointer, className)}
      onClick={() => onClick(technology)}
    >
    <Circle
      className={cx($p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter, $p.relative)}
      style={{background: `${backgroundColor}`}}>
      <Icon
        src={require(`graphcool-styles/icons/fill/${logoName}LogoCentered.svg`)}
        color={logoColor}
        height={logoWidth}
        width={logoHeight}
      />
      {isPopular &&
        <Label>Popular</Label>
      }
    </Circle>
    <div className={cx($p.flex, $p.black60, $p.f20, $p.fw6, $p.mt25, $p.nowrap)}>
      {title}
    </div>
    </AnimatingOpacityView>
  )
}

export default Technology
