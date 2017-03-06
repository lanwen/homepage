import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g, Icon } from 'graphcool-styles'
import styled from 'styled-components'
import Example from './Example'
import { maxWidth, breakpoints, movingDuration, isTouch } from '../../../utils/constants'
import Pagination from '../../HomeView/Pagination'
import { examples } from './data'
import * as CodeMirror from 'react-codemirror'
import HorScrollbox from '../../HorScrollbox'

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
  // HACK! Please calculate individually based on payload section height
  
  height: 500px;
  transition: height ${movingDuration} ease;

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

const CodeBlock = styled(Block)`
  padding-right: 0 !important;
`

const Pre = styled.pre`
  margin-top: ${$v.size38};
  color: ${$v.white};
  display: flex;
`

const Payload = styled(Pre)`
  color: ${$v.gray40};
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

const TabHover = `
  &:hover {
    color: ${$v.white60};
  }
`

const TabTouch = `
  &:active {
    color: ${$v.white60};
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
  
  ${!isTouch && TabHover}
  ${isTouch && TabTouch}
  
  ${props => props.active && ActiveTab};
`

const SwitchHover = `
  &:hover {
    opacity: .8;
  }
`

const Switch = styled.div`
  margin-top: -${$v.size16};
  transition: opacity ${$v.duration} linear;
  
  ${!isTouch && SwitchHover}
`

const CodeContainer = styled.div`
  top: 49px;
  padding-top: ${$v.size25};
  
  // &:after {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   height: ${$v.size25}
  //   background: linear-gradient(to bottom, ${$v.darkerBlue} 0%, ${$v.darkerBlue0} 70%);
  // }
`

interface Props {
  inViewPort: boolean
}

interface State {
  selectedExampleIndex: number
  selectedLanguage: string
  showTrigger: boolean
  hover: boolean
}

export default class Examples extends React.Component<Props, State> {

  state = {
    selectedExampleIndex: 0,
    selectedLanguage: examples[0].snippets[0].language,
    showTrigger: true,
    hover: false,
  }

  private rotateInterval: number | null

  componentDidMount() {
    this.rotateInterval = window.setInterval(this.rotate, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.rotateInterval!)
  }

  render() {
    const selectedExample = examples[this.state.selectedExampleIndex]
    const selectedSnippet = selectedExample.snippets.find(s => s.language === this.state.selectedLanguage)!

    return (
      <Root
        className={cx($p.relative)}
        onMouseOver={() => this.setState({ hover: true } as State)}
        onMouseOut={() => this.setState({ hover: false } as State)}
      >
        <Container className={cx($p.flex, $p.relative)}>
          <Selection className={cx()}>
            {window.innerWidth <= breakpoints.p900 &&
            <div className={cx($p.flex, $p.justifyCenter, $p.pb25)}>
              <Pagination
                bullets={3}
                active={0}
                onSelect={() => null}
              />
            </div>
            }
            <ExamplesContainer className={cx($p.flex)}>
              {examples.map((e, i) => (
                <Example
                  key={e.name}
                  case={e.name}
                  description={e.description}
                  active={e.name === selectedExample.name}
                  onClick={() => this.forceSetIndex(i)}
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
              <Block className={cx($p.bgWhite, $p.h100)}>
                <div className={cx($g.uppercaseLabel, $p.black20)}>Payload</div>
                <Payload>
                  <code>
                    {selectedExample.payloadQuery}
                  </code>
                </Payload>
              </Block>
            </div>
            }
            <div className={cx($p.bgWhite, $p.w100, $p.overflowAuto)}>
              <CodeBlock
                className={cx($p.relative, $p.flex, $p.flexColumn, $p.bbox, $p.h100)}
              >
                <div className={cx($p.flex, $p.justifyBetween, $p.pb25)}>
                  { window.innerWidth < breakpoints.p500 && !this.state.showTrigger &&
                  <Switch
                    className={cx($g.uppercaseLabel, $p.white, $p.flex, $p.pv16, $p.pr16, $p.pointer)}
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
                  <div className={cx($g.uppercaseLabel, $p.white30, $p.mr16)}>Code</div>
                  { window.innerWidth >= breakpoints.p500 &&
                  <TabBar className={cx($p.mr16)}>
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
                    className={cx($g.uppercaseLabel, $p.white, $p.flex, $p.pa16, $p.pointer)}
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
                <CodeContainer className={cx($p.overflowAuto, $p.absolute, $p.left0, $p.right0, $p.bottom0)}>
                  <CodeMirror
                    value={selectedSnippet.code}
                    options={{
                      lineNumbers: true,
                      mode: 'javascript',
                    }}
                  />
                </CodeContainer>
              </CodeBlock>
            </div>
          </Overlay>
        </Container>
      </Root>
    )
  }

  private rotate = () => {
    if (this.state.hover || !this.props.inViewPort) {
      return
    }

    const selectedExampleIndex = (this.state.selectedExampleIndex + 1) % examples.length
    const selectedLanguage = examples[selectedExampleIndex].snippets[0].language
    this.setState({selectedExampleIndex, selectedLanguage} as State)
  }

  private forceSetIndex = (selectedExampleIndex) => {
    this.setState({selectedExampleIndex} as State)
    clearInterval(this.rotateInterval!)
    this.rotateInterval = window.setInterval(this.rotate, 5000)
  }
}
