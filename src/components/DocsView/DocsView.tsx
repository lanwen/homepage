import * as React from 'react'
import Footer from '../Footer/Footer'
import {$p, $v} from 'graphcool-styles'
import styled from 'styled-components'
import * as cx from 'classnames'
import {breakpoints} from '../../utils/constants'
import Header from './components/Header'
import RelatedContent from './components/RelatedContent'
import LeftSidebar from './components/LeftSidebar'

interface Props {
  location: any
  children: any
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
      <div>
        <div className={cx($p.flex, $p.flexColumn)}>
          <Header/>
          {this.props.children}
        <Footer/>
        </div>
      </div>
    )
  }

  private rerender = () => {
    this.forceUpdate()
  }
}
