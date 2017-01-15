import * as React from 'react'
import {$p} from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import FeatureBox from './FeatureBox'

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

export default () => (
  <FeaturesBackground className={cx($p.flex, $p.itemsCenter, $p.mt60)}>
    <Root>
      <div className={cx($p.flex)}>
        <FeatureBox
          title='Platform'
          iconSrc={require('../../../../assets/icons/references/graphcool.svg')}
          text='Explains all features and concepts of the Graphcool platform.'
          link='/docs/reference/platform/overview-chohbah0eo'
          className={cx($p.mr25, $p.flex1)}
        />
        <FeatureBox
          title='Simple API'
          iconSrc={require('../../../../assets/icons/references/simple.svg')}
          text='Reference for how to query, mutate or manage data. The Simple API is meant for GraphQL clients like Apollo.'
          link='/docs/reference/simple-api/overview-heshoov3ai'
          className={cx($p.mr25, $p.flex1)}
        />
        <FeatureBox
          title='Relay API'
          iconSrc={require('../../../../assets/icons/references/relay.svg')}
          text='Reference for how to query, mutate or manage data. The Relay API is meant for the Relay GraphQL client.'
          link='/docs/reference/relay-api/overview-aizoong9ah'
          className={cx($p.flex1)}
        />
      </div>
    </Root>
  </FeaturesBackground>
)
