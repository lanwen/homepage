import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'

interface Props {
  sourceFilePath: string
}

export default class EditGithub extends React.Component<Props, {}> {

  render() {
    return (
      <div className={cx($p.pv60, $p.flex, $p.justifyCenter)}>
        <a
          href={`https://github.com/graphcool/content/blob/master/content/${this.props.sourceFilePath}`}
          target='_blank'
          className={cx($p.noUnderline, $p.black20, $p.fw4, $p.f16)}
        >
          <div className={cx($p.flex)}>
            <img
              src={require('../../../../assets/graphics/homepage/GitHubGreyLogo.svg')}
              height={25}
              width={25}
              className={cx($p.ph16)}
            />
            <div>Edit this page on Github</div>
          </div>
        </a>
      </div>
    )
  }
}
