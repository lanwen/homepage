import * as React from 'react'
import { $p, $v, Icon } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'

const Box = styled.div`
  max-width: 1202px;
`

const Circle = styled.div`
  width: 24px;
  height: 24px;
`

export default class FAQ extends React.Component<{}, {}> {
  render() {
    return (

        <Box
        className={cx($p.flex, $p.mt96, $p.bb, $p.bBlack10, $p.ph60, $p.pb60, $p.justifyBetween, $p.center)}>

          {/* FIRST COLUMN */}
          <div className={cx($p.flex, $p.flexColumn)}>

            {/* Card TOP-LEFT */}
            <div>
              <div className={cx($p.flex)}>
                <div>
                  <Circle className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                    <Icon
                        src={require('../../assets/icons/pricing/question_mark.svg')}
                        color={$v.green}
                        height={22}
                        width={9}
                    />
                  </Circle>
                </div>
                <div className={cx($p.flex, $p.flexColumn)}>
                  <div className={cx($p.fw6, $p.pl25)}>What happens when I go over my limit?</div>
                  <div className={cx($p.pl25, $p.mt10)}>
                    Each plan has a over-quota price for additional nodes and operations. When your usage starts exceeding your plan we will notify you so you can decide if it would be better for you to change your plan.
                  </div>
                </div>
              </div>
            </div>
            {/* Card MIDDLE-LEFT */}
            <div className={cx($p.mt38)}>
              <div className={cx($p.flex)}>
                <div>
                  <Circle className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                    <Icon
                        src={require('../../assets/icons/pricing/question_mark.svg')}
                        color={$v.green}
                        height={22}
                        width={9}
                    />
                  </Circle>
                </div>
                <div className={cx($p.flex, $p.flexColumn)}>
                  <div className={cx($p.fw6, $p.pl25)}>Can I change plans at any time?</div>
                  <div className={cx($p.pl25, $p.mt10)}>
                    Absolutely! Your plan is billed from the first of each month. If you change or cancel your plan in the middle of the month we will refund you pro rata.
                  </div>
                </div>
              </div>
            </div>
          {/* Card BOTTOM-LEFT */}
            <div className={cx($p.mt38)}>
              <div className={cx($p.flex)}>
                <div>
                  <Circle className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                    <Icon
                        src={require('../../assets/icons/pricing/question_mark.svg')}
                        color={$v.green}
                        height={22}
                        width={9}
                    />
                  </Circle>
                </div>
                <div className={cx($p.flex, $p.flexColumn)}>
                  <div className={cx($p.fw6, $p.pl25)}>Are there any limits to the size of a node?</div>
                  <div className={cx($p.pl25, $p.mt10)}>
                    A node can have up to 100 fields. You can see all limits for data stored in fields in the  
                    <a className={cx($p.green, $p.fw6, $p.noUnderline, $p.ml4)} href='https://www.graph.cool/docs/reference/platform/fields'>documentation</a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* SECOND COLUMN */}
          <div className={cx($p.flex, $p.flexColumn, $p.ml38)}>

            {/* Card TOP-RIGHT */}
            <div>
              <div className={cx($p.flex)}>
                <div>
                  <Circle className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                    <Icon
                        src={require('../../assets/icons/pricing/question_mark.svg')}
                        color={$v.green}
                        height={22}
                        width={9}
                    />
                  </Circle>
                </div>
                <div className={cx($p.flex, $p.flexColumn)}>
                  <div className={cx($p.fw6, $p.pl25)}>Who owns my data?</div>
                  <div className={cx($p.pl25, $p.mt10)}>
                    You own all data stored in Graphcool. We do not share your data with third parties.
                  </div>
                </div>
              </div>
            </div>
          {/* Card MIDDLE-RIGHT */}
            <div className={cx($p.mt38)}>
              <div className={cx($p.flex)}>
                <div>
                  <Circle className={cx($p.bgGreen20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                    <Icon
                        src={require('../../assets/icons/pricing/question_mark.svg')}
                        color={$v.green}
                        height={22}
                        width={9}
                    />
                  </Circle>
                </div>
                <div className={cx($p.flex, $p.flexColumn)}>
                  <div className={cx($p.fw6, $p.pl25)}>How long does the trial last?</div>
                  <div className={cx($p.pl25, $p.mt10)}>
                    The trial lasts 30 days. If you decide not to upgrade to a paid plan after the trial period you will be changed to the developer plan.
                  </div>
                </div>
              </div>
            </div>

          </div>

        </Box>
    )
  }

}
