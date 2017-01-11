import * as React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import DocsView from '../../DocsView'
import ContentWindow from '../../components/ContentWindow'
import {$p} from 'graphcool-styles'
import styled from 'styled-components'
import CircleIcon from '../../components/CircleIcon'
import * as cx from 'classnames'
import FeatureBox from './FeatureBox'
import Quickstep from '../../components/Quickstep'

interface Props {
  data: any
}

const Container = styled.div`
  max-width: 920px;
  margin: 0 auto;
`

const ContentContainer = styled.div`
   flex: 1 1 100px;
`

class DocsOverview extends React.Component<Props, {}> {
  render() {
    const {data} = this.props
    return (
      <div>
        <DocsView location={location}>
          <ContentContainer className={$p.pt96}>
            <Container className={cx($p.flex, $p.pt96)}>
              <div className={cx($p.flex)}>
                <FeatureBox
                  title='Platform'
                  iconSrc={require('../../../../assets/graphics/logos/graphcool.svg')}
                  text='All features and everything else, explained in simple words'
                  link='#'
                  className={$p.ma10}
                />
                <FeatureBox
                  title='Simple API'
                  iconSrc={require('../../../../assets/graphics/logos/serverless.svg')}
                  text='A complete reference on how to query, mutate or manage data with our simple API'
                  link='#'
                  className={$p.ma10}
                />
                <FeatureBox
                  title='Relay API'
                  iconSrc={require('../../../../assets/graphics/logos/relay.svg')}
                  text='For more advanced usage, a complete reference of the Relay API'
                  link='#'
                  className={$p.ma10}
                />
              </div>
            </Container>
            <Container>
              <h1>Quick Start</h1>
              <Quickstep />
            </Container>
            <h1>Tutorial &amp; Guides</h1>
            {data.loading ? (
                <div>Loading...</div>
              ) : (
                <div>
                  {data.tutorials.map(tutorial => (
                    <div>{tutorial.title}</div>
                  ))}
                </div>
              )}
            <h1>Frequently Asked Questions</h1>
            {data.loading ? (
                <div>Loading...</div>
              ) : (
                <div>
                  {data.faqs.map(faq => (
                    <div>{faq.title}</div>
                  ))}
                </div>
              )}
            <h1>Community</h1>
          </ContentContainer>
        </DocsView>
      </div>
    )
  }
}

const getItemsQuery = gql`
  {
    faqs: allItems(
      filter: {
        layout: FAQ
      }
      first: 3
    ) {
      id
      alias
      title
      preview
      description
      tags
    }

    tutorials: allItems(
      filter: {
        layout: TUTORIAL
      }
      first: 3
    ) {
      id
      alias
      title
      preview
      description
      tags
    }
  }
`

export default graphql(getItemsQuery)(DocsOverview)
