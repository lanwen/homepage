import React from 'react'
import Signup from 'components/Signup/Signup'
import About from './About/About'

export default class AboutView extends React.Component {

  render () {
    return (
      <div>
        <About />
        <Signup />
      </div>
    )
  }
}
