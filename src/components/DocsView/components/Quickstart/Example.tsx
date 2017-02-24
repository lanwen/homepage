import * as React from 'react'
import {$p, $v, $g, Icon} from 'graphcool-styles'
import * as cx from 'classnames'
import {QuickExample} from '../../../../types/types'
import CircleIcon from '../CircleIcon'
import styled from 'styled-components'

interface Props {
  quickExample: QuickExample
  className?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  style?: any
}

const Root = styled.div`
  &:hover {
    transition: opacity .1s ease !important;
    opacity: 0.75 !important;
  }
`

export default class Example extends React.Component<Props, {}> {

  render() {
    const {imageSrc, imageWidth, imageHeight, link, layout, title} = this.props.quickExample
    const {style} = this.props
    let exampleStyle = {
      width: 226,
    }
    if (typeof style === 'object') {
      exampleStyle = {
        ...exampleStyle,
        ...style,
      }
    }
    return (
      <Root
        className={cx($p.flex, $p.flexColumn, $p.flex1, $p.noUnderline, $g.overlay, $p.mh10, $p.dim)}
        onMouseEnter={() => this.props.onMouseEnter()}
        onMouseLeave={() => this.props.onMouseLeave()}
        style={exampleStyle}
      >
        <a
          className={cx($p.noUnderline)}
          href={link}
          target='_blank'
          rel='noreferrer noopener'
        >
          {/* top */}
          <div className={cx($p.flex, $p.flex1, $p.justifyCenter, $p.itemsCenter, $p.bgBlack04, $p.pa16)}>
            <Icon
              src={imageSrc}
              width={imageWidth}
              height={imageHeight}
              color={$v.gray30}
            />
          </div>
          {/* bottom */}
          <div className={cx($p.flex, $p.flex1, $p.mh16, $p.mt16, $p.mb25)}>
            <div className={cx($p.flex)}>
              <CircleIcon
                width={20}
                height={20}
                type={layout}
                className={cx($p.mt10)}
              />
              <div className={cx($p.flex, $p.flexColumn, $p.ml10)}>
                <div className={cx($p.black50, $p.f20)}>{title}</div>
                <div className={cx($p.black30, $p.f12, $p.fw6, $p.ttu)}>{layout}</div>
              </div>
            </div>
          </div>
        </a>
      </Root>
    )
  }
}
