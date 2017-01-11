import * as React from 'react'
import {$p} from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import {Link} from 'react-router'

interface Props {

}

const arr = [0,1,2]

const Container = styled.div`
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 80px;
    bottom: 0;
    background: -moz-linear-gradient(top, rgba(250,250,250,0) 0%, rgba(250,250,250,1) 50%, rgba(250,250,250,1) 100%);
    background: -webkit-linear-gradient(top, rgba(250,250,250,0) 0%,rgba(250,250,250,1) 50%,rgba(250,250,250,1) 100%);
    background: linear-gradient(to bottom, rgba(250,250,250,0) 0%,rgba(250,250,250,1) 50%,rgba(250,250,250,1) 100%);
  }
`

const Tutorial = styled.div`
  color: rgb(164, 3, 111);
  position: absolute;
  bottom: 50px;
`

export default (props: Props) => (
  <div className={cx($p.relative)}>
    <Container className={cx($p.flex, $p.mt25, $p.relative, $p.w100)}>
      {arr.map(e => (
        <div className={cx($p.mr25, $p.flex1, $p.ba, $p.bw2, $p.bBlack05, $p.pa60)}>
        </div>
      ))}
    </Container>
    <Tutorial className={cx($p.w100, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
      <Link
        to='/docs/tutorials'
        className={cx($p.buttonShadow, $p.ttu, $p.pv10, $p.ph16, $p.f14, $p.bgWhite, $p.fw6, $p.noUnderline)}
      >
        See all Tutorials
      </Link>
    </Tutorial>
  </div>
)