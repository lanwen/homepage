import React from 'react'
import Cover from './Cover/Cover'
import BetaRequest from 'components/BetaRequest/BetaRequest'
import Features from './Features/Features'
import How from './How/How'
import Faq from './Faq/Faq'

export default class HomeView extends React.Component {

  render () {
    return (
      <div>
        <Cover />
        <BetaRequest />
        <Features />
        <How />
        <Faq />
        <BetaRequest />
      </div>
    )
  }
}
