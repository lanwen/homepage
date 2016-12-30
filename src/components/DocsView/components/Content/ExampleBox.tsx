import * as React from 'react'
import { Link } from 'react-router'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'

const WhiteSquare = styled.div `
  margin-bottom: -${$v.size38};
  box-shadow:0 8px 18px rgba(0, 0, 0, 0.1), 0 -8px 18px rgba(0, 0, 0, 0.1);
`
const GitSquare = styled.div`
  background-color: #f0f0f0;
  border-radius: 4px;
  font-size: 10px;
`

export default class ExampleBox extends React.Component<{}, {}> {
  render() {
    return (
      <div className={cx($p.flex, $p.flexColumn)}>
        <div
          className={cx($p.bgLightgreen10, $p.flex, $p.pa16, $p.flexColumn, $p.justifyCenter, $p.itemsCenter)
        }>
          <div className={cx($p.flex, $p.itemsStart)}>
            <div className={cx($p.mr60)}>
              <div className={cx($p.ttu,$p.f14, $p.lightgreen50, $p.mb6, $p.fw6)}>Example</div>
              <div className={cx($p.green, $p.f20, $p.fw6)}>React Relay<br/>Todo Example</div>
            </div>
            <GitSquare className={cx($p.flex, $p.ph10, $p.pv6, $p.ba, $p.bBlack20, $p.itemsCenter)}>
              <img src={require('../../../../assets/graphics/logos/githubBlackFill.svg')}/>
              <div className={cx($p.f10, $p.ml6)}>Star</div>
            </GitSquare>
          </div>
          <a
            className={$p.noUnderline}
            href={`https://github.com/graphcool-examples/react-apollo-todo-example/archive/master.zip`}>
            <WhiteSquare
              className={cx($p.green, $p.bgWhite, $p.ttu, $p.ph38, $p.pv16, $p.f14, $p.fw6, $p.tc, $p.mt16)}
            >Download Example
            </WhiteSquare>
          </a>
        </div>
        <a href=""
           className={cx($p.mt38, $p.tc, $p.black30, $p.f16)}>Show Instructions</a>
      </div>
    )
  }
}
