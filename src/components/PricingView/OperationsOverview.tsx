import * as React from 'react'
import { $p, $v, $g, Icon } from 'graphcool-styles'
import * as cx from 'classnames'
import OperationSliderCard from './OperationSliderCard'
import styled from 'styled-components'
import { numberWithCommas, roundedStep } from '../../utils/pricing'

const Circle36 = styled.div`
  width: 36px;
  height: 36px;
`

interface State {
  leftValue1: number
  rightValue1: number
  leftValue2: number
  rightValue2: number
  leftValue3: number
  rightValue3: number
}

export default class OperationOverview extends React.Component<{}, State> {

  state = {
    leftValue1: 10,
    rightValue1: 1,
    leftValue2: 0,
    rightValue2: 1,
    leftValue3: 0,
    rightValue3: 5,
  }

  render() {
    const leftValue1 = this.state.leftValue1 === 0 ? 0 : this.state.leftValue1
    const leftValue2 = this.state.leftValue2 === 0 ? 0 : this.state.leftValue2
    const leftValue3 = this.state.leftValue3 === 0 ? 0 : this.state.leftValue3

    const totalOperations = roundedStep(leftValue1) * roundedStep(this.state.rightValue1) / 100
      + roundedStep(leftValue2) * roundedStep(this.state.rightValue2) / 100
      + roundedStep(leftValue3) * roundedStep(this.state.rightValue3) / 100

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
        <OperationSliderCard
          operationType='Request'
          description='A request is either a GraphQL query or mutation.'
          leftInfo='requests/month'
          rightInfo='leaf nodes per request'
          leftSliderMaxValue={28}
          rightSliderMaxValue={16}
          rightSliderMinValue={1}
          leftLink=''
          rightLink='a'
          leftValue={leftValue1}
          rightValue={this.state.rightValue1}
          onLeftSliderValueChange={(leftValue1) => this.setState({ leftValue1 } as State)}
          onRightSliderValueChange={(rightValue1) => this.setState({ rightValue1 } as State)}
        />

        {/* Card 2: Subscriptions */}
        <OperationSliderCard
          operationType='Subscription'
          description='A GraphQL subscription is triggered by a mutation.'
          leftInfo='mutations/month'
          rightInfo='concurrent subscriptions'
          leftSliderMaxValue={28}
          rightSliderMaxValue={19}
          leftLink=''
          rightLink='a'
          leftValue={leftValue2}
          rightValue={this.state.rightValue2}
          onLeftSliderValueChange={(leftValue2) => this.setState({ leftValue2 } as State)}
          onRightSliderValueChange={(rightValue2) => this.setState({ rightValue2 } as State)}
        />

        {/* Card 3: Functions */}
        <OperationSliderCard
          operationType='Function calls'
          description='Function calls are billed by execution time.'
          leftInfo='function calls/month'
          rightInfo='ms per function call'
          leftSliderMaxValue={28}
          rightSliderMaxValue={16}
          rightSliderMinValue={1}
          leftLink=''
          leftValue={leftValue3}
          rightValue={this.state.rightValue3}
          onLeftSliderValueChange={(leftValue3) => this.setState({ leftValue3 } as State)}
          onRightSliderValueChange={(rightValue3) => this.setState({ rightValue3 } as State)}
        />

        <span className={cx($p.white, $p.f16, $p.tr, $p.mt4)}>
          {totalOperations > 50000000 &&
          <div>🚀 Talk To Sales</div>
          }
          {totalOperations <= 50000000 &&
          <div>
            <b>= {numberWithCommas(totalOperations)}</b> operations/month
          </div>
          }
        </span>
      </div>
    )
  }
}
