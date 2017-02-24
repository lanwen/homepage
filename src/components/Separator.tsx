import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import { breakpoints } from '../utils/constants'
import styled from 'styled-components'

const Root = styled.div`

  margin-top: ${$v.size96};
  
  @media (min-width: ${breakpoints.p750}px) {
    margin-top: ${$v.size96};
  }
  
  @media (min-width: ${breakpoints.p1200}px) {
    margin-top: ${$v.size96};
  }
  
  @media (max-width: ${breakpoints.p400}px) {
    margin-top: ${$v.size60};
  }
`

export default class Separator extends React.Component<{}, {}> {
  render() {
    return (
      <Root className={cx($p.wS96, $p.hS06, $p.bgLightgreen30, $p.center)} />
    )
  }
}
