import * as React from 'react'
import {$p, $v, $g} from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import {breakpoints} from '../../utils/constants'

const Box = styled.div`
  max-width: 1202px;
`

export default class CallToAction extends React.Component<{}, {}> {
  render() {
    return (

      <Box className={cx(
        $p.flex,
        window.innerWidth < breakpoints.p750 ? $p.flexColumn : $p.flexRow,
        window.innerWidth < breakpoints.p750 ? $p.pv38 : $p.pv60,
        $p.ph60,
        $p.justifyBetween,
        $p.center,
      )}>

        {/* FIRST COLUMN */}
        <div className={cx($p.flex, $p.flexColumn, $p.contentStart)}>
          <div className={cx(
            $p.green,
            $p.f25,
            $v.gray60,
          )}>
            Ready to get started?
          </div>
          <div className={cx(window.innerWidth < breakpoints.p750 && $p.mv16)}>
            Setup your own GraphQL backend in less than 5 minutes.
          </div>
        </div>

        {/* SECOND COLUMN */}
        <div className={cx($p.flex, $p.pv6, $p.itemsCenter)}>
          <a
            className={cx($g.uppercaseButton, $p.bgGreen, $p.white, $p.tc, $p.noUnderline)}
            href='https://console.graph.cool/signup'
          >Sign up</a>
          <a
            className={cx($g.uppercaseButton, $p.bgWhite, $p.green, $p.tc, $p.ba, $p.bGreen, $p.ml10, $p.noUnderline)}
            href='mailto:sales@graph.cool'
          >
            Talk to sales
          </a>
        </div>

      </Box>
    )
  }
}
