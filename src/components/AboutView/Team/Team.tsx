import * as React from 'react'
import SectionHeader from '../../SectionHeader'
import TeamMember from './TeamMember'
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
            @p: .flex, .flexWrap, .justifyCenter;
            padding-bottom: 80px; // 96px - 16px to balance out TeamMember padding
          }
        `}</style>
        <SectionHeader
          headline={`Graphcool is built by developers for developers`}
          copy={`We're driven by the vision of improving developer experience building applications.`}
        />
        <div className='teamMemberContainer'>
          {persons.map((person, count) => (
            <TeamMember
              key={count}
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
