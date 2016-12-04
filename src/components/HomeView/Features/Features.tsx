import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../../utils/constants'
import SectionHeader from '../SectionHeader'
import FeaturesContent from './FeaturesContent'

const Container = styled.div`
  margin: 0 auto ${$v.size38};
  max-width: ${breakpoints.p1250}px;
`

const SmallContainer = styled.div`
  margin: ${$v.size16};
  padding: ${$v.size10} ${$v.size06};
  flex: 0 0 260px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${breakpoints.p750}px) {
    :nth-child(7) {
      margin-left: 250px;
    }
  }
`

const Icon = styled.div`
  width: 10rem;
  height: 10rem;
  padding: 1.5rem;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 100%;
  }
`

export default class Features extends React.Component<{}, {}> {

  render() {

    return (
      <div>
        <SectionHeader
          headline='Features optimized for developer experience'
          copy='Graphcool is built by developers for developers.'
        />
        <Container className={cx($p.flex, $p.justifyCenter, $p.flexWrap)}>
          <SmallContainer>
            <Icon>
              <img src={require('../../../assets/graphics/feature-1.svg')}/>
            </Icon>
            <FeaturesContent
              headline='Instant Setup'
              content='Building your first backend with Graphcool is quick and easy. There’s no software to install and no infrastructure to manage, so you can get started in minutes.' // tslint:disable-line
            />
          </SmallContainer>
          <SmallContainer>
            <Icon>
              <img src={require('../../../assets/graphics/feature-2.svg')}/>
            </Icon>
            <FeaturesContent
              headline='Flexible Data Model'
              content='Traditional backend services provide a limited data model that makes it difficult to expand your application as requirements change. GraphQL was invented by facebook and has been proven in production by big companies such as Github and New York Times.' // tslint:disable-line
            />
          </SmallContainer>
          <SmallContainer>
            <Icon>
              <img src={require('../../../assets/graphics/feature-3.svg')}/>
            </Icon>
            <FeaturesContent
              headline='Works with everything'
              content='As an open standard you can use GraphQL from any language and any environment that can make simple http requests. On top of that great client libraries exist for a number of environments including javascript, python and ios.' // tslint:disable-line
            />
          </SmallContainer>
          <SmallContainer>
            <Icon>
              <img src={require('../../../assets/graphics/feature-4.svg')}/>
            </Icon>
            <FeaturesContent
              headline='Auto-Scaling'
              content='Graphcool scales automatically to handle your current load. You don’t have to provision servers or think about what happens when the holiday sale kicks in. You simply pay for the traffic you generate and we take care of the rest.' // tslint:disable-line
            />
          </SmallContainer>
          <SmallContainer>
            <Icon>
              <img src={require('../../../assets/graphics/feature-5.svg')}/>
            </Icon>
            <FeaturesContent
              headline='Powerful Integrations'
              content='Extend your application with new functionality by enabling one of the many integrations. Social login, fulltext search, online payment, geographic queries and much more can be enabled without writing custom code. ' // tslint:disable-line
            />
          </SmallContainer>
          <SmallContainer>
            <Icon>
              <img src={require('../../../assets/graphics/feature-6.svg')}/>
            </Icon>
            <FeaturesContent
              headline='Unlimited Flexibility'
              content='Implement your business logic with custom code in any language. Write and manage your code directly in the Graphcool console or host your own server for maximum flexibility.' // tslint:disable-line
            />
          </SmallContainer>
          <SmallContainer>
            <Icon>
              <img src={require('../../../assets/graphics/feature-7.svg')}/>
            </Icon>
            <FeaturesContent
              headline='No Vendor Lock-In'
              content='Your frontend application connects to Graphcool via an open standard. We don’t force you to use a proprietary sdk and actively engage with the GraphQL community to make sure that every new feature we build can be supported by other providers.' // tslint:disable-line
            />
          </SmallContainer>
          <SmallContainer>
            <Icon>
              <img src={require('../../../assets/graphics/feature-8.svg')}/>
            </Icon>
            <FeaturesContent
              headline='Interactive Docs'
              content='Everyone has their own learning style. That’s why we provide a variety of learning resources including tutorials, example projects and interactive documentation with examples you can try out right there on the website.' // tslint:disable-line
            />
          </SmallContainer>
        </Container>
      </div>
    )
  }
}
