import * as React from 'react'
import { $p, $v } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import { breakpoints } from '../../../../utils/constants'

interface Props {
  title: string
  content: string
  tags: string
  updated: string
}

const Basis = styled.div`
  flex: 0 0 400px;
  
  @media (max-width: ${breakpoints.p1360}px) {
    flex: 0 0 375px;
  }
  
  @media (max-width: ${breakpoints.p1250}px) {
    flex: 0 0 355px;
  }
  
  @media (max-width: ${breakpoints.p1200}px) {
    flex: 0 0 400px;
    margin-right: 5%;
    margin-left: 0;
    margin-bottom: ${$v.size38}
  }
`
const Content = styled.div`
   @media (max-width: ${breakpoints.p1360}px) {
    
  }
`

export default class FAQContent extends React.Component<Props, {}> {
  render() {
    return (
      <Basis className={cx(
        $p.flexColumn, $p.flex, $p.flexWrap, $p.bgWhite, $p.mra, $p.mla, $p.overflowHidden, $p.br2, $p.pb25)
      }>
        <Content className={$p.ph25}>
          <div className={cx($p.mt38, $p.f25, $p.fw6)}>
            {this.props.title}
          </div>
          <div className={cx($p.black30, $p.f20, $p.mt16)}>
            {this.props.updated}
          </div>
          <div className={cx($p.pt16, $p.f20, $p.black60, $p.mt16)}>
            {this.props.content}
          </div>
          <div className={cx($p.pt25, $p.f20, $p.black60)}>
            {this.props.tags}
          </div>
        </Content>
      </Basis>
    )
  }
}
