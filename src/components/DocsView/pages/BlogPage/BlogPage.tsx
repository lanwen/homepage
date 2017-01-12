import * as React from 'react'
import {$p} from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import Items from '../Overview/Items'
import Heading from '../Overview/Heading'

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

export default class TutorialsPage extends React.Component<{}, {}> {

  render() {
    return (
      <ContentContainer className={cx($p.pt96, $p.mt96)}>
        <Container>
          <Heading
            layout='BLOG'
            title='The Graphcool Blog'
            text='The latest news around Graphcool & GraphQL'
            link='/docs/blog'
          />
        </Container>
        <ItemsBackground className={$p.mt60}>
          <Container>
            <StyledItems count={50} layout='BLOG' className={cx($p.relative)} showPreview={false} />
          </Container>
        </ItemsBackground>
      </ContentContainer>
    )
  }
}

