import * as React from 'react'
import { Link } from 'react-router'
import * as cx from 'classnames'
import { $v, $p, $g, Icon } from 'graphcool-styles'
import styled from 'styled-components'
import Separator from '../../Separator'
import SectionHeader from '../../SectionHeader'
import SecondaryCallToAction from '../../SecondaryCallToAction'
import QuickstartTechnology from './QuickstartTechnology'
import { breakpoints } from '../../../utils/constants'

const Root = styled.section`
  @media (max-width: ${breakpoints.p500}px) {
    align-items: flex-start;
  }
`

const QuickstartContainer = styled.div`

  margin-bottom: ${$v.size60};
  
  @media (min-width: ${breakpoints.p500 + 1}px) {
    > div {
      filter: blur(0px)
      transition: filter .4s ease, opacity .4s ease, transform .4s ease;
    }
    
    &:hover {
      > div {
        filter: blur(10px);
        opacity: .5;
        transform: scale(0.98);
      }
      
      a {
        opacity: 1;
      }
    }
  }
  
  @media (max-width: ${breakpoints.p500}px) {
    flex-direction: column;
    // align-items: flex-start;
    margin-bottom: ${$v.size38};
  }
`

const TechContainer = styled.div`
  @media (max-width: ${breakpoints.p1200}px) {
    flex-direction: column;
  }
  
  // @media (max-width: ${breakpoints.p500}px) {
  //   align-items: flex-start
  // }
`

const TechInnerContainer = styled.div`
  @media (max-width: ${breakpoints.p1200}px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  // @media (max-width: ${breakpoints.p500}px) {
  //   justify-content: flex-start;
  // }
`

const Plus = styled.div`
  @media (max-width: ${breakpoints.p1200}px) {
    margin: ${$v.size16} 0;
  }
  
  @media (max-width: 800px) {
    margin: ${$v.size06} 0;
  }
`

const CallToAction = styled(Link)`
  opacity: 0;
  transition: opacity .4s ease;
  
  @media (max-width: ${breakpoints.p500}px) {
    position: static;
    opacity: 1;
    transform: translate(0,0);
    margin: ${$v.size25} auto 0;
  }
`

const frontendTech = [{
  technology: 'react',
  color: '#00D8FF',
  opacity: 0.1,
}, {
  technology: 'angular',
  color: '#DD0031',
  opacity: 0.1,
}, {
  technology: 'react',
  color: '#1A7F91',
  opacity: 0.1,
}, {
  technology: 'ios',
  color: '#000',
  opacity: 0.06,
}, {
  technology: 'android',
  color: '#A4C439',
  opacity: 0.1,
}, {
  technology: 'vue',
  color: '#41B883',
  opacity: 0.1,
}]

const clientTech = [{
  technology: 'apollo',
  color: '#0A2C49',
  opacity: 0.08,
}, {
  technology: 'relay',
  color: '#EF6005',
  opacity: 0.1,
}]

export default class Quickstart extends React.Component<{}, {}> {
  render() {

    return (
      <Root className={cx($p.flex, $p.flexColumn, $p.itemsCenter, $p.overflowHidden)}>
        <Separator />
        <SectionHeader
          headline='Getting started is easy'
          copy='Graphcool works with your favorite framework and technology. No SDKs required.'
        />
        <QuickstartContainer className={cx($p.relative, $p.flex, $p.itemsCenter, $p.justifyCenter, $p.center)}>
          <TechContainer className={cx($p.flex, $p.itemsCenter, $p.ph25)}>
            <TechInnerContainer className={cx($p.flex)}>
              {frontendTech.map((node, count) => {
                return (
                  <QuickstartTechnology
                    key={count}
                    technology={node.technology}
                    color={node.color}
                    opacity={node.opacity}
                  />
                )
              })}
              {window.innerWidth <= 500 && clientTech.map((node, count) => {
                return (
                  <QuickstartTechnology
                    key={count}
                    technology={node.technology}
                    color={node.color}
                    opacity={node.opacity}
                  />
                )
              })}
            </TechInnerContainer>
            {window.innerWidth > 500 &&
            <Plus className={cx($p.mh25)}>
              <Icon
                src={require('graphcool-styles/icons/stroke/addFull.svg')}
                width={25}
                height={25}
                color={$v.gray20}
                stroke
                strokeWidth={5}
              />
            </Plus>
            }
            {window.innerWidth > 500 &&
            <TechInnerContainer className={cx($p.flex)}>
              {clientTech.map((node, count) => {
                return (
                  <QuickstartTechnology
                    key={count}
                    technology={node.technology}
                    color={node.color}
                    opacity={node.opacity}
                  />
                )
              })}
            </TechInnerContainer>
            }
          </TechContainer>
          <CallToAction
            to='/docs/quickstart'
            className={cx(
              $g.uppercaseButton,
              $p.bgGreen,
              $p.white,
              $p.buttonShadow,
              $p.absolute,
              $p.top50,
              $p.left50,
              $p.tlCenter,
              $p.noUnderline,
            )}
          >Open Quickstart</CallToAction>
        </QuickstartContainer>
        <SecondaryCallToAction
          text='Explore our docs'
          link='/docs/'
          className={cx($p.center)}
        />
      </Root>
    )
  }
}
