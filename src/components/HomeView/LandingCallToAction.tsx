import * as React from 'react'
import * as cx from 'classnames'
import { $p, $g, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../utils/constants'

const Root = styled.div`
  
  @media (max-width: ${breakpoints.p1200}px) {
    margin: ${parseFloat($v.size60) + parseFloat($v.size16) + parseFloat($v.size10) * 3}px 0 ${$v.size60};
    justify-content: center;
  }
  
  @media (max-width: ${breakpoints.p1200}px) {
    justify-content: flex-start;
  }

  @media (max-width: ${breakpoints.p900}px) {
    margin: ${$v.size38} 0;
  }
`

const Button = styled.button`
  font-size: ${$v.size16};
  
  @media (min-width: ${breakpoints.p1000}px) {
    font-size: ${$v.fontSize20};
  }
  
  @media (min-width: ${breakpoints.p1360}px) {
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
