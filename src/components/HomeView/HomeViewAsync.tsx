import * as React from 'react'
import { findDOMNode } from 'react-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Landing from './Landing/Landing'
import Timeline from './Timeline/Timeline'
import Quickstart from './QuickStart/Quickstart'
import Product from './Product/Product'
import Features from './Features/Features'
import References from './References/References'
import TwitterFeed from './TwitterFeed/TwitterFeed'
import ComparisonChart from './ComparisonChart/ComparisonChart'
import { debounce } from 'lodash'
import { isElementInViewport } from '../../utils/dom'
import FooterCTA from '../FooterCTA'
import {handleOutgoingLink} from '../../utils/link'

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
        <Header
          view='HOMEPAGE'
        />
        <Landing/>
        <Timeline/>
        <Quickstart/>
        <Product/>
        <Features/>
        <References ref='references' inViewPort={this.state.referencesInViewport}/>
        <ComparisonChart/>
        <TwitterFeed />
        <FooterCTA
          headline1='Ready to get started?'
          headline2='Set up a GraphQL backend or read the docs'
          button1Text='Create GraphQL Backend'
          button1Link='https://console.graph.cool/signup'
          button2Text='Open Docs'
          button2Link='https://graph.cool/docs'
          button1OnClick={e => {
            ga('send', 'event', 'homepage', 'clicked', 'signup', 'bottom')
            handleOutgoingLink(e, 'https://console.graph.cool/signup')
          }}
          button2OnClick={e => {
            ga('send', 'event', 'homepage', 'read', 'docs', 'bottom')
            handleOutgoingLink(e, 'https://console.graph.cool/signup')
          }}
        />
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
