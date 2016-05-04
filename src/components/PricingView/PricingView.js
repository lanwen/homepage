import React from 'react'
import Signup from 'components/Signup/Signup'
import Pricing from './Pricing/Pricing'

export default class PricingView extends React.Component {

  render () {
    return (
      <div>
        <Pricing />
        <Signup />
      </div>
    )
  }
}
