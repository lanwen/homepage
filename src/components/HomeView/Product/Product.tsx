import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, Icon } from 'graphcool-styles'
import styled from 'styled-components'
import { maxWidth, breakpoints } from '../../../utils/constants'
import { features } from './data'
import Separator from '../../Separator'
import FeatureIndicator from './ConsoleFeatureIndicator'
import FeaturePreview from './ConsoleFeaturePreview'
import Pagination from '../Pagination'
import SecondaryCallToAction from '../../SecondaryCallToAction'

const Root = styled.div`

  // padding-top: ${$v.size96};
  margin-top: ${$v.size96};
 
  @media (min-width: ${breakpoints.p750}px) {
    // padding-top: ${$v.size96};
    margin-top: ${$v.size96};
  }
  
  @media (min-width: ${breakpoints.p1200}px) {
    // padding-top: ${$v.size96};
    margin-top: ${$v.size96};
  }
  
  @media (max-width: ${breakpoints.p1000 - 1}px) {
    margin-top: 0;
    padding-top: 0;
  }
  
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
  padding: ${$v.size60};
  margin: ${$v.size16} 0;
  
  @media (min-width: ${breakpoints.p1200}px) {
    padding: ${$v.size60} ${$v.size96} ${$v.size38};
  }
  
  @media (min-width: ${breakpoints.p1440}px) {
    padding: ${$v.size96} ${$v.size96} ${$v.size60};
  }
  
`

const Copy = styled.p`
  padding-top: ${$v.size25};
  
  @media (min-width: ${breakpoints.p1200}px) {
    padding-top: ${$v.size38};
  }
`

const CallToAction = styled(SecondaryCallToAction)`
  padding-top: ${$v.size16};
  
  @media (min-width: ${breakpoints.p1200}px) {
    padding-top: ${$v.size25};
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
        <Root className={cx($p.relative)}>

          {window.innerWidth >= breakpoints.p1000 &&
          <Container className={cx($p.center, $p.relative, $p.flex)}>
            <Browser className={cx($p.w100, $p.relative)}>
              <img
                className={cx($p.db, $p.w100, $p.hAuto)}
                src={require('../../../assets/graphics/homepage/browser.svg')}
              />
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
                {this.state.activeIndex === 0 &&
                  <div>
                    <FeatureIndicator top={8} left={83} onClick={() => this.setState({activeIndex: 1} as State)}/>
                    <FeatureIndicator top={44} left={14} onClick={() => this.setState({activeIndex: 1} as State)}/>
                    <FeatureIndicator top={51} left={16} onClick={() => this.setState({activeIndex: 2} as State)}/>
                    <FeatureIndicator top={58} left={22} onClick={() => this.setState({activeIndex: 3} as State)}/>
                    <FeatureIndicator top={65} left={16} onClick={() => this.setState({activeIndex: 4} as State)}/>
                    <FeatureIndicator top={92} left={14} onClick={() => this.setState({activeIndex: 5} as State)}/>
                  </div>
                }
              </BrowserContainer>
            </Browser>
            <FeatureDescription className={cx($p.flex, $p.flexColumn, $p.justifyBetween)}>
              <article>
                <h2>{feature.title}</h2>
                <Copy className={cx($p.black50)}>{feature.description}</Copy>
                <CallToAction
                  text='Learn more'
                  link='https://graph.cool/graphql'
                />
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
            <Separator />
            {features.map(feature => (
              <FeaturePreview
                key={feature.title}
                headline={feature.title}
                copy={feature.description}
                image={feature.image}
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
