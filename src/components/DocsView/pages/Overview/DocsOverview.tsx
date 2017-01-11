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
import Heading from './Heading'
import References from './References'

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
          <Quickstep />
        </Container>
        <Container className={cx($p.pt96)}>
          <Heading
            layout='TUTORIAL'
            title='Tutorials & Guides'
            text='Get a practical step-by-step understanding of our features and how to use the APIs'
            link='/docs/tutorials'
          />
          {data.loading ? (
              <div>Loading...</div>
            ) : (
              <div>
                {data.tutorials.map(tutorial => (
                  <div>{tutorial.title}</div>
                ))}
              </div>
            )}
        </Container>
        <Container className={cx($p.pt96, $p.pb96)}>
          <Heading
            layout='FAQ'
            title='Frequently Asked Questions'
            text='Find answers to the most common questions about graph.cool and the API'
            link='/docs/faq'
          />
          {data.loading ? (
              <div>Loading...</div>
            ) : (
              <div>
                {data.faqs.map(faq => (
                  <div>{faq.title}</div>
                ))}
              </div>
            )}
        </Container>
      </ContentContainer>
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
