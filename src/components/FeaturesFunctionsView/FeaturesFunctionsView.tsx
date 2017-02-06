import * as React from 'react'
import Header from '../Header'
import Footer from '../Footer/Footer'
import FooterCTA from '../FooterCTA'
import Functions from './Functions/Functions'
import FAQ from '../PricingView/FAQ'

export default class FeaturesFunctionsView extends React.Component<{}, {}> {
  componentDidMount() {
    window.addEventListener('resize', this.rerender)
  }

  render() {
    return (
      <div>
        <Header/>
        <Functions ref='functions' inViewPort={true}/>
        <FAQ/>
        <FooterCTA/>
        <Footer/>
      </div>
    )
  }

  private rerender = () => {
    this.forceUpdate()
  }
}
