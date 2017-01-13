import * as React from 'react'
import { Link } from 'react-router'

export default () => (
  <div>
    <h4 className='headline'>Product</h4>
    <ul className='list'>
      <li><a href='/docs/quickstart'>Quick Start</a></li>
      <li><a href='https://github.com/graphcool-examples' target='_blank'>Examples</a></li>
      <li><Link to='/pricing'>Pricing</Link></li>
      <li><Link to='/docs/faq'>FAQ</Link></li>
    </ul>
  </div>
)
