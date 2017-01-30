import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { Item } from '../../../../types/types'

const WhiteSquare = styled.div `
  margin-bottom: -${$v.size38};
  box-shadow:0 8px 18px rgba(0, 0, 0, 0.1), 0 -8px 18px rgba(0, 0, 0, 0.1);
`
const GitSquare = styled.a`
  background-color: #f0f0f0;
  border-radius: 4px;
  font-size: 10px;
  flex: 0 0 50px;
`

const Container = styled.div`
  width: 350px;
`

interface Props {
  literal: string
  item: Item
}

interface ExampleData {
  title: string
  url: string
}

export default class ExampleBox extends React.Component<Props, {}> {
  extractData(literal) {
    let data: ExampleData | null = null

    try {
      const result = JSON.parse(this.clean(literal.trim()))

      data = {
        title: result[0],
        url: result[1],
      }
    } catch (e) {
      //
    }

    return data
  }
  render() {
    const {literal} = this.props

    const data = this.extractData(literal)

    if (data === null) {
      return null
    }

    return (
      <Container className={cx($p.flex, $p.flexColumn)}>
        <div
          className={cx($p.bgLightgreen10, $p.flex, $p.pa16, $p.flexColumn, $p.justifyCenter, $p.itemsCenter)}
        >
          <div className={cx($p.flex, $p.itemsStart)}>
            <div className={cx($p.mr60)}>
              <div className={cx($p.ttu,$p.f14, $p.lightgreen50, $p.mb6, $p.fw6)}>Example</div>
              <div className={cx($p.green, $p.f20, $p.fw6)}>{data.title}</div>
            </div>
            <GitSquare
              className={cx($p.flex, $p.ph10, $p.pv6, $p.ba, $p.bBlack20, $p.itemsCenter, $p.noUnderline)}
              href={data.url}
            >
              <img src={require('../../../../assets/graphics/logos/githubBlackFill.svg')} />
              <div className={cx($p.f10, $p.ml6)}>Star</div>
            </GitSquare>
          </div>
          <a
            className={$p.noUnderline}
            href={`${data.url}/archive/master.zip`}
          >
            <WhiteSquare
              className={cx($p.green, $p.bgWhite, $p.ttu, $p.ph38, $p.pv16, $p.f14, $p.fw6, $p.tc, $p.mt16)}
            >
              Download Example
            </WhiteSquare>
          </a>
        </div>
        <a
          href={data.url}
          className={cx($p.mt38, $p.tc, $p.black30, $p.f16)}
        >
          Show Instructions
        </a>
      </Container>
    )
  }

  private clean(str) {
    return str
      .replace('(', '[')
      .replace(')', ']')
      .replace('GITHUB_EXAMPLE', '')
      .replace('<!--', '')
      .replace('-->', '')
      .replace(/\'/g, '"')
  }
}
