import * as React from 'react'
import {Item} from '../../../../types/types'
import {$p, Icon, $v} from 'graphcool-styles'
import * as cx from 'classnames'
import {Link} from 'react-router'
import styled from 'styled-components'

interface Props {
  item: Item
}

interface Crumb {
  href: string
  text: string
}

const Container = styled.div`
  height: 19px;
`

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
      <Container className={cx($p.flex, $p.flexRow)}>
        {crumbs.map((link, index) => (
          (index < count - 1) ? (
            <div className={cx($p.flex, $p.flexRow, $p.itemsCenter)}>
              <div href={link.href}>{link.text}</div>
              <Icon
                src={require('graphcool-styles/icons/stroke/arrowRight.svg')}
                stroke={true}
                className={$p.ph6}
                strokeWidth={8}
                color={$v.gray20}
                height={12}
                width={12}
              />
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
      </Container>
    )
  }
}
