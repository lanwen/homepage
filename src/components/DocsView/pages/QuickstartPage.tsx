import { asyncComponent } from 'react-async-component'

const QuickstartPage = asyncComponent({
  resolve: () => System.import('./QuickstartPageAsync'),
})

export default QuickstartPage
