import React from 'react'
import BetaRequest from 'components/BetaRequest/BetaRequest'
import About from './About/About'

export default class AboutView extends React.Component {

  render () {
    return (
      <div>
        <About />
        <BetaRequest />
      </div>
    )
  }
}
