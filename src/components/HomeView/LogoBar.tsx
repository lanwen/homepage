import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { maxWidth } from '../../utils/constants'

const Root = styled.div`
  max-width: ${maxWidth};
`

const Logo = styled.img`
  margin: ${$v.size16};
`

interface Props {
  white?: boolean
}

export default class LogoBar extends React.Component<Props, {}> {

  render() {
    const whiteExtension = this.props.white ? 'White' : ''
    return (
      <Root className={cx($p.flex, $p.justifyCenter, $p.flexWrap, $p.center, this.props.white ? $p.o10 : $p.o100)}>
        <Logo src={require(`../../assets/graphics/logos/react${whiteExtension}.svg`)} />
        <Logo src={require(`../../assets/graphics/logos/angular${whiteExtension}.svg`)} />
        <Logo src={require(`../../assets/graphics/logos/relay${whiteExtension}.svg`)} />
        <Logo src={require(`../../assets/graphics/logos/apollo${whiteExtension}.svg`)} />
        <Logo src={require(`../../assets/graphics/logos/ios${whiteExtension}.svg`)} />
        <Logo src={require(`../../assets/graphics/logos/android${whiteExtension}.svg`)} />
        <Logo src={require(`../../assets/graphics/logos/serverless${whiteExtension}.svg`)} />
        <Logo src={require(`../../assets/graphics/logos/googlecloudfunctions${whiteExtension}.svg`)} />
        <Logo src={require(`../../assets/graphics/logos/azurefunctions${whiteExtension}.svg`)} />
      </Root>
    )
  }
}
