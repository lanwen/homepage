import * as React from 'react'
import Header from '../Header'
import Footer from '../Footer/Footer'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import * as cx from 'classnames'
import { breakpoints } from '../../utils/constants'

export default class DocsView extends React.Component<{}, {}> {

  render() {
    return (
      <div>
        <Header/>
        <Footer/>
      </div>
    )
  }
}
