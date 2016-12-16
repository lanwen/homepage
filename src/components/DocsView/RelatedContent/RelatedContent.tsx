import * as React from 'react'
import * as cx from 'classnames'
import { Link } from 'react-router'
import { $p, $g, Icon, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints, maxWidth } from '../../../utils/constants'

export default class RelatedContent extends React.Component<{}, {}> {

  render() {
    const Container = styled.div`
      background: linear-gradient(to top, #fff 13%, rgba(0, 0, 0, 0.03) 13%,rgba(0, 0, 0, 0.03) 95%,#fff 95%);
      
        @media(max-width: ${breakpoints.p1000}px) {
          background: linear-gradient(to top, #fff 5%, rgba(0, 0, 0, 0.03) 5%,rgba(0, 0, 0, 0.03) 95%,#fff 95%);
`
    const Square = styled.div`
      box-shadow:0 8px 18px rgba(0, 0, 0, 0.03),
      0 -8px 18px rgba(0, 0, 0, 0.03);
        
        @media(max-width: ${breakpoints.p1000}px) {
          margin: 0;
`
    const Circle = styled.div`
      background-color: ${(props) => props.background};
      border-radius: 50%;
      width: 20px;
      height: 20px;
`
    const Rest = styled.div`
     @media(max-width: ${breakpoints.p1000}px) {
      margin-bottom: ${$v.size25};
      margin-top: ${$v.size25};
      
     @media(max-width: ${breakpoints.p900}px) {
       padding-left: 0;
`
    return (
      <div>
        <div className={cx($p.bBlack10, $p.mt60, $p.bt, $p.mh96)}/>
        <div className={cx($p.mb38, $p.mt10, $p.pv16, $p.flex, $p.justifyCenter, $p.flexWrap)}>
          <p className={cx($p.o40, $p.f20, $p.fw4, $p.pt4)}>Was it helpful?</p>
          <img src={require('../../../assets/graphics/Yes.svg')}
               className={cx($p.bbox, $p.db, $p.pl38, $p.pr10)}
          />
          <p className={cx($p.o40, $p.f20, $p.fw4, $p.pt4)}>Yes</p>
          <img src={require('../../../assets/graphics/No.svg')}
               className={cx($p.bbox, $p.db, $p.pl38, $p.pr10)}
          />
          <p className={cx($p.o40, $p.f20, $p.fw4, $p.pt4)}>No</p>
        </div>
        <Container className={cx($p.flex, $p.justifyCenter, $p.flexWrap, $p.ph10)}>
          <Square className={cx($p.flex, $p.flexColumn, $p.mb60, $p.pb25, $p.bgWhite, $p.mr25)}>
            <div className={cx($p.inlineFlex, $p.bgLightgreen10, $p.pa25)}>
              <p className={cx($p.lightgreen50, $p.pr10, $p.fw6, $p.f16)}>MORE ABOUT</p>
              <p className={cx($p.green, $p.fw6, $p.f16)}>AUTHENTICATION</p>
              <img src={require('../../../assets/graphics/info.svg')}
                   className={cx($p.bbox, $p.db, $p.pl38, $p.pr10)}
              />
            </div>
            <div className={cx($p.flex, $p.pb10, $p.pt25, $p.ph25)}>
              <Circle
                background='rgba(164, 3, 111, 0.2)'
                className={cx($p.bbox, $p.db, $p.mr16, $p.mt4)}
              >
                <img
                  src={require('../../../assets/graphics/Guide.svg')}
                  width={25}
                  height={25}
                />
              </Circle>
              <div className={cx()}>
                <p className={cx($p.black60, $p.f20, $p.fw4)}>Thinking in terms of graphs</p>
                <p className={cx($p.black30, $p.f14, $p.fw6)}>GUIDE</p>
              </div>
            </div>
            <div className={cx($p.flex, $p.ph25, $p.pv10)}>
              <Circle
                background='rgba(241, 143, 1, 0.2)'
                className={cx($p.bbox, $p.db, $p.mr16, $p.mt4)}
              >
                <img
                  src={require('../../../assets/graphics/Example.svg')}
                  width={25}
                  height={25}
                />
              </Circle>
              <div className={cx()}>
                <p className={cx($p.black60, $p.f20, $p.fw4)}>React/Apollo KMS example</p>
                <p className={cx($p.black30, $p.f14, $p.fw6)}>EXAMPLE</p>
              </div>
            </div>
            <div className={cx($p.flex, $p.pa25, $p.pv10)}>
              <Circle
                background='rgba(42, 126, 211, 0.2)'
                className={cx($p.bbox, $p.db, $p.mr16, $p.mt4)}
              >
                <img
                  src={require('../../../assets/graphics/Feather.svg')}
                  width={25}
                  height={25}
                />
              </Circle>
              <div className={cx()}>
                <p className={cx($p.black60, $p.f20, $p.fw4)}>How to use Lokka</p>
                <p className={cx($p.black30, $p.f14, $p.fw6)}>ARTICLE</p>
              </div>
            </div>
          </Square>
          <Rest className={cx($p.mt96, $p.pl25)}>
            <p className={cx($p.fw6, $p.f16, $p.black30, $p.pb25)}>FURTHER READING</p>
            <div className={cx($p.flex, $p.pv10)}>
              <Circle
                background=''
                className={cx($p.bbox, $p.db, $p.mr16, $p.mt4)}
              >
                <img
                  src={require('../../../assets/graphics/QuestionMark.svg')}
                  width={25}
                  height={25}
                />
              </Circle>
              <div className={cx()}>
                <p className={cx($p.black60, $p.f20, $p.fw4)}>How does filtering work?</p>
                <p className={cx($p.black30, $p.f14, $p.fw6)}>FAQ</p>
              </div>
            </div>
            <div className={cx($p.flex, $p.pv10)}>
              <Circle
                background='rgba(39, 174, 96, 0.2)'
                className={cx($p.bbox, $p.db, $p.mr16, $p.mt4)}
              >
                <img
                  src={require('../../../assets/graphics/Filters.svg')}
                  width={25}
                  height={25}
                />
              </Circle>
              <div className={cx()}>
                <p className={cx($p.black60, $p.f20, $p.fw4)}>Filters in the Relay API</p>
                <p className={cx($p.black30, $p.f14, $p.fw6)}>REFERENCE</p>
              </div>
            </div>
          </Rest>
        </Container>
      </div>
    )
  }
}
