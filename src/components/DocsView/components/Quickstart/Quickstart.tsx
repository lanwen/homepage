import * as React from 'react'
import {$p, $v} from 'graphcool-styles'
import * as cx from 'classnames'
import Technology from './Technology'
import StepIndicator from './StepIndicator'
import {QuickExample} from '../../../../types/types'
import {TechnologyData, frontendTechnologies, clientTechnologies} from './data/technologies'

interface State {
  currentStep: Step
  selectedFrontendTechnology?: TechnologyData,
  selectedClientTechnology?: TechnologyData,
}

interface Props {
  className?: string
}

export default class Quickstart extends React.Component<Props, State> {

  constructor(props) {
    super(props)

    this.state = {
      currentStep: 'USE_CASE',
      selectedFrontendTechnology: frontendTechnologies[0],
      selectedClientTechnology: clientTechnologies[0]
    }
  }

  render() {

    const {className} = this.props
    const {currentStep, selectedFrontendTechnology, selectedClientTechnology} = this.state

    const stepIndicator: JSX.Element = (
      <StepIndicator currentStep={currentStep} />
    )

    if (this.state.currentStep === 'TECHNOLOGY') {
      return (
        <div className={cx($p.flex, $p.flexColumn, className)}>
          {stepIndicator}
          <div className={cx($p.flex)}>
            {frontendTechnologies.map((technology) =>
            <Technology
              title={technology.title}
              logoName={technology.logoName}
              logoColor={technology.logoColor}
              logoWidth={technology.logoWidth}
              logoHeight={technology.logoHeight}
              backgroundColor={technology.backgroundColor}
            />
          )}
          </div>
        </div>
      )
    }
    else if (this.state.currentStep === 'GRAPHQL_CLIENT') {
      return (
        <div className={cx($p.flex)}>
          <Technology
              title={selectedFrontendTechnology.title}
              logoName={selectedFrontendTechnology.logoName}
              logoColor={selectedFrontendTechnology.logoColor}
              logoWidth={selectedFrontendTechnology.logoWidth}
              logoHeight={selectedFrontendTechnology.logoHeight}
              backgroundColor={selectedFrontendTechnology.backgroundColor}
          />
          <div className={cx($p.black20, $p.f38, $p.fw6)} style={{paddingTop: 20}}>+</div>
          {clientTechnologies.map((technology) =>
            <Technology
              title={technology.title}
              logoName={technology.logoName}
              logoColor={technology.logoColor}
              logoWidth={technology.logoWidth}
              logoHeight={technology.logoHeight}
              backgroundColor={technology.backgroundColor}
            />
          )}

        </div>
      )
    }
    else if (this.state.currentStep === 'USE_CASE') {
      return (
        <div className={$p.flex}>
          USE_CASE
        </div>
      )
    }
    return (
        <div>UNKNOWN</div>
    )
    
  }
}

export type Step = 'TECHNOLOGY' | 'GRAPHQL_CLIENT' | 'USE_CASE'
