import * as React from 'react'
import {$p, $v, Icon} from 'graphcool-styles'
import * as cx from 'classnames'
import Technology from './Technology'
import StepIndicator from './StepIndicator'
import {TechnologyData, frontendTechnologies, clientTechnologies} from './data/technologies'
import {examples} from './data/examples'
import Example from './Example'
import {QuickExample} from '../../../../types/types'

interface State {
  selectedFrontendTechnology?: TechnologyData,
  selectedClientTechnology?: TechnologyData,
  quickExamples?: QuickExample[]
  highlightedComponentIndex?: number
}

interface Props {
  className?: string
}

export default class Quickstart extends React.Component<Props, State> {

  state = {
    selectedFrontendTechnology: null,
    selectedClientTechnology: null,
    quickExamples: null,
    highlightedComponentIndex: null,
  }

  render() {

    const {className} = this.props
    const {selectedFrontendTechnology, selectedClientTechnology, highlightedComponentIndex} = this.state
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
            } as State)
          } else if (index === 1) {
            this.setState({
              ...this.state,
              selectedClientTechnology: null,
              quickExamples: null,
            } as State)
          }
        }}/>
    )

    if (currentStep === 'TECHNOLOGY') {
      return (
        <div className={cx($p.flex, $p.flexColumn, className)}>
          {stepIndicator}
          <div className={cx($p.flex, $p.mt25)}>
            {frontendTechnologies.map((technology, index) =>
              <Technology
                key={technology.title}
                className={cx($p.mr60)}
                technology={technology}
                onClick={() => this.selectFrontendTechnology(technology)}
                onMouseEnter={() => this.decreasedOpacityOfComponents(index)}
                onMouseLeave={() => this.setState({
                    ...this.state,
                    highlightedComponentIndex: null,
                  })}
                decreaseOpacity={highlightedComponentIndex !== null && highlightedComponentIndex !== index}
              />)
            }
          </div>
        </div>
      )
    } else if (currentStep === 'GRAPHQL_CLIENT') {
      return (
        <div className={cx($p.flex, $p.flexColumn, className)}>
          {stepIndicator}
          <div className={cx($p.flex, $p.mt25)}>
            <Technology
              className={cx($p.mr60)}
              technology={selectedFrontendTechnology}
              decreaseOpacity={false}
            />
            <div className={cx($p.mr60)} style={{paddingTop: 34}}>
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
                className={cx($p.mr60)}
                technology={technology}
                onClick={() => this.selectClientTechnology(technology)}
                onMouseEnter={() => this.decreasedOpacityOfComponents(index)}
                onMouseLeave={() => this.setState({
                  ...this.state,
                  highlightedComponentIndex: null,
                })}
                decreaseOpacity={highlightedComponentIndex !== null && highlightedComponentIndex !== index}
              />)
            }
          </div>
        </div>
      )
    } else if (currentStep === 'USE_CASE') {
      return (
        <div className={cx($p.flex, className)}>
          <div className={cx($p.flex, $p.flexColumn)}>
            {stepIndicator}
            <div className={cx($p.flex, $p.mt25)}>
              <Technology
                className={cx($p.mr25)}
                decreaseOpacity={false}
                technology={selectedFrontendTechnology}
              />
              <div style={{paddingTop: 34}}>
                <Icon
                  src={require('../../../../assets/icons/docs/plus.svg')}
                  width={27}
                  height={27}
                  color={$v.gray20}
                />
              </div>
              <Technology
                className={cx($p.ml25)}
                decreaseOpacity={false}
                technology={selectedClientTechnology}
              />
              <div className={cx($p.ml25)} style={{paddingTop: 37}}>
                <Icon
                  src={require('../../../../assets/icons/docs/right_arrow.svg')}
                  width={31}
                  height={22}
                  color={$v.gray20}
                />
              </div>
            </div>
          </div>
          <div className={cx($p.flex, $p.ml38)}>
            {this.state.quickExamples.map((example: QuickExample, index) =>
              <Example
                key={example.title}
                quickExample={example}
                onMouseEnter={() => this.decreasedOpacityOfComponents(index)}
                onMouseLeave={() => this.setState({
                  ...this.state,
                  highlightedComponentIndex: null,
                })}
                decreaseOpacity={highlightedComponentIndex !== null && highlightedComponentIndex !== index}
              />,
            )}
          </div>
        </div>
      )
    }
    return (
      <div>UNKNOWN</div>
    )
  }

  private selectFrontendTechnology = (technology: TechnologyData) => {
    const selectedFrontendTechnology = this.setSelected(technology)
    this.setState({
      selectedFrontendTechnology: selectedFrontendTechnology,
      highlightedComponentIndex: null,
    } as State)
  }

  private selectClientTechnology = (technology: TechnologyData) => {
    const selectedClientTechnology = this.setSelected(technology)

    const key = this.state.selectedFrontendTechnology.logoName + '-' + selectedClientTechnology.logoName
    const displayExamples = examples[key]

    this.setState({
      selectedClientTechnology: selectedClientTechnology,
      quickExamples: displayExamples,
      highlightedComponentIndex: null,
    } as State)
  }

  private decreasedOpacityOfComponents = (index: number) => {
    this.setState({
      ...this.state,
      highlightedComponentIndex: index,
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
    return selectedTechnologyData
  }

  private clientTechnologiesFor(frontendTechnology: TechnologyData) {
    const keys = Object.keys(examples)
    const relevantExamples = keys.filter((key) => {
      return key.startsWith(frontendTechnology.logoName + '-')
    })
    const availableClientTechnologies = relevantExamples.map((key) => {
      const keyComponents = key.split('-')
      return keyComponents[1]
    })
    const result: TechnologyData[] = []
    const allClientTechnologyNames = clientTechnologies.map((clientTechnology) => clientTechnology.logoName)
    availableClientTechnologies.forEach((client) => {
      if (allClientTechnologyNames.indexOf(client) > -1) {
        const tech = clientTechnologies.find((technology) => {
          return client === technology.logoName
        })
        result.push(tech)
      }
    })
    return result
  }

}

export type Step = 'TECHNOLOGY' | 'GRAPHQL_CLIENT' | 'USE_CASE'
