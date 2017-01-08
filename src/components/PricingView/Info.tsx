import * as React from 'react'
import { $p, $v } from 'graphcool-styles'
import * as cx from 'classnames'

export default class Info extends React.Component<{}, {}> {
  render() {
    return (
      <div className={cx($p.bgDarkBlue)} style={{height: 1600}}>
        Info
      </div>
    )
  }
}
