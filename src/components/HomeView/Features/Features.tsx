import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../../utils/constants'
import FeaturesContent from './FeaturesContent'

export default class Features extends React.Component<{}, {}> {

  render() {
    const Container = styled.div`
      flex-wrap: wrap;
      padding: 10px 50px;
      margin: 45px auto;
      max-width: ${breakpoints.p1250}px;
      `
    const SmallContainer = styled.div`
      margin: 5px;
      padding: 25px 20px;
      flex: 0 0 250px;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (max-width: ${breakpoints.p750}px) {
        :nth-child(7) {
          margin-left: 250px;
        }
      }
      `

    const Icon = styled.div`
      width: 116px;
      height: 116px;
      padding: 10px;
      box-sizing: border-box;

      img {
        width: 100%;
        height: 100%;
      }
    `

    return (
      <div>
        <div className={cx($p.pt96, $p.pb38, $p.tc, $p.f38, $p.fw3)}>
          Features optimized for developer experience
        </div>
        <div className={cx($p.f20, $p.o50, $p.tc, $p.pb96)}>
          Graphcool is built by developers for developers.
        </div>
        <Container className={cx($p.flex, $p.justifyCenter)}>
          <SmallContainer>
            <Icon>
              <img src={require('../../../assets/graphics/feature-1.svg')} />
            </Icon>
            <FeaturesContent
              headline='Instant Setup'
              content='It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast at both ends.'
            />
          </SmallContainer>
          <SmallContainer>
            <Icon>
              <img src={require('../../../assets/graphics/feature-2.svg')} />
            </Icon>
            <FeaturesContent
              headline='Flexible Data Model'
              content='It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast at both ends.'
            />
          </SmallContainer>
          <SmallContainer>
            <Icon>
              <img src={require('../../../assets/graphics/feature-3.svg')} />
            </Icon>
            <FeaturesContent
              headline='Works with everything'
              content='It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast at both ends.'
            />
          </SmallContainer>
          <SmallContainer>
            <Icon>
              <img src={require('../../../assets/graphics/feature-4.svg')} />
            </Icon>
            <FeaturesContent
              headline='Auto-Scaling'
              content='It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast at both ends.'
            />
          </SmallContainer>
          <SmallContainer>
            <Icon>
              <img src={require('../../../assets/graphics/feature-5.svg')} />
            </Icon>
            <FeaturesContent
              headline='Powerful Integrations'
              content='It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast at both ends.'
            />
          </SmallContainer>
          <SmallContainer>
            <Icon>
              <img src={require('../../../assets/graphics/feature-6.svg')} />
            </Icon>
            <FeaturesContent
              headline='Unlimited Flexibility'
              content='It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast at both ends.'
            />
          </SmallContainer>
          <SmallContainer>
            <Icon>
              <img src={require('../../../assets/graphics/feature-7.svg')} />
            </Icon>
            <FeaturesContent
              headline='No Vendor Lock-In'
              content='It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast at both ends.'
            />
          </SmallContainer>
          <SmallContainer>
            <Icon>
              <img src={require('../../../assets/graphics/feature-8.svg')} />
            </Icon>
            <FeaturesContent
              headline='Interactive Docs'
              content='It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the monkey-rope was fast at both ends.'
            />
          </SmallContainer>
        </Container>
      </div>
    )
  }
}
