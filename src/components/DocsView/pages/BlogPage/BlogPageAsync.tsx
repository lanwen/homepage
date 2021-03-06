import * as React from 'react'
import {$p} from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import Items from '../Overview/Items'
import Heading from '../Overview/Heading'
import Helmet from '../../../../components/Helmet'

const Container = styled.div`
  max-width: 1050px;
  margin: 0 auto;
`

const ContentContainer = styled.div`
   flex: 1 1 100px;
`

const ItemsBackground = styled.div`
  background: rgb(250,250,250);
`

const StyledItems = styled(Items)`
  top: -10px;
`

export default class BlogPage extends React.Component<{}, {}> {

  render() {
    return (
      <ContentContainer className={cx($p.pt96)}>
        <Helmet title='Blog - Graphcool'/>
        <Container>
          <Heading
            layout='BLOG'
            title='The Graphcool Blog'
            text='The latest news around Graphcool & GraphQL'
            link='/blog'
          />
        </Container>
        <ItemsBackground className={cx($p.mt60, $p.pb60)}>
          <Container>
            <StyledItems
              count={50}
              layout='BLOG'
              orderBy='publicationDate_DESC'
              className={cx($p.relative)}
              showPreview={true}
              revert={false}
            />
          </Container>
        </ItemsBackground>
      </ContentContainer>
    )
  }
}
