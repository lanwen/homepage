import * as React from 'react'
import { $p } from 'graphcool-styles'
import Header from '../Header'
import Mission from './Mission'
import Values from './Values/Values'
import Team from './Team/Team'
import Advisors from './Advisors/Advisors'
import Investors from './Investors/Investors'
import Timeline from './Timeline/Timeline'
import FooterCTA from '../FooterCTA'
import Footer from '../Footer/Footer'

export default class AboutView extends React.Component<{}, {}> {
  componentDidMount() {
    window.addEventListener('resize', this.rerender)
  }

  render() {
    return (
      <div>
        <style jsx={true}>{`
          .footerContainer {
            @p: .pt96, .bgBlack02;
          }
        `}</style>
        <Header />
        <Mission />
        <Values />
        <Team />
        <Advisors />
        <Investors />
        <Timeline />
        <div className='footerContainer'>
          <FooterCTA
            onGray
            headline1='Want to know more?'
            headline2='Talk to a real person or download our press kit.'
            button1Text='Chat with us'
            button1Link=''
            button2Text='Download Press Kit'
            button2Link=''
          />
        </div>
        <Footer />
      </div>
    )
  }

  private rerender = () => {
    this.forceUpdate()
  }
}
