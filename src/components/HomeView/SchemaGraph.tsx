import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../utils/constants'
import SectionHeader from './SectionHeader'

const Root = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
  padding: 0 300px ${$v.size60};
      
  @media (max-width: ${breakpoints.p1200}px) {
    padding: 0 200px ${$v.size96};
  }
  
  @media (max-width: ${breakpoints.p1000}px) {
    padding: 0 ${$v.size96} ${$v.size96};
  }

  @media (max-width: ${breakpoints.p580}px) {
    padding: 0 ${$v.size10} ${$v.size96};
  }
`

const Graph = styled.div`
  max-width: 934px; 
`

export default class SchemaGraph extends React.Component<{}, {}> {

  render() {
    return (
      <Root className={cx($p.flex, $p.flexColumn, $p.itemsCenter)}>
        <SectionHeader
          headline='How it works'
          copy='Graphcool is built by developers for developers.'
        />
        <Graph>
          {//tslint:disable-next-line
            <img className={cx($p.w100, $p.hAuto, $p.db)} src={require('../../assets/graphics/Architecture2.png')}
                 alt='Architecture'/>
          }
        </Graph>
      </Root>
    )
  }
}
