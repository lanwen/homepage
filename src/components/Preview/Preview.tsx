import { asyncComponent } from 'react-async-component'

export default asyncComponent({
  resolve: () => {
    return System.import('./PreviewAsync')
  },
})
