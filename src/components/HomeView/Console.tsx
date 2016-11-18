import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, Icon } from 'graphcool-styles'
import styled from 'styled-components'
import { maxWidth } from '../../utils/constants'

import FeatureIndicator from './ConsoleFeatureIndicator'

const Root = styled.div`
  &:before{
    content: "";
    position: absolute;
    top: ${$v.size16};
    bottom: ${$v.size16};
    width: 100%;
    background: ${$v.gray02};
  } 
`

const Container = styled.div`
  max-width: ${maxWidth}px;
`

const FeatureDescription = styled.div`
  flex: 0;
`

const ActivePaginationBullet = `
  background: ${$v.green};
  
  &:hover {
    background: ${$v.green};
  }
`

const PaginationBullet = styled.div`
  width: ${$v.size10};
  height: ${$v.size10};
  border-radius: 500px;
  margin-left: ${$v.size16};
  background: ${$v.lightGreen20};
  cursor: pointer;
  transition: color ${$v.duration} linear;
  
  &:hover {
    background: ${$v.lightGreen50};
  }
  
  &:first-child {
    margin-left: 0;
  }
  
  ${props => props.active && ActivePaginationBullet}
`

const PaginationNext = styled.button`
  transition: background ${$v.duration} linear;  
  cursor: pointer;
  
  svg {
    transition: fill ${$v.duration} linear;
  }

  &:hover {
    background: ${$v.green};
    
    svg {
      fill: ${$v.white};
    }
  }
`

export default class Console extends React.Component<{}, {}> {

  render() {
    return (
      <Root className={cx($p.relative)}>
        <Container className={cx($p.center, $p.relative, $p.flex)}>
          <div className={cx($p.pl96, $p.w100, $p.relative)}>
            <FeatureIndicator top={30} left={60} />
            <img className={cx($p.db, $p.w100, $p.hAuto)} src={require('../../assets/graphics/browser.svg')} />
          </div>
          <FeatureDescription className={cx($p.ph60, $p.mv16, $p.pv60, $p.flex, $p.flexColumn, $p.justifyBetween)}>
            <article>
              <h2 className={cx($p.f25, $p.fw3, $p.black80)}>Whatever headline we have here</h2>
              <p className={cx($p.black50, $p.pt38)}>
                {
                  `I have hinted that I would often jerk poor Queequeg from between the whale and the ship where he would occasionally fall.` // tslint:disable-line
                }
              </p>
            </article>
            <div className={cx($p.flex, $p.itemsCenter)}>
              <PaginationBullet />
              <PaginationBullet active />
              <PaginationBullet />
              <PaginationBullet />
              <PaginationBullet />
              <PaginationBullet />
              <PaginationBullet />
              <PaginationNext className={cx($p.pa10, $p.brPill, $p.bgLightgreen20, $p.ml25)}>
                <Icon src={require('../../assets/icons/arrowRight.svg')} width={26} height={26} color={$v.green}/>
              </PaginationNext>
            </div>
          </FeatureDescription>
        </Container>
      </Root>
    )
  }
}
