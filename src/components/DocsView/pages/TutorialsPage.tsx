import * as React from 'react'
import {$p} from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import Items from './Overview/Items'
import Heading from './Overview/Heading'

const Container = styled.div`
  max-width: 920px;
  margin: 0 auto;
`

const ContentContainer = styled.div`
   flex: 1 1 100px;
`

const TutorialsBackground = styled.div`
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
            layout='TUTORIAL'
            title='Tutorials & Guides'
            text='Get a practical step-by-step understanding of our features and how to use the APIs'
            link='/docs/tutorials'
          />
        </Container>
        <TutorialsBackground className={$p.mt60}>
          <Container>
            <StyledItems count={50} layout='TUTORIAL' className={cx($p.relative)} showPreview={true} />
          </Container>
        </TutorialsBackground>
      </ContentContainer>
    )
  }
}
