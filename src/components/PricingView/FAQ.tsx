import * as React from 'react'
import { $p, $v, $g, Icon } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import { Link } from 'react-router'
import {breakpoints} from '../../utils/constants'

const Box = styled.div`
  max-width: 1202px;
`

const Circle = styled.div`
  width: 24px;
  height: 24px;
`

const Question = styled.div`
  min-height: 120px
`

export default class FAQ extends React.Component<{}, {}> {
  render() {
    return (

      <div className={cx(
        $p.bb,
        $p.bBlack10,
        $p.pb60,
      )}>

        <Box className={cx(
          $p.flex,
          window.innerWidth < breakpoints.p650 ? $p.flexColumn : $p.flexRow,
          window.innerWidth < breakpoints.p650 ? $p.pt60 : $p.pt96,
          window.innerWidth < breakpoints.p650 ? $p.ph25 : $p.ph60,
          $p.justifyBetween,
          $p.center,
        )}>

          {/* FIRST ITEM */}
          <div className={cx($p.flex, $p.flexColumn, $p.flex1)}>

            <div className={cx($p.flex, $p.flexColumn)}>

              {/* FIRST QUESTION */}
              <Question className={cx($p.flex)}>
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
                    Each plan has a over-quota price for additional nodes and requests. When you
                    start exceeding your plan we will let you know that it is time to change your plan.
                  </div>
                </div>
              </Question>

            {/* SECOND QUESTION */}
            <Question className={cx(
              window.innerWidth < breakpoints.p650 ? $p.mt16 : $p.mt38,
            )}>
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
            </Question>

            {/* THIRD QUESTION */}
            <Question className={cx(
              window.innerWidth < breakpoints.p650 ? $p.mt16 : $p.mt38,
            )}>
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
                  <div className={cx($p.fw6, $p.pl25)}>How do I manage multiple projects?</div>
                  <div className={cx($p.pl25, $p.mt10)}>
                    Each project is billed individually. You can have as many free projects as you like.
                  </div>
                </div>
              </div>
            </Question>

            {/* FOURTH QUESTION */}
            <Question className={cx(
              window.innerWidth < breakpoints.p650 ? $p.mt16 : $p.mt38,
            )}>
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
                  <div className={cx($p.fw6, $p.pl25)}>Can my open source project get a discount?</div>
                  <div className={cx($p.pl25, $p.mt10)}>
                    We love open source! If you are the maintainer of an open source project that relies on a GraphQL
                    backend we will upgrade you to GROWTH for free.
                  </div>
                </div>
              </div>
            </Question>

            {/* FIFTH QUESTION */}
            <Question className={cx(
              window.innerWidth < breakpoints.p650 ? $p.mt16 : $p.mt38,
            )}>
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
                  <div className={cx($p.fw6, $p.pl25)}>Is my data backed up?</div>
                  <div className={cx($p.pl25, $p.mt10)}>
                    Yes. We take periodic snapshots and can perform point in time restore up to 7 days back in time.
                  </div>
                </div>
              </div>
            </Question>
            </div>

          </div>

          {/* SECOND ITEM */}
          <div className={cx(
            $p.flex,
            $p.flexColumn,
            $p.flex1,
            window.innerWidth < breakpoints.p650 ? $p.mt25 : $p.ml38,
          )}>

            <div className={cx($p.flex, $p.flexColumn)}>

              {/* FIRST QUESTION */}
              <Question className={cx($p.flex)}>
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
              </Question>

            {/* SECOND QUESTION */}
            <Question className={cx(
              window.innerWidth < breakpoints.p650 ? $p.mt16 : $p.mt38,
            )}>
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
            </Question>

            {/* THIRD QUESTION */}
            <Question className={cx(
              window.innerWidth < breakpoints.p650 ? $p.mt16 : $p.mt38,
            )}>
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
                  <div className={cx($p.fw6, $p.pl25)}>How do you count multiple mutations in one http request?</div>
                  <div className={cx($p.pl25, $p.mt10)}>
                    When you submit multiple mutations or queries in the same http request they all
                    count towards your request limit.
                  </div>
                </div>
              </div>
            </Question>

            {/* FOURTH QUESTION */}
            <Question className={cx(
              window.innerWidth < breakpoints.p650 ? $p.mt16 : $p.mt38,
            )}>
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
                  <div className={cx($p.fw6, $p.pl25)}>Do I pay for subscriptions?</div>
                  <div className={cx($p.pl25, $p.mt10)}>
                    The initial request made by a subscribing client is counted.
                    After that, all events received by the client are free of charge.
                  </div>
                </div>
              </div>
            </Question>

            {/* FIFTH QUESTION */}
            <Question className={cx(
              window.innerWidth < breakpoints.p650 ? $p.mt16 : $p.mt38,
            )}>
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
                  <div className={cx($p.fw6, $p.pl25)}>How are mutation callbacks and lambda functions billed</div>
                  <div className={cx($p.pl25, $p.mt10)}>
                    There is no additional charge for mutation callbacks and lambda functions
                  </div>
                </div>
              </div>
            </Question>

          </div>
        </div>

        </Box>

        <div className={cx(
          $p.flex,
          window.innerWidth < breakpoints.p650 ? $p.flexColumn : $p.flexRow,
          window.innerWidth < breakpoints.p650 ? $p.itemsCenter : $p.justifyCenter,
          $p.mt38,
        )}>
          <Link to='/docs/faq'
            className={cx(
              $g.uppercaseButton,
              $p.bgGreen,
              $p.white,
              $p.tc,
              $p.ph38,
              $p.pv16,
              $p.noUnderline,
            )}>
            Other Questions
          </Link>
          <div
            className={cx(
              $g.uppercaseButton,
              $p.bgWhite,
              $p.green,
              $p.tc,
              $p.ba,
              $p.bGreen,
              $p.ph38,
              $p.pv16,
              window.innerWidth < breakpoints.p650 ? $p.mt10 : $p.ml16,
              $p.pointer,
            )}
            onClick={this.openChat}
          >
            Open Chat
          </div>
        </div>
      </div>
    )
  }

  private openChat = () => {
    if (typeof Intercom === 'undefined') {
      return
    }
    if (!window.localStorage.getItem('chat_initiated_faq')) {
      const message = 'Hey! I have further questions to the FAQ:'
      Intercom('showNewMessage', message)
      window.localStorage.setItem('chat_initiated_faq', 'true')
    } else {
      Intercom('show')
    }
  }

}
