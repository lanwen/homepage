import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g } from 'graphcool-styles'
import styled from 'styled-components'
import Example from './Example'
import { maxWidth, breakpoints } from '../../../utils/constants'
import Pagination from '../Pagination'

const Root = styled.div`
  
  padding: 0 ${$v.size96};

  &:before{
    content: "";
    position: absolute;
    top: ${$v.size16};
    left: 0;
    bottom: ${$v.size16};
    width: 100%;
    background: ${$v.lightGreen10};
  }
  
  @media (max-width: ${breakpoints.p1360}px) {
    padding: 0 0 0 ${$v.size60};
  }
  
  @media (max-width: ${breakpoints.p1200}px) {
    padding: 0 0 0 ${$v.size38};
  }
  
  @media (max-width: ${breakpoints.p1000}px) {
    padding: 0 0 0 ${$v.size25};
  }
  
  @media (max-width: ${breakpoints.p900}px) {
    padding: 0;
    
    &:before {
      top: 0;
    }
  }
`

const Container = styled.div`
  max-width: ${maxWidth}px;
  margin: 0 auto;
  
  @media (max-width: ${breakpoints.p900}px) {
    flex-direction: column;
  }
`

const Overlay = styled.div`
  @media (max-width: ${breakpoints.p1360}px) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  
  @media (max-width: ${breakpoints.p900}px) {
    border-radius: 0;
    box-shadow: none;
  }
`

const Selection = styled.div`
  width: 350px;
  flex: 0 0 auto;
  margin: ${$v.size16} 0;
  margin-right: ${$v.size96};
  padding: ${$v.size60} 0;
  
  @media (max-width: ${breakpoints.p1360}px) {
   margin-right: ${$v.size60};
  }
  
  @media (max-width: ${breakpoints.p1200}px) {
    width: 250px;
    margin-right: ${$v.size38};
    padding: ${$v.size38} 0;
  }
  
  @media (max-width: ${breakpoints.p1000}px) {
    margin-right: ${$v.size25};
  }
  
  @media (max-width: ${breakpoints.p900}px) {
    width: auto;
    margin: 0;
    padding: ${$v.size25} 0 0;
  }
`

const ExamplesContainer = styled.div`
  flex-direction: column;
  
  @media (max-width: ${breakpoints.p900}px) {
    flex-direction: row;
    overflow: auto;
    padding-bottom: ${$v.size25};
  }
  
`

const Block = styled.div`
  padding: ${$v.size25};
  
  @media (max-width: ${breakpoints.p650}px) {
    padding: ${$v.size16};
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

export default class Examples extends React.Component<{}, {}> {

  render() {
    return (
      <Root className={cx($p.relative)}>
        <Container className={cx($p.flex, $p.relative)}>
          <Selection className={cx()}>
            {window.innerWidth <= breakpoints.p900 &&
            <div className={cx($p.flex, $p.justifyCenter, $p.pb25)}>
              <Pagination bullets={3} />
            </div>
            }
            <ExamplesContainer className={cx($p.flex)}>
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
            </ExamplesContainer>
          </Selection>
          <Overlay className={cx($g.overlay, $p.flex, $p.w100)}>
            <div className={cx($p.flex, $p.flexColumn, $p.flexFixed)}>
              <Block>
                <div className={cx($g.uppercaseLabel, $p.black20)}>Trigger</div>
                <div className={cx($p.flex, $p.br2, $p.overflowHidden, $p.lhSolid, $p.mv38)}>
                  <div className={cx($p.bgBlack07, $p.black40, $p.ph16, $p.pv10)}>Rating</div>
                  <div className={cx($p.bgGreen, $p.white, $p.ph16, $p.pv10)}>is created</div>
                </div>
              </Block>
              <Block className={cx($p.bgBlack04, $p.h100)}>
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
              </Block>
            </div>
            <div className={cx($p.bgDarkerBlue, $p.w100)}>
              <Block>
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
              </Block>
            </div>
          </Overlay>
        </Container>
      </Root>
    )
  }
}