import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, Icon } from 'graphcool-styles'
import styled from 'styled-components'
import { maxWidth, breakpoints } from '../../../utils/constants'
import SectionHeader from '../SectionHeader'
import Block from './Block'
import Pagination from '../Pagination'
import HorScrollbox from '../../HorScrollbox'

const Root = styled.div`
  overflow: hidden;
  
  &:before{
    content: "";
    position: absolute;
    top: ${parseFloat($v.size16) + parseFloat($v.size10)}px;
    left: 0;
    bottom: 0;
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
    
  @media (min-width: ${breakpoints.p1000}px) {
    overflow: visible;

    &:before {
      top: 16px;
      bottom: ${$v.size16};
    }
  }
  
`

const Container = styled(HorScrollbox)`
  max-width: ${maxWidth}px;
  padding: ${$v.size10} 0 ${$v.size25};
  font-size: ${$v.size14};
  
  @media (min-width: ${breakpoints.p1000}px) {
    padding: ${$v.size38} ${$v.size25};
    overflow: visible;
  }
  
  @media (min-width: ${breakpoints.p1200}px) {
    padding: ${$v.size38} ${$v.size60};
    font-size: ${$v.size16};
  }
`

const Legend = styled.div `  
  padding-top: 42px;
`

const TheOldWay = styled.div`
  font-size: ${$v.size14};
  
  @media (min-width: ${breakpoints.p1200}px) {
    font-size: ${$v.size16};
  }
`

const GraphcoolLogo = styled.div`
  padding-top: 31px;
`

export default class Timeline extends React.Component<{}, {}> {

  render() {

  const data = [
  {
    title: "Initial Setup",
    old: ['Pick language and framework', 'Setup servers', 'Configure database', 'Add tables and ORM mapping code'],
    new: ['Create your first model in minutes'],
    oldSegments: [10,50,30,20],
    newWegments: [20]
  },{
    title: "Iterate",
    old: ['Migrate database', 'Adjust ORM mapping', 'Add infrastructure to support new features', 'Coordinate releases between teams'],
    new: ['Change your data model with a few clicks', 'Add integrations'],
    oldSegments: [10,30,50,10],
    newWegments: [20, 10]
  },{
    title: "Scaling",
    old: ['Create database indexes', 'Monitor server load', 'Install load balancer', 'Configure data replication and active failover'],
    new: ['Graphcool indexes your data as required', 'Pay only for the operations you consume'],
    oldSegments: [10,30,20,40],
    newWegments: [10, 10]
  }]

    return (
      <section>
        <SectionHeader
          headline='Don’t reinvent the wheel. Build apps faster'
          copy='Stop wasting time writing error-prone database migrations and monitoring log files. Graphcool handles all of that so you can focus on what matters: Building your app.'
        />
        <Root className={cx($p.relative)}>
          <Container className={cx($p.center, $p.flex, $p.relative)}>
            {window.innerWidth >= breakpoints.p1000 &&
            <Legend className={cx($p.flexFixed, $p.flex, $p.flexColumn, $p.itemsEnd, $p.pr16)}>
              <TheOldWay className={cx($p.ttu, $p.fw6, $p.black30, $p.tracked, $p.lhSolid)}>The old way</TheOldWay>
              <GraphcoolLogo>
                <Icon
                  src={require('../../../assets/icons/graphcool.svg')}
                  width={18 * 1.5}
                  height={21 * 1.5}
                  color={$v.green}
                />
              </GraphcoolLogo>
            </Legend>
            }

            {data.map((x) => <Block label={x.title} old={x.old} new={x.new} oldSegments={x.oldSegments} newSegments={x.newWegments}/>)}

          </Container>
          {window.innerWidth < breakpoints.p500 &&
          <div className={cx($p.flex, $p.justifyCenter, $p.pb25)}>
            <Pagination
              bullets={3}
              grayscale
              active={0}
              onSelect={() => null}
            />
          </div>
          }
        </Root>
      </section>
    )
  }
}
