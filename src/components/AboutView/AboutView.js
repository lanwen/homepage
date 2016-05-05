import React from 'react'
import Helmet from 'react-helmet'
import BetaRequest from 'components/BetaRequest/BetaRequest'
import About from './About/About'

export default class AboutView extends React.Component {

  render () {
    return (
      <div>
        <Helmet title='About' />
        <About />
        <BetaRequest />
      </div>
    )
  }
}
