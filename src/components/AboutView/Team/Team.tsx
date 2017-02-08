import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g } from 'graphcool-styles'
import SectionHeader from '../../SectionHeader'
import TeamMember from '../../TeamMember'
import { persons } from './data'

export default class Team extends React.Component<{}, {}> {

  render() {

    return (
      <section className='root'>
        <style jsx={true}>{`
          .root {
            @p: .bgBlack02;
          }

          .teamMemberContainer {

          }
        `}</style>
        <SectionHeader
          headline={`We're frontend developers on our own`}
          copy='They advise us with everything they have, and everything we need. They’re great, they are the best advisors.'
        />
        <div className='teamMemberContainer'>
          {persons.map(person => (
            <TeamMember
              image={person.image}
              name={person.name}
              title={person.title}
              links={person.links}
            />
          ))}
        </div>
      </section>
    )
  }
}
