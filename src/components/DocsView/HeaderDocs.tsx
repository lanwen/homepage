import * as React from 'react'
import * as cx from 'classnames'
import { Link } from 'react-router'
import { $p, $g, Icon, $v } from 'graphcool-styles'
import styled from 'styled-components'
import {breakpoints, maxWidth} from '../../utils/constants'
import { justifyStart } from 'graphcool-styles/dist/particles.css'

export default class Header extends React.Component<{}, {}> {
  render() {
    const NavigatioVertical = styled.div`
      background-color: lightgrey;
      z-index: 1;
      position: fixed;
      max-height: 100vh;
      height: 100%;
      width: 20%;
      display: flex;
      flex-direction: column;
`
    const NavigationHorizontal = styled.div`
       margin-left: 26%;
       height: 90vh;
`
    const Trying = styled.div`
      width: 20%;
`
    const VerticalList = styled.div `
      padding: ${$v.size38}
`
    return (
      <div>
        <Trying>
          <NavigatioVertical>
            <div className={cx($p.flex, $p.flexColumn, $p.itemsStart, {
              ['my-cool-class']: true,
            })}>
              <img className={cx($p.pa60)} src={require('../../assets/graphics/logos/DockLogo.svg')}/>
              <section className={cx($p.overflowYAuto)}>
                <VerticalList>GETTING STARTED</VerticalList>
                <VerticalList>CONSOLE</VerticalList>
                <VerticalList>AUTHENTICATION</VerticalList>
                <VerticalList>FILE MANAGEMENT</VerticalList>
                <VerticalList>SIMPLE API</VerticalList>
                <VerticalList>RELAY API</VerticalList>
              </section>
            </div>
          </NavigatioVertical>
        </Trying>
        <NavigationHorizontal>
          This is horizontal Navigation
        </NavigationHorizontal>
      </div>
    )
  }
}
