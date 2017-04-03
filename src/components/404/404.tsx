import { asyncComponent } from 'react-async-component'

const NotFoundComponent = asyncComponent({
  resolve: () => System.import('./404Async'),
})

export default NotFoundComponent
