import * as React from 'react'
import Header from '../Header'
import Footer from '../Footer/Footer'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import * as cx from 'classnames'

export default class PricingViewTable extends React.Component<{}, {}> {

  render() {
    const Images = styled.div `
      height: 88px;
      width: 100px;
      padding: ${$v.size38}
`
    return (
      <div className={cx($p.flex, $p.flexWrap, $p.justifyAround)}>
        <div className={cx($p.tc, $p.black30)}>
          <Images className={cx($p.flex, $p.justifyCenter, $p.itemsCenter)}>
            <img className={cx($p.pa10, $p.bbox)} src={require('../../assets/graphics/pricing-1.png')} alt='DEVELOPER'/>
          </Images>
          <h5>DEVELOPER</h5>
          <h1 className={cx($p.green, $p.pv16)}>Free</h1>
          <p>50 Users</p>
          <p>20k Requests</p>
          <p>100MB DB storage</p>
          <p>No Backups</p>
        </div>
        <div className={cx($p.tc, $p.black30)}>
          <Images >
            <img className={cx($p.bbox)} src={require('../../assets/graphics/pricing-2.png')} alt='PROJECT'/>
          </Images>
          <h5>PROJECT</h5>
          <div className={cx($p.green, $p.pv16)}>
            <h1 className={cx($p.di}>$9</h1><span className={cx($p.di}>/mo</span>
          </div>
          <p>200 Users</p>
          <p>100k Requests</p>
          <p>500MB DB storage</p>
          <p>Daily Backups</p>
        </div>
        <div className={cx($p.tc, $p.black30)}>
          <Images>
            <img className={cx($p.bbox)} src={require('../../assets/graphics/pricing-3.png')} alt='PROJECT'/>
          </Images>
          <h5>STARTUP</h5>
          <div className={cx($p.green, $p.pv16)}>
            <h1 className={cx($p.di)}>$29</h1><span className={cx($p.di)}>/mo</span>
          </div>
          <p>1000 Users</p>
          <p>1M Requests</p>
          <p>2GB DB storage</p>
          <p>Daily Backups</p>
        </div>
        <div className={cx($p.tc, $p.black30)}>
          <Images>
           <img className={cx($p.bbox)} src={require('../../assets/graphics/pricing-4.png')} alt='PRODUCTION'/>
          </Images>
          <h5>PRODUCTION</h5>
          <div className={cx($p.green, $p.pv16)}>
            <h1 className={cx($p.di)}>$149</h1><span className={cx($p.di)}>/mo</span>
          </div>
          <p>50k Users</p>
          <p>10M Requests</p>
          <p>10GB DB storage</p>
          <p>Daily Backups</p>
        </div>
        <div className={cx($p.tc, $p.black30)}>
          <Images>
           <img className={cx($p.bbox)} src={require('../../assets/graphics/pricing-5.png')} alt='GROWTH'/>
          </Images>
          <h5>GROWTH</h5>
          <div className={cx($p.green, $p.pv16)}>
           <h1 className={cx($p.di)}>$499</h1><span className={cx($p.di)}>/mo</span>
          </div>
          <p>1M Users</p>
          <p>100M Requests</p>
          <p>100GB DB storage</p>
          <p>Daily Backups</p>
        </div>
      </div>
    )
  }
}
