import * as React from 'react'
import { $p, $v, $g } from 'graphcool-styles'
import styled from 'styled-components'
import * as cx from 'classnames'
import { breakpoints } from '../../../utils/constants'
import {Node, Parser} from 'commonmark'
import ListItems from './ListItems'
import {Link} from 'react-router'

export default class LeftSidebar extends React.Component<{}, {}> {
  render () {
    const FixedNavigation = styled.div`
      margin-top: 120px;
      height: 100%;
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
    return (
      <VerticalContainer>
        <FixedNavigation>
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
    )
  }
}
