import * as React from 'react'
import Header from '../Header'
import PricingViewTable from './PricingViewTable'
import Footer from '../Footer/Footer'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import * as cx from 'classnames'

export default class PricingView extends React.Component<{}, {}> {

  render() {
    const PricingText = styled.div`
      max-width: 600px;
`
    return (
      <div>
        <Header/>
        <div className={cx($p.flex, $p.flexColumn, $p.flexWrap, $p.itemsCenter)}>
          <h1 className={cx($p.tc, $p.pv60)}>We provide a simple and flexible pricing model. <br/>We also have a free plan.</h1>
        </div>
        <PricingViewTable />
        <div className={cx($p.black80, $p.o50, $p.bgBlack04, $p.pv60)}>
          <div className={cx($p.flex, $p.flexColumn, $p.flexWrap, $p.itemsCenter)}>
            <h1 className={cx($p.tc, $p.pt38, $p.pb16)}>All plans come batteries included.</h1>
            <PricingText className={cx($p.tc, $p.pb38)}>We structure our plans by number of users, requests and data.</PricingText>
            <h4 className={cx($p.tc, $p.pt25)}>Maximum Users</h4>
            <PricingText className={cx($p.tc, $p.pb38, $p.pt16)}>graph.cool includes a flexible user type  that allows you to easily sign up and authenticate users. You can sign up users via email as well as social logins such as Facebook or Twitter. A user counts towards your quota as soon as they have signed up or have been created.</PricingText>
            <h4 className={cx($p.tc, $p.pt38)}>Included Requests</h4>
            <PricingText className={cx($p.tc, $p.pv38)}>With GraphQL you make two types of requests: queries and mutations.  Both count towards your monthly request limit.  Because GraphQL allows you to specify all the data you need in a single request GraphQL applications typically make 3-10 times less requests than a REST based application. </PricingText>
            <h4 className={cx($p.tc, $p.pt38)}>Database Storage</h4>
            <PricingText className={cx($p.tc, $p.pb96, $p.pt16)}>All data items you store in our service count towards your storage quota. If you are only storing text and numbers you should be able to store millions of items even on the smallest plan.</PricingText>
          </div>
          </div>
        <Footer/>
      </div>
    )
  }
}
