import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import { breakpoints } from '../../utils/constants'
import {Link} from 'react-router'

export default () => (
  <div className={cx(window.innerWidth < breakpoints.p1000 ? $p.mt38 : '')}>
    <h4 className='headline'>Docs</h4>
    <ul className='list'>
      <li><Link to='/docs/tutorials/'>Tutorials</Link></li>
      <li><Link to='/docs/reference/platform/overview-chohbah0eo/'>Platform</Link></li>
      <li><Link to='/docs/reference/simple-api/overview-heshoov3ai/'>Simple API</Link></li>
      <li><Link to='/docs/reference/relay-api/overview-aizoong9ah/'>Relay API</Link></li>
      <li><a href='/forum/'>Community Forum</a></li>
    </ul>
  </div>
)
