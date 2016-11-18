import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'

import SectionHeader from './SectionHeader'
import { maxWidth } from '../../utils/constants'

const Root = styled.div`
  &:before{
    content: "";
    position: absolute;
    top: ${$v.size16};
    bottom: ${$v.size16};
    width: 100%;
    background: ${$v.gray02};
  }
`

const Container = styled.div`
  max-width: ${maxWidth}px;
`

export default class Timeline extends React.Component<{}, {}> {

  render() {
    return (
      <section>
        <SectionHeader
          headline='Whatever headline we have here'
          copy='I have hinted that I would often jerk poor Queequeg from between the whale and the ship where he would.'
        />
        <Root className={cx($p.relative)}>
          <Container className={cx($p.center, $p.relative, $p.flex)}>
            <div className={cx($p.mv16, $p.pv16)}>
              Timeline
            </div>
          </Container>
        </Root>
      </section>
    )
  }
}
