import * as React from 'react'
import { $p, $v, $g, Icon } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'

const Box = styled.div`
  max-width: 1202px;
`

const Circle = styled.div`
  width: 80px;
  height: 80px;
`

export default class Info extends React.Component<{}, {}> {
  render() {
    return (
      <div className={cx($p.bgDarkBlue)} style={{height: 1600}}>
        <Box className={cx($p.flex, $p.flexColumn, $p.justifyBetween, $p.center)}>
          {/* TITLE */}
          <h2 className={cx($p.white, $p.fw3, $p.tc, $p.pt38)}>Included in every plan</h2>

          <div className={cx($p.flex, $p.flexColumn, $p.ph25, $p.mt96)}>
            {/* FIRST LINE */}
            <div className={cx($p.bb, $p.bWhite30, $p.pb38, $p.ph38)}>
              <div className={cx($p.flex)}>
                <Circle className={cx($p.bgWhite30, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter, $p.mr25)}>
                  <Icon
                      src={require('../../assets/icons/pricing/download.svg')}
                      color={$v.darkBlue}
                      height={34}
                      width={28}
                  />
                </Circle>
                <div className={cx($p.flex, $p.flexColumn, $p.mh25)}>
                  <div className={cx($p.white, $p.f16, $p.fw6)}>Fair usage rates</div>
                  <div className={cx($p.white80, $p.f14, $p.mt10)}>
                      A node is is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry’s standard dummy text ever since it to
                      make a type specimen book. A node is is simply dummy text of the printing
                      and typesetting industry.
                  </div>
                </div>
                <div className={cx($p.flex, $p.flexColumn)}>
                  <div className={cx($p.blue, $p.tr, $p.nowrap)}>1 GB File Storage included</div>
                  <div className={cx($p.blue, $p.tr, $p.nowrap)}>5 GB File Traffic included</div>
                </div>
              </div>
            </div>

            {/* SECOND LINE */}
            <div className={cx($p.bb, $p.bWhite30, $p.pb38, $p.ph38,  $p.mt38)}>
              <div className={cx($p.flex)}>
                <Circle className={cx($p.bgWhite30, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter, $p.mr25)}>
                  <Icon
                      src={require('../../assets/icons/pricing/download.svg')}
                      color={$v.darkBlue}
                      height={34}
                      width={28}
                  />
                </Circle>
                <div className={cx($p.flex, $p.flexColumn, $p.mh25)}>
                  <div className={cx($p.white, $p.f16, $p.fw6)}>Fair usage rates</div>
                  <div className={cx($p.white80, $p.f14, $p.mt10)}>
                      A node is is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry’s standard dummy text ever since it to
                      make a type specimen book. A node is is simply dummy text of the printing
                      and typesetting industry.
                  </div>
                </div>
                <div className={cx($p.flex, $p.flexColumn)}>
                  <div className={cx($p.blue, $p.tr, $p.nowrap)}>1 GB File Storage included</div>
                  <div className={cx($p.blue, $p.tr, $p.nowrap)}>5 GB File Traffic included</div>
                </div>
              </div>
            </div>

            {/* THIRD LINE */}
            <div className={cx($p.bb, $p.bWhite30, $p.pb38, $p.ph38,  $p.mt38)}>
              <div className={cx($p.flex)}>
                <Circle className={cx($p.bgWhite30, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter, $p.mr25)}>
                  <Icon
                      src={require('../../assets/icons/pricing/download.svg')}
                      color={$v.darkBlue}
                      height={34}
                      width={28}
                  />
                </Circle>
                <div className={cx($p.flex, $p.flexColumn, $p.mh25)}>
                  <div className={cx($p.white, $p.f16, $p.fw6)}>Fair usage rates</div>
                  <div className={cx($p.white80, $p.f14, $p.mt10)}>
                      A node is is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry’s standard dummy text ever since it to
                      make a type specimen book. A node is is simply dummy text of the printing
                      and typesetting industry.
                  </div>
                </div>
                <div className={cx($p.flex, $p.flexColumn)}>
                  <div className={cx($p.blue, $p.tr, $p.nowrap)}>1 GB File Storage included</div>
                  <div className={cx($p.blue, $p.tr, $p.nowrap)}>5 GB File Traffic included</div>
                </div>
              </div>
            </div>

            <div className={cx($p.mt38)}>
              <div className={cx($g.uppercaseButton, $p.bgBlue, $p.white, $p.tc)}>All features</div>
            </div>

          </div>
        </Box>
      </div>
    )
  }
}
