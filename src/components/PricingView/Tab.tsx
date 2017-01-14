import * as React from 'react'
import {$p} from 'graphcool-styles'
import * as cx from 'classnames'
import {breakpoints} from '../../utils/constants'

interface Props {
  selected: boolean
  title: string
  onClick?: () => void
  className?: string
}

export default class Tab extends React.Component<Props, {}> {

  render() {

    const fontSize = window.innerWidth < breakpoints.p400 ? $p.f14 : $p.f16
    let horizontalPadding: string
    if (window.innerWidth < breakpoints.p580) {
      horizontalPadding = $p.ph10
    } else if (window.innerWidth < breakpoints.p580) {
      horizontalPadding = $p.ph16
    } else {
      horizontalPadding = $p.ph25
    }

    if (this.props.selected) {
      return (
        <div
          onClick={() => this.props.onClick()}
          className={cx(
            $p.flex,
            $p.justifyCenter,
            $p.white,
            $p.bgGreen,
            fontSize,
            $p.fw7,
            $p.ttu,
            horizontalPadding,
            $p.pv16,
            $p.pointer,
            this.props.className,
          )}>
          {this.props.title}
        </div>
      )
    }

    return (
      <div
        onClick={() => this.props.onClick()}
        className={cx(
          $p.flex,
          $p.justifyCenter,
          $p.bgWhite,
          fontSize,
          $p.fw7,
          $p.black80,
          $p.ttu,
          horizontalPadding,
          $p.pv16,
          $p.pointer,
          this.props.className,
        )}>
        {this.props.title}
      </div>
    )
  }
}
