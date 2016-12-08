import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import ServiceStatusBar from './ServiceStatusBar'
import { breakpoints } from '../../utils/constants'

export default () => (
  <div className='column'>
    <h4 className={cx('headline', window.innerWidth < breakpoints.p1360 ? $p.pb16 : '')}>
      Service Status
      <div className={cx($p.f12, $p.mt4)}>Last 30 days</div>
    </h4>
    <div>
      <ServiceStatusBar name='Relay Endpoint' />
      <ServiceStatusBar name='Simple Endpoint' />
    </div>
  </div>
)
