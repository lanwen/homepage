import * as React from 'react'
import {$p, $v, $g} from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'

const Box = styled.div`
  max-width: 1202px;
`

export default class CallToAction extends React.Component<{}, {}> {
  render() {
    return (
      <Box className={cx($p.flex, $p.pv60, $p.ph60, $p.justifyBetween, $p.center)}>

        {/* FIRST COLUMN */}
        <div className={cx($p.flex, $p.flexColumn, $p.contentStart)}>
          <div className={cx($p.green, $p.f25, $v.gray60)}>Ready to get started?</div>
          <div>Setup your own GraphQL backend in less than 5 minutes.
          </div>
        </div>

        {/* SECOND COLUMN */}
        <div className={cx($p.flex, $p.pv6, $p.itemsCenter)}>
          <div className={cx($g.uppercaseButton, $p.bgGreen, $p.white, $p.tc)}>Sign up</div>
          <div className={cx($g.uppercaseButton, $p.bgWhite, $p.green, $p.tc, $p.ba, $p.bGreen, $p.ml10)}>
            Talk to sales
          </div>
        </div>

      </Box>
    )
  }
}
