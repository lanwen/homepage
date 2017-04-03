import { asyncComponent } from 'react-async-component'

const Markdown = asyncComponent({
  resolve: () => System.import('./MarkdownAsync'),
})

export default Markdown
