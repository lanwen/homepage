import * as React from 'react'
import {$p, $v, $g} from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import {breakpoints} from '../../../utils/constants'

const Button = styled.a`
  font-size: ${$v.size14} !important;
  text-decoration: none;
  
  @media (min-width: ${breakpoints.p900}px) {
    font-size: ${$v.size16} !important;
  }
`

export default class OpenConsole extends React.Component<{}, {}> {
  render() {
    return (
      <div className={cx(
        $p.flex,
        $p.flexColumn,
        $p.justifyCenter,
        $p.itemsCenter,
        $p.pt38,
        $p.pb96,
        window.innerWidth < breakpoints.p400 && $p.mt96,
      )}>
        <Button
          href='https://console.graph.cool'
          target='_blank'
          className={cx($g.uppercaseButton, $p.bgGreen, $p.white, $p.mt38)}
        >
          OPEN CONSOLE
        </Button>
      </div>
    )
  }
}
