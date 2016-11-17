import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { maxWidth } from '../../utils/constants'

const Root = styled.div`
  max-width: ${maxWidth}
`

const Logo = styled.img`
  margin: ${$v.size16};
`

export default class LogoBar extends React.Component<{}, {}> {

  render() {
    return (
      <Root className={cx($p.flex, $p.justifyCenter, $p.flexWrap, $p.center)}>
        <Logo src={require(`../../assets/graphics/logos/react.svg`)} />
        <Logo src={require(`../../assets/graphics/logos/angular.svg`)} />
        <Logo src={require(`../../assets/graphics/logos/relay.svg`)} />
        <Logo src={require(`../../assets/graphics/logos/apollo.svg`)} />
        <Logo src={require(`../../assets/graphics/logos/ios.svg`)} />
        <Logo src={require(`../../assets/graphics/logos/android.svg`)} />
        <Logo src={require(`../../assets/graphics/logos/serverless.svg`)} />
        <Logo src={require(`../../assets/graphics/logos/googlecloudfunctions.svg`)} />
        <Logo src={require(`../../assets/graphics/logos/azurefunctions.svg`)} />
      </Root>
    )
  }
}
