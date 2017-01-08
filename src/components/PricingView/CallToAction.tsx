import * as React from 'react'
import { $p, $v, $g } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'


const Box = styled.div`
  max-width: 1202px;
`

export default class CallToAction extends React.Component<{}, {}> {
  render() {
    return (
      <div className={cx($p.flex, $p.bgWhite, $p.justifyAround)} style={{height: 180}}>
        <Box className={cx($p.flex, $p.flexColumn, $p.pt60, $p.ph60, $p.bgrRed)}>
          
          {/* FIRST COLUMN */}
          <div className={cx()}>
            <div>Ready to get started?</div>
            <div>Setup your own GraphQL backend in less than 5 minutes.</div>
          </div>


          {/* SECOND COLUMN */}
          <div className={cx($p.flex, $p.flexColumn, $p.justifyEnd)}>
            <div>className={cx($g.uppercaseButton, $p.bgGreen, $p.white)}>Sign up</div>
            <div>className={cx($g.uppercaseButton, $p.bgGreen, $p.white)}>Talk to sales</div>
          </div>
        </Box>
      </div>
    )
  }
}
