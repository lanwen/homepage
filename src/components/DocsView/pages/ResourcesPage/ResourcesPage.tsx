import * as React from 'react'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router'
import { getItemsByLayout } from '../../fragments/getItemsByLayout'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import TutorialsContent from './TutorialsContent'
import TopicSeeAll from './TopicSeeAll'
import ChooseTechnology from './ChooseTechnology'
import FAQContent from './FAQContent'
import { breakpoints } from '../../../../utils/constants'


interface Props {
  data: any
}

const Container = styled.div`
  margin-top: 200px;
  
  @media (max-width: ${breakpoints.p1360}px) {
    padding-left: ${$v.size38};
    padding-right ${$v.size38};
  }
  @media (max-width: ${breakpoints.p1250}px) {
    padding-left: ${$v.size20};
    padding-right ${$v.size20};
  }
  @media (max-width: ${breakpoints.p1200}px) {
    padding-left: ${$v.size60};
    padding-right ${$v.size60};
  }
   @media (max-width: ${breakpoints.p900}px) {
    padding-left: ${$v.size25};
    padding-right ${$v.size25};
   }
   @media (max-width: ${breakpoints.p750}px) {
    padding-left: ${$v.size16};
    padding-right ${$v.size16};
   }
`

const Text = styled.div`
  flex: 0 0 60%;
`

class ResourcesPage extends React.Component<Props, {}> {
  render() {
    return (
      <Container className={cx($p.ph60, $p.pb96, $p.bgBlack04, $p.pt60)}>
        <h1 className={cx($p.tc)}>
          Welcome to our resources
        </h1>
        {this.props.data.loading ? 'loading...' : (
          <div>
            <div className={cx($p.flex, $p.flexWrap, $p.justifyCenter, $p.itemsCenter)}>
              <Text className={cx($p.f20, $p.black60, $p.pt38, $p.pb60, $p.selfCenter)}>
                Our resources are a comb, ination of tutorials and guides which are available for editing on github.
                Adittionally you can view more of our content on youtube or get in touch via slack if you have any
                questions.
              </Text>
            </div>
            <ChooseTechnology/>
            <TopicSeeAll
              category='Tutorials'
              src={require('graphcool-styles/icons/fill/docsTutorial.svg')}
              color='#A4036F'
              backgroundColor='rgba(164, 3, 111, 0.2)'
            />
            <div className={cx($p.flex, $p.flexWrap, $p.justifyCenter, $p.pv38, $p.mb60)}>
              <TutorialsContent
                headline='Setting up authentication'
                content='So far we’ve need to configure multiple models and specify relationships between them.'
                tags='#authentication  #Auth0'
                src={require('../../../../assets/graphics/Tutorial#1.png')}
                updated='last edited a week ago'
              />
              <TutorialsContent
                headline='Setting up authentication'
                content='So far we’ve need to configure multiple models and specify relationships between them.'
                tags='#authentication  #Auth0'
                src={require('../../../../assets/graphics/Tutorial#1.png')}
                updated='last edited a week ago'
              />
              <TutorialsContent
                headline='Setting up authentication'
                content='So far we’ve need to configure multiple models and specify relationships between them.'
                tags='#authentication  #Auth0'
                src={require('../../../../assets/graphics/Tutorial#1.png')}
                updated='last edited a week ago'
              />
            </div>
            <TopicSeeAll
              category='FAQ'
              src={require('graphcool-styles/icons/fill/docsQuestion.svg')}
              color='#31B1B4'
              backgroundColor='rgba(49, 177, 180, 0.2)'
            />
            <div className={cx($p.flex, $p.justifyCenter, $p.flexWrap, $p.flexRow, $p.mb60, $p.pv38)}>
              <FAQContent
                title='Why do I keep recieving null back on my query to your server?'
                content='So far we’ve need to configure multiple models and specify relationships between them. Make sure that you have checked that you are specifying all required contents of your request. If this does not work, it may also be the case that something in…'
                tags='#authentication  #Auth0'
                updated='last edited a week ago'
              />
              <FAQContent
                title='Why do I keep recieving null back on my query to your server?'
                content='So far we’ve need to configure multiple models and specify relationships between them. Make sure that you have checked that you are specifying all required contents of your request. If this does not work, it may also be the case that something in…'
                tags='#authentication  #Auth0'
                updated='last edited a week ago'
              />
              <FAQContent
                title='Why do I keep recieving null back on my query to your server?'
                content='So far we’ve need to configure multiple models and specify relationships between them. Make sure that you have checked that you are specifying all required contents of your request. If this does not work, it may also be the case that something in…'
                tags='#authentication  #Auth0'
                updated='last edited a week ago'
              />
            </div>
          </div>
        )}
      </Container>
    )
  }
}

const ResourcesPageWithData = graphql(getItemsByLayout, {
  options: {
    variables: {
      layout: 'REFERENCE',
    },
  },
})(ResourcesPage)

export default withRouter(ResourcesPageWithData)
