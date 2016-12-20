import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import styled from 'styled-components'

interface Props {
  background: string
  source: string
}
const Circle = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
`

export default class CircleIcon extends React.Component<Props, {}> {

  render() {
    return (
      <Circle
        style={{background: this.props.background}}
        className={cx($p.flex, $p.itemsCenter, $p.justifyCenter, $p.mt4)}
      >
        <img
          src={this.props.source}
          width={25}
          height={25}
        />
      </Circle>
    )
  }
}
