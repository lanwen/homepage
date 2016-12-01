import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g, Icon } from 'graphcool-styles'
import styled, { keyframes } from 'styled-components'
import SectionHeader from '../SectionHeader'
import Field from './Field'
import { breakpoints, maxWidth } from '../../../utils/constants'

const Root = styled.div`
  padding: ${$v.size25};
  counter-reset: step;
  flex-direction: column;
  align-items: flex-start;
  
  @media (min-width: 680px) {
    flex-direction: row;
    align-items: center;
  }
`

const Steps = styled.div`
  flex-direction: column;
  align-items: flex-start;
    
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`

const Step = styled.div`
  
  display: flex;
  align-items: center;
  
  margin-top: ${$v.size25};
  
  &:before {
    counter-increment: step;
    content: counter(step);
    display: inline-block;
    height: ${$v.size16};
    width: ${$v.size16};
    text-align: center;
    line-height: 1;
    font-weight: 600;
    padding: ${$v.size10};
    border-radius: 500px;
    background: ${$v.gray10};
    color: ${$v.gray50};
    margin-right: ${$v.size10};
  }
  
  @media (min-width: 680px) {
    margin-left: ${$v.size38};
    &:first-child {
      margin-top: 0;
    }
  }
  
  @media (min-width: 1024px) {
    margin-top: 0;
  }
  
  @media (min-width: ${breakpoints.p1200}px) {
    margin-left: ${$v.size60};
  }
`

const Command = styled.span`
  padding: ${$v.size06};
  line-height: 1;
  font-family: Consolas, monospace;
  color: ${$v.darkerBlue};
  background: ${$v.gray07};
  border-radius: 2px;
  white-space: nowrap;
`

const Button = styled.button`
  border-radius: 2px;
  font-size: ${$v.size16};
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding: ${$v.size10} ${$v.size16} ${$v.size10} ${$v.size10};
  
  img {
    height: ${$v.size25};
    width: auto;
    margin-right: ${$v.size10};
  }
`

const ReactButton = styled(Button)`
  background: rgba(0, 216, 255, 0.15);
  color: rgba(0, 216, 255, 1);
`

const AngularButton = styled(Button)`
  background: rgba(221, 0, 49, 0.15);
  color: rgba(221, 0, 49, 1);
`

export default class TryOut extends React.Component<{}, {}> {

  render() {
    return (
      <Root className={cx($p.flex, $p.justifyCenter, $p.itemsCenter)}>
        <div className={cx($g.uppercaseLabel, $p.black20)}>
          {window.innerWidth > 1100 ? 'Try out example:' : 'Try it out'}
        </div>
        <Steps className={cx($p.flex, $p.itemsCenter)}>
          <Step>
            <span className={cx($g.uppercaseLabel, $p.black40)}>Download Code</span>
            <ReactButton className={cx($p.ml16)}>
              <img src={require('../../../assets/graphics/logos/react.svg')} />
              React
            </ReactButton>
            <AngularButton className={cx($p.ml10)}>
              <img src={require('../../../assets/graphics/logos/angular.svg')} />
              Angular
            </AngularButton>
          </Step>
          <Step>
            <span className={cx($g.uppercaseLabel, $p.black40)}>Run</span>
            <Command className={cx($p.ml16)}>npm install</Command>
            <Command className={cx($p.ml6)}>npm start</Command>
          </Step>
        </Steps>
      </Root>
    )
  }
}
