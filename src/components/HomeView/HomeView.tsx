import * as React from 'react'
import { findDOMNode } from 'react-dom'
import Header from '../Header'
import Footer from '../Footer/Footer'
import Landing from './Landing/Landing'
import Timeline from './Timeline/Timeline'
import Product from './Product/Product'
import Features from './Features/Features'
import References from './References/References'
import TwitterFeed from './TwitterFeed/TwitterFeed'
import ComparisonChart from './ComparisonChart/ComparisonChart'
// import SchemaGraph from './SchemaGraph'
import { debounce } from 'lodash'
import { isElementInViewport } from '../../utils/dom'
import FooterCTA from '../FooterCTA'

interface State {
  queryEditorInViewport: boolean
  functionsInViewport: boolean
  referencesInViewport: boolean
}

export default class HomeView extends React.Component<{}, State> {

  refs: {
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
        <Product/>
        <Features/>
        <References ref='references' inViewPort={this.state.referencesInViewport}/>
        <ComparisonChart/>
        {/*<SchemaGraph/>*/}
        <TwitterFeed />
        <FooterCTA/>
        <Footer/>
      </div>
    )
  }

  private rerender = () => {
    this.forceUpdate()
  }

  private onScroll = () => {
    if (isElementInViewport(findDOMNode(this.refs.references)) !== this.state.referencesInViewport) {
      this.setState({referencesInViewport: !this.state.referencesInViewport} as State)
    }
  }
}
