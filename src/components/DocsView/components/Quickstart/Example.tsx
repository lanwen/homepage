import * as React from 'react'
import {$p, $v, Icon} from 'graphcool-styles'
import * as cx from 'classnames'
import {QuickExample} from '../../../../types/types'
import CircleIcon from '../CircleIcon'

interface Props {
  quickExample: QuickExample
  className?: string
}

export default class Example extends React.Component<Props, {}> {

  render() {
    const {imageSrc, imageWidth, imageHeight, link, layout, title} = this.props.quickExample
    return (
      <a
        href={link}
        className={cx($p.flex, $p.flexColumn, $p.flex1, $p.noUnderline, $p.buttonShadow, $p.mh10)}
        style={{width: 226}}
      >
        {/* top */}
        <div className={cx($p.flex, $p.flex1, $p.justifyCenter, $p.itemsCenter, $p.bgBlack04)}>
          <Icon
            src={imageSrc}
            width={imageWidth}
            height={imageHeight}
            color={$v.gray30}
          />
        </div>
        {/* bottom */}
        <div className={cx($p.flex, $p.flex1, $p.ml25, $p.mt10)}>
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
    )
  }
}
