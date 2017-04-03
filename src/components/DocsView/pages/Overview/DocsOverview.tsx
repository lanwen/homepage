import { asyncComponent } from 'react-async-component'

const DocsOverview = asyncComponent({
  resolve: () => System.import('./DocsOverviewAsync'),
})

export default DocsOverview
