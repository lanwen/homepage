import * as React from 'react'
import {$p} from 'graphcool-styles'
import styled from 'styled-components'
import * as cx from 'classnames'
import Quickstart from '../../components/Quickstart/Quickstart'
import Heading from './Heading'
import References from './References'
import Tutorials from './Tutorials'
import FAQ from './FAQ'
import MoreTutorials from './MoreTutorials'

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

const StyledTutorials = styled(Tutorials)`
  top: -10px;
`

export default class DocsOverview extends React.Component<{}, {}> {
  render() {
    return (
      <ContentContainer className={cx($p.pt96, $p.mt96)}>
        <Container>
          <Heading
            layout='REFERENCE'
            title='Reference Documentation'
            text='Find out everything about our Platform, API usage and features:'
            link='/docs/reference'
          />
        </Container>
        <References />
        <Container className={cx($p.pt96)}>
          <Heading
            layout='QUICKSTART'
            title='Quickstart'
            text='Put together your favourite technologies to form an example you can get easily started with.'
            link='/docs/quickstart'
          />
          <Quickstart className={$p.mt38} />
        </Container>
        <Container className={cx($p.pt96)}>
          <Heading
            layout='TUTORIAL'
            title='Tutorials & Guides'
            text='Get a practical step-by-step understanding of our features and how to use the APIs'
            link='/docs/tutorials'
          />
        </Container>
        <TutorialsBackground className={$p.mt60}>
          <Container>
            <StyledTutorials count={3} className={cx($p.relative)}/>
            <MoreTutorials />
          </Container>
        </TutorialsBackground>
        <Container className={cx($p.pt96, $p.pb96)}>
          <Heading
            layout='FAQ'
            title='Frequently Asked Questions'
            text='Find answers to the most common questions about graph.cool and the API'
            link='/docs/faq'
          />
          <FAQ />
        </Container>
      </ContentContainer>
    )
  }
}
