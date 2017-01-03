import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'

export default class LoadingBar extends React.Component<{}, {}> {

  render() {
    return (
      <div className={cx($p.fixed, $p.top0, $p.left0, $p.right0, $p.bgGreen, $p.z999)} style={{height: 4}}>
      </div>
    )
  }
}
