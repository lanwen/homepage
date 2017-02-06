import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'

export default class Separator extends React.Component<{}, {}> {
  render() {
    return (
      <div className={cx($p.wS96, $p.hS06, $p.bgLightgreen30, $p.center)} />
    )
  }
}
