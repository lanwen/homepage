import * as React from 'react'
import * as cx from 'classnames'
import { Link } from 'react-router'
import { $p, Icon, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../../../utils/constants'

const Root = styled.div`
  
  @media (max-width: ${breakpoints.p1200}px) {
    padding-top: ${$v.size25}
  }`

const Searchbox = styled.input`
  width: 80px;
  box-sizing: border-box;
  box-shadow:0 8px 18px rgba(0, 0, 0, 0.1), 0 -8px 18px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  font-size: 16px;
  background-color: #fff;
  background-image: url(${require('../../../../assets/graphics/Lupa.png')});
  background-position: 10px 15px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  
  @media (max-width: ${breakpoints.p1360}px) {
    width: 250px;
  }`

export default class GoToConsole extends React.Component<{}, {}> {
  render() {
    return (
      <Root className={cx($p.flex, $p.pv38, $p.flexWrap, $p.itemsCenter)}>
        <Link className={cx($p.noUnderline, $p.flex, $p.itemsCenter)} to='/'>
          <img className={cx($p.mr16)} src={require('../../../../assets/graphics/GraphcoolLogoOnltG.svg')}/>
          <p className={cx($p.green, $p.f20, $p.ttc, $p.fw4, $p.mr16)}>Docs</p>
        </Link>
        <div className={cx($p.f20, $p.ttc, $p.fw4, $p.lightgreen50)}>
          <a className={cx($p.noUnderline, $p.mr16)} href='/'>Console</a>
          <a className={cx($p.noUnderline, $p.mr25)} href='/'>Homepage</a>
        </div>
        <Searchbox type='text' name='search' />
      </Root>
    )
  }
}
