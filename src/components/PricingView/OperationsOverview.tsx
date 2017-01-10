import * as React from 'react'
import { $p, $v, $g, Icon } from 'graphcool-styles'
import * as cx from 'classnames'
import OperationSlider from './OperationSlider'
import styled from 'styled-components'

const Circle36 = styled.div`
  width: 36px;
  height: 36px;
`

interface State {
  totalOperations: number
  leftValue1: number
  rightValue1: number
  leftValue2: number
  rightValue2: number
  leftValue3: number
  rightValue3: number
}

export default class OperationOverview extends React.Component<{}, State> {

  constructor(props) {
    super(props)
    this.state = {
      totalOperations: 0,
        leftValue1: 0,
        rightValue1: 0,
        leftValue2: 0,
        rightValue2: 0,
        leftValue3: 0,
        rightValue3: 0
    }
  }

  render() {

    const {totalOperations} = this.state

    return (
        <div className={cx($p.flex, $p.flex1, $p.flexColumn, $p.pl60)}>
          <div className={cx($p.flex, $p.justifyCenter, $p.itemsCenter)}>
            <div>
              <Circle36 className={cx($p.bgWhite20, $p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
                <Icon
                  src={require('../../assets/icons/pricing/operation_white.svg')}
                  color={$v.white}
                  height={17}
                  width={11}
                />
              </Circle36>
            </div>
            <div className={cx($p.white, $p.ml16)}>What is an operation?</div>
          </div>
          <div className={cx($p.white80, $p.f14, $p.fw3, $p.tc, $p.pt4, $p.mt25, $p.mb38)}>
                There are three operation types: requests,
                subscriptions & function calls
          </div>

          {/* Card 1: Requests */}
          {/* should be X leaf nodes _per request_ */}
          <OperationSlider
            operationType='Request'
            description='A request is either a GraphQL query or mutation.'
            leftInfo='requests'
            rightInfo='leaf nodes'
            leftSliderMaxValue={1000000}
            rightSliderMaxValue={1000000}
            leftLink=''
            rightLink='a'
            leftValue={this.state.leftValue1}
            rightValue={this.state.rightValue1}
            onLeftSliderValueChange={(value) => this.onSliderChanged(0, value)}
            onRightSliderValueChange={(value) => this.onSliderChanged(1, value)}
           />

          {/* Card 2: Subscriptions */}
          <OperationSlider
            operationType='Subscription'
            description='A GraphQL subscription is triggered by a mutation.'
            leftInfo='mutations'
            rightInfo='concurrent subscriptions'
            leftSliderMaxValue={1000000}
            rightSliderMaxValue={1000000}
            leftLink=''
            rightLink='a'
            leftValue={this.state.leftValue2}
            rightValue={this.state.rightValue2}
            onLeftSliderValueChange={(value) => this.onSliderChanged(2, value)}
            onRightSliderValueChange={(value) => this.onSliderChanged(3, value)}
          />

          {/* Card 3: Functions */}
          <OperationSlider
            operationType='Function calls'
            description='Function calls are billed by execution time.'
            leftInfo='function calls'
            rightInfo='ms per function call'
            leftSliderMaxValue={1000000}
            rightSliderMaxValue={1000000}
            leftLink=''
            leftValue={this.state.leftValue3}
            rightValue={this.state.rightValue3}
            onLeftSliderValueChange={(value) => this.onSliderChanged(4, value)}
            onRightSliderValueChange={(value) => this.onSliderChanged(5, value)}
           />

          <span className={cx($p.white, $p.f16, $p.tr, $p.mt4)}><b>= {this.numberWithCommas(this.state.totalOperations)}</b> operations in total</span>
        </div>
    )
  }

  private numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  private onSliderChanged = (sliderIndex: number, value: number) => {
    console.log('slider changing; index = ' + sliderIndex + ', value = ' + value)
    switch (sliderIndex) {
    case 0:
      this.setState({leftValue1: value} as State)
      break
    case 1:
      this.setState({rightValue1: value} as State)
      break
    case 2:
      this.setState({leftValue2: value} as State)
      break
    case 3:
      this.setState({rightValue2: value} as State)
      break
    case 4:
      this.setState({leftValue3: value} as State)
      break
    case 5:
      this.setState({rightValue3: value} as State)
      break
    default:
      break
    }
    this.updateTotalOperations()
  }

  private updateTotalOperations () {
    const result = this.state.leftValue1 + this.state.rightValue1 
                 + this.state.leftValue2 + this.state.rightValue2 
                 + this.state.leftValue3 + this.state.rightValue3 
    this.setState({totalOperations: result} as State)
  }


}