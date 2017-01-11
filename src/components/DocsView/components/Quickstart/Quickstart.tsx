import * as React from 'react'
import {$p, $v, Icon} from 'graphcool-styles'
import * as cx from 'classnames'
import Technology from './Technology'
import StepIndicator from './StepIndicator'
import {TechnologyData, frontendTechnologies, clientTechnologies} from './data/technologies'
import {reactApolloExamples} from './data/examples'
import Example from './Example'

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
      currentStep: 'TECHNOLOGY',
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
              technology={technology}
              onClick={() => this.selectFrontendTechnology(technology)}
            />
          )}
          </div>
        </div>
      )
    }
    else if (this.state.currentStep === 'GRAPHQL_CLIENT') {
      return (
        <div className={cx($p.flex, $p.flexColumn, className)}>
          {stepIndicator}
          <div className={cx($p.flex)}>
            <Technology
              technology={selectedFrontendTechnology}
            />
            <div className={cx($p.black20, $p.f38, $p.fw6)} style={{paddingTop: 20}}>+</div>
            {clientTechnologies.map((technology) =>
              <Technology
                technology={technology}
                onClick={() => this.selectClientTechnology(technology)}
              />
            )}
          </div>
        </div>
      )
    }
    else if (this.state.currentStep === 'USE_CASE') {
      return (
        <div className={$p.flex}>
          <div className={cx($p.flex, $p.flexColumn, className)}>
            {stepIndicator}
            <div className={cx($p.flex, $p.justifyBetween)}>
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
          <div className={cx($p.flex)}>
          {reactApolloExamples.map((example) =>
            <Example className={cx($p.flex1)} quickExample={example} />
          )}
            
          </div>
        </div>
      )
    }
    return (
        <div>UNKNOWN</div>
    )
    
  }

  private selectClientTechnology = (tech: TechnologyData) => {
    this.setState({
      selectedClientTechnology: tech,
      currentStep: 'USE_CASE',
    } as State)
  }

  private selectFrontendTechnology = (tech: TechnologyData) => {
    this.setState({
      selectedFrontendTechnology: tech,
      currentStep: 'GRAPHQL_CLIENT',
    } as State)
  }
}

export type Step = 'TECHNOLOGY' | 'GRAPHQL_CLIENT' | 'USE_CASE'
