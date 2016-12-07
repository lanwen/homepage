import * as React from 'react'
import HeaderDocs from './HeaderDocs'
import Footer from '../Footer/Footer'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import * as cx from 'classnames'
import { breakpoints } from '../../utils/constants'

export default class DocsView extends React.Component<{}, {}> {

<<<<<<< HEAD
  componentDidMount() {
    window.addEventListener('resize', this.rerender)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.rerender)
  }

  render() {
    return (
      <div>
        <HeaderDocs/>
        <Footer/>
      </div>
    )
=======
  render() {
    return <span />
>>>>>>> 21f425d79d9985d5cb4749aadf17d4a7c374df9e
  }

  private rerender = () => {
    this.forceUpdate()
  }
}
