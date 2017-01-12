import * as React from 'react'
import {$p, Icon} from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import {renderColor} from '../../../../utils/index'
import {TechnologyData} from './data/technologies'

const AnimatingOpacity = styled.div`

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
  selectedIconName?: string
}

export default (props: Props) => {

  const {technology: {title, logoName, logoColor, logoWidth, logoHeight, backgroundColor}, onClick, className} = props
  const {technology} = props

  let iconElement: JSX.Element
  if (props.selectedIconName) {
    iconElement = (
      <Icon
          src={require(`../../../../assets/icons/docs/${props.selectedIconName}.svg`)}
          color={logoColor}
          height={logoWidth}
          width={logoHeight}
      />
    )
  } else {
    iconElement = (
      <Icon
          src={require(`../../../../assets/icons/docs/${logoName}.svg`)}
          color={logoColor}
          height={logoWidth}
          width={logoHeight}
      />
    )
  }

  return (
    <div
      className={cx($p.flex, $p.flexColumn, $p.itemsCenter, $p.pointer, $p.mr25, className)}
      onClick={() => onClick(technology)}
    >
      <Circle
        className={cx($p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}
        style={{background: `${backgroundColor}`}}>
        {iconElement}
      </Circle>
      <div className={cx($p.flex, $p.black60, $p.f20, $p.fw6, $p.mt25)}>
        {title}
      </div>
    </div>
  )
}
