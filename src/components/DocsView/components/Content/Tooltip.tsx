import * as React from 'react'
import * as cx from 'classnames'
import {$p, $v} from 'graphcool-styles'
import styled from 'styled-components'

interface Props {
  text: string
  className?: string
  right?: number
}

export default class Tooltip extends React.Component<Props, {}> {
  render() {
    const {text, className} = this.props

    const right = typeof this.props.right === 'number' && !isNaN(this.props.right) ? this.props.right : 22

    const Container = styled.div`
      .nested {
        box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1), 0 -8px 18px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
      }
      
      .nested-parent {
        top: 22px;
        right: ${right}px;
        display: none;
        width: 300px;
      }
      
      &:hover .nested-parent {
        display: flex;
        flex: 1;
        z-index: 10;
        
        &:after {
          content: " ";
          position: absolute;
          top: 5px;
          left: 92%;
          border: solid ${$v.size06};
          border-color: transparent transparent white transparent;
        }
      }
    `

    return (
      <Container className={cx($p.relative, $p.overflowVisible, className)}>
        <img
          src={require('../../../../assets/graphics/homepage/info.svg')}
          className={cx($p.bbox, $p.db, $p.pointer)}
        />
        <div className={cx('nested-parent', $p.absolute, $p.pt16)}>
          <div className={cx('nested', $p.bgWhite)}>
            <div className={cx($p.f16, $p.pv16, $p.pl25, $p.pr16, $p.black40)}>
              {text}
            </div>
          </div>
        </div>
      </Container>
    )
  }
}
