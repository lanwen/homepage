import { asyncComponent } from 'react-async-component'

const FreecomView = asyncComponent({
  resolve: () => System.import('./FreecomViewAsync'),
})

export default FreecomView
