import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'

interface Props {
  quote: string,
  author: string,
}

export default class References extends React.Component<Props, {}> {

  render() {
    return (
      <div className={cx()}>
        <h2 className={cx($p.green)}>{this.props.quote}</h2>
        <p className={cx($p.lightgreen50, $p.f16, $p.fw6, $p.mt25, $p.mb38)}>— {this.props.author}</p>
      </div>
    )
  }
}
