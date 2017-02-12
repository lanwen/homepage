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
          headline={`We're just getting started...`}
          copy={`Rome wasn't built in a day. But we're pretty fast at building.`}
        />
        <div className='timeline'>
          <Step
            date='Jul 2015'
            event='GraphQL announced'
          />
          <Step
            date='Jan 2016'
            event='First Prototype'
          />
          <Step
            date='Sep 2016'
            event='Developer Preview'
          />
          <Step
            date='Dec 2016'
            event='Pre-Seed Investment'
          />
        </div>
      </section>
    )
  }
}
