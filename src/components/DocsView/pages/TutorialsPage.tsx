import { asyncComponent } from 'react-async-component'

const TutorialsPage = asyncComponent({
  resolve: () => System.import('./TutorialsPageAsync'),
})

export default TutorialsPage
