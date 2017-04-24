import * as React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import OpenSource from './OpenSource'
import FooterCTA from '../FooterCTA'
import Helmet from '../../components/Helmet'

export default class OpenSourceView extends React.Component<{}, {}> {
  componentDidMount() {
    window.addEventListener('resize', this.rerender)
  }

  render() {
    return (
      <div>
        <Helmet title='We <3 Open Source - Graphcool'/>
        <Header view='HOMEPAGE' />
        <OpenSource/>
        <FooterCTA
          headline1='Ready to get started?'
          headline2='Set up a GraphQL backend or read the docs'
          button1Text='Create GraphQL Backend'
          button1Link='/docs/'
          button2Text='Open Docs'
          button2Link='/quickstart/'
        />
        <Footer/>
      </div>
    )
  }

  private rerender = () => {
    this.forceUpdate()
  }
}
