import * as React from 'react'
import {$p} from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import Tab from './Tab'
import {breakpoints} from '../../utils/constants'

interface Props {
  selectedTabIndex: number
  onClick?: (index: number) => void
  className?: string
}

const Container = styled.div`
    width: 525px;

    @media (max-width: ${breakpoints.p580}px) {
      width: 360px;    
    }
    
    @media (max-width: ${breakpoints.p400}px) {
      width: 300px;    
    }
`

export default class TabBar extends React.Component<Props,{}> {

  render() {
    return (
      <Container className={cx($p.flex, $p.justifyBetween, $p.mb4, this.props.className)}>
        <Tab
          className={cx($p.flex)}
          title='Free'
          onClick={() => this.props.onClick(0)}
          selected={this.props.selectedTabIndex === 0}/>
        <Tab
          className={cx($p.flex)}
          title='Growth'
          onClick={() => this.props.onClick(1)}
          selected={this.props.selectedTabIndex === 1}/>
        <Tab
          className={cx($p.flex)}
          title='Pro'
          onClick={() => this.props.onClick(2)}
          selected={this.props.selectedTabIndex === 2}/>
        <Tab
          className={cx($p.flex)}
          title='Enterprise'
          onClick={() => this.props.onClick(3)}
          selected={this.props.selectedTabIndex === 3}/>
      </Container>
    )
  }
}
