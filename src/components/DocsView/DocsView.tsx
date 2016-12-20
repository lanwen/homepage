import * as React from 'react'
import Footer from '../Footer/Footer'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import * as cx from 'classnames'
import { breakpoints } from '../../utils/constants'
import Header from './components/Header/Header'
import RelatedContent from './components/WasHelpful'
import LeftSidebar from './components/LeftSidebar'

interface Props {
  location: any
  children?: JSX.Element
}

export default class DocsView extends React.Component<Props, {}> {
  componentDidMount() {
    window.addEventListener('resize', this.rerender)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.rerender)
  }

  render() {
    return (
      <div className={cx($p.flex, $p.flexColumn)}>
        <Header/>
        <div className={cx($p.flex)}>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }

  private rerender = () => {
    this.forceUpdate()
  }
}
