import * as React from 'react'
import {$p} from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import Tab from './Tab'

interface Props {
  selectedTabIndex: number
  onClick?: (index: number) => void
}

const Container = styled.div`
  
`

export default class TabBar extends React.Component<Props,{}> {

  render() {
    return (
      <Container className={cx($p.flex,$p.justifyCenter, $p.br)}>
        <Tab
          title='Free'
          onClick={() => this.props.onClick(0)}
          selected={this.props.selectedTabIndex === 0}/>
        <Tab
          title='Growth'
          onClick={() => this.props.onClick(1)}
          selected={this.props.selectedTabIndex === 1}/>
        <Tab
          title='Pro'
          onClick={() => this.props.onClick(2)}
          selected={this.props.selectedTabIndex === 2}/>
        <Tab
          title='Enterprise'
          onClick={() => this.props.onClick(3)}
          selected={this.props.selectedTabIndex === 3}/>
      </Container>
    )
  }
}