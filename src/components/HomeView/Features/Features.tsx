import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../../utils/constants'
import Feature from './Feature'
import SectionHeader from '../../SectionHeader'

const Container = styled.div`
  margin: 0 auto ${$v.size60};
  max-width: ${breakpoints.p1250 + 100}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-left: ${$v.size25};
  
  @media (min-width: ${breakpoints.p400}px) {
    padding-left: ${$v.size38};
  }
  
  @media (min-width: ${breakpoints.p650}px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
    
  @media (min-width: ${breakpoints.p750}px) {
    padding-left: ${$v.size60};
  }
  
  @media (min-width: ${breakpoints.p900}px) {
    justify-content: space-around;
    padding-left: 0;
  }

  @media (min-width: ${breakpoints.p1250 + 300}px) {
    justify-content: space-between;
  }
  
`

export default class Features extends React.Component<{}, {}> {

  render() {

    return (
      <div>
        <SectionHeader
          headline='Features optimized for developer experience'
          copy=''
        />
        <Container>
          <Feature
            icon='resize'
            color={$v.blue}
            headline='Flexible Data Model'
            copy='Create and change your data model to fit your needs without breaking your app.'
          />
          <Feature
            icon='check'
            color={$v.green}
            headline='Apollo & Relay Compatible'
            copy='Optimized endpoints for every GraphQL client like Apollo and Relay.'
          />
          <Feature
            icon='radar'
            color={$v.red}
            headline='Real-time Subscriptions'
            copy='Works out-of-the-box with GraphQL subscriptions for real-time applications.'
          />
          <Feature
            icon='lock'
            color={$v.lightOrange}
            headline='Permission Control'
            copy='There’s no software or  infrastructure to manage, so you can get started in minutes.'
          />
          <Feature
            icon='puzzle'
            color={$v.purple}
            headline='Powerful Integrations'
            copy='Integrates seamlessly with many services like Algolia, Auth0, Stripe or Digits.'
          />
          <Feature
            icon='braces'
            color={$v.blue}
            headline='Easy to Extend'
            copy='Extend your backend and implement your custom logic using any language.'
          />
        </Container>
      </div>
    )
  }
}
