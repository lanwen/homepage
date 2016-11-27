import * as React from 'react'
import { $p } from 'graphcool-styles'
import * as cx from 'classnames'

interface Props {
  headline: string
  content: string
}
export default class FeaturesContent extends React.Component<Props, {}> {

  render() {
    return (
      <div>
        <div className={cx($p.mv16, $p.f25, $p.tc, $p.fw3)}>
          <span>{this.props.headline}</span>
        </div>
        <p className={cx($p.f16, $p.o50, $p.tc)}>
          {this.props.content}
        </p>
      </div>
    )
  }
}
