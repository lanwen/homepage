import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g, Icon } from 'graphcool-styles'
import styled from 'styled-components'
import Example from './Example'
import { maxWidth, breakpoints } from '../../../utils/constants'
import Pagination from '../Pagination'
import { examples } from './data'
import * as CodeMirror from 'react-codemirror'
import HorScrollbox from '../../HorScrollbox'
require('codemirror/mode/javascript/javascript')

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

const ExamplesContainer = styled(HorScrollbox)`
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

const Switch = styled.div`
  transition: opacity ${$v.duration} linear;
  
  &:hover {
    opacity: .8;
  }
`

interface State {
  selectedExample: string
  selectedLanguage: string
  showTrigger: boolean
}

export default class Examples extends React.Component<{}, State> {

  state = {
    selectedExample: examples[0].name,
    selectedLanguage: examples[0].snippets[0].language,
    showTrigger: true,
  }

  render() {
    const selectedExample = examples.find(e => e.name === this.state.selectedExample)!
    const selectedSnippet = selectedExample.snippets.find(s => s.language === this.state.selectedLanguage)!

    return (
      <Root className={cx($p.relative)}>
        <Container className={cx($p.flex, $p.relative)}>
          <Selection className={cx()}>
            {window.innerWidth <= breakpoints.p900 &&
            <div className={cx($p.flex, $p.justifyCenter, $p.pb25)}>
              <Pagination bullets={3}/>
            </div>
            }
            <ExamplesContainer className={cx($p.flex)}>
              {examples.map(e => (
                <Example
                  key={e.name}
                  case={e.name}
                  description={e.description}
                  active={e.name === selectedExample.name}
                  onClick={() => this.setState({selectedExample: e.name, selectedLanguage: e.snippets[0].language} as State)}
                />
              ))}
            </ExamplesContainer>
          </Selection>
          <Overlay className={cx($g.overlay, $p.flex, $p.w100)}>
            { this.state.showTrigger &&
            <div className={cx($p.flex, $p.flexColumn, $p.flexFixed)}>
              <Block>
                <div className={cx($g.uppercaseLabel, $p.black20)}>Trigger</div>
                <div className={cx($p.flex, $p.br2, $p.overflowHidden, $p.lhSolid, $p.mv38)}>
                  <div className={cx($p.bgBlack07, $p.black40, $p.ph16, $p.pv10)}>{selectedExample.trigger.model}</div>
                  <div className={cx($p.bgGreen, $p.white, $p.ph16, $p.pv10)}>{selectedExample.trigger.mutation}</div>
                </div>
              </Block>
              <Block className={cx($p.bgBlack04, $p.h100)}>
                <div className={cx($g.uppercaseLabel, $p.black20)}>Payload</div>
                <Payload>
                  <code>
                    {selectedExample.payloadQuery}
                  </code>
                </Payload>
              </Block>
            </div>
            }
            <div className={cx($p.bgDarkerBlue, $p.w100, $p.overflowAuto)}>
              <Block
                className={cx($p.relative, $p.flex, $p.flexColumn)}
                style={{
                  maxHeight: 500
                }}
              >
                <div className={cx($p.flex, $p.justifyBetween, $p.pb25)}>
                  { window.innerWidth < breakpoints.p500 && !this.state.showTrigger &&
                  <Switch
                    className={cx($g.uppercaseLabel, $p.white, $p.flex, $p.pointer)}
                    onClick={() => this.setState({ showTrigger: true } as State)}
                  >
                    <Icon
                      src={require('graphcool-styles/icons/stroke/arrowLeft.svg')}
                      width={9}
                      height={15}
                      color={$v.white}
                      stroke
                      strokeWidth={10}
                      className={cx($p.mr16)}
                    />
                    Trigger
                  </Switch>
                  }
                  <div className={cx($g.uppercaseLabel, $p.white30)}>Code</div>
                  { window.innerWidth >= breakpoints.p500 &&
                  <TabBar>
                    {selectedExample.snippets.map(({language}) => (
                      <Tab
                        key={language}
                        active={language === selectedSnippet.language}
                      >
                        {language.toUpperCase()}
                      </Tab>
                    ))}
                  </TabBar>
                  }
                  { window.innerWidth < breakpoints.p500 && this.state.showTrigger &&
                  <Switch
                    className={cx($g.uppercaseLabel, $p.white, $p.flex, $p.pointer)}
                    onClick={() => this.setState({ showTrigger: false } as State)}
                  >
                    <Icon
                      src={require('graphcool-styles/icons/stroke/arrowRight.svg')}
                      width={9}
                      height={15}
                      color={$v.white}
                      stroke
                      strokeWidth={10}
                    />
                  </Switch>
                  }
                </div>
                <div className={cx($p.h100, $p.overflowAuto, $p.w100)}>
                  <CodeMirror
                    value={selectedSnippet.code}
                    options={{
                    lineNumbers: true,
                    mode: 'javascript'
                  }}
                  />
                </div>
              </Block>
            </div>
          </Overlay>
        </Container>
      </Root>
    )
  }
}
