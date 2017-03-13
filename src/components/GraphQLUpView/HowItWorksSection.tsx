import * as React from 'react'

interface Props {

}

export default class HowItWorksSection extends React.Component<Props, {}> {

  render() {
    return (
      <div className='root'>
        <style jsx={true}>{`
          .root {
            @p: .flex, .flexColumn, .itemsCenter, .ph38, .center;
            max-width: 1440px;
          }

          .title {
            @p: .f25, .fw3, .pb16, .pt60;
          }

          .subtitle {
            @p: .f20, .fw3, .black60, .tc, .pb60;
            max-width: 750px;
          }

          .instructions {
            @p: .flex, .itemsCenter, .justifyCenter, .pb96;
          }

          .step {
            @p: .flex, .flexColumn, .itemsCenter, .justifyCenter;
            max-width: 110px;
          }

          .stepDescription {
            @p: .black50, .pt16, .tc;
          }

          .arrow {
            @p: .mh16;
          }

        `}</style>
        <div className='title'>How it works</div>
        <div className='subtitle'>
          You only need to provide the schema, graphql-up will create a GraphQL API for you.
          The actual magic happens on the servers sponsored by Graphcool.
        </div>

        <div className='instructions'>
          <div className='step'>
            <img src={require('../../assets/graphics/graphqlup/export.svg')}/>
            <div className='stepDescription'>Define your data schema</div>
          </div>
          <img className='arrow' src={require('../../assets/graphics/graphqlup/arrow_right.svg')}/>
          <div className='step'>
            <img src={require('../../assets/graphics/graphqlup/graphql_endpoint.svg')}/>
            <div className='stepDescription'>Get GraphQL endpoint</div>
          </div>
          <img className='arrow' src={require('../../assets/graphics/graphqlup/arrow_right.svg')}/>
          <div className='step'>
            <img src={require('../../assets/graphics/graphqlup/connect.svg')}/>
            <div className='stepDescription'>Connect with your app</div>
          </div>
        </div>
      </div>
    )
  }
}
