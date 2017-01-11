import * as React from 'react'
import {$p, Icon, $v} from 'graphcool-styles'
import * as cx from 'classnames'

interface Props {
  title: string
  iconSrc: string
  text: string
  link: string
  className?: string
}

const FeatureBox = ({title, iconSrc, text, link, className}: Props) => (
  <div>
    <div className={cx($p.flex, $p.bgLightgreen10, $p.pa16, $p.itemsCenter, className)}>
      <Icon
        src={iconSrc}
        width={28}
        height={28}
        color={$v.green50}
      />
      <div className={cx($p.ttu, $p.green, $p.ml16, $p.f16u)}>{title}</div>
    </div>
  </div>
)

export default FeatureBox