import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../utils/constants'

const Copy = styled.div`
  width: 60%;
  
  @media(max-width: ${breakpoints.p750}px) {
    width: 80%;
  }
  @media(max-width: ${breakpoints.p500}px) {
    padding-left: ${$v.size38};
    padding-right: ${$v.size38};
    text-align: left;
  }
 
 @media(max-width: ${breakpoints.p400}px) {
    padding-left: ${$v.size25};
    padding-right: ${$v.size25};
  }
`

const Button = styled.a`
  font-size: ${$v.size16};
  
  @media (min-width: ${breakpoints.p1000}px) {
    font-size: ${$v.size20};
  }
  
  @media (min-width: ${breakpoints.p1360}px) {
    font-size: ${$v.size25};
  }
`

export default class FooterCTA extends React.Component<{}, {}> {

  render() {

    return (
      <div className={cx($p.justifyCenter, $p.flex, $p.flexColumn, $p.pb96)}>
        <Copy className={cx($p.f25, $p.tc, $p.pb16, $p.selfCenter, $p.fw3)}>
          {'Try it out for free - and setup your own backend in less than 5 minutes.'}
        </Copy>
        <Button
          className={cx($g.uppercaseButton, $p.bgGreen, $p.white, $p.selfCenter, $p.pa16, $p.noUnderline)}
          href='https://console.graph.cool/signup'
        >
          Sign up
        </Button>
      </div>
    )
  }
}
