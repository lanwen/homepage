import * as React from 'react'
import { $p, $v } from 'graphcool-styles'
import * as cx from 'classnames'
import * as Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import styled from 'styled-components'

interface Props {
  operationType: string
  description: string
  leftInfo: string
  rightInfo: string
  moreRightInfo?: string
  leftSliderMaxValue: number
  rightSliderMaxValue: number
  leftLink: string
  rightLink?: string
  leftValue: number
  rightValue: number
  onLeftSliderValueChange: (value: number) => void
  onRightSliderValueChange: (value: number) => void
}

const StyledSlider = styled(Slider)`
  .rc-slider-handle {
    background: white;
    border: none;
  }
  .rc-slider-rail {
    height: 1px;
    top: 6px;
  }
`

export default class OperationSlider extends React.Component<Props, {}> {

  render() {
    const {operationType, description, leftInfo, rightInfo,
           leftSliderMaxValue, rightSliderMaxValue, leftLink} = this.props
    const {leftValue, rightValue, onLeftSliderValueChange, onRightSliderValueChange} = this.props

    let rightInfoComponent: JSX.Element
    if (this.props.rightLink) {
      rightInfoComponent = (
        <a className={cx($p.white80, $p.f12, $p.ph4)} href={this.props.rightLink}>{rightInfo}</a>
      )
    } else {
      rightInfoComponent = (
        <div className={cx($p.white80, $p.f12, $p.ph4)}>{rightInfo}</div>
      )
    }

    return (
      <div className={cx($p.flex, $p.flexColumn, $p.bgWhite10, $p.br2, $p.ph38, $p.pv25, $p.mb16)}>
        <div className={cx($p.flex)}>
          <div className={cx($p.white80, $p.f14, $p.fw6)}>{operationType}:</div>
          <div className={cx($p.white80, $p.f14, $p.fw3, $p.pl4, $p.mb25)}>
            {description}
          </div>
        </div>
        <div className={cx($p.flex)}>
          <div className={cx($p.flex1, $p.flex, $p.flexColumn, $p.pr16)}>
            <StyledSlider
              onChange={onLeftSliderValueChange}
              max={leftSliderMaxValue}
              tipFormatter={null}
              step={1000}
            />
            <div className={cx($p.flex, $p.mt10)}>
              <div className={cx($p.white80, $p.f12, $p.fw3, $p.fw6)}>{this.numberWithCommas(leftValue)}</div>
              <a className={cx($p.white80, $p.f12, $p.pl4)} href={leftLink}>{leftInfo}</a>
            </div>
          </div>
          <div className={cx($p.flex1, $p.flex, $p.flexColumn, $p.pl16)}>
            <StyledSlider
              onChange={onRightSliderValueChange}
              max={rightSliderMaxValue}
              tipFormatter={null}
              step={1000}
            />
            <div className={cx($p.flex, $p.mt10)}>
              <div className={cx($p.white80, $p.f12, $p.fw6)}>{this.numberWithCommas(rightValue)}</div>
              {rightInfoComponent}
            </div>
          </div>
        </div>
      </div>
    )
  }

  private numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

}
