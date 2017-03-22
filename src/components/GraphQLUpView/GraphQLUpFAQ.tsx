import * as React from 'react'
import QuestionColumn from './QuestionColumn'
import {breakpoints} from '../../utils/constants'

export interface FAQItem {
  question: string
  answer: JSX.Element
  readMoreLink?: string
}

interface Props {
}

const leftFAQItems: [FAQItem] = [
  {
    question: 'What use cases does graphql-up cover?',
    answer: (<span>graphql-up is ideal for anyone who wants to have a head-start with
    GraphQL without the hassle of having to do any work on the server. You
    can use it to quickly spin up a GraphQL backend for mocking data, testing or simply
    experimenting and playing around with GraphQL.
    It's also perfect for usage in tutorials, sample projects or documentation.</span>),
  },
  {
    question: 'What does the generated GraphQL API look like?',
    answer: (<span>graphql-up generates two different APIs. The first one is
    called <a href='https://www.graph.cool/docs/reference/simple-api/overview-heshoov3ai'>Simple API</a> and
    follows best practices of the Graphcool platform.
    It can be used with any GraphQL client, such as Apollo or Lokka.
    The second is
    a <a href='https://www.graph.cool/docs/reference/relay-api/overview-aizoong9ah/'>Relay API</a> for
    dedicated use of Relay in the client.</span>),
  },

]

const rightFAQItems: [FAQItem] = [
  {
    question: 'Do I have to create a Graphcool account in order to use graphql-up?',
    answer: (<span>No, graphql-up is available for absolutely everyone interested in GraphQL.
    You don't have to create an account or leave your email address. 
    Of course, it's also completely free of charge.</span>),
  },
  {
    question: 'How long can I use the GraphQL API that I created with graphql-up?',
    answer: (<span>Since projects created with graphql-up are not intended for
    production use, they will be deleted after 30 days of inactivity.
    If you're looking to build something more
    sustainable, consider creating a project with Graphcool.</span>),
  },
]

export default class GraphQLUpFAQ extends React.Component<Props, {}> {

  render() {

    const shouldRenderForMobile = window.innerWidth < breakpoints.p500

    return (
      <div className='root'>
        <style jsx={true}>{`
          .root {
            @p: .flex, .flexColumn, .itemsCenter, .ph25, .pb96, .center;
            max-width: 1440px;
          }

          .title {
            @p: .f25, .fw3, .pb60, .pt60;
          }
        `}</style>
        <div className='title'>Frequently Asked Questions</div>
        <div className={`flex ${shouldRenderForMobile && 'flexColumn'}`}>
          <QuestionColumn faqItems={leftFAQItems} />
          <QuestionColumn className={`${shouldRenderForMobile ? '' : 'pl38'}`} faqItems={rightFAQItems} />
        </div>
      </div>
    )
  }
}
