import * as React from 'react'
import {$p} from 'graphcool-styles'
import * as cx from 'classnames'
import {Layout} from '../../../../types/types'
import CircleIcon from '../../components/CircleIcon'
import {Link} from 'react-router'

interface Props {
  layout: Layout
  title: string
  text: string
  link: string
}

const Heading = ({layout, title, text, link}: Props) => {
  return (
    <div>
      {link.includes('http') ? (
        <a href={link} className={cx($p.flex, $p.itemsCenter, $p.noUnderline)}>
          <CircleIcon width={44} height={44} type={layout} />
          <h1 className={cx($p.ml16)}>{title}</h1>
        </a>
      ) : (
        <Link to={link} className={cx($p.flex, $p.itemsCenter, $p.noUnderline)}>
          <CircleIcon width={44} height={44} type={layout} />
          <h1 className={cx($p.ml16)}>{title}</h1>
        </Link>
      )}
      <div className={$p.ml60}>
        <p className={cx($p.mt25)}>{text}</p>
      </div>
    </div>
  )
}

export default Heading
