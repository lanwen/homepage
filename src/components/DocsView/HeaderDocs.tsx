import * as React from 'react'
import { Link } from 'react-router'
import ListItems from './ListItems'
import styled from 'styled-components'
import { $p, $v, $g } from 'graphcool-styles'
import * as cx from 'classnames'
import NavHorDocs from './NavHorDocs'
import Footer from '../Footer/Footer'

export default class HeaderDocs extends React.Component<{}, {}> {
  render() {
    const NavigatioVertical = styled.div`
      background-color: rgba(0, 0, 0, 0.02);
      z-index: 2;
      position: fixed;
      max-height: 100vh;
      height: 100%;
      width: 20%;
      display: flex;
      flex-direction: column;
      min-width: 200px
`
    const VerticalContainer = styled.div`
      width: 20%;
      height: 100vh;
`
    const NavigationHorizontal = styled.div`
       margin-left: 20%;
       position: fixed;
       top: 0;
       right: 0;
`
    return (
      <div>
        <VerticalContainer>
          <NavigatioVertical>
            <Link to='/'>
              <img className={cx($p.pa60)} src={require('../../assets/graphics/logos/DockLogo.svg')}/>
            </Link>
            <ListItems
              title= 'GETTING STARTED'
              subtitle1= ''
              subsubtitle1= ''
              subsubsubtitle1= ''
              subtitle2= ''
              subsubtitle2= ''
            />
            <ListItems
              title='CONSOLE'
              subtitle1=''
              subsubtitle1=''
              subsubsubtitle1= ''
              subtitle2= ''
              subsubtitle2= ''
            />
            <ListItems
              title='AUTHENTICATION'
              subtitle1=''
              subsubtitle1=''
              subsubsubtitle1= ''
              subtitle2= ''
              subsubtitle2= ''
            />
            <ListItems
              title='FILE MANAGEMENT'
              subtitle1=''
              subsubtitle1=''
              subsubsubtitle1= ''
              subtitle2= ''
              subsubtitle2= ''
            />
            <ListItems
              title='SIMPLE API'
              subtitle1='Introduction'
              subsubtitle1='Details'
              subsubsubtitle1= 'Super Details'
              subtitle2= 'Making API Requests'
              subsubtitle2= ''
            />
            <ListItems
              title='RELAY API'
              subtitle1=''
              subsubtitle1=''
              subsubsubtitle1= ''
              subtitle2= ''
              subsubtitle2= ''
            />
            </NavigatioVertical>
          </VerticalContainer>
        <NavigationHorizontal>
          <NavHorDocs/>
          <Footer/>
        </NavigationHorizontal>
        </div>
    )
  }
}
