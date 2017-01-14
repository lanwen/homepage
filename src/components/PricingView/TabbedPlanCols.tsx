import * as React from 'react'
import {$p, $v, $g, Icon} from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import TabBar from './TabBar'
import Tooltip from './Tooltip'
import {tooltips} from './text'
import PricingDimension from './PricingDimension'

const Container = styled.div`
  
`

const Column = styled.div`
  
`

const Circle24 = styled.div`
  width: 24px;
  height: 24px;
`

interface State {
  selectedTabIndex: number
}

export default class TabbedPlanCols extends React.Component<{}, State> {

  constructor(props) {
    super(props)

    this.state = {
      selectedTabIndex: 0,
    }
  }

  render() {
    return (
      <Container className={cx($p.flex, $p.flexColumn)}>
        <TabBar
          onClick={(index) => this.setState({ selectedTabIndex: index })}
          selectedTabIndex={this.state.selectedTabIndex} />
        {this.columnForIndex(this.state.selectedTabIndex)}
      </Container>
    )
  }

  private columnForIndex(index: number): JSX.Element {

    let column: JSX.Element

    switch (index) {
      case 0:
        column = (

          // {/* FIRST COLUMN - Startup */}
          <Column className={cx($p.flex, $p.flexColumn, $p.justifyBetween, $p.bgWhite, $p.ba, $p.bBlack10, $p.br2)}>
            <div className={cx($p.flex, $p.justifyCenter)}>
              <div className={cx($p.flex, $p.flexColumn, $p.justifyStart)}>
                {/*TITLE */}
                <div className={cx($p.green, $p.f14, $p.ttu, $p.tc, $p.mt25)}>Startup</div>
                <div className={cx($p.flex, $p.justifyCenter, $p.itemsEnd, $p.pb38)}>
                  <div className={cx($p.f25, $p.green, $p.pb6)}>$</div>
                  <div className={cx($p.f38, $p.green, $p.ph4)}>49</div>
                  <div className={cx($p.f25, $p.lightgreen50, $p.pb6)}>/mo</div>
                </div>
                {/*CARD 1 */}
                <div className={cx($p.flex)}>
                  <div>
                    <Circle24 className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                      <Icon
                        src={require('../../assets/icons/pricing/graph.svg')}
                        color={$v.green}
                        height={12}
                        width={12}
                      />
                    </Circle24>
                  </div>
                  <div className={cx($p.flex, $p.flexColumn, $p.ml25)}>
                    <div className={cx($p.black60, $p.f16, $p.fw6, $p.mb4)}>100,000</div>
                    <div>
                      <Tooltip text={tooltips.NODE}>
                        <div className={cx($p.green, $p.f14, $p.fw3, $p.underline)}>Nodes</div>
                      </Tooltip>
                    </div>
                    <div className={cx($p.black60, $p.f12, $p.fw3, $p.mt10)}>90¢ / 1,000</div>
                    <div className={cx($p.black60, $p.f12, $p.fw3)}>Additional Nodes</div>
                  </div>
                </div>
                {/* CARD 2 */}
                <div className={cx($p.flex, $p.mt25)}>
                  <div>
                    <Circle24 className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                      <Icon
                        src={require('../../assets/icons/pricing/operation.svg')}
                        color={$v.green}
                        height={10}
                        width={7}
                      />
                    </Circle24>
                  </div>
                  <div className={cx($p.flex, $p.flexColumn, $p.ml25)}>
                    <div className={cx($p.black60, $p.f16, $p.fw6, $p.mb4)}>1,000,000</div>
                    <div className={cx($p.flex)}>
                      <Tooltip text={tooltips.OPERATION}>
                        <div className={cx($p.green, $p.f14, $p.fw3, $p.underline)}>Operations</div>
                      </Tooltip>
                      <div className={cx($p.black60, $p.f14, $p.fw3, $p.pl4)}> / Month</div>
                    </div>
                    <div className={cx($p.black60, $p.f12, $p.fw3, $p.mt10)}>6¢ / 1,000</div>
                    <div className={cx($p.black60, $p.f12, $p.fw3)}>Additional Operations</div>
                  </div>
                </div>
                {/* CARD 3 */}
                <div className={cx($p.flex, $p.mt25)}>
                  <div>
                    <Circle24 className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                      <Icon
                        src={require('../../assets/icons/pricing/seats.svg')}
                        color={$v.green}
                        height={8}
                        width={12}
                      />
                    </Circle24>
                  </div>
                  <div className={cx($p.black60, $p.f16, $p.ml25)}>5</div>
                  <Tooltip text={tooltips.SEAT}>
                    <div className={cx($p.green, $p.f16, $p.fw3, $p.pl4, $p.underline)}>Seats</div>
                  </Tooltip>
                </div>
                {/* CARD 4 */}
                <div className={cx($p.flex, $p.mt25, $p.mb60)}>
                  <div>
                    <Circle24 className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                      <Icon
                        src={require('../../assets/icons/pricing/support.svg')}
                        color={$v.green}
                        height={10}
                        width={10}
                      />
                    </Circle24>
                  </div>
                  <div className={cx($p.black60, $p.f16, $p.ml25)}>Email Support</div>
                </div>
              </div>
            </div>
            {/* CTA BUTTON */}
            <a
              className={cx($g.uppercaseButton, $p.bgGreen, $p.white, $p.ph60, $p.pv16, $p.mt60, $p.noUnderline)}
              href='https://console.graph.cool/signup'
            >
              Try it for free
            </a>
          </Column>

        )
        break
      case 1:
        column = (

          // {/* SECOND COLUMN - Growth */}
          <Column className={cx($p.flex, $p.flexColumn, $p.justifyBetween, $p.bgWhite, $p.ba, $p.bBlack10, $p.br2)}>
            <div className={cx($p.flex, $p.justifyCenter)}>
              <div className={cx($p.flex, $p.flexColumn, $p.justifyStart)}>
              {/* MOST POPULAR */}
              {/*<div className={cx($p.flex, $p.justifyCenter, $p.relative)}>*/}
              {/*<div*/}
              {/*className={cx($p.white, $p.absolute, $p.f16, $p.fw6, $p.ttu, $p.tc, $p.br2, $p.ph10, $p.bgBlue)}*/}
              {/*style={{top: -38}}*/}
              {/*>*/}
              {/*Most popular*/}
              {/*</div>*/}
              {/*</div>*/}

              {/* TITLE */}
              <div className={cx($p.green, $p.f14, $p.ttu, $p.tc, $p.mt25)}>Growth</div>
              <div className={cx($p.flex, $p.justifyCenter, $p.itemsEnd, $p.pb38)}>
                <div className={cx($p.f25, $p.green, $p.pb6)}>$</div>
                <div className={cx($p.f38, $p.green, $p.ph4)}>249</div>
                <div className={cx($p.f25, $p.lightgreen50, $p.pb6)}>/mo</div>
              </div>

              {/* CARD 1 */}
              <div className={cx($p.flex)}>
                <div>
                  <Circle24 className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                    <Icon
                      src={require('../../assets/icons/pricing/graph.svg')}
                      color={$v.green}
                      height={12}
                      width={12}
                    />
                  </Circle24>
                </div>
                <div className={cx($p.flex, $p.flexColumn, $p.ml25)}>
                  <div className={cx($p.black60, $p.f16, $p.fw6, $p.mb4)}>1,000,000</div>
                  <div>
                    <Tooltip text={tooltips.NODE}>
                      <div className={cx($p.green, $p.f14, $p.fw3, $p.underline)}>Nodes</div>
                    </Tooltip>
                  </div>
                  <div className={cx($p.black60, $p.f12, $p.fw3, $p.mt10)}>45¢ / 1,000</div>
                  <div className={cx($p.black60, $p.f12, $p.fw3)}>Additional Nodes</div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className={cx($p.flex, $p.mt25)}>
                <div>
                  <Circle24 className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                    <Icon
                      src={require('../../assets/icons/pricing/operation.svg')}
                      color={$v.green}
                      height={10}
                      width={7}
                    />
                  </Circle24>
                </div>
                <div className={cx($p.flex, $p.flexColumn, $p.ml25)}>
                  <div className={cx($p.black60, $p.f16, $p.fw6, $p.mb4)}>10,000,000</div>
                  <div className={cx($p.flex)}>
                    <Tooltip text={tooltips.OPERATION}>
                      <div className={cx($p.green, $p.f14, $p.fw3, $p.underline)}>Operations</div>
                    </Tooltip>
                    <div className={cx($p.black60, $p.f14, $p.fw3, $p.pl4)}> / Month</div>
                  </div>
                  <div className={cx($p.black60, $p.f12, $p.fw3, $p.mt10)}>3¢ / 1,000</div>
                  <div className={cx($p.black60, $p.f12, $p.fw3)}>Additional Operations</div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className={cx($p.flex, $p.mt25)}>
                <div>
                  <Circle24 className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                    <Icon
                      src={require('../../assets/icons/pricing/seats.svg')}
                      color={$v.green}
                      height={8}
                      width={12}
                    />
                  </Circle24>
                </div>
                <div className={cx($p.black60, $p.f16, $p.ml25)}>10</div>
                <Tooltip text={tooltips.SEAT}>
                  <div className={cx($p.green, $p.f16, $p.fw3, $p.pl4, $p.underline)}>Seats</div>
                </Tooltip>
              </div>

              {/* CARD 4 */}
              <div className={cx($p.flex, $p.mt25, $p.mb60)}>
                <div>
                  <Circle24 className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                    <Icon
                      src={require('../../assets/icons/pricing/support.svg')}
                      color={$v.green}
                      height={10}
                      width={10}
                    />
                  </Circle24>
                </div>
                <div className={cx($p.black60, $p.f16, $p.ml25)}>Chat Support</div>
              </div>
            </div>
            </div>
            {/* CTA BUTTON */}
            <a
              className={cx($g.uppercaseButton, $p.bgGreen, $p.white, $p.ph60, $p.pv16, $p.mt60, $p.noUnderline)}
              href='https://console.graph.cool/signup'
            >
              Try it for free
            </a>
          </Column>

        )
        break
      case 2:
        column = (

          // {/* THIRD COLUMN - Pro */}
          <Column className={cx(
            $p.flex,
            $p.flexColumn,
            $p.justifyBetween,
            $p.bgWhite,
            $p.ba,
            $p.bBlack10,
            $p.br2,
            $p.pa25,
            $p.mh10,
          )}>
            <div className={cx($p.flex, $p.flexColumn, $p.justifyStart)}>
              {/* TITLE */}
              <div className={cx($p.green, $p.f14, $p.ttu, $p.tc, $p.mt25)}>Pro</div>
              <div className={cx($p.flex, $p.justifyCenter, $p.itemsEnd, $p.pb38)}>
                <div className={cx($p.f25, $p.green, $p.pb6)}>$</div>
                <div className={cx($p.f38, $p.green, $p.ph4)}>849</div>
                <div className={cx($p.f25, $p.lightgreen50, $p.pb6)}>/mo</div>
              </div>

              {/* CARD 1 */}
              <div className={cx($p.flex)}>
                <div>
                  <Circle24 className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                    <Icon
                      src={require('../../assets/icons/pricing/graph.svg')}
                      color={$v.green}
                      height={12}
                      width={12}
                    />
                  </Circle24>
                </div>
                <div className={cx($p.flex, $p.flexColumn, $p.ml25)}>
                  <div className={cx($p.black60, $p.f16, $p.fw6, $p.mb4)}>5,000,000</div>
                  <div>
                    <Tooltip text={tooltips.NODE}>
                      <div className={cx($p.green, $p.f14, $p.fw3, $p.underline)}>Nodes</div>
                    </Tooltip>
                  </div>
                  <div className={cx($p.black60, $p.f12, $p.fw3, $p.mt10)}>30¢ / 1,000</div>
                  <div className={cx($p.black60, $p.f12, $p.fw3)}>Additional Nodes</div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className={cx($p.flex, $p.mt25)}>
                <div>
                  <Circle24 className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                    <Icon
                      src={require('../../assets/icons/pricing/operation.svg')}
                      color={$v.green}
                      height={10}
                      width={7}
                    />
                  </Circle24>
                </div>
                <div className={cx($p.flex, $p.flexColumn, $p.ml25)}>
                  <div className={cx($p.black60, $p.f16, $p.fw6, $p.mb4)}>50,000,000</div>
                  <div className={cx($p.flex)}>
                    <Tooltip text={tooltips.OPERATION}>
                      <div className={cx($p.green, $p.f14, $p.fw3, $p.underline)}>Operations</div>
                    </Tooltip>
                    <div className={cx($p.black60, $p.f14, $p.fw3, $p.pl4)}> / Month</div>
                  </div>
                  <div className={cx($p.black60, $p.f12, $p.fw3, $p.mt10)}>2¢ / 1,000</div>
                  <div className={cx($p.black60, $p.f12, $p.fw3)}>Additional Operations</div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className={cx($p.flex, $p.mt25)}>
                <div>
                  <Circle24 className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                    <Icon
                      src={require('../../assets/icons/pricing/seats.svg')}
                      color={$v.green}
                      height={8}
                      width={12}
                    />
                  </Circle24>
                </div>
                <div className={cx($p.black60, $p.f16, $p.ml25)}>Unlimited</div>
                <Tooltip text={tooltips.SEAT}>
                  <div className={cx($p.green, $p.f16, $p.fw3, $p.pl4, $p.underline)}>Seats</div>
                </Tooltip>
              </div>

              {/* CARD 4 */}
              <div className={cx($p.flex, $p.mt25)}>
                <div>
                  <Circle24 className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                    <Icon
                      src={require('../../assets/icons/pricing/support.svg')}
                      color={$v.green}
                      height={10}
                      width={10}
                    />
                  </Circle24>
                </div>
                <div className={cx($p.black60, $p.f16, $p.ml25)}>Phone Support</div>
              </div>

              {/* CARD 5 */}
              <div className={cx($p.flex, $p.mt25, $p.mb60)}>
                <div>
                  <Circle24 className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                    <Icon
                      src={require('../../assets/icons/pricing/workshop.svg')}
                      color={$v.green}
                      height={12}
                      width={15}
                    />
                  </Circle24>
                </div>
                <div className={cx($p.black60, $p.f16, $p.ml25)}>1:1 Workshops</div>
              </div>
                </div>
            </div>
            {/* CTA BUTTON */}
            <a
              className={cx($g.uppercaseButton, $p.bgGreen, $p.white, $p.ph60, $p.pv16, $p.mt60, $p.noUnderline)}
              href='https://console.graph.cool/signup'
            >
              Try it for free
            </a>
          </Column>

        )
        break
      case 3:
        column = (

          // {/* FOURTH COLUMN - Enterprise */}
          <Column className={cx($p.flex, $p.flexColumn, $p.justifyBetween, $p.bgGreen, $p.br2)}>

            {/* TITLE */}
            <div className={cx($p.white, $p.f14, $p.ttu, $p.tc, $p.mt25)}>Enterprise</div>

            <div className={cx($p.flex, $p.justifyCenter, $p.mt16)}>
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
              circleDiameter={'36'}
              circleClassName={$p.bgWhite20}
              className={cx($p.mv4)}
            >
              <span className={cx($p.white, $p.f16, $p.fw3)}>Unlimited Nodes, Operations and Seats</span>&nbsp;

            </PricingDimension>

            <PricingDimension
              icon={require('../../assets/icons/pricing/protect.svg')}
              width={16}
              height={20}
              circleDiameter={'36'}
              circleClassName={$p.bgWhite20}
              className={cx($p.mv4)}
            >
              <span className={cx($p.white, $p.f16, $p.fw3)}>Dedicated Infrastructure Multi-Datacenter</span>&nbsp;
            </PricingDimension>

            <PricingDimension
              icon={require('../../assets/icons/pricing/star.svg')}
              width={20}
              height={19}
              circleDiameter={'36'}
              circleClassName={$p.bgWhite20}
              className={cx($p.mv4)}
            >
              <span className={cx($p.white, $p.f16, $p.fw3)}>Dedicated Customer Solution Architect</span>&nbsp;
            </PricingDimension>

            <PricingDimension
              icon={require('../../assets/icons/pricing/sla.svg')}
              width={21}
              height={14}
              circleDiameter={'36'}
              circleClassName={$p.bgWhite20}
              className={cx($p.mv4)}
            >
              <span className={cx($p.white, $p.f16, $p.fw3)}>Enterprise-class Service Level Agreement</span>&nbsp;
            </PricingDimension>

            {/* CTA BUTTON */}
            <a
              className={cx($g.uppercaseButton, $p.bgWhite, $p.green, $p.ph60, $p.pv16, $p.mt60, $p.noUnderline)}
              href='mailto:sales@graph.cool'
            >
              Talk to sales
            </a>
          </Column>

        )
        break
      default:
        column = (
          <div>Not available</div>
        )
        break
    }
    return column
  }
}
