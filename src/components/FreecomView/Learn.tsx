import * as React from 'react'
import Feature from './Feature'
import FreecomSignup from './FreecomSignup'

interface Props {

}

const data = [
  {
    n: 0,
    description: `Building Intercom with GraphQL, Apollo & React`,
    link: 'https://www.graph.cool/docs/tutorials/freecom-overview-e8a6ajt8ax/',
    image: require('assets/graphics/freecom/freecom-overview.png'),
  },
  {
    n: 1,
    description: `Designing the Schema & GraphQL Server`,
    link: 'https://www.graph.cool/docs/tutorials/freecom-1-graphql-server-xuakjj68lp/',
    image: require('assets/graphics/freecom/freecom-part-1.png'),
  },
  {
    n: 2,
    description: `Apollo Setup & GraphQL Queries/Mutations in React`,
    link: 'https://www.graph.cool/docs/tutorials/freecom-2-apollo-queries-mutations-oe8ahyo2ei',
    image: require('assets/graphics/freecom/freecom-part-2.png'),
  },
  {
    n: 3,
    description: `Realtime Updates with GraphQL Subscriptions`,
    link: null,
    image: require('assets/graphics/freecom/freecom-part-3.png'),
  },
  {
    n: 4,
    description: `Controlling Data Access with Authentication & Permissions`,
    link: null,
    image: require('assets/graphics/freecom/freecom-part-4.png'),
  },
  {
    n: 5,
    description: `Implementing Business Logic with Serverless Functions`,
    link: null,
    image: require('assets/graphics/freecom/freecom-part-5.png'),
  },
  {
    n: 6,
    description: `Uploading Files with GraphQL`,
    link: null,
    image: require('assets/graphics/freecom/freecom-part-6.png'),
  },
]

const Learn = ({}: Props) => (
  <div className='learn-container'>
    <style jsx>{`
      .learn-container {
        @p: .bgDarkBlue, .w100, .pv60;
      }
      .learn {
        @p: .center, .ph25;
        max-width: 1200px;
      }
      h1 {
        @p: .white, .f38, .fw3, .tc;
      }
      p {
        @p: .f20, .white50, .tc, .mt25;
      }
      .notification {
        @p: .mt96, .mb38;
      }
      .features {
        @p: .mt60, .flex, .flexWrap, .justifyCenter;
      }
    `}</style>
    <div className='learn'>
      <h1>What you will learn</h1>
      <p>
        Throughout this course you’ll learn everything you need to build a functional Intercom clone
        with cutting-edge technologies.
      </p>
      <div className='features'>
        {data.map(date => (
          <Feature
            key={date.n}
            image={date.image}
            chapter={date.n}
            description={date.description}
            link={date.link}
          />
        ))}
      </div>
      <p className='notification'>Get a notification as soon as the next chapter is available.</p>
      <FreecomSignup light />
    </div>
  </div>
)

export default Learn
