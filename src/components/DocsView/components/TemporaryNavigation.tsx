import * as React from 'react'
import { Link } from 'react-router'
import { $p } from 'graphcool-styles'

interface LinkItem {
  path: string
  title: string
  id: string
  alias: string
  description: string
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
            <li className={$p.mt25} key={link.id}>
              <Link to={link.path + '-' + link.alias}>
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
