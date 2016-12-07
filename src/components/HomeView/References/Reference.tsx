import * as React from 'react'
import * as cx from 'classnames'
import styled from 'styled-components'
import { $p } from 'graphcool-styles'
import { movingDuration } from '../../../utils/constants'

interface Props {
  quote: string,
  author: string,
  link: string,
}

const Root = styled.div`
  max-height: 1000px;
  transition: max-height ${movingDuration} ease;
`

export default class References extends React.Component<Props, {}> {

  render() {
    return (
      <Root>
        <h2 className={cx($p.green)}>{this.props.quote}</h2>
        <a
          className={cx($p.lightgreen50, $p.f16, $p.fw6, $p.mt25, $p.mb38, $p.dib, $p.noUnderline)}
          href={this.props.link}
        >
          — {this.props.author}
        </a>
      </Root>
    )
  }
}
