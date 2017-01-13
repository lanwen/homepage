import * as React from 'react'
import { $p, $g } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import SectionHeader from '../SectionHeader'
import PricingDimension from './PricingDimension'
import { breakpoints } from '../../utils/constants'
import Tooltip from './Tooltip'
import { tooltips } from './text'

const Box = styled.div`
  max-width: 685px;
  
  @media (max-width: ${breakpoints.p750}px) {
    flex-direction: column;
  }
`

export default class FreePlan extends React.Component<{}, {}> {
  render() {
    return (
      <div className={cx($p.flex, $p.flexColumn)}>
        <SectionHeader
          headline='Graphcool is free during development'
          copy='Get your own GraphQL backend in under 5 minutes - free forever.'
        />
        <Box
          className={cx(
            $p.flex,
            $p.justifyBetween,
            $p.itemsCenter,
            $p.bgWhite,
            $p.ba,
            $p.bBlack05,
            $p.br2,
            $p.mb60,
            $p.mhAuto,
            $p.ph38,
          )}
        >
          <div className={cx($p.flex, $p.flexColumn, $p.itemsCenter, $p.pa25)}>
            <div className={cx($p.green, $p.ttu, $p.f14)}>Developer</div>
            <div className={cx($p.green, $p.ttu, $p.f14, $p.fw6, $p.mb16)}>Free</div>
            <a
              className={cx($g.uppercaseButton, $p.bgGreen, $p.white, $p.ph60, $p.pv16, $p.noUnderline)}
              href='https://console.graph.cool/signup'
            >Sign up</a>
          </div>
          <div className={cx($p.flex, $p.flexNone, $p.pv25, $p.ph38)}>
            {/* FIRST COLUMN (nodes + seats)*/}
            <div className={cx($p.flex, $p.flexColumn, $p.itemsStart, $p.justifyBetween, $p.mr60)}>
              <PricingDimension
                icon={require('../../assets/icons/pricing/graph.svg')}
                width={12}
                height={12}
                className={cx($p.mb25)}
              >
                <div className={cx($p.f16, $p.black60, $p.fw6)}>10,000</div>
                <Tooltip text={tooltips.NODE}>
                  <div className={cx($p.f14, $p.fw3, $p.green, $p.underline)}>Nodes</div>
                </Tooltip>
              </PricingDimension>
              <PricingDimension
                icon={require('../../assets/icons/pricing/seats.svg')}
                width={12}
                height={8}
              >
                <div className={cx($p.flex)}>
                  <span className={cx($p.f16, $p.black60)}>2</span>&nbsp;
                  <Tooltip text={tooltips.SEAT}>
                    <span className={cx($p.f14, $p.fw3, $p.green, $p.underline)}>seats</span>
                  </Tooltip>
                </div>
              </PricingDimension>
            </div>

            {/* SECOND COLUMN (operations + support)*/}
            <div className={cx($p.flex, $p.flexColumn, $p.itemsStart)}>
              <PricingDimension
                icon={require('../../assets/icons/pricing/operation.svg')}
                className={cx($p.mb25)}
                width={7}
                height={10}
              >
                <div className={cx($p.f16, $p.black60, $p.fw6)}>100,000</div>
                <div className={cx($p.flex, $p.itemsEnd)}>
                  <Tooltip text={tooltips.OPERATION}>
                    <span className={cx($p.f14, $p.fw3, $p.green, $p.underline)}>Operations</span>
                  </Tooltip>
                  <span className={cx($p.f14, $p.fw3, $p.black60, $p.ml4)}> / Month</span>
                </div>
              </PricingDimension>
              <PricingDimension
                icon={require('../../assets/icons/pricing/support.svg')}
                width={10}
                height={10}
              >
                <span className={cx($p.f14, $p.black80)}>Community Support</span>
              </PricingDimension>
            </div>
          </div>
        </Box>
      </div>
    )
  }
}
