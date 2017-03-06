import * as React from 'react'
import { Item } from '../../../../types/types'
import { $p, Icon, $v } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'

interface Props {
  item: Item
}

interface Crumb {
  href: string
  text: string
}

const Container = styled.div`
  // height: 19px;
  
`

const StyledLink = styled.div`
  // top: -1px;
`

export default class BreadCrumb extends React.Component<Props, {}> {
  generateCrumbs(item: Item): Crumb[] {
    const {path} = item
    let bread = ''
    if (path.includes('/docs/reference/')) {
      bread = path.slice(16, path.length)
    } else if (path.includes('/blog')) {
      // bread = path.slice(1, path.length)
      bread = 'blog/' + item.shorttitle
    } else if (path.includes('/docs/faq/') || path.includes('/docs/tutorials/')) {
      bread = path.slice(6, path.length)
    }
    return bread.replace(/-/g, ' ').split('/').map(text => ({
      text,
      href: null,
    }))
  }

  render() {
    const {item} = this.props
    const crumbs = this.generateCrumbs(item)
    const count = crumbs.length

    return (
      <Container className={cx($p.flex, $p.flexWrap)}>
        {crumbs.map((link, index) => (
          (index < count - 1) ? (
              <div key={link.text} className={cx($p.flex, $p.itemsCenter)}>
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
              <StyledLink
                key={link.text}
                to={`${item.path}-${item.alias}`}
                className={cx($p.noUnderline, $p.black50, $p.relative)}
              >{link.text}</StyledLink>
            )
        ))}
      </Container>
    )
  }
}
