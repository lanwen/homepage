import * as React from 'react'
import { $p, $v } from 'graphcool-styles'
import * as cx from 'classnames'

export default class PlanCols extends React.Component<{}, {}> {
  render() {
    return (
      <div className={cx($p.bgWhite)} style={{height: 920}}>
        Plan cols
      </div>
    )
  }
}
