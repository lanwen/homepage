import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../utils/constants'

const SocialLinks = styled.div`
  margin-bottom: ${$v.size25};
  
  @media (min-width: ${breakpoints.p1000}px) {
    margin-bottom: ${$v.size38};
  }
`

const SocialLink = styled.a`
  text-decoration: none;
  opacity: .5;
  margin-right: ${$v.size10};
  transition: opacity ${$v.duration} linear;
  
  &:last-child {
    margin-right: 0;
  }
  
  &:hover {
    opacity: .7;
  }
  
  img {
    height: 26px;
    width: auto;
  }
  
  @media (min-width: ${breakpoints.p400}px) {
    margin-right: ${$v.size16};
  }
  
  @media (min-width: ${breakpoints.p1000}px) {
    img {
      height: 31px;
    }
  }

`

export default () => (
  <div className={cx(window.innerWidth < breakpoints.p750 ? $p.mt38 : '')}>
    <h4 className='headline'>Stay in touch</h4>
    <SocialLinks className={cx($p.flex)}>
      <SocialLink href='https://twitter.com/graphcool' target='_blank'>
        <img src={require('../../assets/graphics/logos/twitter.svg')}/>
      </SocialLink>
      <SocialLink href='https://github.com/graphcool' target='_blank'>
        <img src={require('../../assets/graphics/logos/github.svg')}/>
      </SocialLink>
      <SocialLink href='https://www.facebook.com/GraphcoolHQ/' target='_blank'>
        <img src={require('../../assets/graphics/logos/facebook.svg')}/>
      </SocialLink>
      <SocialLink href='https://www.youtube.com/c/graphcool' target='_blank'>
        <img src={require('../../assets/graphics/logos/youtube.svg')}/>
      </SocialLink>
    </SocialLinks>
    {/*
     <p className={cx($p.fw4)}>Sign up for our monthly newsletter</p>
     <NewsletterInput
     type='text'
     className={cx($p.mt16, $p.w100, $p.pa16, $p.lhSolid, $p.br2, $p.bgDarkerBlue, $p.white, $p.bbox)}
     placeholder='Just type your Email...'
     />
    */}
  </div>
)
