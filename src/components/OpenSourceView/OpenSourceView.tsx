import { asyncComponent } from 'react-async-component'

const OpenSourceView = asyncComponent({
  resolve: () => System.import('./OpenSourceViewAsync'),
})

export default OpenSourceView
