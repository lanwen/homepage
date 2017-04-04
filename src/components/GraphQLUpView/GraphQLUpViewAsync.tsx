import * as React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {Helmet} from 'react-helmet'
import IntroSection from './IntroSection'
import SchemaSection from './SchemaSection'
import HowItWorksSection from './HowItWorksSection'
import AddGraphQLUpSection from './AddGraphQLUpSection'
import GraphQLUpFAQ from './GraphQLUpFAQ'

interface Props {

}

export default class GraphQLUp extends React.Component<Props, {}> {

  render() {
    const description = 'Get a ready-to-use GraphQL API for your schema'
    const title = 'graphql-up'
    const image = 'https://graph.cool/images/graphql-up-twitter.png'

    return (
      <div>
        <Helmet
          title='graphql-up - Get a ready-to-use GraphQL API for your schema'
          meta={[
            { name: 'description', content: 'graphql-up is the fastest way to get a free & ready to use GraphQL API.' },
            { property: 'og:type', content: 'article' },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:image', content: image },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: image },
          ]}
        />
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
