import * as React from 'react'
import { $p } from 'graphcool-styles'
import * as cx from 'classnames'

export default class AnnouncementIcon extends React.Component<{}, {}> {
  render() {
    return (
      <div className={cx($p.flex)}>
        <div className={cx($p.lightgreen50, $p.bgLightgreen10, $p.pa25, $p.fw6, $p.f16)}>
          ANNOUNCEMENT
        </div>
      </div>
    )
  }
}
