import * as React from 'react'
import SectionHeader from '../../SectionHeader'
import { advisors } from './data'
import Advisor from './Advisor'

export default class Advisors extends React.Component<{}, {}> {

  render() {
    return (
      <section className='root'>
        <style jsx={true}>{`
          .root {
            @p: .bgDarkBlue;
          }

          .advisors {
            @p: .flex, .justifyCenter, .pb96;
          }
        `}</style>
        <SectionHeader
          onDark
          headline='We have great Advisors'
          copy='They advise us with everything they have, and everything we need. They’re great, they are the best advisors.'
        />
        <div className='advisors'>
          {advisors.map((advisor, count) => (
            <Advisor
              key={count}
              name={advisor.name}
              title={advisor.title}
              image={advisor.image}
            />
          ))}
        </div>
      </section>
    )
  }
}
