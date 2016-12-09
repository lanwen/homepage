import * as React from 'react'
import { findDOMNode } from 'react-dom'
import Header from '../Header'
import Footer from '../Footer/Footer'
import Landing from './Landing/Landing'
import Timeline from './Timeline/Timeline'
import QueryEditor from './QueryEditor/QueryEditor'
import Product from './Product/Product'
import Functions from './Functions/Functions'
import Features from './Features/Features'
import References from './References/References'
import ComparisonChart from './ComparisonChart/ComparisonChart'
import SchemaGraph from './SchemaGraph'
import OpenSource from './OpenSource'
import { debounce } from 'lodash'
import { isElementInViewport } from '../../utils/dom'

interface State {
  queryEditorInViewport: boolean
  functionsInViewport: boolean
  referencesInViewport: boolean
}

export default class HomeView extends React.Component<{}, State> {

  refs: {
    queryEditor: QueryEditor,
    functions: Functions,
    references: References,
  }

  state: State = {
    queryEditorInViewport: false,
    functionsInViewport: false,
    referencesInViewport: false,
  }

  private debouncedOnScroll: () => void

  constructor(props) {
    super(props)

    this.debouncedOnScroll = debounce(this.onScroll, 50)
  }

  componentDidMount() {
    window.addEventListener('resize', this.rerender)
    window.addEventListener('scroll', this.debouncedOnScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.rerender)
    window.removeEventListener('scroll', this.debouncedOnScroll)
  }

  render() {
    return (
      <div>
        <Header/>
        <Landing/>
        <Timeline/>
        <QueryEditor ref='queryEditor' inViewPort={this.state.queryEditorInViewport}/>
        <Product/>
        <Functions ref='functions' inViewPort={this.state.functionsInViewport}/>
        <Features/>
        <References ref='references' inViewPort={this.state.referencesInViewport}/>
        <ComparisonChart/>
        <SchemaGraph/>
        <OpenSource/>
        <Footer/>
      </div>
    )
  }

  private rerender = () => {
    this.forceUpdate()
  }

  private onScroll = () => {
    if (isElementInViewport(findDOMNode(this.refs.queryEditor)) !== this.state.queryEditorInViewport) {
      this.setState({queryEditorInViewport: !this.state.queryEditorInViewport} as State)
    }

    if (isElementInViewport(findDOMNode(this.refs.functions)) !== this.state.functionsInViewport) {
      this.setState({functionsInViewport: !this.state.functionsInViewport} as State)
    }

    if (isElementInViewport(findDOMNode(this.refs.references)) !== this.state.referencesInViewport) {
      this.setState({referencesInViewport: !this.state.referencesInViewport} as State)
    }
  }
}
