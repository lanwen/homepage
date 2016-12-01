import * as React from 'react'
import Header from '../Header'
import Footer from '../Footer/Footer'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import * as cx from 'classnames'

export default class AboutView extends React.Component<{}, {}> {

  render() {
    const About = styled.div`
      flex: 1 300px;
      color: rgba(0, 0, 0, 0, 0.8);
`
    const Description = styled.div`
      flex: 1 400px;
`
    const Name = styled.div`
      font-weight: 100;
      font-size: ${$v.size25};
      padding-bottom: ${$v.size06};
`
    const Position = styled.div`
      color: rgba(0, 0, 0, 0.3);
      font-size: ${$v.size16};
      font-weight: 600;
`
    const Founder = styled.div`
    position: relative;
    overflow: visible;
       
       .asd {
          display: none;
          background: #fff;
          background: cover;
          width: 100%;
          height: 125%;
          box-shadow:0 8px 18px rgba(0, 0, 0, 0.03),
            0 -8px 18px rgba(0, 0, 0, 0.03);
          position: absolute;
          top: 0%;
          left: 0%;
          max-width: 340px;
       }
       
       &:hover .asd {
        display: flex;
        z-index: 10;
       }
       
       .line {
          width: 100%;
          float: left;
          margin-top:27px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.11);
}
       .hr {
           height:15px;
           padding-bottom: 15px;
           width: 25%;
           float: left;
}

`
    const Image = styled.img`
      max-width: 150px;
`
    return (
      <div>
        <Header/>
        <div className={cx($p.flex, $p.flexWrap, $p.flexAuto, $p.mh38, $p.mv96)}>
          <Description className={cx($p.itemsCenter, $p.flex, $p.ph38, $p.f38, $p.fw3)}>
            We want to build the only backend you’ll ever need.
          </Description>
          <About className={cx($p.itemsCenter, $p.flex, $p.pa38, $p.f20, $p.o50)}>
            We enable frontend developers to build products from scratch without the need to develop their own backend.
We ourselves have built countless backend applications and got tired of reinventing the wheel over and over again. GraphQL is a massive paradigm shift. It finally gives developers the flexibility to do all the work in the frontend. Our job is to take care of the rest and invent the wheel one last time for you. business logic?
          </About>
        </div>
        <div className={cx($p.bgBlack04, $p.pv96)}>
          <div className={cx($p.flex, $p.flexWrap, $p.justifyCenter, $p.flexColumn, $p.pb38)}>
            <h1 className={cx($p.selfCenter)}>We’re frontend developers on our own.</h1>
            <h4 className={cx($p.selfCenter, $p.o50)}>… and basically built the product we always wanted ourselves.</h4>
          </div>
          <div className={cx($p.flex, $p.justifyAround, $p.pv38, $p.flexWrap)}>
            <Founder className={cx($p.tc, $p.pv96, $p.ph60)}>
              <img className={cx($p.pb38)} src={require('../../assets/graphics/Johannes.png')}/>
              <Name>Johannes Schickling</Name>
              <Position>CO-FOUNDER</Position>
              <div className={cx('asd', $p.flexColumn, $p.flex, $p.flexWrap, $p.flexFixed)}>
                <Image className={cx($p.pv38, $p.selfCenter)} src={require('../../assets/graphics/Johannes.png')}/>
                <Name>Johannes Schickling</Name>
                <Position className={cx($p.pb25)}>CO-FOUNDER</Position>
                <div className={cx($p.flex, $p.justifyCenter)}>
                  <div className={cx('hr')}>
                    <div className={cx('line')}></div>
                  </div>
                   <img className={cx($p.pa10, $p.bbox)} src={require('../../assets/graphics/LinkedInLogo.png')} alt='LinkedIn Logo'/>
                   <img className={cx($p.pa10, $p.bbox)} src={require('../../assets/graphics/TwitterLogo.png')} alt='Twitter Logo'/>
                   <img className={cx($p.pa10, $p.bbox)} src={require('../../assets/graphics/GitHubLogo.png')} alt='GitHub Logo'/>
                  <div className={cx('hr')}>
                    <div className={cx('line')}></div>
                  </div>
                </div>
                <h4 className={cx($p.ph38, $p.pv38, $p.black50, $p.fw3)}>Entrepreneur and employee #1 at Trustpilot.com. Studied computer science in Denmark. Loves tinkering with new technology.</h4>
              </div>
            </Founder>
            <Founder className={cx($p.tc, $p.pv96, $p.ph60)}>
              <img className={cx($p.pb38)} src={require('../../assets/graphics/Soren.png')}/>
              <Name>Søren Bramer Schmidt</Name>
              <Position>CO-FOUNDER</Position>
              <div className={cx('asd', $p.flexColumn, $p.flex, $p.flexWrap, $p.flexFixed)}>
                <Image className={cx($p.pv38, $p.selfCenter)} src={require('../../assets/graphics/Soren.png')}/>
                <Name>Søren Bramer Schmidt</Name>
                <Position className={cx($p.pb25)}>CO-FOUNDER</Position>
                <div className={cx($p.flex, $p.justifyCenter)}>
                  <div className={cx('hr')}>
                    <div className={cx('line')}></div>
                  </div>
                  <img className={cx($p.pa10, $p.bbox)} src={require('../../assets/graphics/LinkedInLogo.png')} alt='LinkedIn Logo'/>
                  <img className={cx($p.pa10, $p.bbox)} src={require('../../assets/graphics/TwitterLogo.png')} alt='Twitter Logo'/>
                  <img className={cx($p.pa10, $p.bbox)} src={require('../../assets/graphics/GitHubLogo.png')} alt='GitHub Logo'/>
                  <div className={cx('hr')}>
                    <div className={cx('line')}></div>
                  </div>
                </div>
                <h4 className={cx($p.ph38, $p.pv38, $p.black50, $p.fw3)}>Entrepreneur and employee #1 at Trustpilot.com. Studied computer science in Denmark. Loves tinkering with new technology.</h4>
              </div>
            </Founder>
            <Founder className={cx($p.tc, $p.pv96, $p.ph60)}>
              <img className={cx($p.pb38)} src={require('../../assets/graphics/Nilan.png')}/>
              <Name>Nilan Marktanner</Name>
              <Position>DEVELOPER</Position>
              <div className={cx('asd', $p.flexColumn, $p.flex, $p.flexWrap, $p.flexFixed)}>
                <Image className={cx($p.pv38, $p.selfCenter)} src={require('../../assets/graphics/Nilan.png')}/>
                <Name>Nilan Marktanner</Name>
                <Position className={cx($p.pb25)}>DEVELOPER</Position>
                <div className={cx($p.flex, $p.justifyCenter)}>
                  <div className={cx('hr')}>
                    <div className={cx('line')}></div>
                  </div>
                  <img className={cx($p.pa10, $p.bbox)} src={require('../../assets/graphics/LinkedInLogo.png')} alt='LinkedIn Logo'/>
                  <img className={cx($p.pa10, $p.bbox)} src={require('../../assets/graphics/TwitterLogo.png')} alt='Twitter Logo'/>
                  <img className={cx($p.pa10, $p.bbox)} src={require('../../assets/graphics/GitHubLogo.png')} alt='GitHub Logo'/>
                  <div className={cx('hr')}>
                    <div className={cx('line')}></div>
                  </div>
                </div>
                <h4 className={cx($p.ph38, $p.pv38, $p.black50, $p.fw3)}>Entrepreneur and employee #1 at Trustpilot.com. Studied computer science in Denmark. Loves tinkering with new technology.</h4>
              </div>
            </Founder>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
