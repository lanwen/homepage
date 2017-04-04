import * as React from 'react'
import Feature from './Feature'
import FreecomSignup from './FreecomSignup'

interface Props {

}

const data = [
  {
    n: 1,
    description: `Preparing the GraphQL Server`,
  },
  {
    n: 2,
    description: `Integrating Apollo Client, Queries & Mutations`,
  },
  {
    n: 3,
    description: `Realtime Functionality with Subscriptions`,
  },
  {
    n: 4,
    description: `Controlling Data Access with Permissions`,
  },
  {
    n: 5,
    description: `Mutation Callbacks & Serverless Functions`,
  },
  {
    n: 6,
    description: `File Management with Graphcool`,
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
        max-width: 970px;
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
        @p: .mt60, .flex;
      }
      @media (max-width: 650px) {
        .features {
          @p: .flexColumn, .itemsCenter;
        }
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
            image={require('assets/graphics/freecom/chapter.png')}
            chapter={date.n}
            description={date.description}
          />
        ))}
      </div>
      <p className='notification'>Get a notification as soon as the next chapter is available.</p>
      <FreecomSignup light />
    </div>
  </div>
)

export default Learn
