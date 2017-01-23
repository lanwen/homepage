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

const Container = styled.div`
  @media (max-width: ${breakpoints.p400}px) {
    margin-top: 120px;
  }
`

export default class Try extends React.Component<{}, {}> {
  render() {
    return (
      <Container className={cx(
        $p.flex,
        $p.flexColumn,
        $p.justifyCenter,
        $p.itemsCenter,
        $p.pt38,
        $p.pb96,
      )}>
        <div className={cx($p.f25, $p.fw3)}>Not a customer yet? Try it out for free.</div>
        <Button
          href='https://graph.cool/signup'
          className={cx($g.uppercaseButton, $p.bgGreen, $p.white, $p.mt38)}
        >
          SIGN UP
        </Button>
      </Container>
    )
  }
}
