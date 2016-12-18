import * as React from 'react'
import * as cx from 'classnames'
import { Link } from 'react-router'
import { $p, $g, Icon, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints, maxWidth } from '../../../utils/constants'

interface LinkItem {
  path: string
  title: string
  id: string
  alias: string
}

interface Props {
  links: LinkItem[]
}

export default class TemporaryNavigation extends React.Component<Props, {}> {

  render() {
    return (
      <div>
        <ul>
          {this.props.links.map((link) => (
            <li key={link.id}>
              <Link to={link.path + '/' + link.alias}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
