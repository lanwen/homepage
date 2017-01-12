import * as React from 'react'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router'
import TemporaryNavigation from '../components/TemporaryNavigation'
import {getItemsByLayout} from '../fragments/getItemsByLayout'
import ContentWindow from '../components/ContentWindow'
import * as Helmet from 'react-helmet'
import Quickstart from '../components/Quickstart/Quickstart'
import * as cx from 'classnames'
import {$p} from 'graphcool-styles'
import styled from 'styled-components'
import Heading from './Overview/Heading'

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

class QuickstartPage extends React.Component<Props, {}> {
  render() {
    return (
      <ContentContainer className={cx($p.pt96, $p.mt96)}>
        <Helmet title='Quick Start' />
        <Container>
          <Heading
            layout='QUICKSTART'
            title='Quickstart'
            text='Put together your favourite technologies to form an example you can get easily started with.'
            link='/docs/quickstart'
          />
          <Quickstart className={cx($p.pv96)}/>
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
