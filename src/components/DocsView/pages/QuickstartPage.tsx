import * as React from 'react'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router'
import TemporaryNavigation from '../components/TemporaryNavigation'
import {getItemsByLayout} from '../fragments/getItemsByLayout'
import ContentWindow from '../components/ContentWindow'
import * as Helmet from 'react-helmet'
import Quickstep from '../components/Quickstep'

interface Props {
  data: any
}

class QuickstartPage extends React.Component<Props, {}> {
  render() {
    return (
      <ContentWindow>
        <Helmet title='Quick Start' />
        <Quickstep/>
      </ContentWindow>
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
