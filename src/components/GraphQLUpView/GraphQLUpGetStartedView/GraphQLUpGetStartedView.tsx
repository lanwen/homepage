import * as React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import * as Helmet from 'react-helmet'
import IntroSection from './IntroSection'
import GraphQLUpFAQ from '../GraphQLUpFAQ'
import GenerateEndpointSection from './GenerateEndpointSection'

interface State {

}

interface Props {

}

export default class GraphQLUpGetStartedView extends React.Component<Props, State> {


  render() {
    return (
      <div>
        <Helmet title='graphql-up - Graphcool'/>
        <style jsx={true}>{`

        `}</style>
        <Header
          view='HOMEPAGE'
        />
        <IntroSection />
        <GraphQLUpFAQ />
        <GenerateEndpointSection />
        <Footer />
      </div>
    )
  }
}
