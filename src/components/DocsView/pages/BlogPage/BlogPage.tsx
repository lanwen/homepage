import { asyncComponent } from 'react-async-component'

const BlogPage = asyncComponent({
  resolve: () => System.import('./BlogPageAsync'),
})

export default BlogPage
