import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, Icon } from 'graphcool-styles'
import styled from 'styled-components'
import { maxWidth, breakpoints } from '../../utils/constants'
import Mission from './Mission'
import ServiceStatus from './ServiceStatus'
import Product from './Product'
import Docs from './Docs'
import Company from './Company'
import Social from './Social'
import LogoBar from '../HomeView/LogoBar'

const Root = styled.footer`
  padding: 0 ${$v.size38} ${$v.size96};
  font-size: ${$v.size14};
  
  @media (min-width: ${breakpoints.p1000}px) {
    font-size: ${$v.size16}
  }
  
  @media (min-width: ${breakpoints.p1360}px) {
    padding: 0 ${$v.size96} ${$v.size96};
  }

  p {
    font-size: inherit;
  }
  
  .headline {
    font-size: inherit;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${$v.white30};
    line-height: 1;
    height: ${parseFloat($v.size25) + parseFloat($v.size10)}px;
    
    @media (min-width: ${breakpoints.p1000}px) {
      height: ${parseFloat($v.size38) + parseFloat($v.size10)}px;
    }
  }
  
  .list {
    list-style-type: none;
    
    li {
      margin-bottom: ${$v.size10}; 
    }
    
    a {
      color: inherit;
      text-decoration: none;
    }
  }
`

const Container = styled.div`
  max-width: ${maxWidth}px;
  padding-top: ${$v.size60}; 
  margin-bottom: ${$v.size96};
`

const LogoFlag = styled.div`
  top: -3px;
  width: 35px;
  height: 35px;
`

const Column = styled.div`
  flex: 0 0 auto;
`

const MissionColumn = styled(Column)`

   width: 50%;
   
  @media (min-width: ${breakpoints.p580}px) {
    width: 30%;
  }

  @media (min-width: ${breakpoints.p750}px) {
    width: 25%;
  }
  
  @media (min-width: ${breakpoints.p1360}px) {
    width: 20%;
  }
`

const SocialColumn = styled(Column)`
  width: 175px;

  @media (min-width: ${breakpoints.p1000}px) {
    width: 201px;
  }
`

const Footer = () => (
  <Root className={cx($p.bgDarkBlue, $p.white70, $p.z2)} id='footer'>
    <Container className={cx($p.relative, $p.center, $p.flex, $p.justifyBetween)}>
      <LogoFlag
        className={cx($p.absolute, $p.left0, $p.bgGreen, $p.br2, $p.flex, $p.itemsCenter, $p.justifyCenter)}
      >
        <Icon src={require('../../assets/icons/graphcool.svg')} width={18} height={21} color={$v.white}/>
      </LogoFlag>

      {window.innerWidth < breakpoints.p1360 &&
      <MissionColumn>
        <ServiceStatus/>
        <Mission/>
        {window.innerWidth < breakpoints.p580 &&
          <Social/>
        }
      </MissionColumn>
      }

      {window.innerWidth >= breakpoints.p1360 &&
      <MissionColumn>
        <Mission/>
      </MissionColumn>
      }

      {window.innerWidth >= breakpoints.p1360 &&
      <Column>
        <ServiceStatus/>
      </Column>
      }

      <Column>
        <Product/>
        {window.innerWidth < breakpoints.p1000 &&
        <Docs/>
        }
        {window.innerWidth < breakpoints.p580 &&
          <Company/>
        }
      </Column>

      {window.innerWidth >= breakpoints.p1000 &&
      <Column>
        <Docs/>
      </Column>
      }

      {window.innerWidth >= breakpoints.p750 &&
      <Column>
        <Company/>
      </Column>
      }

      {window.innerWidth >= breakpoints.p580 &&
      <SocialColumn>
        {window.innerWidth < breakpoints.p750 &&
          <Company/>
        }
        <Social/>
      </SocialColumn>
      }

    </Container>
    <LogoBar white/>
  </Root>
)

export default Footer
