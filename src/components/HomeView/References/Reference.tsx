import * as React from 'react'
import * as cx from 'classnames'
import styled from 'styled-components'
import { $p, $v, Icon } from 'graphcool-styles'
import { movingDuration, breakpoints, maxWidth } from '../../../utils/constants'
import { ReferenceItem } from './data'
import calcSize from 'calculate-size'

interface Props {
  reference: ReferenceItem
}

const Root = styled.div`
  position: relative;
  transition: height ${movingDuration} ease;
  padding-top: ${parseFloat($v.size96) * 0.5 + parseFloat($v.size25)}px
`

const Logo = styled.div`
  margin-top: ${$v.size16};
  
  i {
    justify-content: center
  }
  
  svg {
    height: ${$v.size16};
    width: auto;
  }
`

function getFontSize(): string {
  if (window.innerWidth >= breakpoints.p1200) {
    return $v.size32
  }
  if (window.innerWidth >= breakpoints.p1000) {
    return $v.size30
  }
  return $v.size25
}

export default class Reference extends React.Component<Props, {}> {

  render() {
    const width = Math.min(window.innerWidth - 120, maxWidth)
    const {height} = calcSize(this.props.reference.quote, {
      width: `${width}px`,
      font: 'Open Sans,sans-serif',
      fontSize: getFontSize(),
      fontWeight: '300',
    })

    return (
      <Root style={{ height: height + 132 }}>
        <div
          className={cx(
            $p.brPill,
            $p.hS96,
            $p.wS96,
            $p.bgCenter,
            $p.cover,
            $p.absolute,
            $p.left50,
            $p.top0,
            $p.tlCenter
          )}
          style={{
            backgroundImage: `url(${this.props.reference.picture})`
          }}
        />
        <h2 className={cx($p.green)}>{this.props.reference.quote}</h2>
        <a
          className={cx($p.lightgreen50, $p.f16, $p.fw6, $p.mt38, $p.mb38, $p.dib, $p.noUnderline)}
          href={this.props.reference.url}
          target='_blank'
        >
          <span>{this.props.reference.who}</span>
          <Logo>
            <Icon
              src={this.props.reference.logo}
              height={16}
              width={112}
              color={$v.green}
            />
          </Logo>
        </a>
      </Root>
    )
  }
}
