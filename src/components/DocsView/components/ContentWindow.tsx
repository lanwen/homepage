import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  margin-top: 200px;
`
const Content = styled.div`
  max-width: 1063px;
`

interface Props {
  children?: any
}

export default class ContentWindow extends React.Component<Props, {}> {
  render() {
    return (
      <ContentWrapper className={cx($p.mb60, $p.flex, $p.justifyCenter)}>
        <Content className={cx($p.flex, $p.flexColumn)}>
          {this.props.children}
        </Content>
      </ContentWrapper>
    )
  }
}
