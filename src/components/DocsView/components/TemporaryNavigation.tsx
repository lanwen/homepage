import * as React from 'react'
import * as cx from 'classnames'
import { Link } from 'react-router'
import { $p, $g, Icon, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints, maxWidth } from '../../../utils/constants'

interface Link {
  path: string
  title: string
  id: string
  alias: string
  description: string
}

interface Props {
  links: Array<Link>
}

export default class TemporaryNavigation extends React.Component<Props, {}> {

  render() {
    return (
      <div>
        <ul>
          {this.props.links.map((link) => (
            <li className={$p.mt25} key={link.id}>
              <Link to={link.path + '/' + link.alias}>
                <h2>{link.title}</h2>
              </Link>
              <p>{link.description}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
