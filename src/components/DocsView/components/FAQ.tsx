import * as React from 'react'
import * as cx from 'classnames'
import { Link } from 'react-router'
import { $p, $g, Icon, $v } from 'graphcool-styles'
import styled from 'styled-components'
import Footer from '../../Footer/Footer'
import { breakpoints, maxWidth } from '../../../utils/constants'

export default class FAQ extends React.Component<{}, {}> {

  render() {
    const RightSection = styled.div`
      flex: 0 0 400px;
      background-color: rgba(0, 0, 0, 0.02);
      padding-top: 196px;
    `
    const LeftSection = styled.div`
      flex: 1 1 100px;
    `
    const NavigationLinks = styled.div`
      color: ${$v.gray30};
      cursor: pointer;
      transition: color ${$v.duration} linear;

      &:hover {
        color: ${$v.gray50};
      }
      `
    const Circle = styled.div`
      background-color: ${(props) => props.background};
      border-radius: 50%;
      width: 20px;
      height: 20px;
    `
    const Square = styled.div`
      box-shadow:0 8px 18px rgba(0, 0, 0, 0.03),
      0 -8px 18px rgba(0, 0, 0, 0.03);
      margin-left: -${$v.size38}
    `
    return (
          <RightSection className={cx($p.pl25, $p.pr10, $p.pv38)}>
            <div>
              <p className={cx($p.f16, $p.fw6, $p.black30)}>RELATED QUESTIONS</p>
              <div className={cx($p.flex, $p.pb10, $p.pt38)}>
                <Circle
                  background='rgba(49, 177, 180, 0.2)'
                  className={cx($p.bbox, $p.db, $p.mr16, $p.mt4)}
                >
                  <img
                    src={require('../../../assets/graphics/QuestionMark.svg')}
                    width={25}
                    height={25}
                  />
                </Circle>
                <p className={cx($p.black60, $p.f20, $p.fw4)}>How can I implement my server-side business logic?</p>
              </div>
              <div className={cx($p.flex, $p.pv10)}>
                <Circle
                  background='rgba(49, 177, 180, 0.2)'
                  className={cx($p.bbox, $p.db, $p.mr16, $p.mt4)}
                >
                  <img
                    src={require('../../../assets/graphics/QuestionMark.svg')}
                    width={25}
                    height={25}
                  />
                </Circle>
                <p className={cx($p.black60, $p.f20, $p.fw4)}>How does user authentication work?</p>
              </div>
              <div className={cx($p.flex, $p.pv10)}>
                <Circle
                  background='rgba(49, 177, 180, 0.2)'
                  className={cx($p.bbox, $p.db, $p.mr16, $p.mt4)}
                >
                  <img
                    src={require('../../../assets/graphics/QuestionMark.svg')}
                    width={25}
                    height={25}
                  />
                </Circle>
                <p className={cx($p.black60, $p.f20, $p.fw4)}>How does filtering work?</p>
              </div>
              <Square className={cx($p.flex, $p.flexColumn, $p.bgWhite, $p.mv38)}>
                <div className={cx($p.inlineFlex, $p.bgLightgreen10, $p.pv25)}>
                  <p className={cx($p.lightgreen50, $p.fw6, $p.f16, $p.pl25)}>MORE ABOUT</p>
                  <p className={cx($p.green, $p.fw6, $p.f16, $p.pl6)}>VENDOR LOCK IN</p>
                  <img src={require('../../../assets/graphics/info.svg')}
                       className={cx($p.bbox, $p.db, $p.pl25)}
                  />
                </div>
                <div className={cx($p.pl25)}>
                  <div className={cx($p.flex, $p.pt38)}>
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
                  <div className={cx($p.flex, $p.pt25)}>
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
                  <div className={cx($p.flex, $p.pt25, $p.pb38)}>
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
                </div>
              </Square>
              <p className={cx($p.f16, $p.fw6, $p.black30)}>FURTHER READING</p>
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
            </div>
          </RightSection>
    )
  }
}
