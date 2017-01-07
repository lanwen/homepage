import * as React from 'react'
import AnnoucementIcon from './AnnoucementIcon'
import { $p, $v } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'

const LeftSide = styled.div`
  flex: 1 0 400px;
`
const Close = styled.div`
  position: absolute;
  top: -${$v.size20};
  right: -${$v.size20};
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: opacity ${$v.duration} linear;
  background-color: #fff;
  border-radius: 100%;
  box-shadow: 0 2px 4px rgba(0,0,0,.5);
  
  &:hover {
    opacity: .4;
  }
  
  &:before, &:after {
    content: "";
    position: absolute;
    background: ${$v.gray40};
    left: 50%;
    top: 50%;
    width: 60%;
    height: 2px;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  
  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`

const Picture = styled.img`
`

export default class AnnoucementBox extends React.Component<{}, {}> {
  render() {
    return (
      <div className={cx($p.flex, $p.flexWrap, $p.mb96)}>
        <LeftSide className={cx($p.flex, $p.flexColumn, $p.bgBlack04, $p.flexWrap)}>
          <AnnoucementIcon/>
          <div className={cx($p.mt38, $p.ph96)}>
            <h1 className={cx($p.f38, $p.fw3, $p.mb16)}>User authentication in GraphQL with Auth0 and Digits</h1>
            <div className={cx($p.flex, $p.black20, $p.itemsCenter, $p.mb38, $p.flexWrap)}>
              <p className={cx($p.f20, $p.pr25, $p.fw4)}>5 Nov 2016</p>
              <p className={cx($p.f16, $p.ph16, $p.fw4)}>#platform / api /authentication</p>
            </div>
            <p className={cx($p.black60, $p.fw4, $p.f20, $p.mb60)}>
              So far we’ve need to configure multiple models and specify relationships between them. So far we’ve need to configure multiple models and specify relationships between them.
            </p>
          </div>
        </LeftSide>
        <div className={cx($p.relative, $p.flex, $p.itemsStretch, $p.flexWrap)}>
          <div className={cx($p.flex, $p.itemsCenter, $p.justifyCenter, $p.overflowHidden, $p.bgBlack04)}>
            <Picture src={require('../../../../assets/graphics/Tutorial#1.png')}/>
          </div>
          <Close/>
        </div>
      </div>
    )
  }
}
