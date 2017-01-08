import * as React from 'react'
import Header from '../Header'
import Footer from '../Footer/Footer'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import * as cx from 'classnames'
import FreePlan from './FreePlan'
import PlanCols from './PlanCols'
import Info from './Info'
import FAQ from './FAQ'
import CallToAction from './CallToAction'

export default class PricingView extends React.Component<{}, {}> {
  render() {
    return (
      <div className={cx($p.bgLightgreen05)}>
        <Header/>
        <div>
          <FreePlan/>
          <PlanCols/>
          <Info/>
          <FAQ/>
          <CallToAction/>
        </div>
        <Footer/>
      </div>
    )
  }
}
