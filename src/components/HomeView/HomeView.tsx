import * as React from 'react'
import * as cx from 'classnames'
import { $p, Icon } from 'graphcool-styles'

export default class HomeView extends React.Component<{}, {}> {

  render() {
    return (
      <div className={cx($p.w50, $p.green, $p.pa25)}>
        Hello Graphcool
        <Icon src={require('../../assets/icons/backup.svg')} width={50} height={50}/>
      </div>
    )
  }
}
