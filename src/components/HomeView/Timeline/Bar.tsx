import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'

interface Props {
  graphcool?: boolean,
  active?: boolean,
}

export default class Bar extends React.Component<Props, {}> {

  render() {

    const ActiveRoot = `
      > div {
        background: ${$v.gray20}
      }
    `

    const GraphcoolActiveRoot = `
      > div {
        background: ${$v.green}
      }
    `

    const Root = styled.div`
      height: ${$v.size06};
      width: 100%;
      padding: ${$v.size25} 0;
      display: flex;
      
      ${props => props.active && ActiveRoot}
      ${props => props.graphcool && props.active && GraphcoolActiveRoot}
    `

    const Segment = styled.div`
      height: 100%;
      margin-right: ${$v.size04};
      background: ${this.props.graphcool ? $v.lightGreen30 : $v.gray10};
      border-radius: 1px;
      
      &:last-child {
        margin-right: 0;
      }
    `

    // values need to add up to at least 100% (can be more without breaking the layout)

    return (
      <Root active={this.props.active} graphcool={this.props.graphcool}>
        <Segment className={cx($p.w10)}/>
        <Segment className={cx($p.w40)}/>
        <Segment className={cx($p.w20)}/>
        <Segment className={cx($p.w30)}/>
      </Root>
    )
  }
}
