import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, Icon } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints, maxWidth } from '../../../utils/constants'
import LandingCallToAction from './LandingCallToAction'
import Hint from './Hint'
import Caret from './Caret'
import CompanyLogoBar from '../CompanyLogoBar'
import * as MediaQuery from 'react-responsive'

const Hero = styled.div`
  padding-left: ${$v.size16};
  padding-right: ${$v.size38};
  max-width: ${maxWidth}px;

  @media (max-width: ${breakpoints.p900}px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 0 ${$v.size38};
  }
  
  @media (max-width: ${breakpoints.p400}px) {
    padding: 0 ${$v.size25};
  }
  
  @media (min-width: ${breakpoints.p1200}px) {
    padding-left: ${$v.size38};
    padding-right: ${$v.size60};
    margin-bottom: ${$v.size60};
  }
`

const HeroImage = styled.a`
  width: 55%;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  
  .play {
    transform: translate3D(0,-6px,0);
    
    p {
      opacity: 1;
    }
  }
  
  @media (max-width: ${breakpoints.p900}px) {
    width: 100%;
    max-width: 95vh;
    margin-bottom: ${$v.size60};
  }
  
  @media (min-width: ${breakpoints.p1200}px) {
    width: 50%;
  }
  
  @media (min-width: ${breakpoints.p900 + 1}px) {
    
    .play {
      transform: translate3D(0,0,0);
      
      > div {
        transition: background .4s ease;
        
        svg {
          transition: fill .4s ease;
        }
      }
      
      p {
        opacity: 0;
      }
    }
  
    img {
      transition: filter .4s ease, opacity .4s ease, transform .4s ease;
    }
    
    &:hover {
      img {
        filter: blur(10px);
        opacity: .5;
        transform: scale(0.98);
      }
      
      .play {
        transform: translate3D(0,-6px,0);
        
        > div {
          background: ${$v.green};
          
          svg {
            fill: ${$v.white};
          }
        }
        
        p {
          opacity: 1;
        }
      }
    }  
  }
`

const PlayContainer = styled.div` 
  transition: transform .3s ease;
`

const Play = styled.div`
  // height: ${$v.size96}; 
  // width: ${$v.size96}; 
  
  height: 80px;
  width: 80px;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${$v.lightGreen20};
  }
  
  i {
    position: relative;
    left: 3px;
  }
`

const PlayCopy = styled.p`
  opacity: 0;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0)
  bottom: -38px;
  text-transform: uppercase;
  color: ${$v.green};
  letter-spacing: 1px;
  font-weight: 600;
  white-space: nowrap;
  font-size: ${$v.size14};
  transition: opacity .3s ease;
`

const HeroText = styled.div`
  justify-content: space-around;
  margin-left: ${$v.size38};
  
  @media (max-width: ${breakpoints.p900}px) {
    margin-left: 0;
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.p500}px) {
    text-align: left;
    width: 100%;
  }

  @media (min-width: ${breakpoints.p1200}px) {
    margin-left: ${$v.size60};
    justify-content: space-between;
  }
  
  @media (min-width: ${breakpoints.p1250}px) {
    margin-top: ${$v.size16};
    margin-bottom: ${$v.size16};
  }
`

const Headline = styled.h1`
  // @media (min-width: ${breakpoints.p1250}px) {
  //   padding-top: ${$v.size38};
  // }
`

const BuiltFor = styled.div`
  font-weight: 400;
  margin-top: ${$v.size16};
    
  @media (min-width: ${breakpoints.p1000}px) {
    font-weight: 300;
  }  
  
  @media (min-width: ${breakpoints.p1200}px) {
    margin-top: 0;
  }
`

const Copy = styled.p`
  font-size: ${$v.size16};
  // padding: ${$v.size25} 0 ${parseFloat($v.size25) + parseFloat($v.size16)}px;
  font-weight: 400;
  
  @media (min-width: ${breakpoints.p1000}px) {
    font-size: ${$v.size20};
    font-weight: 300;
  }
  
  @media (min-width: ${breakpoints.p1360}px) {
    font-size: ${$v.size25};
    // padding: ${$v.size60} 0;      
  }
  
  // @media (min-width: ${breakpoints.p1440}px) {
  //   padding: ${$v.size60} 0;
  // }
  
  @media (max-width: ${breakpoints.p900}px) {
    margin-top: ${$v.size38};
  }
  
  @media (max-width: ${breakpoints.p500}px) {
    margin-top: ${$v.size25};
  }
`

interface State {
  activeStep: number
}

export default class Landing extends React.Component<{}, {}> {

  state: State = {
    activeStep: 0,
  }

  render() {
    return (
      <section>
        <Hero className={cx($p.flex, $p.center)}>
          <HeroImage
            className={cx($p.flexFixed, $p.relative)}
            href='https://www.youtube.com/watch?v=SooujCyMHe4'
            target='_blank'
            onClick={() => {
              ga('send', 'event', 'homepage', 'clicked', 'video')
            }}
          >
            <img
              className={cx($p.w100, $p.hAuto, $p.db)}
              src={require('../../../assets/graphics/homepage/landingBrowser.svg')}
            />
            <div
              className={cx(
                $p.absolute,
                $p.left50,
                $p.top50,
                $p.tlCenter,
                $p.flex,
                $p.justifyCenter,
                $p.itemsCenter,
              )}
            >
              <PlayContainer
                className='play'
              >
                <Play
                  className={cx(
                  $p.relative,
                  $p.brPill,
                  $p.bgWhite,
                  $p.overflowHidden,
                  $p.flex,
                  $p.justifyCenter,
                  $p.itemsCenter,
                )}
                >
                  <Icon
                    src={require('graphcool-styles/icons/fill/roundedTriangle.svg')}
                    width={27}
                    height={30}
                    color={$v.green}
                  />
                </Play>
                <PlayCopy>
                  See how it works
                </PlayCopy>
              </PlayContainer>
            </div>
          </HeroImage>
          <HeroText className={cx($p.flex, $p.justifyBetween, $p.flexColumn)}>
            <div>
              <Headline>
                Flexible backend platform combining GraphQL
                <Hint
                  text='GraphQL is the successor to REST APIs'
                  linkText='Learn more'
                  linkUrl='https://medium.com/@ottovw/rest-api-downfalls-and-dawn-of-graphql-dd00991a0eb8#.5dvivgezn'
                />
                + <span className={cx($p.nowrap)}>
                  AWS Lambda
                  <Hint
                    text='AWS Lambda runs serverless code (we also support Google Cloud Functions & more)'
                    linkText='Learn more'
                    linkUrl='https://www.iopipe.com/what-is-amazon-lambda/'
                  />
                </span>
                <BuiltFor className={cx($p.green, $p.nowrap)}>
                  built for&nbsp;
                  <Caret options={['frontend developers.', 'backend developers.', 'startups.', 'agencies.']} />
                </BuiltFor>
              </Headline>
            </div>
            <Copy className={cx($p.f25, $p.black50)}>
              {
                `Production-ready GraphQL backend in 5 minutes. Implement your business logic with any language. Includes realtime subscriptions, user management, service integrations and more.` // tslint:disable-line
              }
            </Copy>
            <MediaQuery minWidth={1200}>
              <LandingCallToAction />
            </MediaQuery>
            <MediaQuery maxWidth={900}>
              <LandingCallToAction />
            </MediaQuery>
          </HeroText>
        </Hero>
        <MediaQuery maxWidth={1200}>
          <LandingCallToAction />
        </MediaQuery>
        <CompanyLogoBar />
      </section>
    )
  }
}
