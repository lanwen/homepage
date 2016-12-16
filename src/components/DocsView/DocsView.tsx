import * as React from 'react'
import Footer from '../Footer/Footer'
import {$p, $v} from 'graphcool-styles'
import styled from 'styled-components'
import * as cx from 'classnames'
import {breakpoints} from '../../utils/constants'
import Header from './Header/Header'
import RelatedContent from './RelatedContent/RelatedContent'
import {Link} from 'react-router'
import LeftSidebar from './LeftSidebar'

interface Props {
  location: any
  children: any
}

export default class DocsView extends React.Component<Props, {}> {

  state = {
    ast: null,
  }

  componentDidMount() {

    window.addEventListener('resize', this.rerender)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.rerender)
  }

  render() {
    const FixedNavigation = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
    `

    const VerticalContainer = styled.div`
      flex: 0 0 300px;
      background-color: rgba(0, 0, 0, 0.02);
      
      @media (max-width: ${breakpoints.p1360}px) {
        flex: 0 0 250px;
      }
  `
    const RightSection = styled.div`
       flex: 1 1 100px;
       z-index: 100;
`
    const LogoDocs = styled.img`
      @media (max-width: ${breakpoints.p1360}px) {
        padding-left: ${$v.size38}
      }
`

    return (
      <div>
        <div className={cx($p.flex, $p.flexColumn)}>

          <div className={cx($p.flex)} ref='root'>
            <LeftSidebar/>
            <RightSection className={cx($p.flexWrap)}>
              <Header/>

              <section className={cx($p.flex, $p.flexWrap, $p.pa10)}>
                {/*{this.state.ast === null ? <h1>Loading...</h1> : <Markdown ast={this.state.ast}/>}*/}
                {this.props.children}
              </section>
              <RelatedContent />
            </RightSection>
          </div>
        </div>

        <Footer/>
      </div>
    )
  }

  private rerender = () => {
    this.forceUpdate()
  }
}
