import * as React from 'react'
import { $p, $v } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import SlackBox from './SlackBox'
import {breakpoints} from '../../../../utils/constants'

const Container = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  position: relative;
  top: -20px;
  
  @media (max-width: ${breakpoints.p580}px) {
    padding-top: ${$v.size60};
    padding-right: ${$v.size60};
    padding-left: ${$v.size60};
  }
`

const FeaturesBackground = styled.div`
  background: rgba(0,0,0,.02);
  height: 235px;
  margin: 25px 0;
  
  @media (max-width: ${breakpoints.p750}px) {
    height: 700px;    
  }
  
  @media (max-width: ${breakpoints.p580}px) {
    height: auto;
  }
`

const A = `
  margin-top: 24px;
  letter-spacing: 0.52px;
`

const StyledA = styled.a`
  ${A}
`

const StyledB = styled.a`
  ${A}
  color: rgb(244, 128, 36);
`

const ImgWrapper = styled.div`
  height: 36px;
`

export default () => (
  <FeaturesBackground>
    <Container className={cx(
      $p.flex,
      window.innerWidth < breakpoints.p750 && $p.flexColumn,
      $p.itemsCenter,
    )}>
      <SlackBox className={cx(
        $p.pt25,
        window.innerWidth > breakpoints.p750 ? $p.mt10 : $p.mt38,
        window.innerWidth > breakpoints.p750 && $p.mr38,
      )}/>
      <div className={cx(
        $p.ph38,
        window.innerWidth < breakpoints.p750 && $p.mt60,
      )}>
        <ImgWrapper className={cx($p.flex, $p.itemsCenter, $p.justifyCenter)}>
          <img src={require('../../../../assets/graphics/docs/community/githubTextBig.svg')} />
        </ImgWrapper>
        <div className={cx($p.mt16)}>Contribute on github to whatever you like within our repositories.</div>
        <StyledA
          href='https://github.com/graphcool'
          target='_blank'
          className={cx(
            $p.flex,
            $p.itemsCenter,
            window.innerWidth < breakpoints.p750 && $p.justifyCenter,
            $p.black50,
            $p.bgWhite,
            $p.buttonShadow,
            $p.f14,
            $p.fw6,
            $p.ttu,
            $p.noUnderline,
            $p.dib,
            $p.pa10,
            $p.pl16,
          )}
        >
          <img src={require('../../../../assets/graphics/docs/community/githubIconSmall.svg')} />
          <div className={cx(
            $p.ml6,
          )}>
            Go to our repositories
          </div>
        </StyledA>
      </div>
      <div className={cx(
        $p.ph38,
        window.innerWidth < breakpoints.p750 && $p.mt60,
      )}>
        <ImgWrapper className={cx($p.flex, $p.itemsCenter, $p.justifyCenter)}>
          <img src={require('../../../../assets/graphics/docs/community/stackoverflow.svg')} />
        </ImgWrapper>
        <div className={cx($p.mt16)}>Browse for #graphcool to get answers to common questions</div>
        <StyledB
          href='http://stackoverflow.com/search?q=%23graphcool'
          target='_blank'
          className={cx(
            $p.flex,
            $p.itemsCenter,
            window.innerWidth < breakpoints.p750 && $p.justifyCenter,
            $p.black50,
            $p.bgWhite,
            $p.buttonShadow,
            $p.f14,
            $p.fw6,
            $p.ttu,
            $p.noUnderline,
            $p.dib,
            $p.pa10,
            $p.pl16,
          )}
        >
          <div className={cx(
            $p.ml6,
          )}>
            Get help with #graphcool
          </div>
        </StyledB>
      </div>
    </Container>
  </FeaturesBackground>
)
