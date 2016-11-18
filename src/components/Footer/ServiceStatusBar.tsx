import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'

const FailedBlock = `
  background: ${$v.red};
`

const Block = styled.div`
  width: 2px;
  height: 17px;
  border-radius: 2px;
  background: ${$v.green};
  margin-right: 2px;
  
  &:last-child {
    margin-right: 0;
  }
  
  ${props => props.failed && FailedBlock}
`

export default class ServiceStatusBar extends React.Component<{}, {}> {

  render() {
    return (
      <div className={cx($p.flex, $p.itemsCenter, $p.mb10)}>
        <div className={cx($p.flex, $p.mr10)}>
          <Block />
          <Block />
          <Block />
          <Block />
          <Block failed/>
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
        </div>
        <div className={cx($p.nowrap)}>Relay Endpoint</div>
      </div>
    )
  }
}
