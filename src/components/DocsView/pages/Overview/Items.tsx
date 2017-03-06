import * as React from 'react'
import {$p} from 'graphcool-styles'
import * as cx from 'classnames'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import {Link} from 'react-router'
import styled from 'styled-components'
import {Layout} from '../../../../types/types'
import {breakpoints} from '../../../../utils/constants'

interface Props {
  data: any
  className?: string
  layout?: Layout
  aliases?: string[]
  showPreview?: boolean
  revert?: boolean
  orderBy?: string
}

const StyledLink = styled(Link)`
  max-width: 325px;
  box-shadow: 0 1px 6px rgba(0,0,0,.15);
  
  @media (max-width: ${breakpoints.p580}px) {
    max-width: none;
    margin-right: 0;
  }
  
  @media (max-width: ${breakpoints.p400}px) {
    margin-right: 0;
    margin-left: 0;
  }
`

const ImgWrapper = styled.div`
  height: 150px;
  img {
    max-width: 147%;
    max-height: 147%;
  }
`

const Overflow = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 25px;
  left: 0;
  
  background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
  background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);
  background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);
`

const Container = styled.div`
  @media (max-width: 920px) {
    justify-content: center;
  }
`

class Items extends React.Component<Props, {}> {
  render() {
    const {data, className, showPreview, aliases, revert} = this.props

    if (data.loading) {
      return <div>Loading...</div>
    }

    let pointer = []
    if (aliases && aliases.length > 0) {
      pointer = aliases.map(alias => data.aliases.find(item => item.alias === alias))
    } else {
      pointer = data.layout
    }

    if (revert) {
      pointer = pointer.reverse()
    }

    return (
      <Container className={cx($p.flex, $p.flexWrap, className)}>
        {pointer.map(item => (
          <StyledLink
            key={item.alias}
            className={cx($p.mr25, $p.noUnderline, $p.bgWhite, $p.mb25)}
            to={item.path + '-' + item.alias}
          >
            {showPreview && (
              <ImgWrapper
                className={cx($p.flex, $p.itemsCenter, $p.justifyCenter, $p.overflowHidden, $p.bb, $p.bBlack05)}
              >
                <img src={item.preview} />
              </ImgWrapper>
            )}
            <div className={cx($p.pa25, $p.relative)}>
              <h3>{item.title}</h3>
              <div className={cx($p.black20, $p.f14, $p.flex, $p.flexWrap, $p.nowrap, $p.mt10)}>
                {item.tags.map(tag => (
                  <span key={tag} className={cx($p.mr6)}>#{tag}</span>
                ))}
              </div>
              <div className={cx($p.mt25, $p.f16, $p.toe, $p.overflowHidden)}>
                {item.description.slice(0, 200)}
              </div>
              {item.description.length > 200 && (
                <Overflow />
              )}
            </div>
          </StyledLink>
        ))}
      </Container>
    )
  }
}

const getItemsQuery = gql`
  query ($first: Int, $layout: ITEM_LAYOUT, $aliases: [String!], $includeAliases: Boolean!, $orderBy: ItemOrderBy) {
    layout: allItems(
      filter: {
        layout: $layout
      }
      first: $first
      orderBy: $orderBy
    ) {
      id
      path
      alias
      title
      preview
      description
      tags
    }
    aliases: allItems(
      filter: {
        alias_in: $aliases
      }
      first: $first
    ) @include(if: $includeAliases) {
      id
      path
      alias
      title
      preview
      description
      tags
    }
  }
`

export default graphql(getItemsQuery, {
  options: ({count, layout, aliases, orderBy}) => ({
    variables: {
      first: count || 3,
      layout: layout || 'REFERENCE',
      aliases: aliases || [],
      includeAliases: !!aliases && aliases.length > 0,
      orderBy: orderBy || 'createdAt_DESC',
    },
  }),
})(Items)
