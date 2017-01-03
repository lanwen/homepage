import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'

const WhiteSquare = styled.div `
  margin-bottom: -${$v.size38};
  box-shadow:0 8px 18px rgba(0, 0, 0, 0.1), 0 -8px 18px rgba(0, 0, 0, 0.1);
`

export default class GoToAPI extends React.Component<{}, {}> {
  render() {
    return (
      <div
        className=
          {cx($p.bgLightgreen10, $p.flex, $p.pa25, $p.flexWrap, $p.flexColumn, $p.justifyCenter, $p.itemsCenter)}
      >
        <div className={cx($p.green, $p.f14, $p.fw4)}>There’s a corresponding <br/>Article for the Relay API</div>
        <WhiteSquare
          className={cx($p.green, $p.bgWhite, $p.ttu, $p.ph38, $p.pv16, $p.f14, $p.fw6, $p.tc, $p.mt16)}>GO TO RELAY API
        </WhiteSquare>
      </div>
    )
  }
}
