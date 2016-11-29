import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import styled from 'styled-components'
import SectionHeader from './SectionHeader'

const Root = styled.div`
  
`

export default class QueryEditor extends React.Component<{}, {}> {

  render() {
    return (
      <section>
        <SectionHeader
          headline='Whatever headline we have here'
          copy='I have hinted that I would often jerk poor Queequeg from between the whale and the ship where he would.'
        />
        <Root>

        </Root>
      </section>
    )
  }
}
