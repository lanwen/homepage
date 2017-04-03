import { asyncComponent } from 'react-async-component'

const AboutView = asyncComponent({
  resolve: () => System.import('./AboutViewAsync'),
})

export default AboutView
