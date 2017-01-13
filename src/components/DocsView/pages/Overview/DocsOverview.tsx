import * as React from 'react'
import {$p} from 'graphcool-styles'
import styled from 'styled-components'
import * as cx from 'classnames'
import Quickstart from '../../components/Quickstart/Quickstart'
import Heading from './Heading'
import References from './References'
import Items from './Items'
import MoreItems from './MoreItems'
import Community from './Community'
import Try from '../../components/Try'
import * as cookiestore from 'cookiestore'
import OpenConsole from '../../components/OpenConsole'

const Container = styled.div`
  max-width: 1050px;
  margin: 0 auto;
`

const ContentContainer = styled.div`
   flex: 1 1 auto;
`

const ItemsBackground = styled.div`
  background: rgb(250,250,250);
`

const StyledItems = styled(Items)`
  top: -10px;
`

export default class DocsOverview extends React.Component<{}, {}> {
  render() {
    const loggedIn = cookiestore.has('graphcool_auth_token')

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
        <ItemsBackground className={$p.mt60}>
          <Container>
            <StyledItems
              count={3}
              aliases={[
                'thaeghi8ro',
                'dah6aifoce',
                'daisheeb9x',
              ]}
              className={cx($p.relative)}
              showPreview={true}
            />
            <MoreItems color={'rgb(164, 3, 111)'} text='See all Tutorials' link='/docs/tutorials' />
          </Container>
        </ItemsBackground>
        <Container className={cx($p.pt96, $p.pb96)}>
          <Heading
            layout='FAQ'
            title='Frequently Asked Questions'
            text='Find answers to the most common questions about graph.cool and the API'
            link='/docs/faq'
          />
        </Container>
        <ItemsBackground>
          <Container>
            <StyledItems count={3} layout='FAQ' className={cx($p.relative)} showPreview={false} />
            <MoreItems color={'rgb(60, 181, 184)'} text='See all Questions' link='/docs/faq' />
          </Container>
        </ItemsBackground>
        <Container className={cx($p.pt96, $p.pb96)}>
          <Heading
            layout='COMMUNITY'
            title='Community'
            text='Get in contact, collaborate and take part in making graph.cool the best GraphQL backend.'
            link='https://slack.graph.cool/'
          />
        </Container>
        <Community />
        {!loggedIn ? (
          <Try />
        ) : (
          <OpenConsole />
        )}
      </ContentContainer>
    )
  }
}
