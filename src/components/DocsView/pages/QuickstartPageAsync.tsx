import * as React from 'react'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router'
import { getItemsByLayout } from '../fragments/getItemsByLayout'
import {Helmet} from 'react-helmet'
import Quickstart from '../components/Quickstart/Quickstart'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import styled from 'styled-components'
import Heading from './Overview/Heading'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const ContentContainer = styled.div`
   flex: 1 1 100px;
`

const QuickstartContainer = styled(Quickstart)`
  padding-left: 76px;
`

class QuickstartPage extends React.Component<{}, {}> {
  render() {
    return (
      <ContentContainer>
        <Helmet title='Quick Start - Graphcool'/>
        <Container>
          <Heading
            layout='QUICKSTART'
            title='Quickstart'
            text={
              'The fastest way to get started. Select your technology of choice, download an example project and'
            + ' start building.'
            }
            link='/docs/quickstart'
          />
        </Container>
        <QuickstartContainer className={cx($p.mt38, $p.mb60, $p.bbox)}/>
      </ContentContainer>
    )
  }
}

const QuickstartPageWithData = graphql(getItemsByLayout, {
  options: {
    variables: {
      layout: 'TUTORIAL',
    },
  },
})(QuickstartPage)

export default withRouter(QuickstartPageWithData)
