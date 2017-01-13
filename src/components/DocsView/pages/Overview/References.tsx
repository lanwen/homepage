import * as React from 'react'
import {$p} from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import FeatureBox from './FeatureBox'
import {breakpoints} from '../../../../utils/constants'

interface Props {

}

const Root = styled.div`
  max-width: 1050px;
  margin: 0 auto;
`

{/*
const Container = styled.div`
  @media (max-width: ${breakpoints.p1000}px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`
 */}

const FeaturesBackground = styled.div`
  background: rgba(0,0,0,.02);
  height: 144px;
`

export default (props: Props) => (
  <FeaturesBackground className={cx($p.flex, $p.itemsCenter, $p.mt60)}>
    <Root>
      <div className={cx($p.flex)}>
        <FeatureBox
          title='Platform'
          iconSrc={require('../../../../assets/icons/references/graphcool.svg')}
          text='All features and everything else, explained in simple words'
          link='/docs/reference/platform/overview-chohbah0eo'
          className={cx($p.mr25, $p.flex1)}
        />
        <FeatureBox
          title='Simple API'
          iconSrc={require('../../../../assets/icons/references/simple.svg')}
          text='A complete reference on how to query, mutate or manage data with our simple API'
          link='/docs/reference/simple-api/overview-heshoov3ai'
          className={cx($p.mr25, $p.flex1)}
        />
        <FeatureBox
          title='Relay API'
          iconSrc={require('../../../../assets/icons/references/relay.svg')}
          text='For more advanced usage, a complete reference of the Relay API'
          link='/docs/reference/relay-api/overview-aizoong9ah'
          className={cx($p.flex1)}
        />
      </div>
    </Root>
  </FeaturesBackground>
)
