import * as React from 'react'
import { $p, $g, $v, Icon } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import SectionHeader from '../SectionHeader'

const Box = styled.div`
  max-width: 885px;
`

const Circle = styled.div`
  width: 24px;
  height: 24px;
`

export default class FreePlan extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <SectionHeader
          headline='Graphcool is free during development'
          copy='Get started for free and pay as you go. Cheaper than self-hosted solutions.'
        />
        <Box className={cx($p.flex, $p.justifyBetween, $p.bgWhite, $p.ba, $p.bBlack05, $p.br2, $p.mb38, $p.ph60, $p.pv25)}>
          <div className={cx($p.flex, $p.flexColumn, $p.itemsCenter)}>
            <div className={cx($p.green, $p.ttu, $p.f14)}>Developer</div>
            <div className={cx($p.green, $p.ttu, $p.f14, $p.fw6, $p.mb16)}>Free</div>
            <div className={cx($g.uppercaseButton, $p.bgGreen, $p.white, $p.ph60, $p.pv16)}>Sign up</div>
          </div>
          <div className={cx($p.flex)}>
            <div className={cx()}>
              <div>
                <Circle className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                  <Icon
                    src={require('../../assets/icons/pricing/graph.svg')}
                    color={$v.green}
                    height={12}
                    width={12}
                  />
                </Circle>
                <div>10,000</div>
                <div>Nodes</div>
              </div>
              <div>
                <div>2 seats</div>
              </div>
            </div>
            <div className={cx()}>
              <div>
                <div>10,000</div>
                <div>Nodes</div>
              </div>
              <div>
                <div>2 seats</div>
              </div>
            </div>
          </div>
        </Box>
      </div>
    )
  }
}
