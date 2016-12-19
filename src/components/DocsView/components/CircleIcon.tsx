import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import styled from 'styled-components'

interface Props {
  background: string
  source: string
}
const Circle = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
`
export default class CircleIcon extends React.Component<Props, {}> {

  render() {
    return (
      <div>
        <div className={cx($p.flex)}>
          <Circle
            style={{background: this.props.background}}
          >
            <img
              src={this.props.source}
              width={25}
              height={25}
            />
          </Circle>
        </div>
      </div>
    )
  }
}
