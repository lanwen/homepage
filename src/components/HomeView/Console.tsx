import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { maxWidth } from '../../utils/constants'

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

const Browser = styled.div`
  width: auto;
  flex-grow: 2;
`

const FeatureDescription = styled.div`
  width: 230px;
`

export default class Console extends React.Component<{}, {}> {

  render() {
    return (
      <Root className={cx($p.relative)}>
        <Container className={cx($p.center, $p.relative, $p.flex)}>
          <Browser className={cx($p.pl96)}>
            <img className={cx($p.db, $p.w100, $p.hAuto)} src={require('../../assets/graphics/browser.svg')} />
          </Browser>
          <FeatureDescription className={cx($p.ph60, $p.mv16, $p.pv60)}>
            <h2 className={cx($p.f25, $p.fw3, $p.black80)}>Whatever headline we have here</h2>
            <p className={cx($p.black50, $p.pt38)}>
              {
                `I have hinted that I would often jerk poor Queequeg from between the whale and the ship where he would occasionally fall.` // tslint:disable-line
              }
            </p>
          </FeatureDescription>
        </Container>
      </Root>
    )
  }
}
