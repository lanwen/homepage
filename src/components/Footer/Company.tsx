import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import { breakpoints } from '../../utils/constants'

export default () => (
  <div className={cx(window.innerWidth < breakpoints.p580 ? $p.mt38 : '')}>
    <h4 className='headline'>Company</h4>
    <ul className='list'>
      <li><a href=''>About</a></li>
      <li><a href=''>Jobs</a></li>
      <li><a href=''>Blog</a></li>
      <li><a href=''>Open Source</a></li>
      <li><a href=''>Imprint</a></li>
    </ul>
  </div>
)
