import * as React from 'react'
import { Link } from 'react-router'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import { breakpoints } from '../../utils/constants'

export default () => (
  <div className={cx(window.innerWidth < breakpoints.p580 ? $p.mt38 : '')}>
    <h4 className='headline'>Company</h4>
    <ul className='list'>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/'>Jobs</Link></li>
      <li><Link to='/blog' target='_blank'>Blog</Link></li>
      <li><a href='https://github.com/graphcool' target='_blank'>Open Source</a></li>
    </ul>
  </div>
)
