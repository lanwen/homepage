import * as React from 'react'
import * as cx from 'classnames'
import { $p, $g, $v, Icon } from 'graphcool-styles'
import styled from 'styled-components'

interface Props {
  text: string,
  link: string,
  className?: string,
}

const Root = styled.div`

`

export default class SecondaryCallToAction extends React.Component<Props, {}> {

  render() {
    return (
      <Root
        href={this.props.link}
        className={cx(
          $g.uppercaseLabel,
          $p.f14, $p.blue,
          $p.flex,
          $p.itemsCenter,
          $p.noUnderline,
          $p.center,
          this.props.className,
        )}
      >
        {this.props.text}
        <div className={cx($p.ml10)}>
          <Icon
            src={require('graphcool-styles/icons/fill/fullArrowRight.svg')}
            width={14}
            height={11}
            color={$v.blue}
          />
        </div>
      </Root>
    )
  }
}
