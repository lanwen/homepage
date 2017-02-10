import * as React from 'react'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router'
import { getItemsByLayout } from '../fragments/getItemsByLayout'
import * as Helmet from 'react-helmet'
import Quickstart from '../components/Quickstart/Quickstart'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import Heading from './Overview/Heading'
import { breakpoints } from '../../../utils/constants'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const ContentContainer = styled.div`
   flex: 1 1 100px;
`

const QuickstartContainer = styled(Quickstart)`
  margin-left: 75px;
  margin-right: ${$v.size60};
`

class QuickstartPage extends React.Component<{}, {}> {
  render() {
    return (
      <ContentContainer className={cx($p.pv96, $p.mt96)}>
        <Helmet title='Quick Start'/>
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
          <QuickstartContainer className={cx($p.mt38, $p.mb60)}/>
        </Container>
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
