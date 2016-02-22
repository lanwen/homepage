import React, { PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

export default class Script extends React.Component {
  static propTypes = {
    url: PropTypes.string.isRequired
  };

  componentDidMount () {
    const element = findDOMNode(this.refs.element)
    const script = document.createElement('script')
    script.src = this.props.url
    script.async = true
    script.defer = true
    element.appendChild(script)
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <div ref='element' {...this.props} />
    )
  }
}
