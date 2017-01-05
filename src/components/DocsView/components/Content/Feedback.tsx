import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import NegativeFeedback from './NegativeFeedback'

export default class Feedback extends React.Component<{}, {}> {

  render() {
    return (
      <div>
        <div className={cx($p.bt, $p.bBlack10, $p.mt60, $p.mh96)}/>
        <div
          className={cx($p.mb38, $p.pv38, $p.flex, $p.justifyCenter, $p.flexWrap)}
        >
          <div className={cx($p.o40, $p.f20, $p.fw4, $p.pt4)}>Was this helpful?</div>
          <img src={require('../../../../assets/graphics/Yes.svg')}
               className={cx($p.bbox, $p.db, $p.pl38, $p.pr10)}
          />
          <div className={cx($p.o40, $p.f20, $p.fw4, $p.pt4)}>Yes</div>
          <img src={require('../../../../assets/graphics/No.svg')}
               className={cx($p.bbox, $p.db, $p.pl38, $p.pr10)}
          />
          <div className={cx($p.o40, $p.f20, $p.fw4, $p.pt4)}>No</div>
        </div>
        <NegativeFeedback/>
      </div>
    )
  }
}
