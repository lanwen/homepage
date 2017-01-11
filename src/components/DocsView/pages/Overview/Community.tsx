import * as React from 'react'
import {$p} from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import SlackBox from './SlackBox'

const Container = styled.div`
  max-width: 920px;
  margin: 0 auto;
  position: relative;
  top: -20px;
`

const FeaturesBackground = styled.div`
  background: rgba(0,0,0,.02);
  height: 254px;
  margin: 25px 0;
`

const A = `
  margin-top: 45px;
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

interface Props {

}

export default (props: Props) => (
  <FeaturesBackground>
    <Container className={cx($p.flex)}>
      <SlackBox />
      <div className={cx($p.flex1, $p.ph25, $p.pv38)}>
        <ImgWrapper className={cx($p.flex, $p.itemsCenter, $p.justifyCenter)}>
          <img src={require('../../../../assets/graphics/community/githubTextBig.svg')} />
        </ImgWrapper>
        <div className={cx($p.mt16)}>Contribute on github to whatever you like within our repositories.</div>
        <StyledA
          href='https://github.com/graphcool'
          className={cx(
            $p.ttu,
            $p.f14,
            $p.black50,
            $p.noUnderline,
            $p.bgWhite,
            $p.buttonShadow,
            $p.flex,
            $p.itemsCenter,
            $p.dib,
            $p.pa10,
            $p.fw6,
            $p.pl16,
          )}
        >
          <img src={require('../../../../assets/graphics/community/githubIconSmall.svg')} />
          <div className={cx($p.ml6)}>
            Go to our repositories
          </div>
        </StyledA>
      </div>
      <div className={cx($p.flex1, $p.ph25, $p.pv38)}>
        <ImgWrapper className={cx($p.flex, $p.itemsCenter, $p.justifyCenter)}>
          <img src={require('../../../../assets/graphics/community/stackoverflow.svg')} />
        </ImgWrapper>
        <div className={cx($p.mt16)}>Browse for #graphcool to get answers to common questions</div>
        <StyledB
          href='https://github.com/graphcool'
          className={cx(
            $p.ttu,
            $p.f14,
            $p.black50,
            $p.noUnderline,
            $p.bgWhite,
            $p.buttonShadow,
            $p.flex,
            $p.itemsCenter,
            $p.dib,
            $p.pa10,
            $p.fw6,
            $p.pl16,
          )}
        >
          <div className={cx($p.ml6)}>
            Get help with #graphcool
          </div>
        </StyledB>
      </div>
    </Container>
  </FeaturesBackground>
)