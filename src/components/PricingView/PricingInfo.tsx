import * as React from 'react'
import {$p, $v, Icon} from 'graphcool-styles'
import * as cx from 'classnames'
import OperationsOverview from './OperationsOverview'
import styled from 'styled-components'

interface State {

}

const Circle36 = styled.div`
  width: 36px;
  height: 36px;
`

export default class PricingInfo extends React.Component<{}, State> {

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (

      // {/* CONTAINER FOR TWO COLUMNS */}
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
               src={require('../../assets/graphics/homepage/nodes.png')}
               height={282}
               width={374}
             />
           </div>
         </div>

         {/* SECOND COLUMN */}
         <OperationsOverview />

      </div>

    )
  }
}