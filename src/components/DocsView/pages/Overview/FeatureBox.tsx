import * as React from 'react'
import {$p, Icon, $v} from 'graphcool-styles'
import * as cx from 'classnames'
import {Link} from 'react-router'

interface Props {
  title: string
  iconSrc: string
  text: string
  link: string
  className?: string
}

const FeatureBox = ({title, iconSrc, text, link, className}: Props) => (
  <Link className={cx($p.buttonShadow, $p.bgWhite, $p.noUnderline, className)} to={link}>
    <div className={cx($p.flex, $p.bgLightgreen10, $p.pa16, $p.itemsCenter)}>
      <Icon
        src={iconSrc}
        width={28}
        height={28}
        color={$v.green50}
      />
      <div className={cx($p.ttu, $p.green, $p.ml16, $p.f16u)}>{title}</div>
    </div>
    <div className={cx($p.pa16)}>
      {text}
    </div>
  </Link>
)

export default FeatureBox
