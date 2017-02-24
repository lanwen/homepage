import * as React from 'react'
import { $p, $v } from 'graphcool-styles'
import * as cx from 'classnames'
import { Layout } from '../../../../types/types'
import CircleIcon from '../../components/CircleIcon'
import { Link } from 'react-router'
import { breakpoints } from '../../../../utils/constants'
import styled from 'styled-components'

interface Props {
  layout: Layout
  title: string
  text: string
  link: string
}

const Root = styled.div`
  padding: 0 ${$v.size60} 0 ${$v.size16};
`

const Heading = ({layout, title, text, link}: Props) => {
  const displayIcon = window.innerWidth > breakpoints.p500
  return (
    <Root>
      {link.includes('http') ? (
        <a
          href={link}
          className={cx(
            $p.flex,
            $p.itemsCenter,
            $p.noUnderline,
            displayIcon && $p.ml4,
          )}>
          {displayIcon && <CircleIcon
            width={44}
            height={44}
            type={layout} />}
          <h1
            className={cx(
              displayIcon && $p.ml16,
            )}>{title}</h1>
        </a>
      ) : (
        <Link
          to={link}
          className={cx(
            $p.flex,
            $p.itemsCenter,
            $p.noUnderline,
            displayIcon && $p.ml4,
          )}>
          {displayIcon && <CircleIcon
            width={44}
            height={44}
            type={layout} />}
          <h1
            className={cx(
              displayIcon && $p.ml16,
              !displayIcon && $p.mh10,
            )}>{title}</h1>
        </Link>
      )}
      <div
        className={cx(
          displayIcon && $p.ml60,
          !displayIcon && $p.mh10,
        )}>
        <p className={cx($p.mt25)}>{text}</p>
      </div>
    </Root>
  )
}

export default Heading
