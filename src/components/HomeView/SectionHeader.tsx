import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../utils/constants'

const Root = styled.header`
  padding: ${$v.size96} ${$v.size38} ${$v.size60};
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (min-width: ${breakpoints.p750}px) {
    padding: ${$v.size96} ${$v.size60} ${$v.size60}
  }
  
  @media (min-width: ${breakpoints.p1200}px) {
    padding: ${$v.size96} ${$v.size60} ${$v.size60}
  }
  
  @media (max-width: ${breakpoints.p500}px) {
    text-align: left;
  }
  
  @media (max-width: ${breakpoints.p400}px) {
    padding: ${$v.size60} ${$v.size25} ${$v.size38}
  }
  
  // &:before {
  //   content: "";
  //   display: block;
  //   margin: 0 auto;
  //   width: 50px;
  //   height: 4px;
  //   background: ${$v.gray10};
  //   margin-bottom: ${$v.size60};
  // }
`

interface Props {
  headline: string | JSX.Element,
  copy: string,
}

export default class SectionHeader extends React.Component<Props, {}> {

  render() {
    return (
      <Root>
        <h2>{this.props.headline}</h2>
        <p className={cx($p.mt25, $p.black50)}>{this.props.copy}</p>
      </Root>
    )
  }
}
