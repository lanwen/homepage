import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'

export default class Footer extends React.Component<{}, {}> {

  render() {
    return (
      <div className={cx($p.pv96, $p.tc, $p.f38, $p.fw3)}>
        Footer
      </div>
    )
  }
}
