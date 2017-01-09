import * as React from 'react'
import {$p, $v, $g, Icon} from 'graphcool-styles'
import * as cx from 'classnames'
import SectionHeader from '../SectionHeader'
import styled from 'styled-components'
import PricingDimension from './PricingDimension'

const Box = styled.div`
  max-width: 1202px;
`

const Circle = styled.div`
  width: 24px;
  height: 24px;
`

export default class PlanCols extends React.Component<{}, {}> {
  render() {
    return (
      <div className={cx($p.flex, $p.flexColumn, $p.bgWhite)} style={{height: 920}}>
        <SectionHeader
          headline='Flexible, transparent pricing'
          copy='Get started for free and pay as you go. Cheaper than self-hosted solutions.'
        />
        <Box className={cx($p.flex)}>

          {/* FIRST COLUMN */}
          <div className={cx($p.flex, $p.flexColumn, $p.ba, $p.bBlack10, $p.br2, $p.pa25, $p.mh10)}>

            {/* TITLE */}
            <div className={cx($p.green, $p.f14, $p.ttu, $p.mt25)}>Startup</div>
            <div className={cx($p.flex, $p.pb38)}>
              <div className={cx($p.f25, $p.green)}>$</div>
              <div className={cx($p.f38, $p.green)}>49</div>
              <div className={cx($p.f25, $p.lightgreen50, $p.pl10)}>/mo</div>
            </div>

            {/* CARD 1 */}
            <div className={cx($p.flex)}>
              <div>
                <Circle className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                  <Icon
                    src={require('../../assets/icons/pricing/graph.svg')}
                    color={$v.green}
                    height={22}
                    width={9}
                  />
                </Circle>
              </div>
              <div className={cx($p.flex, $p.flexColumn, $p.ml25)}>
                <div className={cx($p.black60, $p.f16, $p.fw6, $p.mb4)}>100,000</div>
                <a href='' className={cx($p.green, $p.f14, $p.fw3)}>Nodes</a>
                <div className={cx($p.black60, $p.f12, $p.fw3, $p.mt10)}>90¢ / 1,000</div>
                <div className={cx($p.black60, $p.f12, $p.fw3)}>Additional Nodes</div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className={cx($p.flex, $p.mt25)}>
              <div>
                <Circle className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                  <Icon
                    src={require('../../assets/icons/pricing/operation.svg')}
                    color={$v.green}
                    height={22}
                    width={9}
                  />
                </Circle>
              </div>
              <div className={cx($p.flex, $p.flexColumn, $p.ml25)}>
                <div className={cx($p.black60, $p.f16, $p.fw6, $p.mb4)}>1,000,000</div>
                <div className={cx($p.flex)}>
                  <a href='' className={cx($p.green, $p.f14, $p.fw3)}>Operations </a>
                  <div className={cx($p.black60, $p.f14, $p.fw3, $p.pl4)}> / Month</div>
                </div>
                <div className={cx($p.black60, $p.f12, $p.fw3, $p.mt10)}>6¢ / 1,000</div>
                <div className={cx($p.black60, $p.f12, $p.fw3)}>Additional Operations</div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className={cx($p.flex, $p.mt25)}>
              <div>
                <Circle className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                  <Icon
                    src={require('../../assets/icons/pricing/seats.svg')}
                    color={$v.green}
                    height={22}
                    width={9}
                  />
                </Circle>
              </div>
              <div className={cx($p.black60, $p.f16, $p.ml25)}>5</div>
              <a href='' className={cx($p.green, $p.f16, $p.fw3, $p.pl4)}>Seats</a>
            </div>

            {/* CARD 4 */}
            <div className={cx($p.flex, $p.mt25, $p.mb60)}>
              <div>
                <Circle className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                  <Icon
                    src={require('../../assets/icons/pricing/support.svg')}
                    color={$v.green}
                    height={22}
                    width={9}
                  />
                </Circle>
              </div>
              <div className={cx($p.black60, $p.f16, $p.ml25)}>Email Support</div>
            </div>

            {/* CTA BUTTON */}
            <div className={cx($g.uppercaseButton, $p.bgGreen, $p.white, $p.ph60, $p.pv16, $p.mt60)}>Try it for free
            </div>
          </div>

          {/* SECOND COLUMN */}
          <div className={cx($p.flex, $p.flexColumn, $p.ba, $p.bBlack10, $p.br2, $p.pa25, $p.mh10)}>

            {/* TITLE */}
            <div className={cx($p.green, $p.f14, $p.ttu, $p.mt25)}>Growth</div>
            <div className={cx($p.flex, $p.pb38)}>
              <div className={cx($p.f25, $p.green)}>$</div>
              <div className={cx($p.f38, $p.green)}>249</div>
              <div className={cx($p.f25, $p.lightgreen50, $p.pl10)}>/mo</div>
            </div>

            {/* CARD 1 */}
            <div className={cx($p.flex)}>
              <div>
                <Circle className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                  <Icon
                    src={require('../../assets/icons/pricing/graph.svg')}
                    color={$v.green}
                    height={22}
                    width={9}
                  />
                </Circle>
              </div>
              <div className={cx($p.flex, $p.flexColumn, $p.ml25)}>
                <div className={cx($p.black60, $p.f16, $p.fw6, $p.mb4)}>1,000,000</div>
                <a href='' className={cx($p.green, $p.f14, $p.fw3)}>Nodes</a>
                <div className={cx($p.black60, $p.f12, $p.fw3, $p.mt10)}>45¢ / 1,000</div>
                <div className={cx($p.black60, $p.f12, $p.fw3)}>Additional Nodes</div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className={cx($p.flex, $p.mt25)}>
              <div>
                <Circle className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                  <Icon
                    src={require('../../assets/icons/pricing/operation.svg')}
                    color={$v.green}
                    height={22}
                    width={9}
                  />
                </Circle>
              </div>
              <div className={cx($p.flex, $p.flexColumn, $p.ml25)}>
                <div className={cx($p.black60, $p.f16, $p.fw6, $p.mb4)}>10,000,000</div>
                <div className={cx($p.flex)}>
                  <a href='' className={cx($p.green, $p.f14, $p.fw3)}>Operations </a>
                  <div className={cx($p.black60, $p.f14, $p.fw3, $p.pl4)}> / Month</div>
                </div>
                <div className={cx($p.black60, $p.f12, $p.fw3, $p.mt10)}>3¢ / 1,000</div>
                <div className={cx($p.black60, $p.f12, $p.fw3)}>Additional Operations</div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className={cx($p.flex, $p.mt25)}>
              <div>
                <Circle className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                  <Icon
                    src={require('../../assets/icons/pricing/seats.svg')}
                    color={$v.green}
                    height={22}
                    width={9}
                  />
                </Circle>
              </div>
              <div className={cx($p.black60, $p.f16, $p.ml25)}>10</div>
              <a href='' className={cx($p.green, $p.f16, $p.fw3, $p.pl4)}>Seats</a>
            </div>

            {/* CARD 4 */}
            <div className={cx($p.flex, $p.mt25, $p.mb60)}>
              <div>
                <Circle className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                  <Icon
                    src={require('../../assets/icons/pricing/support.svg')}
                    color={$v.green}
                    height={22}
                    width={9}
                  />
                </Circle>
              </div>
              <div className={cx($p.black60, $p.f16, $p.ml25)}>Chat Support</div>
            </div>

            {/* CTA BUTTON */}
            <div className={cx($g.uppercaseButton, $p.bgGreen, $p.white, $p.ph60, $p.pv16, $p.mt60)}>Try it for free
            </div>
          </div>

          {/* THIRD COLUMN */}
          <div className={cx($p.flex, $p.flexColumn, $p.ba, $p.bBlack10, $p.br2, $p.pa25, $p.mh10)}>

            {/* TITLE */}
            <div className={cx($p.green, $p.f14, $p.ttu, $p.mt25)}>Pro</div>
            <div className={cx($p.flex, $p.pb38)}>
              <div className={cx($p.f25, $p.green)}>$</div>
              <div className={cx($p.f38, $p.green)}>849</div>
              <div className={cx($p.f25, $p.lightgreen50, $p.pl10)}>/mo</div>
            </div>

            {/* CARD 1 */}
            <div className={cx($p.flex)}>
              <div>
                <Circle className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                  <Icon
                    src={require('../../assets/icons/pricing/graph.svg')}
                    color={$v.green}
                    height={22}
                    width={9}
                  />
                </Circle>
              </div>
              <div className={cx($p.flex, $p.flexColumn, $p.ml25)}>
                <div className={cx($p.black60, $p.f16, $p.fw6, $p.mb4)}>5,000,000</div>
                <a href='' className={cx($p.green, $p.f14, $p.fw3)}>Nodes</a>
                <div className={cx($p.black60, $p.f12, $p.fw3, $p.mt10)}>30¢ / 1,000</div>
                <div className={cx($p.black60, $p.f12, $p.fw3)}>Additional Nodes</div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className={cx($p.flex, $p.mt25)}>
              <div>
                <Circle className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                  <Icon
                    src={require('../../assets/icons/pricing/operation.svg')}
                    color={$v.green}
                    height={22}
                    width={9}
                  />
                </Circle>
              </div>
              <div className={cx($p.flex, $p.flexColumn, $p.ml25)}>
                <div className={cx($p.black60, $p.f16, $p.fw6, $p.mb4)}>50,000,000</div>
                <div className={cx($p.flex)}>
                  <a href='' className={cx($p.green, $p.f14, $p.fw3)}>Operations </a>
                  <div className={cx($p.black60, $p.f14, $p.fw3, $p.pl4)}> / Month</div>
                </div>
                <div className={cx($p.black60, $p.f12, $p.fw3, $p.mt10)}>2¢ / 1,000</div>
                <div className={cx($p.black60, $p.f12, $p.fw3)}>Additional Operations</div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className={cx($p.flex, $p.mt25)}>
              <div>
                <Circle className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                  <Icon
                    src={require('../../assets/icons/pricing/seats.svg')}
                    color={$v.green}
                    height={22}
                    width={9}
                  />
                </Circle>
              </div>
              <div className={cx($p.black60, $p.f16, $p.ml25)}>Unlimited</div>
              <a href='' className={cx($p.green, $p.f16, $p.fw3, $p.pl4)}>Seats</a>
            </div>

            {/* CARD 4 */}
            <div className={cx($p.flex, $p.mt25, $p.mb60)}>
              <div>
                <Circle className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                  <Icon
                    src={require('../../assets/icons/pricing/support.svg')}
                    color={$v.green}
                    height={22}
                    width={9}
                  />
                </Circle>
              </div>
              <div className={cx($p.black60, $p.f16, $p.ml25)}>Phone Support</div>
            </div>



            {/* CTA BUTTON */}
            <div className={cx($g.uppercaseButton, $p.bgGreen, $p.white, $p.ph60, $p.pv16, $p.mt60)}>Try it for free
            </div>
          </div>

          {/* FOURTH COLUMN */}
          <div className={cx($p.flex, $p.flexColumn, $p.bgGreen, $p.br2, $p.pa25, $p.mh10)}>

            {/* TITLE */}
            <div className={cx($p.white, $p.f14, $p.ttu, $p.mt25)}>Enterprise</div>
 
            <div>
              <Icon
                src={require('../../assets/icons/pricing/enterprise.svg')}
                color={$v.green}
                height={85}
                width={73}
              />
            </div>


            <PricingDimension
              icon={require('../../assets/icons/pricing/unlimited.svg')}
              width={20}
              height={11}
            >
              <span className={cx($p.white, $p.f16, $p.fw3)}>Unlimited Nodes, Operations and Seats</span>&nbsp;
            </PricingDimension>
 
            <PricingDimension
              icon={require('../../assets/icons/pricing/protect.svg')}
              width={16}
              height={20}
            >
              <span className={cx($p.white, $p.f16, $p.fw3)}>Dedicated Infrastructure Multi-Datacenter</span>&nbsp;
            </PricingDimension>

            <PricingDimension
              icon={require('../../assets/icons/pricing/star.svg')}
              width={20}
              height={19}
            >
              <span className={cx($p.white, $p.f16, $p.fw3)}>Dedicated Customer Solution Architects</span>&nbsp;
            </PricingDimension>

            <PricingDimension
              icon={require('../../assets/icons/pricing/sla.svg')}
              width={21}
              height={14}
            >
              <span className={cx($p.white, $p.f16, $p.fw3)}>Enterprise-class Service Level Agreement</span>&nbsp;
            </PricingDimension>

            {/* CTA BUTTON */}
            <div className={cx($g.uppercaseButton, $p.bgWhite, $p.green, $p.ph60, $p.pv16, $p.mt60)}>Talk to sales</div>
          </div>



        </Box>
      </div>
    )
  }
}
