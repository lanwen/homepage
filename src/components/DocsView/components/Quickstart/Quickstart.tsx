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
  quickExamples?: [QuickExample]
}

interface Props {
  className?: string
}

export default class Quickstart extends React.Component<Props, State> {

  state = {
    selectedFrontendTechnology: null,
    selectedClientTechnology: null,
    quickExamples: null,
  }

  render() {

    const {className} = this.props
    const {selectedFrontendTechnology, selectedClientTechnology, quickExamples} = this.state
    const currentStep: Step = this.getCurrentStep()

    const stepIndicator: JSX.Element = (
      <StepIndicator
        currentStep={currentStep}
        className={cx($p.mb25)}
        pathComponentClicked={(index) => {
          if (index === 0) {
            this.setState({
              selectedFrontendTechnology: null,
              selectedClientTechnology: null,
            } as State)
          } else if (index === 1) {
            this.setState({
              ...this.state,
              selectedClientTechnology: null,
            } as State)
          }
        }}/>
    )

    if (currentStep === 'TECHNOLOGY') {
      return (
        <div className={cx($p.flex, $p.flexColumn, className)}>
          {stepIndicator}
          <div className={cx($p.flex)}>
            {frontendTechnologies.map((technology) =>
              <Technology
                technology={technology}
                onClick={() => this.selectFrontendTechnology(technology)}
              />,
            )}
          </div>
        </div>
      )
    } else if (currentStep === 'GRAPHQL_CLIENT') {
      return (
        <div className={cx($p.flex, $p.flexColumn, className)}>
          {stepIndicator}
          <div className={cx($p.flex)}>
            <Technology
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
            {clientTechnologies.map((technology) =>
              <Technology
                className={cx($p.ml25)}
                technology={technology}
                onClick={() => this.selectClientTechnology(technology)}
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
            <div className={cx($p.flex)}>
              <Technology
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
                technology={selectedClientTechnology}
              />
              <div style={{paddingTop: 37}}>
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
            {this.state.quickExamples.map((example) =>
              <Example className={cx($p.flex1)} quickExample={example}/>,
            )}
          </div>
        </div>
      )
    }
    return (
      <div>UNKNOWN</div>
    )
  }

  private selectClientTechnology = (technology: TechnologyData) => {
    const selectedClientTechnology = this.setSelected(technology)

    const key = this.state.selectedFrontendTechnology.logoName + '-' + selectedClientTechnology.logoName
    const displayExamples = examples[key]

    this.setState({
      selectedClientTechnology: selectedClientTechnology,
      quickExamples: displayExamples,
    } as State)
  }

  private selectFrontendTechnology = (technology: TechnologyData) => {
    const selectedFrontendTechnology = this.setSelected(technology)
    this.setState({
      selectedFrontendTechnology: selectedFrontendTechnology,
    } as State)
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

}

export type Step = 'TECHNOLOGY' | 'GRAPHQL_CLIENT' | 'USE_CASE'
