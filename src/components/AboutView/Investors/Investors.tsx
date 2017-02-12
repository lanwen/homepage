import * as React from 'react'
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
          headline='Our Investors'
          copy={`Together with our investors we're working the future of software development.`}
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
