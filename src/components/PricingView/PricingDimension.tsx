import * as React from 'react'
import { $p, $v, Icon } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'

// const Circle24 = styled.div`
//   width: 24px;
//   height: 24px;
//   flex: 0 0 24px;
// `

const Circle36 = styled.div`
  width: 36px;
  height: 36px;
  flex: 0 0 36px;
`

export enum CircleSize {
    SMALL,
    MEDIUM,
}

interface Props {
  icon: string
  height: number
  width: number
  circleDiameter?: string
  circleSize?: CircleSize
  circleClassName?: string
  className?: string
  children?: JSX.Element
}

export default (props: Props) => {

  const circleDiameter = props.circleDiameter ? props.circleDiameter : '24'
  const Circle = styled.div`
    width: ` + circleDiameter + `px;
    height: ` + circleDiameter + `px;
    flex: 0 0 ` + circleDiameter + `px;
  `

  const Circle24 = styled.div`
    width: 24px;
    height: 24px;
    flex: 0 0 24px;
  `
  const circleClassName = props.circleClassName ? props.circleClassName : $p.bgGreen20
  const circleSize = props.circleSize ? props.circleSize : CircleSize.SMALL

  if (circleDiameter === '24') {
    return (
      <div className={cx($p.flex, props.className, $p.itemsCenter, $p.justifyCenter)}>
        <Circle24 className={cx(circleClassName, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter, $p.mr16)}>
          <Icon
            src={props.icon}
            color={$v.green}
            height={props.height}
            width={props.width}
          />
        </Circle24>
        <div>
          {props.children}
        </div>
      </div>
    )
  }

  return (
    <div className={cx($p.flex, props.className, $p.itemsCenter, $p.justifyCenter)}>
      <Circle36 className={cx(circleClassName, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter, $p.mr16)}>
        <Icon
          src={props.icon}
          color={$v.green}
          height={props.height}
          width={props.width}
        />
      </Circle36>
      <div>
        {props.children}
      </div>
    </div>
  )

}
