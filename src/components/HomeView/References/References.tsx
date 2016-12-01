import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import Reference from './Reference'
import Pagination from '../Pagination'

export default class References extends React.Component<{}, {}> {

  render() {
    return (
      <section className={cx($p.bgLightgreen10, $p.pt60, $p.ph96, $p.pb38, $p.tc)}>
        <div>
          <Reference
            quote='We really, really like this product. We don’t need backend-devs anymore. That’s great!'
            author='Random CTO'
          />
        </div>
        <div className={cx($p.flex, $p.justifyCenter)}>
          <Pagination bullets={3} />
        </div>
      </section>
    )
  }
}
