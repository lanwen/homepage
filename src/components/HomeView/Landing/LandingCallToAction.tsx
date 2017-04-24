import * as React from 'react'
import * as cx from 'classnames'
import { $p, $g, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../../utils/constants'
import {handleOutgoingLink} from '../../../utils/link'

const Root = styled.div`
  
  margin: ${$v.size60} 0;
  justify-content: center;
  
  @media (min-width: ${breakpoints.p1200}px) {
    margin: 0
    justify-content: flex-start;
  }
  
  @media (max-width: ${breakpoints.p900}px) {
    margin: ${$v.size38} 0;
  }
  
  @media (max-width: ${breakpoints.p500}px) {
    justify-content: flex-start;
  }
`

const Button = styled.a`
  font-size: ${$v.size16};
  // transition: transform .4s ease, opacity .2s ease;
  // transform: scale(1);
  
  // &:hover {
  //   transform: scale(0.98);
  // }
  
  @media (min-width: ${breakpoints.p1000}px) {
    font-size: ${$v.size20};
  }
  
  @media (min-width: ${breakpoints.p1360}px) {
    font-size: ${$v.size20};
  }
`

export default class LandingCallToAction extends React.Component<{}, {}> {
  render() {
    return (
      <Root className={cx($p.flex)}>
        <Button
          href='https://console.graph.cool/signup'
          className={cx($g.uppercaseButton, $p.dim, $p.pa16, $p.bgGreen, $p.white, $p.mr25, $p.noUnderline)}
          onClick={e => {
            ga('send', 'event', 'homepage', 'clicked', 'signup', 'top_hero')
            handleOutgoingLink(e, 'https://console.graph.cool/signup')
          }}
        >
          Sign Up
        </Button>
        <Button
          href='https://www.graph.cool/docs/quickstart'
          className={cx($g.uppercaseButton, $p.pa16, $p.dim, $p.bgBlack04, $p.black50, $p.noUnderline)}
        >
          Quickstart
        </Button>
      </Root>
    )
  }
}
