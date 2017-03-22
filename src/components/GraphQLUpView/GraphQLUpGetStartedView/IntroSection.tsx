import * as React from 'react'
import { Link } from 'react-router'

interface Props {
}

export default class IntroSection extends React.Component<Props, {}> {

  render() {
    return (
      <div className='root'>
        <style jsx={true}>{`
          .root {
            @p: .flex, .justifyCenter, .pa96, .center;
            max-width: 1440px;
          }

          .title {
            @p: .fw6, .f16, .black80;
          }

          .subtitle {
            @p: .fw4, .f16, .black80;
          }

        `}</style>
        <Link to='/graphql-up/'>
          <img src={require('../../../assets/graphics/graphqlup/graphql-up_light.svg')}/>
        </Link>
        <div className='pl38'>
          <div className='title'>graphql-up is the fastest way to get a free & ready-to-use GraphQL API.</div>
          <div className='subtitle'>
            It works out of the box with Apollo & Relay and supports GraphQL subscriptions.
          </div>
        </div>
      </div>
    )
  }
}
