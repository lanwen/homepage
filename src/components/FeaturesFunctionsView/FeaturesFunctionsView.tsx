import { asyncComponent } from 'react-async-component'

const FeaturesFunctionsView = asyncComponent({
  resolve: () => System.import('./FeaturesFunctionsViewAsync'),
})

export default FeaturesFunctionsView
