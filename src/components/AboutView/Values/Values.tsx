import * as React from 'react'
import { $v } from 'graphcool-styles'
import Value from './Value'

export default class Values extends React.Component<{}, {}> {

  render() {

    return (
      <section className='root'>
        <style jsx={true}>{`
          .root {
            @p: .center, .flex;
            max-width: 1350px;

            @media (max-width: 399px) {
              @p: .pl25, .itemsCenter, .flexColumn, .justifyBetween, .pb60, .pt38;
            }

            @media (min-width: 400px) {
              @p: .itemsStart, .pt60, .pb60;
            }

            @media (min-width: 650px) {
              @p: .flexRow, .flexWrap;
            }

            @media (min-width: 750px) {
              @p: .pl60;
            }

            @media (min-width: 900px) {
              @p: .justifyAround, .pl0;
            }

            @media (min-width: 1550px) {
              @p: .justifyBetween;
            }
          }
        `}</style>
        <Value
          icon='lock'
          color={$v.lightOrange}
          headline='Developer Experience'
          copy={`Building applications should be intuitive and fun.`}
        />
        <Value
          icon='radar'
          color={$v.red}
          headline='Reliable'
          copy='Works out-of-the-box with GraphQL subscriptions for real-time applications.'
        />
        <Value
          icon='resize'
          color={$v.blue}
          headline='Extensible'
          copy='Create and change your data model to fit your needs without breaking your app.'
        />
      </section>
    )
  }
}
