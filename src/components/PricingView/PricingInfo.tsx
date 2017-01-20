import * as React from 'react'
import {$p, $v, Icon} from 'graphcool-styles'
import * as cx from 'classnames'
import OperationsOverview from './OperationsOverview'
import styled from 'styled-components'
import {breakpoints} from '../../utils/constants'

const ImageContainer = styled.div`
  width: 300px;
`

const Circle36 = styled.div`
  width: 36px;
  height: 36px;
`

export default class PricingInfo extends React.Component<{}, {}> {

  render() {

    const flexDirection = window.innerWidth < breakpoints.p1000 ? $p.flexColumn : $p.flexRow

    const containerPaddingVertical = $p.pv38
    const containerMarginTop = window.innerWidth < breakpoints.p1000 ? $p.mt60 : $p.mt96
    const firstItemPaddingRight = window.innerWidth < breakpoints.p1000 ? $p.pr0 : $p.pr60
    const whatIsANodeDescriptionMarginTop = window.innerWidth < breakpoints.p1000 ? $p.mt16 : $p.mt25
    const whatIsANodeDescriptionMarginBottom = window.innerWidth < breakpoints.p1000 ? $p.mb25 : $p.mb38
    const graphImageMarginTop = window.innerWidth < breakpoints.p1000 ? $p.mt25 : $p.mt60

    const imageWidth = window.innerWidth < breakpoints.p1000 ? 260 : 374
    const imageHeight = window.innerWidth < breakpoints.p1000 ? 196 : 282

    return (

      // {/* CONTAINER FOR TWO COLUMNS */}
      <div className={cx(
        $p.flex,
        flexDirection,
        $p.justifyBetween,
        containerPaddingVertical,
        $p.ph38,
        containerMarginTop,
      )}>
         {/* FIRST ITEM */}
         <div className={cx(
           $p.flex,
           window.innerWidth > breakpoints.p1000 && $p.flex1,
           $p.flexColumn,
           window.innerWidth < breakpoints.p1000 && $p.flexFixed,
           firstItemPaddingRight,
         )}>
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
           <div className={cx(
             $p.white80,
             $p.f14,
             $p.fw3,
             $p.tc,
             $p.pt4,
             whatIsANodeDescriptionMarginTop,
             whatIsANodeDescriptionMarginBottom,
           )}>
             You store data in Graphcool as nodes.
             For example, if five users write two posts each, you have 15 nodes.
           </div>
           <ImageContainer className={cx(graphImageMarginTop, $p.center)}>
             <img
               src={require('../../assets/graphics/homepage/nodes.png')}
               width={imageWidth}
               height={imageHeight}
             />
           </ImageContainer>
         </div>

         {/* SECOND ITEM */}
         <OperationsOverview />

      </div>

    )
  }

}
