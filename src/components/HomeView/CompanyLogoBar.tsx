import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { maxWidth, breakpoints } from '../../utils/constants'

const Root = styled.div`
  max-width: ${maxWidth}px;
`

const Logo = styled.img`
  margin: ${$v.size16};
  height: 50px;
  width: auto;

  @media (max-width: ${breakpoints.p750}px) {
    height: 40px;
  }
  
  @media (max-width: ${breakpoints.p580}px) {
    margin: ${$v.size10};
    height: 30px;
  }
`

interface Props {
  className?: string
}

export default class CompanyLogoBar extends React.Component<Props, {}> {

  render() {
    return (
      <Root className={cx(
        $p.flex,
        $p.justifyCenter,
        $p.flexWrap,
        $p.center,
        $p.o100,
        this.props.className,
      )}>
        <Logo src={require(`../../assets/graphics/logos/companies/twitter.svg`)} />
        <Logo src={require(`../../assets/graphics/logos/companies/apollo.svg`)} />
        <Logo src={require(`../../assets/graphics/logos/companies/airbnb.svg`)} />
        <Logo src={require(`../../assets/graphics/logos/companies/netlify.svg`)} />
        <Logo src={require(`../../assets/graphics/logos/companies/auth0.svg`)} />
        <Logo src={require(`../../assets/graphics/logos/companies/webflow.svg`)} />
      </Root>
    )
  }
}
