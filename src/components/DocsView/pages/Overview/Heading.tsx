import * as React from 'react'
import { $p } from 'graphcool-styles'
import * as cx from 'classnames'
import { Layout } from '../../../../types/types'
import CircleIcon from '../../components/CircleIcon'
import { Link } from 'react-router'
import * as MediaQuery from 'react-responsive'

interface Props {
  layout: Layout
  title: string
  text: string
  link: string
}

const Heading = ({layout, title, text, link}: Props) => {
  return (
    <div>
      <style jsx>{`
        .heading {
          padding: 0 60px 0 16px;
        }
        div :global(.link) {
          @p: .flex, .itemsCenter, .noUnderline;
          @media (min-width: 500px) {
            @p: .ml4;
          }
        }
        h1 {
          @media (min-width: 500px) {
            @p: .ml16
          }
        }
        .text {
          @media (max-width: 499px) {
            @p: .mh10;
          }
          @media (min-width: 500px) {
            @p: .ml60;
          }
        }
      `}</style>
      {link.includes('http') ? (
        <a
          href={link}
          className='link'
        >
          <MediaQuery minWidth={500}>
            <CircleIcon
              width={44}
              height={44}
              type={layout}
            />
          </MediaQuery>
          <h1>{title}</h1>
        </a>
      ) : (
        <Link
          to={link}
          className='link'>
          <MediaQuery minWidth={500}>
            <CircleIcon
              width={44}
              height={44}
              type={layout}
            />
          </MediaQuery>
          <h1>{title}</h1>
        </Link>
      )}
      <div className='text'>
        <p className={cx($p.mt25)}>{text}</p>
      </div>
    </div>
  )
}

export default Heading
