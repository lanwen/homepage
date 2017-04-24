import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import SectionHeader from '../../SectionHeader'
import styled from 'styled-components'
import Cell from './Cell'
import { breakpoints, maxWidth } from '../../../utils/constants'
import HorScrollbox from '../../HorScrollbox'

const Root = styled.section`
  
  .cell {
    min-width: 175px;
    position: relative;
    display: flex;
    align-items: center;
    width: 25%;
    padding: 0 ${$v.size16};
    height: ${parseFloat($v.size20) * 2 + parseFloat($v.size14) * 1.5}px;
    border-left: 1px solid ${$v.gray10};
    
    @media (min-width: ${breakpoints.p1250}px) {
      padding: 0 ${$v.size20};
      height: ${parseFloat($v.size25) * 2 + parseFloat($v.size16) * 1.5}px;
    }
  }

`

const Table = styled.div`
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: ${$v.size38};
    background: linear-gradient(to left, ${$v.white}, rgba(255,255,255,0));
  }
`

const TableContainer = styled(HorScrollbox)`
  padding-right: ${$v.size10};
  padding-bottom: 250px;
  margin-bottom: -250px;
`

const RowBase = styled.div`
  display: flex;
  cursor: default;
  min-width: ${4 * (175 + 2 * 16 + 1) + (160 + 2 * 16)}px;
  max-width: ${maxWidth}px;
`

// const RowContainer = styled.div`
//   &:before, &:after {
//     content: "";
//   }
// `

const Row = styled(RowBase)`
  flex: 1;
  font-size: ${$v.size16};
  height: 61px;
  
  /* Needed for prerendering */
  min-height: ${parseFloat($v.size20) * 2 + parseFloat($v.size14) * 1.5}px;
  
  @media (min-width: ${breakpoints.p1250}px) {
    min-height: ${parseFloat($v.size25) * 2 + parseFloat($v.size16) * 1.5}px;
  }
  
  color: ${$v.gray30};
  border-top: 1px solid ${$v.gray10};
  transition: background ${$v.duration} linear, color ${$v.duration} linear;
  
  @media (min-width: ${breakpoints.p1250}px) {
    font-size: ${$v.size16};
  }
  
  &:hover {
    background: ${$v.gray04};
    color: ${$v.gray50};
  }
`

const HeadRow = styled(RowBase)`
  font-size: ${$v.size16};
  color: ${$v.gray50};
  font-weight: 400; 
  
  img {
    width: 24px;
    height: 32px;
  }
  
  @media (min-width: ${breakpoints.p1250}px) {
    font-size: ${$v.size20};
    font-weight: 300;
    
    img {
      width: 30px;
      height: 40px;
    }
  }
`

const MetricsCell = styled.div`
  width: 160px !important;
  flex: 0 0 auto;
  border: none !important;
  
  @media (min-width: ${breakpoints.p1250}px) {
    width: 230px !important;
  }
`

export default class ComparisonChart extends React.Component<{}, {}> {
  read = false

