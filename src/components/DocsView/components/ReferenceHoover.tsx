import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import CircleIcon from './CircleIcon'
import isValidElement = React.isValidElement

const Person = styled.div`
  position: relative;
  overflow: visible;
       
    .asd {
      display: none;
      background: #fff;
      min-width: ${$v.size96};
      box-shadow:0 8px 18px rgba(0, 0, 0, 0.1),
        0 -8px 18px rgba(0, 0, 0, 0.1);
      position: absolute;
      top: -${$v.size16};
      left: -${$v.size16};
     }
       
       &:hover .asd {
        display: flex;
        flex: 1;
        z-index: 10;
       }
`
export default class ReferenceHoover extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Person>
          <div className={cx($p.f16, $p.fw6)}>Reference</div>
          <section className={cx('asd', $p.flex, $p.flexColumn)}>
            <div className={cx($p.bgLightgreen10, $p.pa16, $p.f16, $p.fw6, $p.green)}>Reference</div>
            <div className={cx($p.pv16, $p.ph25)}>
              <div className={cx($p.flex, $p.pv10)}>
                <CircleIcon
                  background='rgba(164, 3, 111, 0.2)'
                  source={require('../../../assets/graphics/Guide.svg')}
                />
                <div className={cx($p.pl10, $p.pr38, $p.f20, $p.black70)}>Subtitle 1</div>
              </div>
              <div className={cx($p.flex, $p.pv10)}>
                <CircleIcon
                  background='rgba(49, 177, 180, 0.2)'
                  source={require('../../../assets/graphics/QuestionMark.svg')}
                />
                <div className={cx($p.pl10, $p.pr38, $p.f20, $p.black70)}>Subtitle 2</div>
              </div>
              <div className={cx($p.flex, $p.pv10)}>
                <CircleIcon
                  background='rgba(164, 3, 111, 0.2)'
                  source={require('../../../assets/graphics/Guide.svg')}
                />
                <div className={cx($p.pl10, $p.pr38, $p.f20, $p.black70)}>Subtitle 3</div>
              </div>
            </div>
          </section>
        </Person>
      </div>
    )
  }
}
