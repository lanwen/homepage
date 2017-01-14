import * as React from 'react'
import {$p} from 'graphcool-styles'
import * as cx from 'classnames'

interface Props {
  selected: boolean
  title: string
  onClick?: () => void
}

export default class Tab extends React.Component<Props, {}> {

  render() {

    if (this.props.selected) {
      return (
        <div
          onClick={() => this.props.onClick()}
          className={cx(
            $p.white,
            $p.bgGreen,
            $p.f16,
            $p.fw7,
            $p.ttu,
            $p.ph38,
            $p.pv16,
            $p.pointer,
          )}>
          {this.props.title}
        </div>
      )
    }

    return (
      <div
        onClick={() => this.props.onClick()}
        className={cx(
          $p.bgWhite,
          $p.f16,
          $p.fw7,
          $p.black80,
          $p.ttu,
          $p.ph38,
          $p.pv16,
          $p.pointer,
        )}>
        {this.props.title}
      </div>
    )
  }
}
