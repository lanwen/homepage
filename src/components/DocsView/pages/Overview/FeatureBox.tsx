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
// <Icon
//   src={require('../../../../assets/graphics/categories/guide.svg')}
//   width={28}
//   height={28}
//   color={$v.green50}
// />

const FeatureBox = ({title, iconSrc, text, link, className}: Props) => (
  <div className={cx($p.buttonShadow, $p.bgWhite, className)}>
    <div className={cx($p.flex, $p.bgLightgreen10, $p.pa16, $p.itemsCenter)}>
      <img src={require('../../../../assets/graphics/categories/guide.svg')} />
      <div className={cx($p.ttu, $p.green, $p.ml16, $p.f16u)}>{title}</div>
    </div>
    <div className={cx($p.pa16)}>
      {text}
    </div>
  </div>
)

export default FeatureBox
