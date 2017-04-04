import { asyncComponent } from 'react-async-component'

const GraphQLUpGetStartedView = asyncComponent({
  resolve: () => {
    return System.import('./GraphQLUpGetStartedViewAsync')
  },
})

export default GraphQLUpGetStartedView
