import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints, maxWidth } from '../utils/constants'

const Root = styled.div`
  max-width: ${maxWidth}px;
  padding: 0 ${$v.size38} ${$v.size96};
  
  @media (min-width: ${breakpoints.p750}px) {
    padding: 0 ${$v.size60} ${$v.size96}
  }
  
  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  @media (max-width: ${breakpoints.p400}px) {
    padding: 0 ${$v.size25} ${$v.size60}
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
  font-size: ${$v.size14} !important;
  text-decoration: none;
  
  @media (min-width: ${breakpoints.p900}px) {
    font-size: ${$v.size16} !important;
  }
`

export default class FooterCTA extends React.Component<{}, {}> {

  render() {

    return (
      <Root className={cx($p.flex, $p.justifyBetween, $p.itemsCenter, $p.pb96)}>
        <h3 className={cx($p.black50)}>
          Ready to get started?
          <span className={cx($p.green, $p.db, $p.fw4)}>Set up a GraphQL backend or read the docs.</span>
        </h3>
        <ButtonContainer className={cx($p.flex)}>
          <Button
            href='https://console.graph.cool/signup'
            className={cx($g.uppercaseButton, $p.pa16, $p.dim, $p.bgGreen, $p.white, $p.mr25, $p.noUnderline)}
          >
            Create GraphQL Backend
          </Button>
          <Button
            href='https://www.graph.cool/docs/quickstart'
            className={cx($g.uppercaseButton, $p.pa16, $p.bgLightgreen20, $p.dim, $p.green, $p.noUnderline)}
          >
            Open Docs
          </Button>
        </ButtonContainer>
      </Root>
    )
  }
}
