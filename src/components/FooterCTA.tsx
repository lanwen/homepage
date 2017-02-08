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

interface Props {
  headline1: string,
  headline2: string,
  button1Text: string,
  button1Link: string,
  button2Text: string,
  button2Link: string,
  className?: string,
}

export default class FooterCTA extends React.Component<Props, {}> {

  render() {

    return (
      <Root className={cx($p.flex, $p.justifyBetween, $p.itemsCenter, $p.pb96, $p.center, this.props.className)}>
        <h3 className={cx($p.black50)}>
          {this.props.headline1}
          <span className={cx($p.green, $p.db, $p.fw4)}>{this.props.headline2}</span>
        </h3>
        <ButtonContainer className={cx($p.flex)}>
          <Button
            href={this.props.button1Link}
            className={cx($g.uppercaseButton, $p.pa16, $p.dim, $p.bgGreen, $p.white, $p.mr25, $p.noUnderline)}
          >
            {this.props.button1Text}
          </Button>
          <Button
            href={this.props.button2Link}
            className={cx($g.uppercaseButton, $p.pa16, $p.bgLightgreen20, $p.dim, $p.green, $p.noUnderline)}
          >
            {this.props.button2Text}
          </Button>
        </ButtonContainer>
      </Root>
    )
  }
}
