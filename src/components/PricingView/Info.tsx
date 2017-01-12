import * as React from 'react'
import { $p, $v, $g, Icon } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import OperationSlider from './OperationSliderCard'
import 'rc-slider/assets/index.css'
import OperationsOverview from './OperationsOverview'

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

          {/* CONTAINER FOR TWO COLUMNS */}
          <div className={cx($p.flex, $p.justifyBetween, $p.pv38, $p.ph38, $p.mt96)}>

            {/* FIRST COLUMN */}
            <div className={cx($p.flex, $p.flex1, $p.flexColumn, $p.pr60)}>
              <div className={cx($p.flex, $p.justifyCenter, $p.itemsCenter)}>
                <div>
                  <Circle36 className={cx($p.bgWhite20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                    <Icon
                      src={require('../../assets/icons/pricing/graph_white.svg')}
                      color={$v.white}
                      height={17}
                      width={17}
                    />
                  </Circle36>
                </div>
                <div className={cx($p.white, $p.ml16)}>What is a node?</div>
              </div>
              <div className={cx($p.white80, $p.f14, $p.fw3, $p.tc, $p.pt4, $p.mt25, $p.mb38)}>
                You store data in Graphcool as nodes.
                For example, if five users write two posts each, you have 15 nodes.
              </div>
              <div className={cx($p.mt60, $p.center)}>
                <img
                  src={require('../../assets/graphics/nodes.png')}
                  height={282}
                  width={374}
                />
              </div>
            </div>

            {/* SECOND COLUMN */}
            <OperationsOverview />
          </div>

          {/* TITLE */}
          <h2 className={cx($p.white, $p.fw3, $p.tc, $p.pt38)}>Included in every plan</h2>

          {/*  */}
          <div className={cx($p.flex, $p.flexColumn, $p.ph25, $p.mt96)}>

            {/* FIRST LINE */}
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
                  <div className={cx($p.white, $p.f16, $p.fw6)}>File storage</div>
                  <div className={cx($p.white80, $p.f14, $p.mt10)}>
                      Graphcool has an integrated file management system. Easily store and
                      display your users profile pictures, attachments and much more.
                      <br />
                      Basic usage is free and for more demanding projects you are billed in
                      increments of 50¢ / GB for additional storage and file transfer.

                  </div>
                </div>
                <div className={cx($p.flex, $p.flexColumn, $p.justifyEnd, $p.ml60)}>
                  <div className={cx($p.lightBlue, $p.tr, $p.nowrap)}>10 GB File Storage included</div>
                  <div className={cx($p.lightBlue, $p.tr, $p.nowrap)}>10 GB File Traffic included</div>
                </div>
              </div>
            </div>

            {/* SECOND LINE */}
            <div className={cx($p.bb, $p.bWhite30, $p.pb38, $p.ph38, $p.mt38)}>
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
                  <div className={cx($p.white, $p.f16, $p.fw6)}>Integrations</div>
                  <div className={cx($p.white80, $p.f14, $p.mt10)}>
                      Integrations is a powerful way to add functionality to your project. Use Auth0
                      to add social login or set up a sophisticated search engine with Algolia.
                  </div>
                </div>
              </div>
            </div>

            <div className={cx($p.flex, $p.justifyCenter, $p.mt38)}>
              <div className={cx($g.uppercaseButton, $p.bgBlue, $p.white, $p.tc, $p.ph38, $p.pv16)}>All features</div>
            </div>

          </div>
        </Box>
      </div>
    )
  }
}
