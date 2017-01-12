import * as React from 'react'
import { $p, $v, $g, Icon } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import { Link } from 'react-router'

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

      <div className={cx($p.bb, $p.bBlack10, $p.pb60)}>

        <Box className={cx($p.flex, $p.pt96, $p.ph60, $p.justifyBetween, $p.center)}>

          {/* FIRST COLUMN */}
          <div className={cx($p.flex, $p.flexColumn, $p.w50)}>

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
                    Each plan has a over-quota price for additional nodes and operations. When your usage
                    starts exceeding your plan we will notify you so you can decide if it would be better
                    for you to change your plan.
                  </div>
                </div>
              </div>
            </div>
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
                    Absolutely! Your plan is billed from the first of each month. If you change or
                    cancel your plan in the middle of the month we will refund you pro rata.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECOND COLUMN */}
          <div className={cx($p.flex, $p.flexColumn, $p.ml38, $p.w50)}>

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
                    You still own all of your data. We do not share your data with any third parties.
                  </div>
                </div>
              </div>
            </div>
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
                    <Link className={cx($p.green, $p.fw6, $p.noUnderline, $p.ml4)}
                          to='/docs/reference/platform/fields-teizeit5se'>documentation</Link>.
                  </div>
                </div>
              </div>

            </div>
          </div>

        </Box>

        <div className={cx($p.flex, $p.justifyCenter, $p.mt38)}>
          <Link to='/docs/faq'
            className={cx($g.uppercaseButton, $p.bgGreen, $p.white, $p.tc, $p.ph38, $p.pv16, $p.noUnderline)}>
            Other Questions
          </Link>
          <div
            className={cx($g.uppercaseButton, $p.bgWhite, $p.green, $p.tc, $p.ba, $p.bGreen, $p.ph38, $p.pv16, $p.ml16)}
          >
            Open Chat
          </div>
        </div>
      </div>
    )
  }

}
