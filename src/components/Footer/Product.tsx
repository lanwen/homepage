import * as React from 'react'
import { Link } from 'react-router'

export default () => (
  <div>
    <h4 className='headline'>Product</h4>
    <ul className='list'>
      <li><Link to='/docs/quickstart'>Quickstart</Link></li>
      <li><a href='https://github.com/graphcool-examples' target='_blank'>Examples</a></li>
      <li><Link to='/pricing'>Pricing</Link></li>
      <li><a href='https://github.com/graphcool/content/blob/master/content/legal/terms.md' target='_blank'>Terms & Privacy</a></li>
      <li><Link to='/docs/faq'>FAQ</Link></li>
    </ul>
  </div>
)
