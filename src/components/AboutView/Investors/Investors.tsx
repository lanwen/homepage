import * as React from 'react'
import { $p } from 'graphcool-styles'
import SectionHeader from '../../SectionHeader'
import { investors } from './data'
import Investor from './Investor'

export default class Investors extends React.Component<{}, {}> {

  render() {

    return (
      <section className='root'>
        <style jsx={true}>{`
          .root {
            @p: .bgDarkerBlue;
          }

          .investors {
            @p: .flex, .justifyCenter, .flexWrap;
            padding-bottom: 36px;
          }
        `}</style>
        <SectionHeader
          onDark
          headline='Our Investors love us'
          copy='They advise us with everything they have, and everything we need. They’re great, they are the best advisors.'
        />
        <div className='investors'>
          {(investors.map((investor, count) => (
            <Investor
              key={count}
              name={investor.name}
              title={investor.title}
              image={investor.image}
              companyLogo={investor.companyLogo}
              isCompany={investor.isCompany}
            />
          )))}
        </div>
      </section>
    )
  }
}
