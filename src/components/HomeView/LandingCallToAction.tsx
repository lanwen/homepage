import * as React from 'react'
import * as cx from 'classnames'
import { $p, $g, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../utils/constants'

const Root = styled.div`
  @media (max-width: ${breakpoints.p4}px) {
    margin: ${$v.size60} 0;
    justify-content: center;
  }
`

const Button = styled.button`
  font-size: ${$v.fontSize20};

  @media (min-width: ${breakpoints.p5}px) {
    font-size: ${$v.size25};
  }
`

export default class LandingCallToAction extends React.Component<{}, {}> {
  render() {
    return (
      <Root className={cx($p.flex)}>
        <Button
          className={cx($g.uppercaseButton, $p.pa16, $p.bgBlack04, $p.black40, $p.mr25)}
        >
          Quickstart
        </Button>
        <Button className={cx($g.uppercaseButton, $p.pa16, $p.bgGreen, $p.white)}>Sign Up</Button>
      </Root>
    )
  }
}
