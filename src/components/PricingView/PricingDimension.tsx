import * as React from 'react'
import { $p, $v, Icon } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'

const Circle = styled.div`
  width: 24px;
  height: 24px;
`

interface Props {
  icon: string
  className?: string
  children?: JSX.Element
}

export default (props: Props) => (
  <div className={cx($p.flex, props.className)}>
    <Circle className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter, $p.mr16)}>
      <Icon
        src={props.icon}
        color={$v.green}
        height={12}
        width={12}
      />
    </Circle>
    <div>
      {props.children}
    </div>
  </div>
)
