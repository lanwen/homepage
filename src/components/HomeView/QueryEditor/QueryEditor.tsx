import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g } from 'graphcool-styles'
import styled from 'styled-components'
import SectionHeader from '../SectionHeader'
import SchemaSection from './SchemaSection'
import SchemaGraph from '../SchemaGraph'

const Root = styled.div`
  
`

const TabBar = styled.ul`
  list-style-type: none;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
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

const Tab = styled.li`
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
`

const ActiveExampleTab = `
  ${ActiveTab}
`

const ExampleTab = styled(Tab)`
  ${props => props.active && ActiveExampleTab};
`

const Editor = styled.div`

`

const ActiveViewTab = `
  ${ActiveTab}
  padding: ${parseFloat($v.size06) + 1}px;
  background: #B9BFC4;
  color: ${$v.darkerBlue};
  
  &:hover {
    background: #B9BFC4;
    color: ${$v.darkerBlue};
  }
`

const ViewTab = styled(Tab)`
  background: ${$v.darkerBlue};
  color: ${$v.white30};
  font-size: ${$v.size12};
  padding: ${$v.size06};

  &:hover {
    background: ${$v.darkerBlue};
    color: ${$v.white50};
  }
  
  ${props => props.active && ActiveViewTab};
`

const ActiveSchemaTab = `
  ${ActiveTab}
  background: ${$v.green};

  &:hover {
    background: ${$v.green};
  }
`

const SchemaTab = styled(Tab)`
  background: ${$v.darkerBlue};
  color: ${$v.white30};
  
  &:hover {
    background: ${$v.darkerBlue};
    color: ${$v.white50};
  }
  
  ${props => props.active && ActiveSchemaTab};
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
          <TabBar>
            <ExampleTab>Instagram</ExampleTab>
            <ExampleTab active>Twitter</ExampleTab>
            <ExampleTab>To do list</ExampleTab>
            <ExampleTab>Pokedex</ExampleTab>
          </TabBar>
          <Editor className={cx($p.bgDarkerBlue, $p.flex, $p.mt16)}>
            <div className={cx($p.bgDarkBlue, $p.pa16)}>
              <div className={cx($p.flex, $p.itemsCenter, $p.justifyBetween)}>
                <div className={cx($g.uppercaseLabel, $p.white30)}>Schema</div>
                <TabBar>
                  <ViewTab active>Visual</ViewTab>
                  <ViewTab>IDL</ViewTab>
                </TabBar>
              </div>
              <div className={cx($p.mt60, $p.br2, $p.bSolid, $p.bWhite10, $p.bw2, $p.relative)}>
                <TabBar className={cx($p.absolute, $p.tlVCenter, $p.ph10)}>
                  <SchemaTab>User</SchemaTab>
                  <SchemaTab active>Post</SchemaTab>
                  <SchemaTab>Comment</SchemaTab>
                </TabBar>
                <div className={cx($p.flex, $p.flexColumn)}>
                  <SchemaSection title='id' type='GraphQLId' required system />
                  <SchemaSection title='title' type='String' required  />
                  <SchemaSection title='imgUrl' type='String' />
                  <SchemaSection title='comments' type='Comment' relation />
                </div>
              </div>
            </div>
          </Editor>
        </Root>
      </section>
    )
  }
}