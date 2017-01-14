import * as React from 'react'
import { $p, $v, $g, Icon } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import 'rc-slider/assets/index.css'
import OperationsOverview from './OperationsOverview'
import PricingInfo from './PricingInfo'

const Box = styled.div`
  max-width: 1202px;
`

const Circle80 = styled.div`
  width: 80px;
  height: 80px;
  flex: 0 0 80px;
`

const Circle36 = styled.div`
  width: 36px;
  height: 36px;
`

export default class Info extends React.Component<{}, {}> {
  render() {

    return (
      <div className={cx($p.bgDarkBlue, $p.pb60)} style={{marginTop: -49}}>
        <Box className={cx($p.flex, $p.flexColumn, $p.justifyBetween, $p.center)}>

          <PricingInfo/>

          {/* TITLE */}
          <h2 className={cx($p.white, $p.fw3, $p.tc, $p.pt38)}>Included in every plan</h2>

          <div className={cx($p.flex, $p.flexColumn, $p.ph25, $p.mt96)}>

            <div className={cx($p.bb, $p.bWhite30, $p.pb38, $p.ph38)}>
              <div className={cx($p.flex)}>
                <Circle80 className={cx($p.bgWhite30, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter, $p.mr25)}>
                  <Icon
                    src={require('../../assets/icons/pricing/download.svg')}
                    color={$v.darkBlue}
                    height={34}
                    width={28}
                  />
                </Circle80>
                <div className={cx($p.flex, $p.flexColumn, $p.mh25)}>
                  <div className={cx($p.white, $p.f16, $p.fw6)}>File Storage</div>
                  <div className={cx($p.white80, $p.f14, $p.mt10)}>
                    Graphcool has an integrated file management system. Easily store
                    and display your users profile pictures, attachments or any other files.
                    Basic usage is free and for more demanding projects you are billed in increments
                    of 50¢ / GB / month for additional storage and file transfer.
                  </div>
                </div>
                <div className={cx($p.flex, $p.flexColumn, $p.justifyEnd, $p.ml60)}>
                  <div className={cx($p.lightBlue, $p.tr, $p.fw6, $p.nowrap)}>Included for free:</div>
                  <div className={cx($p.lightBlue, $p.tr, $p.nowrap)}>10 GB Volume</div>
                  <div className={cx($p.lightBlue, $p.tr, $p.nowrap)}>10 GB / mo Traffic</div>
                </div>
              </div>
            </div>

            <div className={cx($p.bb, $p.bWhite30, $p.pb38, $p.ph38, $p.mt38)}>
              <div className={cx($p.flex)}>
                <Circle80 className={cx($p.bgWhite30, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter, $p.mr25)}>
                  <Icon
                    src={require('../../assets/icons/pricing/graphql.svg')}
                    color={$v.darkBlue}
                    height={34}
                    width={34}
                  />
                </Circle80>
                <div className={cx($p.flex, $p.flexColumn, $p.mh25)}>
                  <div className={cx($p.white, $p.f16, $p.fw6)}>Powerful GraphQL API</div>
                  <div className={cx($p.white80, $p.f14, $p.mt10)}>
                    Every plan comes with a powerful and developer-friendly GraphQL API.<br />
                    Included features: Subscriptions, data filtering & ordering, pagination,
                    CRUD mutations, nested mutations.
                  </div>
                </div>
              </div>
            </div>

            <div className={cx($p.bb, $p.bWhite30, $p.pb38, $p.ph38, $p.mt38)}>
              <div className={cx($p.flex)}>
                <Circle80 className={cx($p.bgWhite30, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter, $p.mr25)}>
                  <Icon
                    className={cx($p.ml6)}
                    src={require('../../assets/icons/pricing/integrations.svg')}
                    color={$v.darkBlue}
                    height={34}
                    width={34}
                  />
                </Circle80>
                <div className={cx($p.flex, $p.flexColumn, $p.mh25)}>
                  <div className={cx($p.white, $p.f16, $p.fw6)}>Unlimited Integrations</div>
                  <div className={cx($p.white80, $p.f14, $p.mt10)}>
                    Integrations are a powerful way to add functionality to your project.<br />
                    For example, you can use Auth0 to add Social Login or set up
                    a sophisticated search engine with Algolia.
                  </div>
                </div>
              </div>
            </div>

            <div className={cx($p.flex, $p.justifyCenter, $p.mt38)}>
              <a
                className={cx($g.uppercaseButton, $p.bgBlue, $p.white, $p.tc, $p.ph38, $p.pv16, $p.noUnderline)}
                href='/'
              >All features</a>
            </div>

          </div>
        </Box>
      </div>
    )
  }
}
