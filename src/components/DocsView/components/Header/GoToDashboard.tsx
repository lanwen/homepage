import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'

export default class GoToDashboard extends React.Component<{}, {}> {
  render() {
    return (
      <div className={cx($p.ttu, $p.fw6, $p.green, $p.f20, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
        <img src={require('../../../../assets/graphics/filledGCoolLogo.svg')}
             className={cx($p.mr16)}/>
        Go to Console
      </div>
    )
  }
}
