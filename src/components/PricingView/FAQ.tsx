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
                  <div className={cx($p.fw6, $p.pl25)}>How does X work?</div>
                  <div className={cx($p.pl25, $p.mt10)}>
                    X works great. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry’s standard dummy text ever since.
                     <a className={cx($p.green, $p.fw6, $p.noUnderline, $p.ml4)} href=''>Read more</a>.
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
                  <div className={cx($p.fw6, $p.pl25)}>How does X work?</div>
                  <div className={cx($p.pl25, $p.mt10)}>
                    X works great. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry’s standard dummy text ever since.
                    <a className={cx($p.green, $p.fw6, $p.noUnderline, $p.ml4)} href=''>Read more</a>.
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
                  <div className={cx($p.fw6, $p.pl25)}>How does X work?</div>
                  <div className={cx($p.pl25, $p.mt10)}>
                    X works great. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry’s standard dummy text ever since.
                    <a className={cx($p.green, $p.fw6, $p.noUnderline, $p.ml4)} href=''>Read more</a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </Box>
    )
  }

}
