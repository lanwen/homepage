import * as React from 'react'
import { $p, $v } from 'graphcool-styles'
import * as cx from 'classnames'

interface State {
  valueA: number
  valueB: number
  operationType: OperationType
  description: string
  leftInfo: string
  rightInfo: string
}

enum OperationType {
  REQUEST,
  SUBSCRIPTION,
  FUNCTION_CALL
}

export default class OperationSlider extends React.Component<{}, State> {

  constructor(props) {
    super(props)
    this.state = {
      valueA: 0,
      valueB: 0
    }
  }

  render() {
    const {valueA, valueB} = this.state

    return (
        <div className={cx($p.white)}>
          <input
            type='range'
            value={valueA}
            onChange={this.changeA}
           />
           
        </div>
      )
  }

  private changeA = (e: any) => {
    console.log(e.target.value)
    this.setState({valueA: e.target.any} as State)
  }

}