import * as React from 'react'
import { $p, $v, $g, Icon } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'

const Box = styled.div`
  max-width: 1202px;
`

const Circle80 = styled.div`
  width: 80px;
  height: 80px;
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
            <div className={cx($p.flex, $p.flexColumn, $p.pr60)}>
              <div className={cx($p.flex, $p.center)}>
                <div>
                  <Circle36 className={cx($p.bgWhite20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                    <Icon
                      src={require('../../assets/icons/pricing/graph.svg')}
                      color={$v.white}
                      height={17}
                      width={17}
                    />
                  </Circle36>
                </div>
                <div className={cx($p.white, $p.ml16)}>What is a node?</div>
              </div>
              <div className={cx($p.white80, $p.f14, $p.fw3, $p.tc, $p.pt4, $p.mt25, $p.mb38)}>
                A node is is simply dummy text of the 
                printing and typesetting industry. 
                Lorem Ipsum has been the industry’s standard dummy 
                text ever since it to make a type specimen book              
              </div>
              <div className={cx($p.mt60, $p.center)}>
                <Icon
                  src={require('../../assets/icons/pricing/nodes.svg')}
                  color={$v.green}
                  height={282}
                  width={374}
                />
              </div>
            </div>

            {/* SECOND COLUMN */}
            <div className={cx($p.flex, $p.flexColumn, $p.pl60)}>
              <div className={cx($p.flex, $p.center)}>
                <div>
                  <Circle36 className={cx($p.bgWhite20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                    <Icon
                      src={require('../../assets/icons/pricing/operation.svg')}
                      color={$v.white}
                      height={17}
                      width={11}
                    />
                  </Circle36>
                </div>
                <div className={cx($p.white, $p.ml16)}>What is an operation?</div>
              </div>
              <div className={cx($p.white80, $p.f14, $p.fw3, $p.tc, $p.pt4, $p.mt25, $p.mb38)}>
                    There are three operation types: requests, 
                    subscriptions & function calls            
              </div>

              {/* Card 1: Requests */}
              <div className={cx($p.flex, $p.flexColumn, $p.bgWhite10, $p.br2, $p.ph60, $p.pv25, $p.mb16)}>
                <div className={cx($p.flex)}>
                  <div className={cx($p.white80, $p.f14, $p.fw6)}>Request:</div> 
                  <div className={cx($p.white80, $p.f14, $p.fw3, $p.pl4, $p.mb25)}>A request is either a GraphQL query or mutation.</div>
                </div>
                <div className={cx($p.flex)}>
                  <div className={cx($p.flex, $p.flexColumn, $p.pr16)}>
                    <div>
                      <Icon
                        src={require('../../assets/icons/pricing/request_slider_1.svg')}
                        color={$v.white}
                        height={11}
                        width={183}
                      />
                    </div>                    
                    <div className={cx($p.flex, $p.mt10)}>
                      <div className={cx($p.white80, $p.f12, $p.fw3, $p.fw6)}>750,000</div> 
                      <a className={cx($p.white80, $p.f12, $p.pl4)} href=''>requests</a>
                    </div>
                  </div>
                  <div className={cx($p.flex, $p.flexColumn, $p.pl16)}>
                    <div>
                      <Icon
                        src={require('../../assets/icons/pricing/request_slider_2.svg')}
                        color={$v.white}
                        height={11}
                        width={183}
                      />
                    </div>
                    <div className={cx($p.flex, $p.mt10)}>
                      <div className={cx($p.white80, $p.f12, $p.fw6)}>2,000</div> 
                      <a className={cx($p.white80, $p.f12, $p.ph4)} href=''>leaf nodes</a>
                      <div className={cx($p.white80, $p.f12)}>per request</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Subscriptions */}
              <div className={cx($p.flex, $p.flexColumn, $p.bgWhite10, $p.br2, $p.ph60, $p.pv25, $p.mb16)}>
                <div className={cx($p.flex)}>
                  <div className={cx($p.white80, $p.f14, $p.fw6)}>Subscription:</div> 
                  <div className={cx($p.white80, $p.f14, $p.fw3, $p.pl4, $p.mb25)}>A GraphQL subscription is triggered by a mutation.</div>
                </div>
                <div className={cx($p.flex)}>
                  <div className={cx($p.flex, $p.flexColumn, $p.pr16)}>
                    <div>
                      <Icon
                        src={require('../../assets/icons/pricing/subscriptions_slider_1.svg')}
                        color={$v.white}
                        height={11}
                        width={183}
                      />
                    </div>                    
                    <div className={cx($p.flex, $p.mt10)}>
                      <div className={cx($p.white80, $p.f12, $p.fw3, $p.fw6)}>5,000</div> 
                      <a className={cx($p.white80, $p.f12, $p.pl4)} href=''>mutations</a>
                    </div>
                  </div>
                  <div className={cx($p.flex, $p.flexColumn, $p.pl16)}>
                    <div>
                      <Icon
                        src={require('../../assets/icons/pricing/subscriptions_slider_2.svg')}
                        color={$v.white}
                        height={11}
                        width={183}
                      />
                    </div>
                    <div className={cx($p.flex, $p.mt10)}>
                      <div className={cx($p.white80, $p.f12, $p.fw6)}>10,000</div> 
                      <a className={cx($p.white80, $p.f12, $p.nowrap, $p.ph4)} href=''>concurrent subscriptions</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Functions */}
              <div className={cx($p.flex, $p.flexColumn, $p.bgWhite10, $p.br2, $p.ph60, $p.pv25)}>
                <div className={cx($p.flex)}>
                  <div className={cx($p.white80, $p.f14, $p.fw6)}>Function calls:</div> 
                  <div className={cx($p.white80, $p.f14, $p.fw3, $p.pl4, $p.mb25)}>Function calls are billed by execution time.</div>
                </div>
                <div className={cx($p.flex)}>
                  <div className={cx($p.flex, $p.flexColumn, $p.pr16)}>
                    <div>
                      <Icon
                        src={require('../../assets/icons/pricing/functions_slider_1.svg')}
                        color={$v.white}
                        height={11}
                        width={183}
                      />
                    </div>                    
                    <div className={cx($p.flex, $p.mt10)}>
                      <div className={cx($p.white80, $p.f12, $p.fw3, $p.fw6)}>1,000</div> 
                      <a className={cx($p.white80, $p.f12, $p.pl4)} href=''>function calls</a>
                    </div>
                  </div>
                  <div className={cx($p.flex, $p.flexColumn, $p.pl16)}>
                    <div>
                      <Icon
                        src={require('../../assets/icons/pricing/functions_slider_2.svg')}
                        color={$v.white}
                        height={11}
                        width={183}
                      />
                    </div>
                    <div className={cx($p.flex, $p.mt10)}>
                      <div className={cx($p.white80, $p.f12, $p.fw6)}>300 ms</div> 
                      <div className={cx($p.white80, $p.f12, $p.pl4)}>per function call</div>
                    </div>
                  </div>
                </div>
              </div>

              <span className={cx($p.white, $p.f16, $p.tr, $p.mt16)}><b>= 4,500,000</b> operations in total</span>
            </div>
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
