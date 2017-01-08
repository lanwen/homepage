import * as React from 'react'
import { $p, $v } from 'graphcool-styles'
import * as cx from 'classnames'

export default class CallToAction extends React.Component<{}, {}> {
  render() {
    return (
      <div className={cx($p.bgWhite)} style={{height: 180}}>
        Call to Action
      </div>
    )
  }
}
