import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'

interface Props {
  sourceFilePath: string
}

export default class EditGithub extends React.Component<Props, {}> {

  render() {
    return (
      <div className={cx($p.pv60, $p.flex, $p.justifyCenter)}>
        <a
          href={`https://github.com/graphcool/console/blob/dev/${this.props.sourceFilePath}`}
          target='_blank'
        >
          Edit this page on Github
        </a>
      </div>
    )
  }
}
