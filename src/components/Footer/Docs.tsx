import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import { breakpoints } from '../../utils/constants'

export default () => (
  <div className={cx(window.innerWidth < breakpoints.p1000 ? $p.mt38 : '')}>
    <h4 className='headline'>Docs</h4>
    <ul className='list'>
      <li><a href='https://graph.cool/docs/guides'>Guides</a></li>
      <li><a href='https://graph.cool/docs/reference/platform/overview'>Platform</a></li>
      <li><a href='https://graph.cool/docs/reference/simple-api/overview'>Simple API</a></li>
      <li><a href='https://graph.cool/docs/reference/relay-api/overview'>Relay API</a></li>
    </ul>
  </div>
)
