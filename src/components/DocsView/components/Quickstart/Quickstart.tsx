import * as React from 'react'
import { $p, $v, $g, Icon } from 'graphcool-styles'
import * as cx from 'classnames'
import Technology from './Technology'
import StepIndicator from './StepIndicator'
import { TechnologyData, frontendTechnologies, clientTechnologies } from './data/technologies'
import { examples } from './data/examples'
import Example from './Example'
import { QuickExample } from '../../../../types/types'
import LogoBar from '../../../HomeView/LogoBar'
import styled from 'styled-components'
import ExampleContent from './ExampleContent'
import * as MediaQuery from 'react-responsive'

interface State {
  selectedFrontendTechnology?: TechnologyData,
  selectedClientTechnology?: TechnologyData,
  quickExamples?: QuickExample[]
  frontendTechnologyOffset: number
  graphQLClientOffset: number
  selectedExample?: QuickExample
}

interface Props {
  className?: string
}

const RootContainer = styled.div`
`

export default class Quickstart extends React.Component<Props, State> {

  state = {
    selectedFrontendTechnology: null,
    selectedClientTechnology: null,
    quickExamples: null,
    frontendTechnologyOffset: 0,
    graphQLClientOffset: 0,
    selectedExample: undefined,
  }

  render() {

    const {className} = this.props
    const {selectedFrontendTechnology, selectedClientTechnology, selectedExample} = this.state
    const currentStep: Step = this.getCurrentStep()

    const stepIndicator: JSX.Element = (
      <StepIndicator
        currentStep={currentStep}
        className={cx($p.mb10)}
        pathComponentClicked={(index) => {
          if (index === 0) {
            this.setState({
              selectedFrontendTechnology: null,
              selectedClientTechnology: null,
              quickExamples: null,
              selectedExample: undefined,
            } as State)
          } else if (index === 1) {
            this.setState({
              ...this.state,
              selectedClientTechnology: null,
              quickExamples: null,
            } as State)
          }
        }} />
    )

    return (
      <MediaQuery maxWidth={1000}>
        {matches => matches ? (
          <div className={cx($p.flex, $p.flexColumn)}>
            <LogoBar className={cx($p.mt25)} />
            <a
              href='https://github.com/graphcool/examples'
              className={cx(
                $g.uppercaseButton,
                $p.flex,
                $p.justifyCenter,
                $p.bgGreen,
                $p.white,
                $p.noUnderline,
                $p.mt25,
                $p.center,
                $p.ph25,
                $p.pv16,
              )}>
              See Examples on GitHub
            </a>
          </div>
        ) : (
          currentStep === 'TECHNOLOGY' ? (
            <div>
              <style jsx>{`
                .quickstart {
                  @p: .flex, .flexColumn, .relative, .center, .z2, .overflowAuto, .w100;
                  max-width: 1200px;
                }
              `}</style>
              <div className='quickstart'>
                <RootContainer className={cx($p.flex, $p.flexColumn, className)}>
                  {stepIndicator}
                  <div className={cx($p.flex, $p.mt25)}>
                    {frontendTechnologies.map((technology, index) =>
                      <Technology
                        key={technology.title}
                        className={cx($p.ph25)}
                        technology={technology}
                        selectable={true}
                        onClick={() => this.selectFrontendTechnology(technology, index)}
                      />)
                    }
                  </div>
                </RootContainer>
              </div>
            </div>
          ) : currentStep === 'GRAPHQL_CLIENT' ? (
                <div>
                  <RootContainer className={cx($p.flex, $p.flexColumn, className)}>
                    {stepIndicator}
                    <div
                      className={cx($p.flex, $p.mt25, $p.relative)}
                      style={{
                        transition: this.state.frontendTechnologyOffset === 0 ? '.3s ease all' : '',
                        transform: `translateX(${this.state.frontendTechnologyOffset}px)`,
                      }}
                    >
                      <Technology
                        className={cx($p.ph25)}
                        technology={selectedFrontendTechnology}
                        onClick={() => {
                          this.setState({
                            selectedFrontendTechnology: null,
                            selectedClientTechnology: null,
                            quickExamples: null,
                          } as State)
                        }}
                      />
                      <div
                        style={{
                          transition: 'opacity .3s .3s ease',
                          opacity: this.state.frontendTechnologyOffset > 0 ? 0 : 1,
                        }}
                        className={$p.flex}
                      >
                        <div className={cx($p.mh25)} style={{paddingTop: 34}}>
                          <Icon
                            src={require('../../../../assets/icons/docs/plus.svg')}
                            width={27}
                            height={27}
                            color={$v.gray20}
                          />
                        </div>
                        {(this.clientTechnologiesFor(selectedFrontendTechnology)).map((technology, index) =>
                          <Technology
                            key={technology.title}
                            className={cx($p.ph25)}
                            technology={technology}
                            selectable={true}
                            onClick={() => this.selectClientTechnology(technology, index)}
                          />)
                        }
                      </div>
                    </div>
                  </RootContainer>
                </div>
          ) : currentStep === 'USE_CASE' ? (
            <div>
              <RootContainer className={cx($p.flex, className)}>
                <div className={cx($p.flex, $p.flexColumn)}>
                  {stepIndicator}
                  <div
                    className={cx($p.flex, $p.mt25)}
                    style={{
                      transition: this.state.frontendTechnologyOffset === 0 ? '.3s ease all' : '',
                      transform: `translateX(${this.state.frontendTechnologyOffset}px)`,
                    }}
                  >
                    <Technology
                      className={cx($p.mr25)}
                      technology={selectedFrontendTechnology}
                    />
                    <div
                      className={$p.flex}
                      style={{
                        transition: 'opacity .3s .3s ease',
                        opacity: this.state.frontendTechnologyOffset > 0 ? 0 : 1,
                      }}
                    >
                      <div style={{paddingTop: 34}}>
                        <Icon
                          src={require('../../../../assets/icons/docs/plus.svg')}
                          width={27}
                          height={27}
                          color={$v.gray20}
                        />
                      </div>
                      <div
                        className={$p.flex}
                        style={{
                          transition: this.state.graphQLClientOffset === 0 ? '.3s ease all' : '',
                          transform: `translateX(${this.state.graphQLClientOffset}px)`,
                        }}
                      >
                        <Technology
                          className={cx($p.ml25)}
                          technology={selectedClientTechnology}
                        />
                        <div
                          className={cx($p.ml25)}
                          style={{
                            paddingTop: 37,
                            transition: 'opacity .3s .3s ease',
                            opacity: this.state.graphQLClientOffset > 0 ? 0 : 1,
                          }}>
                          <Icon
                            src={require('../../../../assets/icons/docs/right_arrow.svg')}
                            width={31}
                            height={22}
                            color={$v.gray20}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={cx($p.flex)}
                      style={{
                        marginLeft: 50,
                        transition: 'opacity .3s .3s ease',
                      }}
                    >
                      {this.state.quickExamples.map((example: QuickExample, index) =>
                        <Example
                          key={index}
                          quickExample={example}
                          onClick={() => this.selectExample(example)}
                          selected={typeof selectedExample !== 'undefined' ? example === selectedExample : undefined}
                        />,
                      )}
                    </div>
                  </div>
                </div>
              </RootContainer>
              {this.state.selectedExample &&
                <ExampleContent
                  frontendTechnologyId={selectedFrontendTechnology.id}
                  clientTechnologyId={selectedClientTechnology.id}
                  example={selectedExample}
                />
              }
            </div>
          ) : null
        )}
      </MediaQuery>
    )
  }

