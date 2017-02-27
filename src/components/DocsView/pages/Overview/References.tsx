import * as React from 'react'
import { $v } from 'graphcool-styles'
import styled from 'styled-components'
import FeatureBox from './FeatureBox'
import {breakpoints} from '../../../../utils/constants'

const Root = styled.div`
  position: relative;
  margin-top: ${$v.size60};

  &:before {
    content: "";
    position: absolute;
    top: ${$v.size10};
    bottom: ${$v.size10};
    left: 0;
    width: 100%;
    background: ${$v.gray02};
  }
`

const RootContainer = styled.div`  
  display: flex;
  position: relative;
  max-width: 1050px;
  margin: 0 auto;
  z-index: unset;
  padding-left: ${$v.size38};
  padding-right: ${$v.size38};
  
  @media (max-width: ${breakpoints.p400}px) {
    padding-left: ${$v.size25};
    padding-right: ${$v.size25};
  }
  
  @media (max-width: ${breakpoints.p580}px) {
    margin-top: ${$v.size38};
  }
  
  @media (max-width: 800px) {
    flex-direction: column;
  }
  
  @media (min-width: ${breakpoints.p1200}px) {
    padding-left: ${$v.size60};
    padding-right: ${$v.size60};
  }
`

const References = () => {
  return (
    <Root>
      <RootContainer>
        <FeatureBox
          title='Platform'
          iconSrc={require('../../../../assets/icons/references/graphcool.svg')}
          text='Explains all features and concepts of the Graphcool platform.'
          link='/docs/reference/platform/overview-chohbah0eo'
        />
        <FeatureBox
          title='Simple API'
          iconSrc={require('../../../../assets/icons/references/simple.svg')}
          text='A complete reference on how to query, mutate or manage data with our simple API'
          link='/docs/reference/simple-api/overview-heshoov3ai'
        />
        <FeatureBox
          title='Relay API'
          iconSrc={require('../../../../assets/icons/references/relay.svg')}
          text='For more advanced usage, a complete reference of the Relay API'
          link='/docs/reference/relay-api/overview-aizoong9ah'
        />
      </RootContainer>
    </Root>
  )
}

export default References
