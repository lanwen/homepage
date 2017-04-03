import { asyncComponent } from 'react-async-component'

const FeaturesGraphQLView = asyncComponent({
  resolve: () => {
    console.log('resolving features graphql view async')
    return System.import('./FeaturesGraphQLViewAsync')
  },
})

export default FeaturesGraphQLView
