import * as React from 'react'
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

export default class HomeView extends React.Component<{}, {}> {

  componentDidMount() {
    window.addEventListener('resize', this.rerender)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.rerender)
  }

  render() {
    return (
      <div>
        <Header/>
        <Landing/>
        <Timeline/>
        <QueryEditor/>
        <Product/>
        <Functions/>
        <Features/>
        <References/>
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
}