  private selectFrontendTechnology = (technology: TechnologyData, index: number = 0) => {
    const selectedFrontendTechnology = this.setSelected(technology)
    this.setState(
      {
        frontendTechnologyOffset: index * 146,
      } as State,
      () => {
        setTimeout(
          () => {

            const newState: any = {
              selectedFrontendTechnology,
              highlightedComponentIndex: null,
            }

            const clientTechnologies = this.clientTechnologiesFor(technology)

            if (clientTechnologies.length === 1) {
              newState.selectedClientTechnology = clientTechnologies[0]
              const key = selectedFrontendTechnology.id + '-' + clientTechnologies[0].id
              newState.quickExamples = examples[key]
              newState.highlightedComponentIndex = 0

              if (newState.quickExamples.length === 1) {
                newState.selectedExample = newState.quickExamples[0]
              }
            }

            this.setState(newState as State, () => {
              setTimeout(
                () => {
                  this.setState({
                    frontendTechnologyOffset: 0,
                    graphQLClientOffset: 0,
                  })
                },
                1,
              )
            })
          },
          1,
        )
      })
  }

  private selectClientTechnology = (technology: TechnologyData, index: number = 0) => {
    const selectedClientTechnology = this.setSelected(technology)

    const key = this.state.selectedFrontendTechnology.id + '-' + selectedClientTechnology.id
    const displayExamples = examples[key]

    this.setState(
      {
        graphQLClientOffset: index * 146,
      } as State,
      () => {
        setTimeout(
          () => {
            const shouldSelectExample = displayExamples.length === 1
            const newState: any = shouldSelectExample ? {
              selectedClientTechnology,
                selectedExample: displayExamples[0],
              quickExamples: displayExamples,
              highlightedComponentIndex: null,
            } : {
                selectedClientTechnology,
                quickExamples: displayExamples,
                highlightedComponentIndex: null,
            }
            this.setState(newState as State, () => {
              setTimeout(
                () => {
                  this.setState({
                    graphQLClientOffset: 0,
                    frontendTechnologyOffset: 0,
                  })
                },
                1,
              )
            })
          },
          1,
        )
      })
  }

  private getCurrentStep(): Step {
    if (this.state.selectedClientTechnology) {
      return 'USE_CASE'
    } else if (this.state.selectedFrontendTechnology) {
      return 'GRAPHQL_CLIENT'
    }
    return 'TECHNOLOGY'
  }

  private setSelected(technology: TechnologyData): TechnologyData {
    const selectedTechnologyData = {
      ...technology,
      backgroundColor: technology.logoColor,
      logoColor: 'white',
    }
    return selectedTechnologyData as TechnologyData
  }

  private clientTechnologiesFor(frontendTechnology: TechnologyData) {
    const keys = Object.keys(examples)
    const relevantExamples = keys.filter((key) => {
      return key.startsWith(frontendTechnology.id + '-')
    })
    const availableClientTechnologies = relevantExamples.map((key) => {
      const keyComponents = key.split('-')
      return keyComponents[1]
    })
    const result: TechnologyData[] = []
    const allClientTechnologyNames = clientTechnologies.map((clientTechnology) => clientTechnology.id)
    availableClientTechnologies.forEach((client) => {
      if (allClientTechnologyNames.indexOf(client) > -1) {
        const tech = clientTechnologies.find((technology) => {
          return client === technology.id
        })
        result.push(tech)
      }
    })
    return result
  }

  private selectExample = (selectedExample: QuickExample) => {
    this.setState({selectedExample} as State)
  }
}

export type Step = 'TECHNOLOGY' | 'GRAPHQL_CLIENT' | 'USE_CASE'
