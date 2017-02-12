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
          headline='Our Advisors'
          copy={`We're fortunate to work with great thoughtleaders and industry experts building Graphcool.`}
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
