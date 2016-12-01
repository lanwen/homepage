import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g } from 'graphcool-styles'
import styled from 'styled-components'
import SectionHeader from '../SectionHeader'
import Examples from './Examples'
import Fields from './Fields'
import { breakpoints } from '../../../utils/constants'

export default class Functions extends React.Component<{}, {}> {

  render() {
    return (
      <section>
        <SectionHeader
          headline='Whatever headline we have here'
          copy='I have hinted that I would often jerk poor Queequeg from between the whale and the ship where he would.'
        />
        <Examples />
        <Fields />
      </section>
    )
  }
}
