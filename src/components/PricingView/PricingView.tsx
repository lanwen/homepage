import * as React from 'react'
import Header from '../Header'
import Footer from '../Footer/Footer'

export default class PricingView extends React.Component<{}, {}> {

  render() {
    return (
      <div>
        <Header/>
        Pricing
        <Footer/>
      </div>
    )
  }
}
