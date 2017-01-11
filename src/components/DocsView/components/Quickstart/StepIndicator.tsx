import * as React from 'react'
import {$p, $v, Icon} from 'graphcool-styles'
import * as cx from 'classnames'
import {Step} from './Quickstart'

interface Props {
  currentStep: Step
  pathComponentClicked: (number) => void
  className?: string
}

const greenNotSelected = 'rgba(28,191,50,0.5)'
const greenSelected = 'rgba(39,174,96,1)'
const grayNotSelected = $v.gray20

export default class StepIndicator extends React.Component<Props, {}> {

  render() {

    const {currentStep} = this.props

    let technology: JSX.Element
    let graphQLClient: JSX.Element
    let useCase: JSX.Element

    switch (currentStep) {
    case 'TECHNOLOGY': 
      technology = (
        <div className={cx($p.flex, $p.itemsCenter)}>
          <div className={cx($p.f14, $p.fw6, $p.ttu)} style={{color: `${greenSelected}`}}>
            Technology
          </div>
          <Icon
            src={require('graphcool-styles/icons/stroke/arrowRight.svg')}
            stroke={true}
            className={$p.ph6}
            strokeWidth={8}
            color={grayNotSelected}
            height={12}
            width={12}
          />
        </div>
      )
      graphQLClient = (
        <div className={cx($p.flex, $p.itemsCenter)}>
          <div className={cx($p.f14, $p.fw6, $p.ttu, $p.nowrap)} style={{color: `${grayNotSelected}`}}>
            GraphQL Client
          </div>
          <Icon
            src={require('graphcool-styles/icons/stroke/arrowRight.svg')}
            stroke={true}
            className={$p.ph6}
            strokeWidth={8}
            color={grayNotSelected}
            height={12}
            width={12}
          />
        </div>
      )
      useCase = (
        <div className={cx($p.flex, $p.itemsCenter)}>
          <div className={cx($p.f14, $p.fw6, $p.ttu, $p.nowrap)} style={{color: `${grayNotSelected}`}}>
            Use case
          </div>
        </div>
      )
      break
    case 'GRAPHQL_CLIENT': 
      technology = (
        <div 
          className={cx($p.flex, $p.itemsCenter, $p.pointer)}
          onClick={() => this.props.pathComponentClicked(0)}>
          <div className={cx($p.f14, $p.fw6, $p.ttu, $p.nowrap)} style={{color: `${greenNotSelected}`}}>
            Technology
          </div>
          <Icon
            src={require('graphcool-styles/icons/stroke/arrowRight.svg')}
            stroke={true}
            className={$p.ph6}
            strokeWidth={8}
            color={greenNotSelected}
            height={12}
            width={12}
          />
        </div>
      )
      graphQLClient = (
        <div className={cx($p.flex, $p.itemsCenter)}>
          <div className={cx($p.f14, $p.fw6, $p.ttu, $p.nowrap)} style={{color: `${greenSelected}`}}>
            GraphQL Client
          </div>
          <Icon
            src={require('graphcool-styles/icons/stroke/arrowRight.svg')}
            stroke={true}
            className={$p.ph6}
            strokeWidth={8}
            color={grayNotSelected}
            height={12}
            width={12}
          />
        </div>
      )
      useCase = (
        <div  className={cx($p.flex, $p.itemsCenter)}>
          <div className={cx($p.f14, $p.fw6, $p.ttu, $p.nowrap)} style={{color: `${grayNotSelected}`}}>
            Use case
          </div>
        </div>
      )
      break
    case 'USE_CASE': 
      technology = (
        <div 
          className={cx($p.flex, $p.itemsCenter, $p.pointer)}
          onClick={() => this.props.pathComponentClicked(0)}>
          <div className={cx($p.f14, $p.fw6, $p.ttu)} style={{color: `${greenNotSelected}`}}>
            Technology
          </div>
          <Icon
            src={require('graphcool-styles/icons/stroke/arrowRight.svg')}
            stroke={true}
            className={$p.ph6}
            strokeWidth={8}
            color={greenNotSelected}
            height={12}
            width={12}
          />
        </div>
      )
      graphQLClient = (
        <div 
          className={cx($p.flex, $p.itemsCenter, $p.pointer)}
          onClick={() => this.props.pathComponentClicked(1)}>
          <div className={cx($p.f14, $p.fw6, $p.ttu, $p.nowrap)} style={{color: `${greenNotSelected}`}}>
            GraphQL Client
          </div>
          <Icon
            src={require('graphcool-styles/icons/stroke/arrowRight.svg')}
            stroke={true}
            className={$p.ph6}
            strokeWidth={8}
            color={greenNotSelected}
            height={12}
            width={12}
          />
        </div>
      )
      useCase = (
        <div className={cx($p.flex, $p.itemsCenter)}>
          <div className={cx($p.f14, $p.fw6, $p.ttu, $p.nowrap)} style={{color: `${greenSelected}`}}>
            Use case
          </div>
        </div>
      )
      break
    default: 
      break
    }

    return (
      <div className={cx($p.flex, this.props.className)}>
        {technology}
        {graphQLClient}
        {useCase}
      </div>
    )
  }
}


