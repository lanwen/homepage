import * as React from 'react'
import { $p, $v, Icon } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'

interface Props {
  icon: string
  height: number
  width: number
  circleDiameter?: string
  circleClassName?: string
  className?: string
  children?: JSX.Element
}

export default (props: Props) => {

  const circleDiameter = props.circleDiameter || '24'
  const Circle = styled.div`
    width: ${circleDiameter}px;
    height: ${circleDiameter}px;
    flex: 0 0 ${circleDiameter}px;
  `

  const circleClassName = props.circleClassName ? props.circleClassName : $p.bgGreen20

  return (
    <div className={cx($p.flex, props.className, $p.itemsCenter, $p.justifyCenter)}>
      <Circle className={cx(circleClassName, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter, $p.mr16)}>
        <Icon
          src={props.icon}
          color={$v.green}
          height={props.height}
          width={props.width}
        />
      </Circle>
      <div>
        {props.children}
      </div>
    </div>
  )

}
