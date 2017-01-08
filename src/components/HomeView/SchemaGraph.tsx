import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints, maxWidth } from '../../utils/constants'
import SectionHeader from '../SectionHeader'

const Root = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
`

const Graph = styled.div`
  max-width: ${maxWidth}px; 
  
  @media (max-width: ${breakpoints.p1200}px) {
    padding: 0 ${$v.size60} ${$v.size60};
  }
  
  @media (max-width: ${breakpoints.p1000}px) {
    padding: 0 ${$v.size38} ${$v.size38};
  }

  @media (max-width: ${breakpoints.p580}px) {
    padding: 0 ${$v.size25} ${$v.size25};
  }
  
  @media (max-width: ${breakpoints.p500}px) {
    padding: 0 ${$v.size16} ${$v.size25};
  }
`

export default class SchemaGraph extends React.Component<{}, {}> {

  render() {
    return (
      <Root className={cx($p.flex, $p.flexColumn, $p.itemsCenter)}>
        <SectionHeader
          headline='How it works'
          copy='Graphcool is the platform that ties everything together. Set up your data model in the console and use the simple api to store and query data. Add integrations and custom logic with serverless functions, and easily connect your frontend application using one of the many open source GraphQL clients.' // tslint:disable-line
        />
        <Graph>
          {window.innerWidth >= breakpoints.p750 &&
          <img
            className={cx($p.w100, $p.hAuto, $p.db)}
            src={require('../../assets/graphics/architecture.svg')}
            alt='Architecture'
          />
          }
          {window.innerWidth < breakpoints.p750 && window.innerWidth >= breakpoints.p500 &&
          <img
            className={cx($p.w100, $p.hAuto, $p.db)}
            src={require('../../assets/graphics/architectureMobile.svg')}
            alt='Architecture'
          />
          }
          {window.innerWidth < breakpoints.p500 &&
          <img
            className={cx($p.w100, $p.hAuto, $p.db)}
            src={require('../../assets/graphics/architectureSmallMobile.svg')}
            alt='Architecture'
          />
          }
        </Graph>
      </Root>
    )
  }
}
