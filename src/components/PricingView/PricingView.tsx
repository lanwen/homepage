import * as React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { $p } from 'graphcool-styles'
import * as cx from 'classnames'
import FreePlan from './FreePlan'
import PlanCols from './PlanCols'
import Info from './Info'
import FAQ from './FAQ'
import CallToAction from './CallToAction'
import * as Helmet from 'react-helmet'

export default class PricingView extends React.Component<{}, {}> {
  render() {
    return (
      <div className={cx($p.bgLightgreen05)}>
        <Helmet title='Pricing - Graphcool'/>
        <Header view='HOMEPAGE' />
        <div>
          <FreePlan/>
          <PlanCols/>
          <Info/>
          <div className={cx($p.bgWhite)}>
            <FAQ/>
            <CallToAction/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
