import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g } from 'graphcool-styles'
import styled from 'styled-components'
import SectionHeader from '../SectionHeader'
import SchemaSection from './SchemaSection'
import { breakpoints } from '../../../utils/constants'

const Root = styled.div`
  
`

const Editor = styled.div`

`

const Schema = styled.div`

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
  white-space: nowrap;
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

const CodeSection = styled.div`
  padding: ${$v.size16} 0 ${$v.size16} ${$v.size16};
  overflow: hidden;

  @media (min-width: ${breakpoints.p1360}px) {
    &:first-child {
      width: 30%;
    }
    
    &:last-child {
      width: 70%;
    }
  }
  
  @media (max-width: ${breakpoints.p1000 - 1}px) {
    &:first-child {
      width: 30%;
    }
    
    &:last-child {
      width: 70%;
    }
  }
`

const Separator = styled.div`
  &:before {
    content: "";
    position: absolute;
    left: ${$v.size04};
    top: ${$v.size16};
    height: 0;
    width: 0;
    border-style: solid;
    border-width: 8px 0 8px 10px;
    border-color: transparent transparent transparent ${$v.darkBlue};
  }
`

const RowNumbers = styled.div`
  padding-top: 2px;
  line-height: 24px;
  white-space: pre;
  color: ${$v.white20};
  font-size: ${$v.size12};
  text-align: right;
  padding-right: ${$v.size06};
  flex: 0 0 auto;
`

const Pre = styled.pre`
  margin-top: ${$v.size38};
  color: ${$v.white};
  display: flex;
`

const CodeContainer = styled.div`    
  position: relative;
  overflow: hidden;
  
  &:before, &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: ${$v.size16};
  }
  
  &:before {
    left: 0;
    background: linear-gradient(to right, ${$v.darkerBlue}, ${$v.darkerBlue0});
  }
  
  &:after {
    right: 0;
    background: linear-gradient(to left, ${$v.darkerBlue}, ${$v.darkerBlue0});
  }
  
  code {
    display: block;
    padding: 0 ${$v.size16};
    overflow: auto;
  }
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
          <Editor className={cx($p.bgDarkerBlue, $p.flex, $p.mt16, $p.overflowHidden)}>
            { window.innerWidth >= breakpoints.p1000 &&
            <Schema className={cx($p.bgDarkBlue, $p.pa16)}>
              <div className={cx($p.flex, $p.itemsCenter, $p.justifyBetween, $p.hS16)}>
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
                  <SchemaSection title='title' type='String' required />
                  <SchemaSection title='imgUrl' type='String' />
                  <SchemaSection title='comments' type='Comment' relation />
                </div>
              </div>
            </Schema>
            }
            <div className={cx($p.flex, $p.w100, $p.bbox)}>
              <CodeSection>
                <div className={cx($g.uppercaseLabel, $p.white30)}>Query</div>
                <Pre>
                  <RowNumbers>
                    {`1
2
3
4
5
6
7
8
9
10
11
12
13
14
`}
                  </RowNumbers>
                  <CodeContainer>
                    <code>
                    {`{
  allPosts {
    title,
    imageUrl,
    comments {
      text
    }
  }
}`}
                    </code>
                  </CodeContainer>
                </Pre>
              </CodeSection>
              <Separator className={cx($p.relative, $p.flexFixed, $p.wS04, $p.bgDarkBlue)}></Separator>
              <CodeSection>
                <div className={cx($g.uppercaseLabel, $p.white30)}>Response</div>
                <Pre>
                  <RowNumbers>
                    {`1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18`}
                  </RowNumbers>
                  <CodeContainer>
                    <code>
                    {`{
  "data": {
    "allPosts": [
      {
        "title": "My only Post",
        "imageUrl": "http://whatev.org/OEIR5.jpg",
        "comments": [
          {
            "text": "This is the first comment"
          },
          {
            "text": "This is the second comment"
          }
        ]
      }
    }
  }
}`}
                    </code>
                  </CodeContainer>
                </Pre>
              </CodeSection>
            </div>
          </Editor>
        </Root>
      </section>
    )
  }
}
