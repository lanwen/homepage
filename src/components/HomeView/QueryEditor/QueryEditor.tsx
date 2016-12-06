import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g, Icon } from 'graphcool-styles'
import styled, { keyframes } from 'styled-components'
import SectionHeader from '../SectionHeader'
import Field from './Field'
import TryOut from './TryOut'
import { breakpoints, maxWidth, movingDuration } from '../../../utils/constants'
import QueryBox from './QueryBox'
import { projects } from './data'

const Root = styled.section`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: ${$v.size16};
    bottom: 0;
    width: 100%;
    background: ${$v.gray02};
  }
`

const Container = styled.div`
  position: relative;
  max-width: ${maxWidth}px;
  margin: 0 auto;
`

const Editor = styled.div`
  
  height: 700px;
  transition: height ${movingDuration} ease;

  @media (min-width: ${breakpoints.p1440}px) {
    border-radius: 2px;
    overflow: hidden;
  }
`

const Schema = styled.div`
  padding: ${$v.size25};
  width: 280px;
  flex: 0 0 auto;
  
  @media (max-width: ${breakpoints.p650}px) {
    padding: ${$v.size16};
  }
`

const Models = styled.div`
  margin-left: -12px;
  margin-right: -12px;
  
  @media (max-width: ${breakpoints.p650}px) {
    margin: 0;
  }
`

const TabBar = styled.ul`
  list-style-type: none;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  
  @media (max-width: ${breakpoints.p400}px) {
    padding-left: ${$v.size25};
  } 
`

// if tabbar is wider than viewport
// @media (max-width: ${breakpoints.p500}px) {
//   overflow: auto;
//   justify-content: flex-start;
//   padding-left: ${$v.size38};
// }


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
  
  @media (max-width: ${breakpoints.p500}px) {
    padding: ${$v.size16};
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
  
  @media (max-width: ${breakpoints.p500}px) {
    font-size: ${$v.size14};
    padding: ${$v.size14};
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

const EndpointContainer = styled.div`
  margin-top: auto;
`

const Endpoint = styled.div`
  height: ${parseFloat($v.size38) + 20}px;
  margin-left: -12px;
  margin-right: -12px;
  width: calc(100% + 24px);
  
  @media (max-width: ${breakpoints.p650}px) {
    margin: 0;
    width: 100%;
  }
`

const Copy = styled.div`
  background: #B9BFC4;
  cursor: pointer;
`

const movingCopyIndicator = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, 0);
  }
  
  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate(-50%, -50px);
  }
`

const CopyIndicator = styled.div`
  top: -20px;
  left: 50%;
  transform: translate(-50%,0);
  animation: ${movingCopyIndicator} .7s linear
`

interface State {
  activeProjectName: string
  activeModelName: string
}

export default class QueryEditor extends React.Component<{}, State> {

  state = {
    activeProjectName: projects[0].name,
    activeModelName: projects[0].models[0].name,
  }

  render() {
    const activeProject = projects.find(p => this.state.activeProjectName === p.name)!
    const activeModel = activeProject.models.find(m => this.state.activeModelName === m.name)!

    return (
      <section>
        <SectionHeader
          headline='Your data schema generates a developer-friendly GraphQL API'
          copy='By defining your data model we create your own flexible GraphQL API. Included features: Custom endpoint for Apollo/Relay, powerful filter queries & nested mutations. Learn more about our API.'
        />
        <TabBar>
          {projects.map(p => (
            <ExampleTab
              key={p.name}
              active={activeProject.name === p.name}
              onClick={() => this.setState({ activeModelName: p.models[0].name, activeProjectName: p.name } as State)}
            >
              {p.name}
            </ExampleTab>
          ))}
        </TabBar>
        <Root>
          <Container>
            <Editor className={cx($p.bgDarkerBlue, $p.flex, $p.mt16, $p.overflowHidden)}>
              { window.innerWidth >= breakpoints.p1000 &&
              <Schema className={cx($p.bgDarkBlue, $p.flex, $p.flexColumn)}>
                <div className={cx($p.flex, $p.itemsCenter, $p.justifyBetween, $p.hS16, $p.flexFixed)}>
                  <div className={cx($g.uppercaseLabel, $p.white30)}>Schema</div>
                  <TabBar>
                    <ViewTab active>Visual</ViewTab>
                    <ViewTab>IDL</ViewTab>
                  </TabBar>
                </div>
                <Models className={cx($p.mt60, $p.br2, $p.bSolid, $p.bWhite10, $p.bw2, $p.relative, $p.flexFixed)}>
                  <TabBar className={cx($p.absolute, $p.tlVCenter, $p.ph10)}>
                    {activeProject.models.map(model => (
                      <SchemaTab
                        key={model.name}
                        active={activeModel.name === model.name}
                        onClick={() => this.setState({ activeModelName: model.name } as State)}
                      >
                        {model.name}
                      </SchemaTab>
                    ))}
                  </TabBar>
                  <div className={cx($p.flex, $p.flexColumn)}>
                    {activeModel.fields.map(field => (
                      <Field
                        key={field.name}
                        title={field.name}
                        type={field.type}
                        required={field.required}
                        system={field.system}
                        relation={field.relation}
                      />
                    ))}
                  </div>
                </Models>
                <EndpointContainer className={cx($p.pt38, $p.flexFixed)}>
                  <div className={cx($g.uppercaseLabel, $p.white30, $p.mb16)}>API Endpoint</div>
                  <Endpoint
                    className={cx(
                      $p.br2, $p.bgDarkerBlue, $p.w100, $p.lhSolid, $p.white, $p.relative, $p.ph16, $p.bbox,
                    )}
                  >
                    <div className={cx($p.overflowHidden, $p.relative, $p.pv16, $p.h100, $p.bbox)}>
                      <div className={cx($p.absolute, $p.top50, $p.left0, $p.tlVCenter)}>
                        {activeProject.endpoint}
                      </div>
                    </div>
                    <Copy
                      className={cx($p.absolute, $p.br2, $p.right10, $p.top10, $p.bottom10, $p.flex, $p.itemsCenter)}
                    >
                      <CopyIndicator className={cx($p.o0, $p.absolute, $p.f14, $p.fw6, $p.white)}>
                        Copied
                      </CopyIndicator>
                      <Icon
                        width={38}
                        height={38}
                        color={$v.darkerBlue}
                        src={require('graphcool-styles/icons/fill/copy.svg')}
                      />
                    </Copy>
                  </Endpoint>
                </EndpointContainer>
              </Schema>
              }
              <QueryBox endpoint={activeProject.endpoint} defaultQuery={activeProject.defaultQuery} />
            </Editor>
            {window.innerWidth > breakpoints.p580 && activeProject.code &&
            <TryOut reactLink={activeProject.code.reactLink} angularLink={activeProject.code.angularLink} />
            }
          </Container>
        </Root>
      </section>
    )
  }
}
