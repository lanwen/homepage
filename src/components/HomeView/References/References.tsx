import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import styled from 'styled-components'
import { maxWidth, breakpoints } from '../../../utils/constants'
import Reference from './Reference'
import Pagination from '../Pagination'

const Container = styled.div`
  max-width: ${maxWidth}px;
  margin: 0 auto;
`

export default class References extends React.Component<{}, {}> {

  render() {
    return (
      <section className={cx($p.bgLightgreen10, $p.pa60, $p.pb38, $p.tc)}>
        <Container>
          <Reference
            quote='We really, really like this product. We don’t need backend-devs anymore. That’s great!'
            author='Random CTO'
          />
        </Container>
        <div className={cx($p.flex, $p.justifyCenter)}>
          <Pagination bullets={3} />
        </div>
      </section>
    )
  }
}
