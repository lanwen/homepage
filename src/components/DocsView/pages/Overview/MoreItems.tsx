import * as React from 'react'
import {$p} from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import {Link} from 'react-router'
import {breakpoints} from '../../../../utils/constants'

interface Props {
  text: string
  color: string
  link: string
}

const Container = styled.div`
  &::after {
    content: "";
    position: absolute;
    height: 80px;
    width: 100%;
    bottom: 0;
    background: -moz-linear-gradient(top, rgba(250,250,250,0) 0%, rgba(250,250,250,1) 50%, rgba(250,250,250,1) 100%);
    background: -webkit-linear-gradient(top, rgba(250,250,250,0) 0%,rgba(250,250,250,1) 50%,rgba(250,250,250,1) 100%);
    background: linear-gradient(to bottom, rgba(250,250,250,0) 0%,rgba(250,250,250,1) 50%,rgba(250,250,250,1) 100%);
  }
`

const MoreItems = ({text, color, link}: Props) => {

  const Tutorial = styled.div`
    color: ${color};
    position: absolute;
    bottom: 50px;
  `

  let arr: number[]
  if (window.innerWidth > breakpoints.p1000) {
    arr = [0, 1, 2]
  } else if (window.innerWidth > breakpoints.p750) {
    arr = [0, 1]
  } else {
    arr = [0]
  }
  return (
    <div className={cx($p.relative)}>
      <Container className={cx(
        $p.flex,
        $p.justifyCenter,
        $p.mt25,
        $p.relative,
      )}>
        {arr.map(n => (
          <div
            key={n}
            className={cx(
              $p.flex1,
              $p.ba,
              $p.bw2,
              $p.bBlack05,
              $p.mr25,
              window.innerWidth > breakpoints.p750 ? $p.pa60 : $p.pv60,
              arr.length === 2 && $p.mh60,
            )}
            style={ arr.length > 1 ? {maxWidth: '325px'} : {maxWidth: '325px', minWidth: '325px'}}>
          </div>
        ))}
      </Container>
      <Tutorial className={cx(
        $p.w100,
        $p.flex,
        $p.justifyCenter,
        $p.itemsCenter,
      )}>
        <Link
          to={link}
          className={cx(
            $p.buttonShadow,
            $p.ttu,
            $p.pv10,
            $p.ph16,
            $p.f14,
            $p.bgWhite,
            $p.fw6,
            $p.noUnderline,
            arr.length === 1 && $p.mr25,
        )}>
          {text}
        </Link>
      </Tutorial>
    </div>
  )
}

export default MoreItems
