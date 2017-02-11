import * as React from 'react'
import SectionHeader from '../../SectionHeader'
import Step from './Step'

export default class Timeline extends React.Component<{}, {}> {

  render() {

    return (
      <section className='root'>
        <style jsx={true}>{`
          .root {
            @p: .pb96;
          }

          .timeline {
            @p: .flex, .justifyCenter, .pv38;

          }
        `}</style>
        <SectionHeader
          headline='We are just in time'
          copy='They advise us with everything they have, and everything we need. They’re great, they are the best advisors.'
        />
        <div className='timeline'>
          <Step
            date='Jul 2015'
            event='GraphQL announced'
          />
          <Step
            date='Feb 2016'
            event='First Prototype'
          />
          <Step
            date='Sep 2016'
            event='Developer Preview'
          />
          <Step
            date='Dez 2016'
            event='Pre-Seed Investment'
          />
        </div>
      </section>
    )
  }
}
