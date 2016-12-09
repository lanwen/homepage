import * as React from 'react'
import * as cx from 'classnames'
import styled from 'styled-components'
import { $p, $v } from 'graphcool-styles'
import { movingDuration, breakpoints, maxWidth } from '../../../utils/constants'
import calcSize from 'calculate-size'

interface Props {
  quote: string,
  author: string,
  link: string,
}

const Root = styled.div`
  transition: height ${movingDuration} ease;
`

function getFontSize (): string {
  if (window.innerWidth >= breakpoints.p1200) {
    return $v.size32
  }
  if (window.innerWidth >= breakpoints.p1000) {
    return $v.size30
  }
  return $v.size25
}

export default class References extends React.Component<Props, {}> {

  render() {
    const width = Math.min(window.innerWidth - 120, maxWidth)
    const { height } = calcSize(this.props.quote, {
      width: `${width}px`,
      font: 'Open Sans,sans-serif',
      fontSize: getFontSize(),
      fontWeight: '300',
    })

    return (
      <Root style={{ height: height + 70 }}>
        <h2 className={cx($p.green)}>{this.props.quote}</h2>
        <a
          className={cx($p.lightgreen50, $p.f16, $p.fw6, $p.mt25, $p.mb38, $p.dib, $p.noUnderline)}
          href={this.props.link}
          target='_blank'
        >
          — {this.props.author}
        </a>
      </Root>
    )
  }
}
