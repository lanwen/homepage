import * as React from 'react'
import {$p} from 'graphcool-styles'
import * as cx from 'classnames'
import {Layout} from '../../../../types/types'
import CircleIcon from '../../components/CircleIcon'

interface Props {
  layout: Layout
  title: string
  text: string
}

const Heading = ({layout, title, text}: Props) => (
  <div className={cx($p.flex)}>
    <CircleIcon width={44} height={44} type={layout} />
    <div className={$p.ml16}>
      <h1>{title}</h1>
      <p className={cx($p.mt25)}>{text}</p>
    </div>
  </div>
)

export default Heading
