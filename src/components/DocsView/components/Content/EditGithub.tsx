import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import styled from 'styled-components'

interface Props {
  sourceFilePath: string
}

const Root = styled.div`
`

export default class EditGithub extends React.Component<Props, {}> {

  render() {
    return (
      <Root
        className={cx(
          $p.flex,
          $p.justifyCenter,
          $p.itemsCenter,
        )}
      >
        <a
          href={`https://github.com/graphcool/content/blob/dev/content/${this.props.sourceFilePath}`}
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
      </Root>
    )
  }
}
