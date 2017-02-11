import * as React from 'react'
import { $p } from 'graphcool-styles'

export default class Mission extends React.Component<{}, {}> {

  render() {

    return (
      <section className='root'>
        <style jsx>{`
          .root {
            @p: .flex, .itemsCenter, .pl96, .pr96, .center;
            max-width: 1440px;
          }

          .text {
            @p: .w50, .bbox, .pr96, .flexFixed;
          }

          .copy {
            @p: .mt60, .black50;
          }

          .image {
            @p: .w50, .hAuto;
          }

        `}</style>
        <div className='text'>
          <h1>We build the only backend you’ll ever need.</h1>
          <p className='copy'>
            We enable frontend developers to build products from scratch without the need to develop their own backend.<br /><br />
            We ourselves have built countless backend applications and got tired of reinventing the wheel over and over again.
          </p>
        </div>
          <img className='image' src={require('../../assets/graphics/homepage/architecture.svg')} />
      </section>
    )
  }
}
