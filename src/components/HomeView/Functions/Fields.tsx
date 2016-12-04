import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g, Icon } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../../utils/constants'
import Field from './Field'
import Pagination from '../Pagination'
import HorScrollbox from '../../HorScrollbox'

const Root = styled.div`
  margin-top: -${$v.size16};
  padding: ${$v.size60};
  
  @media (max-width: ${breakpoints.p650}px) {
    padding: ${$v.size60} 0 ${$v.size38};
  }
  
  @media (min-width: ${breakpoints.p750}px) {
    padding: ${$v.size96};  
  }
`

const Header = styled.header`
  padding: 0 ${$v.size38};
  
  @media (max-width: ${breakpoints.p500}px) {
    text-align: left;
  }
  
  @media (max-width: ${breakpoints.p400}px) {
    padding: 0 ${$v.size25};
  }
`

const Container = styled(HorScrollbox)`
  flex-wrap: wrap;
  justify-content: center;
  padding: ${$v.size25} 0 0;
  
  @media (max-width: ${breakpoints.p650}px) {
    flex-wrap: nowrap;
    padding: ${$v.size38} 0 0;
    overflow: auto;
    justify-content: flex-start;
  }
  
  @media (min-width: 920px) {
    padding: ${$v.size25} ${$v.size96} 0;
  }
  
  @media (min-width: ${breakpoints.p1000}px) {
    flex-wrap: nowrap;
    padding: ${$v.size25} 0 0;
  }
  
  @media (min-width: ${breakpoints.p650 + 1}px) {
    overflow: visible;
    -webkit-overflow-scrolling: initial;
    box-sizing: content-box;
  }
`

export default class Fields extends React.Component<{}, {}> {

  render() {
    return (
      <Root className={cx($p.tc, $p.bgDarkBlue)}>
        <Header>
          <h3 className={cx($p.white)}>
            What Serverless Functions can do for you
          </h3>
        </Header>
        <Container className={cx($p.flex)}>
          <Field
            icon='action'
            title='Mutation Callbacks'
            description='Send a welcome mail to new users or run sofisticated spam detection when a new comment is posted'
          />
          <Field
            icon='permission'
            title='Permissions'
            description='Integrate with existing authentication system or run arbitrary code to decide who can see and do what'
          />
          <Field
            icon='validation'
            title='Validation'
            description='Make sure your data stays consistent by performing custom validation before saving new data'
          />
          <Field
            icon='query'
            title='Mutations/Queries'
            description='Extend your GraphQL schema with custom fields and mutations that can integrate with legacy or third party systems'
          />
          <Field
            icon='fields'
            title='Computed Fields'
            description='Add data display logic to your schema with Custom Fields. displayName could return userName if available and fall back to firstName and lastName concatenated'
          />
        </Container>
        {window.innerWidth <= breakpoints.p650 &&
        <div className={cx($p.mt25, $p.flex, $p.justifyCenter)}>
          <Pagination
            bullets={5}
            onDark
            active={0}
            onSelect={() => null}
          />
        </div>
        }
      </Root>
    )
  }
}
