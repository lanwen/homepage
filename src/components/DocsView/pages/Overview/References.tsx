import * as React from 'react'
import { $p, $v } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import FeatureBox from './FeatureBox'
import {breakpoints} from '../../../../utils/constants'

const Root = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  position: relative;
  z-index: unset;
  
  &:before {
    content: "";
    position: absolute;
    top: ${$v.size10};
    bottom: ${$v.size10};
    left: 0;
    width: 100%;
    background: ${$v.gray02};
  }
  
  margin-top: ${$v.size60};
  
  @media (max-width: ${breakpoints.p400}px) {
    padding-left: ${$v.size25};
    padding-right: ${$v.size25};
  }
  
  @media (max-width: ${breakpoints.p580}px) {
    margin-top: ${$v.size38};
    paddingright: ${$v.size60};
  }
  
  @media (max-width: ${breakpoints.p900}px) {
    padding-left: ${$v.size38};
    padding-right: ${$v.size38};
  }
  
  @media (min-width: ${breakpoints.p1200}px) {
    padding-left: ${$v.size60};
    padding-right: ${$v.size60};
  }
`

{/*
 const Container = styled.div`
 @media (max-width: ${breakpoints.p1000}px) {
 flex-direction: column;
 justify-content: flex-start;
 }
 `
 */
}

const References = () => {
  return (
    <Root>
      <div className={cx(
        $p.flex, $p.relative,
        window.innerWidth < breakpoints.p1000 && $p.flexColumn,
      )}>
        <FeatureBox
          title='Platform'
          iconSrc={require('../../../../assets/icons/references/graphcool.svg')}
          text='Explains all features and concepts of the Graphcool platform.'
          link='/docs/reference/platform/overview-chohbah0eo'
          className={cx(
            $p.flex1,
            window.innerWidth > breakpoints.p1000 && $p.mr25,
        )}
        />
        <FeatureBox
          title='Simple API'
          iconSrc={require('../../../../assets/icons/references/simple.svg')}
          text='A complete reference on how to query, mutate or manage data with our simple API'
          link='/docs/reference/simple-api/overview-heshoov3ai'
          className={cx(
            $p.flex1,
            window.innerWidth > breakpoints.p1000 ? $p.mr25 : $p.mt16,
          )}
        />
        <FeatureBox
          title='Relay API'
          iconSrc={require('../../../../assets/icons/references/relay.svg')}
          text='For more advanced usage, a complete reference of the Relay API'
          link='/docs/reference/relay-api/overview-aizoong9ah'
          className={cx(
            $p.flex1,
            window.innerWidth < breakpoints.p1000 && $p.mt16,
          )}
        />
      </div>
    </Root>
  )
}

export default References
