import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, Icon } from 'graphcool-styles'
import styled from 'styled-components'
import { maxWidth, breakpoints } from '../../utils/constants'

import FeatureIndicator from './ConsoleFeatureIndicator'
import FeaturePreview from './ConsoleFeaturePreview'
import SectionHeader from './SectionHeader'
import Pagination from './Pagination'

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
  padding-left: ${$v.size16};
  
  @media (min-width: ${breakpoints.p1200}px) {
    padding-left: ${$v.size96};
  }
  
  @media (min-width: ${maxWidth + $v.size96 + $v.size60}px) {
    padding-left: 0;
  }
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

export default class Console extends React.Component<{}, {}> {

  render() {
    return (
      <section>
        <SectionHeader
          headline='Whatever headline we have here'
          copy='I have hinted that I would often jerk poor Queequeg from between the whale and the ship where he would.'
        />
        <Root className={cx($p.relative)}>

          {window.innerWidth >= breakpoints.p1000 &&
          <Container className={cx($p.center, $p.relative, $p.flex)}>
            <Browser className={cx($p.w100, $p.relative)}>
              <FeatureIndicator top={30} left={60}/>
              <img className={cx($p.db, $p.w100, $p.hAuto)} src={require('../../assets/graphics/browser.svg')}/>
            </Browser>
            <FeatureDescription className={cx($p.flex, $p.flexColumn, $p.justifyBetween)}>
              <article>
                <h3>What headline we have here</h3>
                <Copy className={cx($p.black50)}>
                  {
                    `I have hinted that I would often jerk poor Queequeg from between the whale and the ship where he would occasionally fall.` // tslint:disable-line
                  }
                </Copy>
              </article>
              <div className={cx($p.flex, $p.itemsCenter)}>
                <Pagination bullets={7} />
                <PaginationNext className={cx($p.pa10, $p.brPill, $p.bgLightgreen20)}>
                  <Icon src={require('../../assets/icons/arrowRight.svg')} width={26} height={26} color={$v.green}/>
                </PaginationNext>
              </div>
            </FeatureDescription>
          </Container>
          }

          {window.innerWidth < breakpoints.p1000 &&
          <div className={cx($p.overflowHidden)}>
            <FeaturePreview
              headline='Whatever headline we have here.'
              copy='I have hinted that I would often jerk poor Queequeg from between the whale and the ship where.'
            />
            <FeaturePreview
              headline='Whatever headline we have here.'
              copy='I have hinted that I would often jerk poor Queequeg from between the whale and the ship where.'
            />
            <FeaturePreview
              headline='Whatever headline we have here.'
              copy='I have hinted that I would often jerk poor Queequeg from between the whale and the ship where.'
            />
            <FeaturePreview
              headline='Whatever headline we have here.'
              copy='I have hinted that I would often jerk poor Queequeg from between the whale and the ship where.'
            />
            <FeaturePreview
              headline='Whatever headline we have here.'
              copy='I have hinted that I would often jerk poor Queequeg from between the whale and the ship where.'
            />
            <FeaturePreview
              headline='Whatever headline we have here.'
              copy='I have hinted that I would often jerk poor Queequeg from between the whale and the ship where.'
            />
            <FeaturePreview
              headline='Whatever headline we have here.'
              copy='I have hinted that I would often jerk poor Queequeg from between the whale and the ship where.'
            />
          </div>
          }
        </Root>
      </section>

    )
  }
}
