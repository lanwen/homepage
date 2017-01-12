import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import isValidElement = React.isValidElement

const Container = styled.div`
  .nested {
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1), 0 -8px 18px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }
  
  .nested-parent {
    top: 20px;
    display: none;
    width: 300px;
    left: -208px;
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

interface Props {
  text: string
}

export default class Tooltip extends React.Component<Props, {}> {
  render() {
    const {text} = this.props
    return (
      <Container className={cx($p.relative, $p.overflowVisible)}>
        <img
          src={require('../../../../assets/graphics/homepage/info.svg')}
          className={cx($p.bbox, $p.db, $p.pl60, $p.pointer)}
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
