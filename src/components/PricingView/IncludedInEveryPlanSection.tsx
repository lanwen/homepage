import * as React from 'react'
import {$p, $v, Icon} from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import {breakpoints} from '../../utils/constants'

const Circle80 = styled.div`
  width: 80px;
  height: 80px;
  flex: 0 0 80px;
`

interface Props {
  title: string
  description?: string
  descriptionElement?: JSX.Element
  iconSrc: string
  iconWidth: number
  iconHeight: number
  children?: JSX.Element
  className?: string
}

export default class IncludedInEveryPlanSection extends React.Component<Props, {}> {

  render() {

    const displayIcon = window.innerWidth > breakpoints.p650
    const flexDirection = displayIcon ? $p.flexRow : $p.flexColumn
    const containerPaddingHorizontal = displayIcon ? $p.ph38 : $p.ph16
    const descriptionMarginHorizontral = displayIcon ? $p.mh25 : $p.mh4

    return (
      <div className={cx($p.bb, $p.bWhite30, $p.pb38, containerPaddingHorizontal, this.props.className)}>
        <div className={cx($p.flex, flexDirection)}>
          {displayIcon && (
            <Circle80 className={cx($p.bgWhite30, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter, $p.mr25)}>
              <Icon
                src={this.props.iconSrc}
                color={$v.darkBlue}
                height={this.props.iconHeight}
                width={this.props.iconWidth}
              />
            </Circle80>
          )}
          <div className={cx($p.flex, $p.flexColumn, descriptionMarginHorizontral)}>
            <div className={cx($p.white, $p.f16, $p.fw6)}>{this.props.title}</div>
            {this.props.descriptionElement || (
              <div className={cx($p.white80, $p.f14, $p.mt10)}>
                {this.props.description}
              </div>
            )}
          </div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
