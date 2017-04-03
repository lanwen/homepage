import { asyncComponent } from 'react-async-component'

const PricingView = asyncComponent({
  resolve: () => System.import('./PricingViewAsync'),
})

export default PricingView
