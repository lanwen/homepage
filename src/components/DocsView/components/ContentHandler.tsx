import { asyncComponent } from 'react-async-component'

const ContentHandler = asyncComponent({
  resolve: () => System.import('./ContentHandlerAsync'),
})

export default ContentHandler
