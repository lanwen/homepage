import * as React from 'react'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router'
import { getItemsByLayout } from '../../fragments/getItemsByLayout'
import * as cx from 'classnames'
import { $p, Icon, $v } from 'graphcool-styles'
import styled from 'styled-components'
import TutorialsContent from './TutorialsContent'
import TopicSeeAll from './TopicSeeAll'

interface Props {
  data: any
}

const Container = styled.div`
  margin-top: 200px;
`

const Text = styled.div`
  flex: 0 0 800px;
`

const CircleTutorial = styled.div`
  width: ${$v.size38};
  height: ${$v.size38};
  background-color: rgba(164, 3, 111, 0.2);
`

class ResourcesPage extends React.Component<Props, {}> {
  render() {
    return (
      <Container className={cx($p.ph60, $p.pb96)}>
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
            <div className={cx($p.flex, $p.itemsCenter)}>
              <CircleTutorial className={cx($p.flex, $p.justifyCenter, $p.itemsCenter, $p.br100)}>
                <Icon
                  src={require('graphcool-styles/icons/fill/docsExample.svg')}
                  width={50}
                  height={50}
                  fill={true}
                  color='#F18F01'
                />
              </CircleTutorial>
              <div className={cx($p.black30, $p.f25, $p.fw4, $p.pa10, $p.mla)}>Examples</div>
            </div>
            <div>
              <div className={cx($p.f25, $p.tc, $p.mt16)}>Choose your favourite technology</div>
              <div className={cx($p.flex, $p.justifyCenter, $p.pv60)}>
                <img src={require('../../../../assets/graphics/ResourcesOverview/angular-icon.svg')}
                     height={90}
                     width={90}
                     className={cx($p.mh25)}
                />
                <img src={require('../../../../assets/graphics/ResourcesOverview/apollostack.svg')}
                     height={90}
                     width={90}
                     className={cx($p.mh25)}
                />
                <img src={require('../../../../assets/graphics/ResourcesOverview/react.svg')}
                     height={90}
                     width={90}
                     className={cx($p.mh25)}
                />
                <img src={require('../../../../assets/graphics/ResourcesOverview/vue.svg')}
                     height={90}
                     width={90}
                     className={cx($p.mh25)}
                />
                <img src={require('../../../../assets/graphics/ResourcesOverview/relay.svg')}
                     height={90}
                     width={90}
                     className={cx($p.mh25)}
                />
              </div>
              <p className={cx($p.black60, $p.f25, $p.tc)}>or see <a href='/'>all examples</a></p>
            </div>
            <TopicSeeAll
              category='Tutorials'
              src={require('graphcool-styles/icons/fill/docsTutorial.svg')}
              color='#A4036F'/>
            <div className={cx($p.flex, $p.flexWrap, $p.justifyCenter, $p.pv25)}>
              <TutorialsContent
                headline='Setting up authentication'
                content='So far we’ve need to configure multiple models and specify relationships between them.'
                tags='#authentication  #Auth0'
                src={require('../../../../assets/graphics/Tutorial#1.png')}
              />
              <TutorialsContent
                headline='Setting up authentication'
                content='So far we’ve need to configure multiple models and specify relationships between them.'
                tags='#authentication  #Auth0'
                src={require('../../../../assets/graphics/Tutorial#1.png')}
              />
              <TutorialsContent
                headline='Setting up authentication'
                content='So far we’ve need to configure multiple models and specify relationships between them.'
                tags='#authentication  #Auth0'
                src={require('../../../../assets/graphics/Tutorial#1.png')}
              />
            </div>
            <TopicSeeAll
              category='FAQ'
              src={require('graphcool-styles/icons/fill/docsQuestion.svg')}
              color='#31B1B4'/>
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
