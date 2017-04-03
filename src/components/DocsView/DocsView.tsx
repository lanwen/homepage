import { asyncComponent } from 'react-async-component'

const DocsView = asyncComponent({
  resolve: () => System.import('./DocsViewAsync'),
})

export default DocsView
