import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g } from 'graphcool-styles'

interface Props {
  image: string,
  name: string,
  title: string,
  links: {
    linkedin: string,
    github: string,
    twitter: string,
  },
}

export default class TeamMember extends React.Component<Props, {}> {

  render() {

    return (
      <div className='root'>
        <style jsx={true}>{`

        `}</style>
        <img className='' src={this.props.image} />
      </div>
    )
  }
}
