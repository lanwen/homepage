import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import isValidElement = React.isValidElement

const Container = styled.div`
  ._nested {
    display: none;
    max-width: 300px;
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1), 0 -8px 18px rgba(0, 0, 0, 0.1);
    top: ${$v.size38};
    left: -250px;
    border-radius: 3px;
  }
  
  &:hover ._nested {
    display: flex;
    flex: 1;
    z-index: 10;
    
  &:after {
    content: " ";
    position: absolute;
    bottom: 100%;
    left: 90%;
    border: solid ${$v.size06};
    border-color: transparent transparent white transparent;
  }
  }
`

export default class Tooltip extends React.Component<{}, {}> {
  render() {
    return (
      <Container className={cx($p.relative, $p.overflowVisible)}>
        <img
          src={require('../../../../assets/graphics/info.svg')}
          className={cx($p.bbox, $p.db, $p.ph10, $p.pointer)}
        />
        <div className={cx('_nested', $p.bgWhite, $p.absolute)}>
          <div className={cx($p.f16, $p.pv16, $p.pl25, $p.pr16, $p.black40)}>
            Some text that will probably be inserted with props which I still don't understand!
          </div>
        </div>
      </Container>
    )
  }
}
