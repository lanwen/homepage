import * as React from 'react'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import * as cx from 'classnames'
import Heading from './Heading'
import References from './References'
import Community from './Community'
import Items from './Items'
import Try from '../../components/Try'
import OpenConsole from '../../components/OpenConsole'
import MoreItems from './MoreItems'
import Quickstart from '../../components/Quickstart/Quickstart'
import * as cookiestore from 'cookiestore'
import { breakpoints, maxWidth } from '../../../../utils/constants'
import * as Helmet from 'react-helmet'

const Container = styled.div`
  max-width: 1050px;
  margin: 0 auto;
`

const PaddedContainer = styled(Container)`
  padding-top: ${$v.size96};
  
  @media (max-width: ${breakpoints.p400}px) {
    padding-left: ${$v.size25};
    padding-right: ${$v.size25};
  }
  
  @media (max-width: ${breakpoints.p580}px) {
    padding-top: ${$v.size60};
  }
  
  @media (max-width: ${breakpoints.p900}px) {
    padding-left: ${$v.size38};
    padding-right: ${$v.size38};
  }
  
  @media (min-width: ${breakpoints.p1200}px) {
    padding-left: ${$v.size60};
    padding-right: ${$v.size60};
  }
`

const ContentContainer = styled.div`
   // flex: 1 1 auto;
  
  // padding-right: ${$v.size38};
    max-width: ${maxWidth}px;
  

   
   
  //  @media (max-width: ${breakpoints.p1000}px){
  //    max-width: 850px;
  //  }
  //
  //  @media (max-width: ${breakpoints.p750}px){
  //    max-width: 600px;
  //  }
  // 
  // @media (max-width: ${breakpoints.p650}px){
  //    max-width: 475px;
  //  }
  //
  //  @media (max-width: ${breakpoints.p500}px){
  //    max-width: 350px;
  //  }
  // 
  //  @media (max-width: ${breakpoints.p400}px){
  //    max-width: 300px;
  //  }

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
      <ContentContainer>
        <Helmet title='Documentation & Tutorials - Graphcool' />
        <PaddedContainer>
          <Heading
            layout='REFERENCE'
            title='Reference Documentation'
            text='Get familiar with the Graphcool platform & API and explore all features:'
            link='/docs/reference'
          />
        </PaddedContainer>

        {/* References */}
        <References />

        {/* Quickstart */}
        <PaddedContainer>
          <Heading
            layout='QUICKSTART'
            title='Quickstart'
            text={`The fastest way to get started. Select your technology of choice,
              download an example project and start building.`}
            link='/docs/quickstart'
          />
          <Quickstart className={cx($p.mt38, $p.ml60)} />
        </PaddedContainer>

        {/* Tutorials & Guides - Heading */}
        <PaddedContainer>
          <Heading
            layout='TUTORIAL'
            title='Tutorials & Guides'
            text='Helpful step-by-step tutorials & guides to understand how to build apps with Graphcool.'
            link='/docs/tutorials/'
          />
        </PaddedContainer>

        {/* Tutorials & Guides - Content */}
        <ItemsBackground>
          <PaddedContainer>
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
            <MoreItems
              color={'rgb(164, 3, 111)'}
              text='See all Tutorials'
              link='/docs/tutorials/' />
          </PaddedContainer>
        </ItemsBackground>

        {/* FAQ - Heading */}
        <PaddedContainer>
          <Heading
            layout='FAQ'
            title='Frequently Asked Questions'
            text='Find answers to the most common questions about GraphQL and the Graphcool platform.'
            link='/docs/faq'
          />
        </PaddedContainer>

        {/* FAQ - Content */}
        <ItemsBackground>
          <PaddedContainer>
            <StyledItems count={3} layout='FAQ' className={cx($p.relative)} showPreview={false}/>
            <MoreItems color={'rgb(60, 181, 184)'} text='See all Questions' link='/docs/faq'/>
          </PaddedContainer>
        </ItemsBackground>
        {/*/!* Community *!/*/}
        <PaddedContainer className={cx($p.pt96, $p.pb96)}>
          <Heading
            layout='COMMUNITY'
            title='Community'
            text='Come and join thousands of other developers in the Graphcool community. 👋'
            link='https://slack.graph.cool/'
          />
        </PaddedContainer>
        <Community />
        <PaddedContainer>
        {!loggedIn ? (
            <Try />
          ) : (
            <OpenConsole />
          )}
        </PaddedContainer>
      </ContentContainer>
    )
  }
}
