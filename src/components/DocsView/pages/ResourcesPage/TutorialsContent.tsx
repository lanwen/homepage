import * as React from 'react'
import { $p, $v } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'

interface Props {
  headline: string
  content: string
  tags: string
  src: string
}

const Basis = styled.div`
  flex: 0 0 380px;
`

export default class TutorialsContent extends React.Component<Props, {}> {
  render() {
    return (
      <Basis className={cx($p.flexColumn, $p.flex, $p.flexWrap, $p.bgWhite, $p.mra, $p.mla, $p.overflowHidden)}>
          <img
            className={cx($p.pa6)}
            src={this.props.src}
          />
        <div className={cx($p.pt25, $p.ph25, $p.f25)}>
          <span>{this.props.headline}</span>
        </div>
        <div className={cx($p.pt16, $p.ph25, $p.f20, $p.black60)}>
          <span>{this.props.content}</span>
        </div>
        <div className={cx($p.pt25, $p.ph25, $p.f20, $p.black60)}>
          <span>{this.props.tags}</span>
        </div>
      </Basis>
    )
  }
}
