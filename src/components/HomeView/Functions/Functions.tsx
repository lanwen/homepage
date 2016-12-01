import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g } from 'graphcool-styles'
import styled from 'styled-components'
import SectionHeader from '../SectionHeader'
import Example from './Example'
import Fields from './Fields'
import { breakpoints } from '../../../utils/constants'

const Examples = styled.div`
  &:before{
    content: "";
    position: absolute;
    top: ${$v.size16};
    bottom: ${$v.size16};
    width: 100%;
    background: ${$v.lightGreen10};
  }
`

const ExamplesSelection = styled.div`
  width: 350px;
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

const Payload = styled(Pre)`
  color: ${$v.gray40};
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

const TabBar = styled.ul`
  list-style-type: none;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`

const ActiveTab = `
  padding: ${$v.size06};
  background: #B9BFC4;
  color: ${$v.darkerBlue};
  border-radius: 2px;
  cursor: default;
  
  &:hover {
    color: ${$v.darkerBlue};
  }
`

const Tab = styled.li`
  color: ${$v.white40};
  letter-spacing: 1px;
  font-size: ${$v.size12};
  text-transform: uppercase;
  white-space: nowrap;
  font-weight: 600;
  padding: ${$v.size04} ${$v.size06};
  line-height: 1;
  cursor: pointer;
  transition: background ${$v.duration} linear, color ${$v.duration} linear;
  
  &:hover {
    color: ${$v.white60};
  }
  
  ${props => props.active && ActiveTab};
`

export default class Functions extends React.Component<{}, {}> {

  render() {
    return (
      <section>
        <SectionHeader
          headline='Whatever headline we have here'
          copy='I have hinted that I would often jerk poor Queequeg from between the whale and the ship where he would.'
        />
        <Examples className={cx($p.relative, $p.flex)}>
          <ExamplesSelection className={cx($p.pv60, $p.ph96, $p.w50)}>
            <Example
              case='AirBnB'
              description='Send an Email to the host, everytime he gets a new rating.'
              active
            />
            <Example
              case='Instagram'
              description='Send a push notification to the author, everytime his post gets a new comment.'
            />
            <Example
              case='Webshop'
              description='Verify & process cart items of a customer and submit the order to Stripe.'
            />
          </ExamplesSelection>
          <div className={cx($g.overlay, $p.flex)}>
            <div className={cx($p.flex, $p.flexColumn)}>
              <div className={cx($p.pa25)}>
                <div className={cx($g.uppercaseLabel, $p.black20)}>Trigger</div>
                <div className={cx($p.flex, $p.br2, $p.overflowHidden, $p.lhSolid, $p.mv38)}>
                  <div className={cx($p.bgBlack07, $p.black40, $p.ph16, $p.pv10)}>Rating</div>
                  <div className={cx($p.bgGreen, $p.white, $p.ph16, $p.pv10)}>is created</div>
                </div>
              </div>
              <div className={cx($p.pa25, $p.bgBlack04, $p.h100)}>
                <div className={cx($g.uppercaseLabel, $p.black20)}>Payload</div>
                <Payload>
                  <code>
                    {`{
  createdNode {
    stars,
    description,
    author
  }
}`}
                  </code>
                </Payload>
              </div>
            </div>
            <div className={cx($p.bgDarkerBlue)}>
              <div className={cx($p.pa25)}>
                <div className={cx($p.flex, $p.justifyBetween)}>
                  <div className={cx($g.uppercaseLabel, $p.white30)}>Payload</div>
                  <TabBar>
                    <Tab>JS</Tab>
                    <Tab active>Go</Tab>
                    <Tab>Ruby</Tab>
                    <Tab>PHP</Tab>
                  </TabBar>
                </div>
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
                    {`module.exports = function (cb) {
  cb(null, 'hello webtasks!');
}`}
                    </code>
                  </CodeContainer>
                </Pre>
              </div>
            </div>
          </div>
        </Examples>
        <Fields />
      </section>
    )
  }
}
