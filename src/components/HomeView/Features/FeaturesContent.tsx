import * as React from 'react'
import { $p, $v } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import { breakpoints } from '../../../utils/constants'

interface Props {
  headline: string
  content: string
}

export default class FeaturesContent extends React.Component<Props, {}> {
  render() {
    const Content = styled.p`
      @media(max-width: ${breakpoints.p500}px) {
        text-align: left;
        padding-left: ${$v.size38};
        padding-right: ${$v.size38};
      }
      
      @media(max-width: ${breakpoints.p400}px) {
        padding-left: ${$v.size25};
        padding-right: ${$v.size25};
      }
`
    return (
      <div>
        <div className={cx($p.mv16, $p.f25, $p.tc, $p.fw3)}>
          <span>{this.props.headline}</span>
        </div>
        <Content className={cx($p.f16, $p.fw4, $p.o50, $p.tc)}>
          {this.props.content}
        </Content>
      </div>
    )
  }
}
