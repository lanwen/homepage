import * as React from 'react'
import {$p, Icon} from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import {TechnologyData} from './data/technologies'

const Hover = `
   opacity: 0.5;
`

const AnimatingOpacityView = styled.div`
  box-sizing: border-box;
  width: 146px;
  transition: opacity 0.5s;
  opacity: 1;
  ${props => props.decreaseOpacity && Hover}
`

const Circle = styled.div`
  width: 96px;
  height: 96px;
  flex: 0 0 96px;
`

interface Props {
  technology: TechnologyData
  onClick?: (technology: TechnologyData) => void
  className?: string
  decreaseOpacity: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const Technology = (props: Props) => {

  const {technology: {title, logoName, logoColor, logoWidth, logoHeight, backgroundColor, isDisabled}} = props
  const {technology, onClick, className} = props

  return (
    <AnimatingOpacityView
      style={{
        opacity: isDisabled ? 0.25 : 1,
        cursor: 'default'
      }}
      decreaseOpacity={props.decreaseOpacity}
      className={cx($p.flex, $p.flexColumn, $p.itemsCenter, $p.pointer, className)}
      onClick={() => onClick(technology)}
      onMouseEnter={() => {
        if (props.onMouseEnter) {
          props.onMouseEnter()
        }
      }}
      onMouseLeave={() => {
        if (props.onMouseLeave) {
          props.onMouseLeave()
        }
      }}
    >
    <Circle
      className={cx($p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}
      style={{background: `${backgroundColor}`}}>
      <Icon
        src={require(`graphcool-styles/icons/fill/${logoName}LogoCentered.svg`)}
        color={logoColor}
        height={logoWidth}
        width={logoHeight}
      />
    </Circle>
    <div className={cx($p.flex, $p.black60, $p.f20, $p.fw6, $p.mt25, $p.nowrap)}>
      {title}
    </div>
    </AnimatingOpacityView>
  )
}

export default Technology