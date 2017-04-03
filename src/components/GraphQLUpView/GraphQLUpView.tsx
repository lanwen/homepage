import { asyncComponent } from 'react-async-component'

const GraphQLUpView = asyncComponent({
  resolve: () => {
    console.log('resolving GraphQLUpViewAsync')
    return System.import('./GraphQLUpViewAsync')
  },
})

export default GraphQLUpView
