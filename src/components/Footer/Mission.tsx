import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import { breakpoints } from '../../utils/constants'

export default () => (
  <div className={cx(window.innerWidth < breakpoints.p1360 ? $p.mt38 : '')}>
    <h4 className='headline'>Our Mission</h4>
    <p>
      {
        `It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast at both ends.` // tslint:disable-line
      }
    </p>
  </div>
)
