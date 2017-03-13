import * as React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import * as Helmet from 'react-helmet'
import IntroSection from './IntroSection'
import SchemaSection from './SchemaSection'
import HowItWorksSection from './HowItWorksSection'
import AddGraphQLUpSection from './AddGraphQLUpSection'
import GraphQLUpFAQ from './GraphQLUpFAQ'

interface Props {

}

export default class GraphQLUp extends React.Component<Props, {}> {

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
        <SchemaSection />
        <HowItWorksSection />
        <AddGraphQLUpSection />
        <GraphQLUpFAQ />
        <Footer />
      </div>
    )
  }
}
