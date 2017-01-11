import * as React from 'react'
import {$p} from 'graphcool-styles'
import * as cx from 'classnames'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import {Link} from 'react-router'
import styled from 'styled-components'

interface Props {
  data: any
  className?: string
}

const StyledLink = styled.div`
  flex: 1;
  width: 30%;
  box-shadow: 0 1px 6px rgba(0,0,0,.15);
`

const ImgWrapper = styled.div`
  height: 150px;
`

class Tutorials extends React.Component<Props, {}> {
  render() {
    const {data, className} = this.props

    if (data.loading) {
      return <div>Loading...</div>
    }

    return (
      <div className={cx($p.flex, $p.flexWrap, className)}>
        {data.allItems.map(item => (
          <StyledLink
            key={item.alias}
            className={cx($p.mr25, $p.noUnderline, $p.bgWhite)}
            to={item.path + '-' + item.alias}
          >
            <ImgWrapper
              className={cx($p.flex, $p.itemsCenter, $p.justifyCenter, $p.overflowHidden, $p.bb, $p.bBlack05)}
            >
              <img src={item.preview} />
            </ImgWrapper>
            <div className={cx($p.pa25)}>
              <h2 className={cx($p.f25)}>{item.title}</h2>
              <div className={cx($p.black20, $p.f14, $p.flex, $p.flexWrap, $p.nowrap, $p.mt10)}>
                {item.tags.map(tag => (
                  <span key={tag} className={cx($p.mr6)}>#{tag}</span>
                ))}
              </div>
              <div className={cx($p.mt25, $p.f16)}>
                {item.description}
              </div>
            </div>
          </StyledLink>
        ))}
      </div>
    )
  }
}


const getItemsQuery = gql`
  query ($first: Int){
    allItems(
      filter: {
        layout: TUTORIAL
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
  options: ({count}) => ({ variables: {first: count || 3} })
})(Tutorials)
