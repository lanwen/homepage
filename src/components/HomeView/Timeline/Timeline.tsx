import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, Icon } from 'graphcool-styles'
import styled from 'styled-components'
import { maxWidth } from '../../../utils/constants'
import SectionHeader from '../SectionHeader'
import Block from './Block'

const Root = styled.div`
  &:before{
    content: "";
    position: absolute;
    top: ${$v.size16};
    bottom: ${$v.size16};
    width: 100%;
    background: ${$v.gray02};
  }
  
  .label {
    font-size: ${$v.size12};
    line-height: 1;
    font-weight: 600;
    color: ${$v.gray20};
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`

const Container = styled.div`
  max-width: ${maxWidth}px;
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
                  <Icon
                    src={require('../../../assets/icons/graphcool.svg')}
                    width={18 * 1.5}
                    height={21 * 1.5}
                    color={$v.green}
                  />
                </GraphcoolLogo>
              </Legend>
              <Block label='Initial Setup' />
              <Block label='Iteration' />
              <Block label='Scaling' />
            </div>
          </Container>
        </Root>
      </section>
    )
  }
}
