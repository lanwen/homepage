import * as React from 'react'
import {$p} from 'graphcool-styles'
import * as cx from 'classnames'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import {Link} from 'react-router'
import styled from 'styled-components'
import {Layout} from '../../../../types/types'

interface Props {
  data: any
  className?: string
  layout: Layout
  showPreview?: boolean
}

const StyledLink = styled(Link)`
  flex: 0 0 281px;
  box-shadow: 0 1px 6px rgba(0,0,0,.15);
`

const Text = styled.div`
  max-height: 200px;
`

const ImgWrapper = styled.div`
  height: 150px;
  img {
    max-width: 120%;
    max-height: 120%;
  }
`

class Tutorials extends React.Component<Props, {}> {
  render() {
    const {data, className, showPreview} = this.props

    if (data.loading) {
      return <div>Loading...</div>
    }

  return (
      <div className={cx($p.flex, $p.flexWrap, $p.justifyCenter, className)}>
        {data.allItems.map(item => (
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
            <div className={cx($p.pa25)}>
              <h2 className={cx($p.f25)}>{item.title}</h2>
              <div className={cx($p.black20, $p.f14, $p.flex, $p.flexWrap, $p.nowrap, $p.mt10)}>
                {item.tags.map(tag => (
                  <span key={tag} className={cx($p.mr6)}>#{tag}</span>
                ))}
              </div>
              <Text className={cx($p.mt25, $p.f16, $p.toe, $p.overflowHidden)}>
                {item.description}
              </Text>
            </div>
          </StyledLink>
        ))}
      </div>
    )
  }
}

const getItemsQuery = gql`
  query ($first: Int, $layout: ITEM_LAYOUT){
    allItems(
      filter: {
        layout: $layout
      }
      first: $first
    ) {
      id
      alias
      title
      preview
      description
      tags
    }
  }
`

export default graphql(getItemsQuery, {
  options: ({count, layout}) => ({ variables: { first: count || 3, layout } }),
})(Tutorials)
