import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import SectionHeader from './SectionHeader'

const Root = styled.div`
  
`

const ActiveTab = `
  padding: ${parseFloat($v.size16) + 2}px;
  background: ${$v.darkBlue};
  border-radius: 2px;
  color: ${$v.white};
  cursor: default;
  
  &:hover {
    background: ${$v.darkBlue};
    color: ${$v.white};
  }
`

const Tab = styled.div`
  color: ${$v.gray30};
  letter-spacing: 1px;
  font-size: ${$v.size16};
  text-transform: uppercase;
  font-weight: 600;
  padding: ${$v.size16};
  line-height: 1;
  background: ${$v.gray07};
  cursor: pointer;
  
  &:first-child {
    border-top-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }
  
  &:last-child {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }
  
  transition: background ${$v.duration} linear, color ${$v.duration} linear;
  
  &:hover {
    background: ${$v.gray10};
    color: ${$v.gray50};
  }
  
  ${props => props.active && ActiveTab}
  
`

export default class QueryEditor extends React.Component<{}, {}> {

  render() {
    return (
      <section>
        <SectionHeader
          headline='Whatever headline we have here'
          copy='I have hinted that I would often jerk poor Queequeg from between the whale and the ship where he would.'
        />
        <Root>
          <div className={cx($p.flex, $p.relative, $p.itemsCenter, $p.justifyCenter)}>
            <Tab>Instagram</Tab>
            <Tab active>Twitter</Tab>
            <Tab>To do list</Tab>
            <Tab>Pokedex</Tab>
          </div>
        </Root>
      </section>
    )
  }
}
