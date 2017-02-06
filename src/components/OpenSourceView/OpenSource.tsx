import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import styled from 'styled-components'
import SectionHeader from '../SectionHeader'

const Learn = styled.div`
  background: linear-gradient(to top, #fff 25%, rgba(0, 0, 0, 0.03) 25%,rgba(0, 0, 0, 0.03) 75%,#fff 75%);
  
  @media(max-width: 891px) {
    background: linear-gradient(to top, #fff 15%, rgba(0, 0, 0, 0.03) 15%,rgba(0, 0, 0, 0.03) 85%,#fff 85%);
  }
`

export default class OpenSource extends React.Component<{}, {}> {

  render() {
    const headline = (
      <div className={cx($p.mb0, $p.pb0)}>
        <span>We </span>
        <img className={cx($p.ph10)} src={require('../../assets/graphics/homepage/Heart.svg')} alt='Heart'/>
        <span> Open Source</span>
      </div>
    )

    return (
      <div className={cx($p.justifyCenter, $p.flex, $p.flexColumn, $p.pb38)}>
        <SectionHeader
          headline={headline}
          copy='Help us move the GraphQL community forward. The Graphcool team works on various open source projects and would love your help. The easiest way to get started is to submit improvements to the examples or create examples and guides for new technologies.' // tslint:disable-line
        />
        <Learn className={cx($p.flex, $p.justifyCenter, $p.flexWrap, $p.pv60, $p.ph38)}>
          <a className={cx($p.mh25, $p.mv10)} href='https://learnrelay.org' target='_blank'>
            <img
              className={cx($p.w100, $p.hAuto, $p.bbox, $p.db)}
              src={require('../../assets/graphics/homepage/learnRelay.png')}
              alt='Learn Relay'/>
          </a>
          <a className={cx($p.mh25, $p.mv10)} href='https://learnapollo.com' target='_blank'>
            <img
              className={cx($p.w100, $p.hAuto, $p.bbox, $p.db)}
              src={require('../../assets/graphics/homepage/learnApollo.png')}
              alt='Learn Apollo'
            />
          </a>
        </Learn>
      </div>
    )
  }
}
