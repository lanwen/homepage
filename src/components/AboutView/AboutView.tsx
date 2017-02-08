import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, Icon } from 'graphcool-styles'
import styled from 'styled-components'
import { persons } from './Team/data'
import Header from '../Header'
import Mission from './Mission'
import Values from './Values'
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
        <Header />
        <Mission />
        <Values />
        <Team />
        <Advisors />
        <Investors />
        <Timeline />
        <FooterCTA
          headline1='Ready to get started?'
          headline2='Set up a GraphQL backend or read the docs'
          button1Text='Create GraphQL Backend'
          button1Link='https://graph.cool/docs'
          button2Text='Open Docs'
          button2Link='https://graph.cool/quickstart'
        />
        <Footer/>
      </div>
    )
  }

  private rerender = () => {
    this.forceUpdate()
  }
}
