import { asyncComponent } from 'react-async-component'

const FAQPage = asyncComponent({
  resolve: () => System.import('./FAQPageAsync'),
})

export default FAQPage
