import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g, Icon } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../../utils/constants'
import Field from './Field'
import Pagination from '../Pagination'

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

const Container = styled.div`
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
`

export default class Fields extends React.Component<{}, {}> {

  render() {
    return (
      <Root className={cx($p.tc, $p.bgDarkBlue)}>
        <Header>
          <h3 className={cx($p.white)}>
            What Serverless functions can do for you
          </h3>
        </Header>
        <Container className={cx($p.flex)}>
          <Field
            icon='action'
            title='Actions'
            description='I have hinted that I would often jerk poor Queequeg from between the whale and the ship.'
          />
          <Field
            icon='permission'
            title='Permissions'
            description='I have hinted that I would often jerk poor Queequeg from between the whale and the ship.'
          />
          <Field
            icon='validation'
            title='Validation'
            description='I have hinted that I would often jerk poor Queequeg from between the whale and the ship.'
          />
          <Field
            icon='query'
            title='Mutations/Queries'
            description='I have hinted that I would often jerk poor Queequeg from between the whale and the ship.'
          />
          <Field
            icon='fields'
            title='Computed fields'
            description='I have hinted that I would often jerk poor Queequeg from between the whale and the ship.'
          />
        </Container>
        {window.innerWidth <= breakpoints.p650 &&
        <div className={cx($p.mt25, $p.flex, $p.justifyCenter)}>
          <Pagination bullets={5} onDark/>
        </div>
        }
      </Root>
    )
  }
}
