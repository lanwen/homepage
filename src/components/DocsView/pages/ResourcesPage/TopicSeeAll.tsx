import * as React from 'react'
import { $p, $v, Icon } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'

interface Props {
  src: string
  color: string
  category: string
}

const CircleTutorial = styled.div`
  width: ${$v.size38};
  height: ${$v.size38};
  background-color: rgba(164, 3, 111, 0.2);
`

export default class TutorialsContent2 extends React.Component<Props, {}> {
  render() {
    return (
      <div className={cx($p.flex, $p.itemsCenter)}>
        <CircleTutorial className={cx($p.flex, $p.justifyCenter, $p.itemsCenter, $p.br100)}>
          <Icon
            src={this.props.src}
            width={50}
            height={50}
            fill={true}
            color={this.props.color}
          />
        </CircleTutorial>
        <div className={cx($p.black30, $p.f25, $p.fw4, $p.pa10, $p.mla)}>{this.props.category}</div>
        <div className={cx($p.green, $p.f20)}>See all</div>
      </div>
    )
  }
}
