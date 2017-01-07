import * as React from 'react'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router'
import TemporaryNavigation from '../../components/TemporaryNavigation'
import { getItemsByLayout } from '../../fragments/getItemsByLayout'
import AnnoucementBox from './AnnoucementBox'
import { $p, $v } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import BlogPost from './BlogPost';

interface Props {
  data: any
}
const Basis = styled.div`
  margin-top: 200px;
`
class BlogPage extends React.Component<Props, {}> {
  render() {
    return (
      <Basis className={cx($p.ph96, $p.flex, $p.flexColumn, $p.flexWrap)}>
        {this.props.data.loading ? 'loading...' : <TemporaryNavigation links={this.props.data.allItems}/>}
        <AnnoucementBox/>
        <BlogPost/>
      </Basis>
    )
  }
}

const BlogPageWithData = graphql(getItemsByLayout, {
  options: {
    variables: {
      layout: 'BLOG',
    },
  },
})(BlogPage)

export default withRouter(BlogPageWithData)
