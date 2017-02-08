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

const ApolloLogo = styled(Logo)`
  height: 55px;
  @media (max-width: ${breakpoints.p750}px) {
    height: 45px;
  }
  
  @media (max-width: ${breakpoints.p580}px) {
    height: 35px;
  }
`

const TwitterLogo = styled(Logo)`
  height: 45px;
  @media (max-width: ${breakpoints.p750}px) {
    height: 35px;
  }
  
  @media (max-width: ${breakpoints.p580}px) {
    height: 25px;
  }
`

const AirbnbLogo = styled(Logo)`
  height: 45px;
  @media (max-width: ${breakpoints.p750}px) {
    height: 35px;
  }
  
  @media (max-width: ${breakpoints.p580}px) {
    height: 25px;
  }
`

const WebflowLogo = styled(Logo)`
  height: 35px;
  @media (max-width: ${breakpoints.p750}px) {
    height: 25px;
  }
  
  @media (max-width: ${breakpoints.p580}px) {
    height: 15px;
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
        $p.itemsCenter,
        $p.flexWrap,
        $p.center,
        $p.o10,
        this.props.className,
      )}>
        <TwitterLogo src={require(`../../assets/graphics/logos/companies/twitter.svg`)} />
        <ApolloLogo src={require(`../../assets/graphics/logos/companies/apollo.svg`)} />
        <AirbnbLogo src={require(`../../assets/graphics/logos/companies/airbnb.svg`)} />
        <Logo src={require(`../../assets/graphics/logos/companies/netlify.svg`)} />
        <Logo src={require(`../../assets/graphics/logos/companies/auth0.svg`)} />
        <WebflowLogo src={require(`../../assets/graphics/logos/companies/webflow.svg`)} />
      </Root>
    )
  }
}
