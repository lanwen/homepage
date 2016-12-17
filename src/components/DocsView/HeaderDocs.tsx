import * as React from 'react'
import {findDOMNode} from 'react-dom'
import { Link } from 'react-router'
import ListItems from './ListItems'
import styled from 'styled-components'
import { $p, $v, $g } from 'graphcool-styles'
import * as cx from 'classnames'
import Header from './Header/Header'
import Footer from '../Footer/Footer'
import { breakpoints, maxWidth } from '../../utils/constants'

interface Props {
  // content: any
}

export default class HeaderDocs extends React.Component<Props, {}> {
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
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
    `
    const LogoDocs = styled.img`
      @media (max-width: ${breakpoints.p1360}px) {
        padding-left: ${$v.size38}
      }
`
    return (
      <div className={cx($p.flex)} ref='root'>
        <VerticalContainer>
          <FixedNavigation>
            <Link to='/'>
              <LogoDocs className={cx($p.pa60)} src={require('../../assets/graphics/logos/DockLogo.svg')}/>
            </Link>
            <ListItems
              title='GETTING STARTED'
              subtitle1=''
              subsubtitle1=''
              subsubsubtitle1=''
              subtitle2=''
              subsubtitle2=''
            />
            <ListItems
              title='CONSOLE'
              subtitle1=''
              subsubtitle1=''
              subsubsubtitle1=''
              subtitle2=''
              subsubtitle2=''
            />
            <ListItems
              title='AUTHENTICATION'
              subtitle1=''
              subsubtitle1=''
              subsubsubtitle1=''
              subtitle2=''
              subsubtitle2=''
            />
            <ListItems
              title='FILE MANAGEMENT'
              subtitle1=''
              subsubtitle1=''
              subsubsubtitle1=''
              subtitle2=''
              subsubtitle2=''
            />
            <ListItems
              title='SIMPLE API'
              subtitle1='Introduction'
              subsubtitle1='Details'
              subsubsubtitle1='Super Details'
              subtitle2='Making API Requests'
              subsubtitle2=''
            />
            <ListItems
              title='RELAY API'
              subtitle1=''
              subsubtitle1=''
              subsubsubtitle1=''
              subtitle2=''
              subsubtitle2=''
            />
          </FixedNavigation>
        </VerticalContainer>
        <RightSection className={cx($p.flexWrap)}>
          <Header/>
          <section className={cx($p.flex, $p.flexWrap, $p.pa10)}>
            {/*{this.props.content}*/}
          </section>
        </RightSection>
      </div>
    )
  }

  private onScroll = (e: Event) => {
    console.log(e)

    const el = findDOMNode(this.refs['root'])
    el.scrollTop = 96759
  }
}
