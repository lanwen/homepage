import * as React from 'react'
import {Item} from '../../../../types/types'
import {$p} from 'graphcool-styles'
import * as cx from 'classnames'
import {Link} from 'react-router'

interface Props {
  item: Item
}

interface Crumb {
  href: string
  text: string
}

export default class BreadCrumb extends React.Component<Props, {}> {
  generateCrumbs(path): Crumb[] {

    if (path.includes('/docs/reference/')) {
      const bread = path.slice(16, path.length)
      // TODO: generate links for the parent components
      return bread.replace(/-/g, ' ').split('/').map(text => ({
        text,
        href: null,
      }))
    }
    return []
  }
  render() {
    const {item} = this.props
    const crumbs = this.generateCrumbs(item.path)
    const count = crumbs.length

    return (
      <div className={cx($p.flex, $p.flexRow)}>
        {crumbs.map((link, index) => (
          (index < count - 1) ? (
            <div className={cx($p.flex, $p.flexRow)}>
              <div href={link.href}>{link.text}</div>
              <div className={$p.ph6}>{'>'}</div>
            </div>
          ) : (
            <div>
              <Link
                to={`${item.path}-${item.alias}`}
                className={cx($p.noUnderline, $p.black50)}
              >{link.text}</Link>
            </div>
          )
        ))}
      </div>
    )
  }
}
