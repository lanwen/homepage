import * as React from 'react'
import {breakpoints} from '../../utils/constants'

interface Props {

}

export default class IntroSection extends React.Component<Props, {}> {

  render() {

    const shouldRenderForMobile = window.innerWidth < breakpoints.p500

    return (
      <section className='root'>
        <style jsx={true}>{`
          .root {
            @p: .flex, .flexColumn, .itemsCenter, .ph38, .center;
            max-width: 1440px;
          }

          .title {
            @p: .f25, .pt38, .o60, .fw3, .tc;
          }

          .info {
            @p: .f20, .fw3;
          }

          .playVideoContainer {
            @p: .flex, .itemsCenter, .pt38, .pb60, .pointer;
          }

          .playButton {
            @p: .br100, .flex, .itemsCenter, .justifyCenter, .bgGreen20;
            width: 50px;
            height: 50px;
          }

          .playText {
            @p: .f20, .fw3, .o60;
          }

        `}</style>
        <img
          className=''
          src={require('../../assets/graphics/graphqlup/graphql-up_light.svg')}
        />
        <div className='title'>Get a ready-to-use GraphQL endpoint based on your schema</div>

        <img
          className=''
          src={require('../../assets/graphics/graphqlup/video_placeholder.svg')}
        />

        <div className='info'>graphql-up is the fastest way to get a free & ready to use GraphQL API.</div>
        <div className='info'>It works out of the box with Apollo & Relay and supports GraphQL subscriptions.</div>

        <div className={`playVideoContainer ${shouldRenderForMobile && 'flexColumn'}`}>
          {shouldRenderForMobile &&
          <div className={`playText ${shouldRenderForMobile && 'tc pb25'}`}>
            Watch this 3 minute tutorial to get started
          </div>
          }
          <div className='playButton'>
            <img
              className='ml6'
              src={require('../../assets/graphics/graphqlup/play.svg')}
            />
          </div>
          {!shouldRenderForMobile &&
            <div className={`playText pl25`}>
              Watch this 3 minute tutorial to get started
            </div>
          }
        </div>

      </section>
    )
  }
}
