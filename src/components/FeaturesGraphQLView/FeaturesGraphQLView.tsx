import * as React from 'react'
import Header from '../Header'
import Footer from '../Footer/Footer'
import FooterCTA from '../FooterCTA'
import QueryEditor from './QueryEditor/QueryEditor'
import FAQ from '../PricingView/FAQ'

export default class FeaturesGraphQLView extends React.Component<{}, {}> {
  componentDidMount() {
    window.addEventListener('resize', this.rerender)
  }

  render() {
    return (
      <div>
        <Header/>
        <QueryEditor ref='queryEditor' inViewPort={true}/>
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
