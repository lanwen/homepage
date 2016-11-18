import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, Icon } from 'graphcool-styles'
import styled from 'styled-components'

import SectionHeader from '../SectionHeader'
import { maxWidth } from '../../../utils/constants'

import Bar from './Bar'

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

const Block = styled.div`
  position: relative;
  border-left: 1px solid ${$v.gray20};
  width: 30%;
  padding: ${$v.size10};
  
  &:last-child {
    &:after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: ${$v.size96}
      background: linear-gradient(to right, rgba(0,0,0,0) 0%, #fafafa 70%)
    }
  }
`

const Label = styled.div`
  font-size: ${$v.size12};
  line-height: 1;
  font-weight: 600;
  color: ${$v.gray30};
  letter-spacing: 1px;
  text-transform: uppercase;
`

const Legend = styled.div `  
  padding-top: 42px;
`

const GraphcoolLogo = styled.div`
  padding-top: 31px;
`

export default class Timeline extends React.Component<{}, {}> {

  render() {
    return (
      <section>
        <SectionHeader
          headline='Whatever headline we have here'
          copy='I have hinted that I would often jerk poor Queequeg from between the whale and the ship where he would.'
        />
        <Root className={cx($p.relative)}>
          <Container className={cx($p.center, $p.pv16)}>
            <div className={cx($p.pv16, $p.ph60, $p.flex, $p.relative)}>
              <Legend className={cx($p.flexFixed, $p.flex, $p.flexColumn, $p.itemsEnd, $p.pr16)}>
                <div className={cx($p.ttu, $p.f16, $p.fw6, $p.black30, $p.tracked, $p.lhSolid)}>The old way</div>
                <GraphcoolLogo>
                  <Icon src={require('../../../assets/icons/graphcool.svg')} width={18 * 1.5} height={21 * 1.5} color={$v.green}/>
                </GraphcoolLogo>
              </Legend>
              <Block>
                <Label>Initial Setup</Label>
                <Bar />
                <Bar graphcool />
              </Block>
              <Block>
                <Label>Iteration</Label>
                <Bar />
                <Bar graphcool />
              </Block>
              <Block>
                <Label>Scaling</Label>
                <Bar />
                <Bar graphcool />
              </Block>
            </div>
          </Container>
        </Root>
      </section>
    )
  }
}
