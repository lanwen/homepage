import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import { breakpoints } from '../../utils/constants'

export default () => (
  <div className={cx(window.innerWidth < breakpoints.p1000 ? $p.mt38 : '')}>
    <h4 className='headline'>Docs</h4>
    <ul className='list'>
      <li><a href='/docs/tutorials'>Tutorials</a></li>
      <li><a href='/docs/reference/platform/overview-chohbah0eo'>Platform</a></li>
      <li><a href='/docs/reference/simple-api/overview-heshoov3ai'>Simple API</a></li>
      <li><a href='/docs/reference/relay-api/overview-aizoong9ah'>Relay API</a></li>
    </ul>
  </div>
)
