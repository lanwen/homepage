import * as React from 'react'

interface Props {

}

export default class IntroSection extends React.Component<Props, {}> {

  render() {
    return (
      <section className='root'>
        <style jsx={true}>{`
          .root {
            @p: .flex, .flexColumn, .itemsCenter, .pl96, .pr96, .center;
            max-width: 1440px;
          }

          .title {
            @p: .f25, .pt38, .o60, .fw3;
          }

          .info {
            @p: .f20, .fw3;
          }

          .playVideoContainer {
            @p: .flex, .justifyCenter, .pt38;
          }

          .playButton {
            @p: .br100, .bgGreen20;
          }

          .playText {
            @p: .f20, .fw3, .o60,;
          }



        `}</style>
        <img
          className=''
          src={require('../../assets/graphics/graphql-up.svg')}
        />
        <div className='title'>Get a ready-to-use GraphQL endpoint based on your schema</div>

        <img
          className=''
          src={require('../../assets/graphics/video_placeholder.svg')}
        />

        <div className='info'>graphql-up is the fastest way to get a free & ready to use GraphQL API.</div>
        <div className='info'>It works out of the box with Apollo & Relay and supports GraphQL subscriptions.</div>

        <div className='playVideoContainer'>
          <div className='playButton'>
            <img src={require('../../assets/icons/pricing/operation.svg')}/>
          </div>
          <div>Watch this 3 minute tutorial to get started</div>
        </div>

      </section>
    )
  }
}