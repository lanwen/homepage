import * as React from 'react'
import { $p, $v } from 'graphcool-styles'
import * as cx from 'classnames'
import * as Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import styled from 'styled-components'
import { numberWithCommas, roundedStep } from '../../utils/pricing'

interface Props {
  operationType: string
  description: string
  leftInfo: string
  rightInfo: string
  moreRightInfo?: string
  leftSliderMaxValue: number
  rightSliderMaxValue: number
  rightSliderMinValue: number
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
  .rc-slider-track {
    background: ${$v.green};
  }
`

export default class OperationSliderCard extends React.Component<Props, {}> {

  render() {

    let rightInfoComponent: JSX.Element
    if (this.props.rightLink) {
      rightInfoComponent = (
        <a className={cx($p.white80, $p.f12, $p.ph4)} href={this.props.rightLink}>{this.props.rightInfo}</a>
      )
    } else {
      rightInfoComponent = (
        <div className={cx($p.white80, $p.f12, $p.ph4)}>{this.props.rightInfo}</div>
      )
    }

    return (
      <div className={cx($p.flex, $p.flexColumn, $p.bgWhite10, $p.br2, $p.ph38, $p.pv25, $p.mb16)}>
        <div className={cx($p.flex)}>
          <div className={cx($p.white80, $p.f14, $p.fw6)}>{this.props.operationType}:</div>
          <div className={cx($p.white80, $p.f14, $p.fw3, $p.pl4, $p.mb25)}>
            {this.props.description}
          </div>
        </div>
        <div className={cx($p.flex)}>
          <div className={cx($p.flex1, $p.flex, $p.flexColumn, $p.pr16)}>
            <StyledSlider
              onChange={this.props.onLeftSliderValueChange}
              max={this.props.leftSliderMaxValue}
              tipFormatter={null}
              step={1}
              value={this.props.leftValue}
            />
            <div className={cx($p.flex, $p.mt10)}>
              <div
                className={cx($p.white80, $p.f12, $p.fw3, $p.fw6)}
              >
                {numberWithCommas(roundedStep(this.props.leftValue))}
              </div>
              <a className={cx($p.white80, $p.f12, $p.pl4)} href={this.props.leftLink}>{this.props.leftInfo}</a>
            </div>
          </div>
          <div className={cx($p.flex1, $p.flex, $p.flexColumn, $p.pl16)}>
            <StyledSlider
              onChange={this.props.onRightSliderValueChange}
              max={this.props.rightSliderMaxValue}
              tipFormatter={null}
              step={1}
              min={this.props.rightSliderMinValue}
              value={this.props.rightValue}
            />
            <div className={cx($p.flex, $p.mt10)}>
              <div className={cx($p.white80, $p.f12, $p.fw6)}>{numberWithCommas(roundedStep(this.props.rightValue))}</div>
              {rightInfoComponent}
            </div>
          </div>
        </div>
      </div>
    )
  }

}
