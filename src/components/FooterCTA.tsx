import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints, maxWidth } from '../utils/constants'
import LandingCallToAction from './HomeView/Landing/LandingCallToAction'

const Root = styled.div`
  max-width: ${maxWidth}px;
  padding: 0 ${$v.size38} ${$v.size60};
  
  @media (min-width: ${breakpoints.p750}px) {
    padding: 0 ${$v.size60} ${$v.size60}
  }
  
  @media (min-width: ${breakpoints.p1200}px) {
    padding: 0 ${$v.size60} ${$v.size60}
  }
  
  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  @media (max-width: ${breakpoints.p400}px) {
    padding: 0 ${$v.size25} ${$v.size38}
  }
`

const ButtonContainer = styled.div`
  margin-left: ${$v.size60};
  
  @media (max-width: 680px) {
    margin-left: 0;
    margin-top: ${$v.size38};
  }
`

const Button = styled.a`
  font-size: ${$v.size16};
  
  @media (min-width: ${breakpoints.p1000}px) {
    font-size: ${$v.size20};
  }
  
  @media (min-width: ${breakpoints.p1360}px) {
    font-size: ${$v.size20};
  }
`

export default class FooterCTA extends React.Component<{}, {}> {

  render() {

    return (
      <Root className={cx($p.flex, $p.justifyBetween, $p.itemsCenter, $p.pb96)}>
        <h2 className={cx($p.black50)}>
          Ready to Get Started?
          <span className={cx($p.green, $p.db)}>Explore our Docs or set up a GraphQL Backend.</span>
        </h2>
        <ButtonContainer className={cx($p.flex)}>
          <Button
            href='https://console.graph.cool/signup'
            className={cx($g.uppercaseButton, $p.pa16, $p.bgGreen, $p.white, $p.mr25, $p.noUnderline)}
          >
            Sign Up
          </Button>
          <Button
            href='https://www.graph.cool/docs/quickstart'
            className={cx($g.uppercaseButton, $p.pa16, $p.bgBlack04, $p.black50, $p.noUnderline)}
          >
            Quickstart
          </Button>
        </ButtonContainer>
      </Root>
    )
  }
}
