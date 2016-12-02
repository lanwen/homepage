import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../utils/constants'

const Root = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
  padding: ${$v.size60} 300px;
      
    @media (max-width: ${breakpoints.p1200}px) {
      padding: ${$v.size96} 200px;
    }
    @media (max-width: ${breakpoints.p1000}px) {
      padding: ${$v.size96};
    }

    @media (max-width: ${breakpoints.p580}px) {
      padding: ${$v.size96} ${$v.size10};
    }
`
const Graph = styled.div`
  max-width: 934px; 
  margin-top: ${$v.size96};
`
const Description = styled.div`
   @media (max-width: ${breakpoints.p500}px) {
     padding-left: ${$v.size38};
     padding-right: ${$v.size38};
     text-align: left;
  }
  
  @media (max-width: ${breakpoints.p400}px) {
    padding-left: ${$v.size25};
    padding-right: ${$v.size25};
  }
`
export default class SchemaGraph extends React.Component<{}, {}> {

  render() {
    return (
      <Root className={cx($p.flex, $p.flexColumn, $p.itemsCenter)}>
        <section className={cx($p.pb38, $p.tc, $p.f38, $p.fw3)}>
          How it works
        </section>
        <Description className={cx($p.f20, $p.o50, $p.tc, $p.pb16, $p.fw4)}>
          {
            `I have hinted that I would often jerk poor Queequeg from between the whale and the ship where he would occasionally fall, from the incessant rolling and swaying of both.` // tslint:disable-line
          }
        </Description>
        <Graph>
          <img className={cx($p.w100, $p.hAuto)} src={require('../../assets/graphics/Architecture2.png')} alt='Architecture'/>
        </Graph>
      </Root>
    )
  }
}
