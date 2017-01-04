import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import CircleIcon from '../CircleIcon'
import isValidElement = React.isValidElement
import { Item } from '../../../../types/types'
import GoToConsole from '../Header/GoToConsole'
import BreadCrumb from './BreadCrumb'

interface Props {
  item: Item
}

export default class ContentHeader extends React.Component<Props, {}> {
  render() {
    const {item} = this.props
    const date = new Date(item.lastModified)
    return (
      <div className={cx($p.flex, $p.pt96)}>
        <div className={cx($p.bbox, $p.db, $p.mr10, $p.pt96)}>
          <CircleIcon width={44} height={44} type={item.layout}/>
        </div>
        <div className={cx($p.flexColumn, $p.flex, $p.pb60, $p.pt10)}>
          <div className={cx($p.pb60, $p.ttu, $p.f14, $p.black20, $p.fw6)}>
            <BreadCrumb item={item} />
          </div>
          <p className={cx($p.f38, $p.black80, $p.fw3)}>{item.title}</p>
          <div className={cx($p.inlineFlex, $p.black20, $p.f16, $p.pt6)}>
            <div
              className={cx($p.pr38)}>Last updated {date.getMonth() + 1}/{date.getUTCDate()}/{date.getFullYear()}
            </div>
            {item.tags.map(tag => (
              <div key={tag} className={cx($p.pr16)}>#{tag}</div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
