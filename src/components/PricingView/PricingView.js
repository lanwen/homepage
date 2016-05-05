import React from 'react'
import Helmet from 'react-helmet'
import BetaRequest from 'components/BetaRequest/BetaRequest'
import Pricing from './Pricing/Pricing'

export default class PricingView extends React.Component {

  render () {
    return (
      <div>
        <Helmet title='Pricing' />
        <Pricing />
        <BetaRequest />
      </div>
    )
  }
}
