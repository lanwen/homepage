import React from 'react'
import Cover from './Cover/Cover'
import Signup from 'components/Signup/Signup'
import Features from './Features/Features'
import How from './How/How'

export default class HomeView extends React.Component {

  render () {
    return (
      <div>
        <Cover />
        <Signup />
        <Features />
        <How />
        <Signup />
      </div>
    )
  }
}
