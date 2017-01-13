import * as React from 'react'
import {$p, Icon} from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import {TechnologyData} from './data/technologies'

const Hover = `
   opacity: 0.5;
`

const AnimatingOpacityView = styled.div`
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

export default (props: Props) => {

  const {technology: {title, logoName, logoColor, logoWidth, logoHeight, backgroundColor}} = props
  const {technology, onClick, className} = props

  return (
    <AnimatingOpacityView
      decreaseOpacity={props.decreaseOpacity}
      className={cx($p.flex, $p.flexColumn, $p.itemsCenter, $p.pointer, $p.mr25, className)}
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
        src={require(`../../../../assets/icons/docs/${logoName}.svg`)}
        color={logoColor}
        height={logoWidth}
        width={logoHeight}
      />
    </Circle>
    <div className={cx($p.flex, $p.black60, $p.f20, $p.fw6, $p.mt25)}>
      {title}
    </div>
    </AnimatingOpacityView>
  )
}
