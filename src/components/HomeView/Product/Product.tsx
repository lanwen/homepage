import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, Icon } from 'graphcool-styles'
import styled from 'styled-components'
import { maxWidth, breakpoints } from '../../../utils/constants'
import { features }from './data'

import FeatureIndicator from './ConsoleFeatureIndicator'
import FeaturePreview from './ConsoleFeaturePreview'
import SectionHeader from '../SectionHeader'
import Pagination from '../Pagination'

const Root = styled.div`
  @media (min-width: ${breakpoints.p1000}px) {
    &:before{
      content: "";
      position: absolute;
      top: ${$v.size16};
      bottom: ${$v.size16};
      width: 100%;
      background: ${$v.gray02};
    }
  }
`

const Container = styled.div`
  max-width: ${maxWidth}px;
`

const Browser = styled.div`
  margin-left: ${$v.size16};
  overflow: hidden;
  
  @media (min-width: ${breakpoints.p1200}px) {
    margin-left: ${$v.size96};
  }
  
  @media (min-width: ${maxWidth + $v.size96 + $v.size60}px) {
    margin-left: 0;
  }
`

const BrowserContainer = styled.div`
  left: 0;
`

const FeatureDescription = styled.div`
  flex: 0;
  padding: ${$v.size38};
  margin: ${$v.size16} 0;
  
  @media (min-width: ${breakpoints.p1200}px) {
    padding: ${$v.size60};
  }
  
`

const Copy = styled.div`
  padding-top: ${$v.size25};
  
  @media (min-width: ${breakpoints.p1200}px) {
    padding-top: ${$v.size38};
  }
`

const PaginationNext = styled.button`
  margin-left: ${$v.size16};
  transition: background ${$v.duration} linear;  
  cursor: pointer;
  
  svg {
    transition: fill ${$v.duration} linear;
  }

  &:hover {
    background: ${$v.green};
    
    svg {
      fill: ${$v.white};
    }
  }
  
  @media (min-width: ${breakpoints.p1200}px) {
    margin-left: ${$v.size25};
  }
`

const ConsoleContent = styled.div`
  width: 98.4%;
  height: auto;
  left: 50%;
  transform: translate(-50%,0);
  top: 5.5%;
`

const FeaturesList = styled.div`
  &:after {
    content: "";
    display: block;
    width: ${$v.size96};
    height: ${$v.size04};
    margin: 0 auto;
    margin-top: ${$v.size96};
    background: ${$v.gray20};
  }
`

interface State {
  activeIndex: number,
}

export default class Product extends React.Component<{}, State> {

  state = {
    activeIndex: 0,
  }

  render() {
    const feature = features[this.state.activeIndex]

    return (
      <section>
        <SectionHeader
          headline='It’s easy to control every aspect of your backend'
          copy='With the Graphcool Console you can discover and manage every aspect of your backend'
        />
        <Root className={cx($p.relative)}>

          {window.innerWidth >= breakpoints.p1000 &&
          <Container className={cx($p.center, $p.relative, $p.flex)}>
            <Browser className={cx($p.w100, $p.relative)}>
              <img className={cx($p.db, $p.w100, $p.hAuto)} src={require('../../../assets/graphics/browser.svg')}/>
              <BrowserContainer className={cx($p.absolute, $p.top0, $p.right0, $p.h100)}>
                <ConsoleContent className={cx($p.db, $p.absolute)}>
                  <video
                    ref='video'
                    className={cx($p.w100)}
                    src={feature.videoUrl}
                    autoPlay
                    loop
                  />
                </ConsoleContent>
                <FeatureIndicator top={30} left={60}/>
              </BrowserContainer>
            </Browser>
            <FeatureDescription className={cx($p.flex, $p.flexColumn, $p.justifyBetween)}>
              <article>
                <h3>{feature.title}</h3>
                <Copy className={cx($p.black50)}>{feature.description}</Copy>
              </article>
              <div className={cx($p.flex, $p.itemsCenter)}>
                <Pagination
                  bullets={features.length}
                  active={this.state.activeIndex}
                  onSelect={activeIndex => this.setState({ activeIndex } as State)}
                />
                <PaginationNext
                  className={cx($p.pa10, $p.brPill, $p.bgLightgreen20)}
                  onClick={this.next}
                >
                  <Icon src={require('../../../assets/icons/arrowRight.svg')} width={26} height={26} color={$v.green}/>
                </PaginationNext>
              </div>
            </FeatureDescription>
          </Container>
          }

          {window.innerWidth < breakpoints.p1000 &&
          <FeaturesList className={cx($p.overflowHidden)}>
            {features.map(feature => (
              <FeaturePreview
                key={feature.title}
                headline={feature.title}
                copy={feature.description}
              />
            ))}
          </FeaturesList>
          }
        </Root>
      </section>

    )
  }

  private next = () => {
    this.setState({activeIndex: (this.state.activeIndex + 1) % features.length} as State)
  }
}
