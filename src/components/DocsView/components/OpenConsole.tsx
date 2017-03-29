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
      <div>
        <style jsx={true}>{`
          div {
            @p: .flex, .flexColumn, .justifyCenter, .itemsCenter, .pt38, .pb96;
            @media (max-width: 400px) {
              @p: .mt96;
            }
          }
        `}</style>
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
