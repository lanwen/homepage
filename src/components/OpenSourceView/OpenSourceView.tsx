import * as React from 'react'
import Header from '../Header'
import Footer from '../Footer/Footer'
import OpenSource from './OpenSource'
import FooterCTA from '../FooterCTA'

export default class OpenSourceView extends React.Component<{}, {}> {
  componentDidMount() {
    window.addEventListener('resize', this.rerender)
  }

  render() {
    return (
      <div>
        <Header/>
        <OpenSource/>
        <FooterCTA/>
        <Footer/>
      </div>
    )
  }

  private rerender = () => {
    this.forceUpdate()
  }
}
