import * as React from 'react'
import Header from '../DocsView/components/Header/Header'
import Footer from '../Footer/Footer'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import * as cx from 'classnames'

export default class PricingViewTable extends React.Component<{}, {}> {

  render() {
    const Images = styled.div `
      display: flex;
      justify-content: center;
      align-items: flex-end; 
      display: block;
      padding-bottom: ${$v.size38}
`
    const Border = styled.div`
       box-shadow:0 8px 18px rgba(0, 0, 0, 0.1),
       0 -8px 18px rgba(0, 0, 0, 0.1);
       
       .line {
          width: 100%;
          float: left;
          margin-top:14px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.11);
}
       .hr {
           height:25px;
           padding-bottom: 15px;
           width: 100%;
           float: left;
}
`
    const Margin = styled.div`
      margin-left: -${$v.size38};
      margin-right: -${$v.size38};
`
    const Paragraph = styled.div`
      margin-bottom: ${$v.size16};
      font-size: ${$v.size20};
      font-weight: 400;
`
    const Price = styled.div`
      font-size: 45px;
      font-weight: 300;
`
    return (
      <div className={cx($p.flex, $p.flexWrap, $p.justifyAround, $p.ph96, $p.pv38, $p.mh38)}>
        <section className={cx($p.tc, $p.black30, $p.pv60, $p.ph38)}>
          <Images>
            <img className={cx($p.bbox)} src={require('../../assets/graphics/pricing-1.png')} alt='DEVELOPER'/>
          </Images>
          <h4>DEVELOPER</h4>
          <Price className={cx($p.green, $p.pv16)}>Free</Price>
          <Paragraph><strong className={cx($p.black50)}>50</strong> Users</Paragraph>
          <Paragraph><strong className={cx($p.black50)}>20k</strong> Requests</Paragraph>
          <Paragraph><strong className={cx($p.black50)}>100MB</strong> DB storage</Paragraph>
          <Paragraph>No Backups</Paragraph>
        </section>
        <section className={cx($p.tc, $p.black30, $p.pv60, $p.ph38)}>
          <Images >
            <img className={cx($p.bbox)} src={require('../../assets/graphics/pricing-2.png')} alt='PROJECT'/>
          </Images>
          <h4>PROJECT</h4>
          <div className={cx($p.green, $p.pv16)}>
            <Price className={cx($p.di)}>$9</Price><span className={cx($p.di)}>/mo</span>
          </div>
          <Paragraph><strong className={cx($p.black50)}>200</strong> Users</Paragraph>
          <Paragraph><strong className={cx($p.black50)}>100k</strong> Requests</Paragraph>
          <Paragraph><strong className={cx($p.black50)}>500MB</strong> DB storage</Paragraph>
          <Paragraph><strong className={cx($p.black50)}>Daily Backups</strong></Paragraph>
        </section>
        <Border className={cx($p.tc, $p.black30 , $p.pv60, $p.ph38)}>
          <Images>
            <img className={cx($p.bbox)} src={require('../../assets/graphics/pricing-3.png')} alt='PROJECT'/>
          </Images>
          <Margin className={cx($p.flex, $p.justifyCenter)}>
            <div className={cx('hr')}>
              <div className={cx('line')}></div>
            </div>
            <h4 className={cx($p.mh10)}>STARTUP</h4>
            <div className={cx('hr')}>
              <div className={cx('line')}></div>
            </div>
          </Margin>
          <div className={cx($p.green, $p.pv16)}>
            <Price className={cx($p.di)}>$29</Price><span className={cx($p.di)}>/mo</span>
          </div>
          <Paragraph><strong className={cx($p.black50)}>1000</strong> Users</Paragraph>
          <Paragraph><strong className={cx($p.black50)}>1M</strong> Requests</Paragraph>
          <Paragraph><strong className={cx($p.black50)}>2GB</strong> DB storage</Paragraph>
          <Paragraph><strong className={cx($p.black50)}>Daily Backups</strong></Paragraph>
        </Border>
        <section className={cx($p.tc, $p.black30, $p.pv60, $p.ph38)}>
          <Images>
            <img className={cx($p.bbox)} src={require('../../assets/graphics/pricing-4.png')} alt='PRODUCTION'/>
          </Images>
          <h4>PRODUCTION</h4>
          <div className={cx($p.green, $p.pv16)}>
            <Price className={cx($p.di)}>$149</Price><span className={cx($p.di)}>/mo</span>
          </div>
          <Paragraph><strong className={cx($p.black50)}>50k</strong> Users</Paragraph>
          <Paragraph><strong className={cx($p.black50)}>10M</strong> Requests</Paragraph>
          <Paragraph><strong className={cx($p.black50)}>10GB</strong> DB storage</Paragraph>
          <Paragraph><strong className={cx($p.black50)}>Daily Backups</strong></Paragraph>
        </section>
        <section className={cx($p.tc, $p.black30, $p.pv60, $p.ph38)}>
          <Images>
            <img className={cx($p.bbox)} src={require('../../assets/graphics/pricing-5.png')} alt='GROWTH'/>
          </Images>
          <h4>GROWTH</h4>
          <div className={cx($p.green, $p.pv16)}>
            <Price className={cx($p.di)}>$499</Price><span className={cx($p.di)}>/mo</span>
          </div>
          <Paragraph><strong className={cx($p.black50)}>1M</strong> Users</Paragraph>
          <Paragraph><strong className={cx($p.black50)}>100M</strong> Requests</Paragraph>
          <Paragraph><strong className={cx($p.black50)}>100GB</strong> DB storage</Paragraph>
          <Paragraph><strong className={cx($p.black50)}>Daily Backups</strong></Paragraph>
        </section>
      </div>
    )
  }
}
