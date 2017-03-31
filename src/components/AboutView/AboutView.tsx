import * as React from 'react'
import Header from '../Header/Header'
import Mission from './Mission'
import Values from './Values/Values'
import Team from './Team/Team'
import Advisors from './Advisors/Advisors'
import Investors from './Investors/Investors'
import Timeline from './Timeline/Timeline'
import FooterCTA from '../FooterCTA'
import Footer from '../Footer/Footer'
import {Helmet} from 'react-helmet'

export default class AboutView extends React.Component<{}, {}> {
  componentDidMount() {
    window.addEventListener('resize', this.rerender)
  }

  render() {
    return (
      <div>
        <Helmet title='About - Graphcool'/>
        <style jsx={true}>{`
          .footerContainer {
            @p: .pt96, .bgBlack02;
          }
        `}</style>
        <Header
          view='HOMEPAGE'
        />
        <Mission />
        <Values />
        <Team />
        <Advisors />
        <Investors />
        <Timeline />
        <div className='footerContainer'>
          <FooterCTA
            headline1='Want to know more?'
            headline2='Feel free to ask us anything. We love talking to you.'
            button1Text='Chat with us'
            button1Link='#'
            button1OnClick={this.openChat}
            button2Text='Download Press Kit'
            button2Link='http://graphcool-random.s3.amazonaws.com/press/logo.zip'
          />
        </div>
        <Footer />
      </div>
    )
  }

  private rerender = () => {
    this.forceUpdate()
  }

  private openChat = (e: Event) => {
    e.preventDefault()

    if (typeof Intercom === 'undefined') {
      return
    }

    Intercom('show')
  }
}
