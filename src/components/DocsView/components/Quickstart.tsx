import * as React from 'react'
import {$p, $v} from 'graphcool-styles'
import * as cx from 'classnames'
import Technology from './Technology'
import StepIndicator from './StepIndicator'

interface State {
  currentStep: Step
}
export default class Quickstep extends React.Component<{}, State> {

  constructor(props) {
    super(props)

    this.state = {
      currentStep: 'TECHNOLOGY'
    }
  }

  render() {

    const {currentStep} = this.state

    const stepIndicator: JSX.Element = (
      <StepIndicator currentStep={currentStep} />
    )

    if (this.state.currentStep === 'TECHNOLOGY') {
      return (
        <div className={cx($p.flex, $p.flexColumn)}>
          {stepIndicator}
          <div className={cx($p.flex)}>
            {technologies.map((technology) =>
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
        <div>GRAPHQL_CLIENT</div>
      )
    }
    else if (this.state.currentStep === 'USE_CASE') {
      return (
        <div>USE_CASE</div>
      )
    }
    return (
        <div>UNKNOWN</div>
    )
    
  }
}

export type Step = 'TECHNOLOGY' | 'GRAPHQL_CLIENT' | 'USE_CASE'

interface TechnologyData {
  title: string
  logoName: string
  logoColor: string
  logoWidth: number
  logoHeight: number
  backgroundColor: string
  isPopular?: boolean
}

const react: TechnologyData = {
  title: 'React',
  logoName: 'react',
  logoColor: 'rgba(0,216,255,1)',
  logoWidth: 47,
  logoHeight: 44,
  backgroundColor: 'rgba(0,216,255,0.1)'
}

const angular: TechnologyData = {
  title: 'Angular',
  logoName: 'angular',
  logoColor: 'rgba(221,0,49,1)',
  logoWidth: 42,
  logoHeight: 46,
  backgroundColor: 'rgba(221,0,49,0.1)'
}

const reactNative: TechnologyData = {
  title: 'React Native',
  logoName: 'react_native',
  logoColor: 'rgba(26,127,145,1)',
  logoWidth: 47,
  logoHeight: 44,
  backgroundColor: 'rgba(26,127,145,0.1)'
}

const iOS: TechnologyData = {
  title: 'iOS',
  logoName: 'ios',
  logoColor: $v.black,
  logoWidth: 47,
  logoHeight: 44,
  backgroundColor: $v.gray10
}

const android: TechnologyData = {
  title: 'Android',
  logoName: 'android',
  logoColor: 'rgba(164,196,157,1)',
  logoWidth: 47,
  logoHeight: 44,
  backgroundColor: 'rgba(164,196,157,0.1)'
}

const technologies: [TechnologyData] = [
  react, 
  angular,
  reactNative,
  iOS,
  android
]
