import * as React from 'react'
import * as cx from 'classnames'
import { $p, $g, Icon, $v } from 'graphcool-styles'
import styled from 'styled-components'
import {breakpoints, maxWidth} from '../../utils/constants'

const Root = styled.div`
  padding-left: ${$v.size38};
  padding-right: ${$v.size60};
  max-width: ${maxWidth}px;
`

export default class Landing extends React.Component<{}, {}> {

  render() {
    return (
      <Root className={cx($p.flex, $p.itemsCenter, $p.center)}>
        <div className={cx($p.w50, $p.flexFixed)}>
          <img className={cx($p.w100, $p.hAuto)} src={require('../../assets/graphics/browser.svg')} />
        </div>
        <div className={cx($p.ml60)}>
          <h1 className={cx($p.f38, $p.fw3)}>
            Flexible backend platform combining GraphQL +  <span className={cx($p.nowrap)}>AWS Lambda</span>
            <div className={cx($p.green, $p.nowrap)}>built for frontend developers.</div>
          </h1>
          <p className={cx($p.f25, $p.fw3, $p.black50, $p.mt60)}>
            Setup a production-ready GraphQL backend in 5 minutes. Use any language to implement your business logic. Includes realtime subscriptions, managed database, service integrations and more.
          </p>
        </div>
      </Root>
    )
  }
}