import * as React from 'react'
// import * as cx from 'classnames'
// import { $p, Icon } from 'graphcool-styles'
import Header from './Header'
import Footer from './Footer'
import Landing from './Landing'
import Timeline from './Timeline'
import QueryEditor from './QueryEditor'
import Console from './Console'
import Functions from './Functions'
import Features from './Features'
import References from './References'
import ComparisonChart from './ComparisonChart'
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
        <Console/>
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

// <Icon src={require('../../assets/icons/backup.svg')} width={50} height={50}/>
