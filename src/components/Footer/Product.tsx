import * as React from 'react'
import { Link } from 'react-router'

export default () => (
  <div>
    <h4 className='headline'>Product</h4>
    <ul className='list'>
      <li><a href='https://graph.cool/docs/guides/setting-up-a-graphql-backend-in-5-minutes'>Quick Start</a></li>
      <li><a href='https://github.com/graphcool-examples' target='_blank'>Examples</a></li>
      <li><Link to='/pricing'>Pricing</Link></li>
      <li><Link to='/'>FAQ</Link></li>
    </ul>
  </div>
)
