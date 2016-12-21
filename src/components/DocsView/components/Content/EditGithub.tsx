import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, Icon } from 'graphcool-styles'

interface Props {
  sourceFilePath: string
}

export default class EditGithub extends React.Component<Props, {}> {

  render() {
    return (
      <div className={cx($p.pv60, $p.flex, $p.justifyCenter)}>
        <img
          src={require('../../../../assets/graphics/GitHub.png')}
          height={25}
          width={25}
          className={cx($p.ph16)}
        />
        <a
          href={`https://github.com/graphcool/console/blob/dev/${this.props.sourceFilePath}`}
          target='_blank'
          className={cx($p.noUnderline, $p.black30, $p.fw4, $p.f16)}
        >
          Edit this page on Github
        </a>
      </div>
    )
  }
}
