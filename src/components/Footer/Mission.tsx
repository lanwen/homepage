import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import { breakpoints } from '../../utils/constants'

export default () => (
  <div className={cx(window.innerWidth < breakpoints.p1360 ? $p.mt38 : '')}>
    <h4 className='headline'>Our Mission</h4>
    <p className={cx($p.fw4)}>
      {
        `Building sophisticated applications should be like clicking lego bricks together. GraphQL finally enables you to create modular software and Graphcool is the platform that brings everything together` // tslint:disable-line
      }
    </p>
  </div>
)