  render() {
    return (
      <Root
        onMouseEnter={() => {
          if (!this.read) {
            ga('send', 'event', 'homepage', 'clicked', 'features', 'serverless')
            this.read = true
          }
        }}
      >
        <SectionHeader
          headline='A backend platform for more than just prototyping'
          copy='GraphQL and serverless functions enable you to iterate quickly and build scalable applications.'
        />
        <Table className={cx($p.flex, $p.justifyCenter, $p.relative)}>
          <TableContainer className={cx($p.flex, $p.flexColumn)}>
            <HeadRow>
              <MetricsCell className='cell'/>
              <div className='cell'>
                <img className={cx($p.mr10)} src={require('../../../assets/graphics/logos/graphcool.svg')}/>
                Graphcool
              </div>
              <div className='cell'>
                <img className={cx($p.mr10)} src={require('../../../assets/graphics/logos/firebase.svg')}/>
                Firebase
              </div>
              <div className='cell'>
                <img className={cx($p.mr10)} src={require('../../../assets/graphics/logos/parse.svg')}/>
                Parse
              </div>
              <div className='cell'>
                <img className={cx($p.mr10)} src={require('../../../assets/graphics/logos/scaphold.svg')}/>
                Scaphold
              </div>
            </HeadRow>
            <Row>
                <MetricsCell className='cell'>Developer friendly API</MetricsCell>
                <Cell
                  title='Open Standard'
                  description='Coherent API based on GraphQL'
                  veryGood
                />
                <Cell
                  title='Proprietary'
                  description='Proprietary SDK'
                  good
                />
                <Cell
                  title='Proprietary'
                  description='Proprietary SDK'
                  veryGood
                />
                <Cell
                  title='Limited API'
                  description='API based on GraphQL. Incoherent and difficult to use'
                  bad
                />
            </Row>
            <Row>
              <MetricsCell className='cell'>Datamodel Flexibility</MetricsCell>
              <Cell
                title='Object Graph'
                description='Nodes and relations can represent any data model'
                veryGood
              />
              <Cell
                title='Tree Structure'
                description={`Data models relying on relations don't fit the tree structure imposed by Firebase`}
                bad
              />
              <Cell
                title='Objects'
                description='Flexible data structure, but query capability is limited'
                good
              />
              <Cell
                title='Object Graph'
                description='Api is verbose and difficult to work with'
                good
              />
            </Row>
            <Row>
              <MetricsCell className='cell'>Expressiveness of Permission System</MetricsCell>
              <Cell
                title='Query System'
                description='Permissions are based on GraphQL queries or Serverless Functions allowing full flexibility' // tslint:disable-line
                veryGood
              />
              <Cell
                title='Path System'
                description='Permissions are based on the object path requiring significant upfront planning'
                good
              />
              <Cell
                title='Role System'
                description='Permissions are User role based making it difficult to implement many use cases'
                bad
              />
              <Cell
                title='Role System'
                description='Permissions are User role based making it difficult to implement many use cases'
                bad
              />
            </Row>
            <Row>
              <MetricsCell className='cell'>External service integrations</MetricsCell>
              <Cell
                title='Seamless'
                description='Integrations fit in seamlessly with the data model'
                veryGood
              />
              <Cell
                title='Limited'
                description='No integrations besides Social Login'
                bad
              />
              <Cell
                title='Custom Code'
                description='Based on custom code and Cloud Modules'
                good
              />
              <Cell
                title='Disjointed'
                description={`Integrations mirror external APIs and don't integrate seamlessly`}
                bad
              />
            </Row>
            <Row>
              <MetricsCell className='cell'>Realtime API</MetricsCell>
              <Cell
                title='GraphQL Subscriptions'
                description='Sophisticated GraphQL Subscription system supporting live queries and mutation channels'
                good
              />
              <Cell
                title='Data Binding'
                description='SDK based realtime data binding'
                veryGood
              />
              <Cell
                title='Live Queries'
                description='Available in self hosted version'
                good
              />
              <Cell
                title='GraphQL Subscriptions'
                description='Basic GraphQL subscriptions based on mutation channels'
                good
              />
            </Row>
            <Row>
              <MetricsCell className='cell'>Extensibility with custom logic</MetricsCell>
              <Cell
                title='Any language / technology'
                description='You can use any language or technology to extend Graphcool. Your custom code can be self-hosted (via webhooks) or deployed as serverless code' // tslint:disable-line
                veryGood
              />
              <Cell
                title='Limited'
                description='You can connect your own server to act as an additional client'
                bad
              />
              <Cell
                title='Proprietary CloudCode'
                description='Proprietary runtime environment based on Javascript SDK'
                good
              />
              <Cell
                title='Limited'
                description='You can define a single basic webhook integration'
                bad
              />
            </Row>
          </TableContainer>
        </Table>
      </Root>
    )
  }
}
