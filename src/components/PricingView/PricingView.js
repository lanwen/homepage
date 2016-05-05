import React from 'react'
import BetaRequest from 'components/BetaRequest/BetaRequest'
import Pricing from './Pricing/Pricing'

export default class PricingView extends React.Component {

  render () {
    return (
      <div>
        <Pricing />
        <BetaRequest />
      </div>
    )
  }
}
