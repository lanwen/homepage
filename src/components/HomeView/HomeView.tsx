import { asyncComponent } from 'react-async-component'

export default asyncComponent({
  resolve: () => {
    console.log('resolving homeview')
    return System.import('./HomeViewAsync')
  },
})
