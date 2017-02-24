import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g, Icon } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../../utils/constants'

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

const Button = styled.a`
  text-decoration: none;
  border-radius: 2px;
  font-size: ${$v.size16};
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: ${$v.size10} ${$v.size16} ${$v.size10} ${$v.size10};
  transition: background ${$v.duration} linear, color ${$v.duration} linear;
   
  svg {
    transition: fill ${$v.duration} linear;
  }
  
  svg {
    margin-right: ${$v.size10};
  }
  
  &:hover {
    color: ${$v.white};
    
    svg {
      fill: ${$v.white};
    }
  }
`

const ReactButton = styled(Button)`
  background: rgba(0, 216, 255, 0.15);
  color: rgba(0, 216, 255, 1);
  
  &:hover {
    background: rgba(0, 216, 255, 1);
  }
`

const AngularButton = styled(Button)`
  background: rgba(221, 0, 49, 0.15);
  color: rgba(221, 0, 49, 1);
  
  &:hover {
    background: rgba(221, 0, 49, 1);
  }
`

interface Props {
  reactLink: string,
  angularLink: string,
}

export default class TryOut extends React.Component<Props, {}> {

  render() {
    return (
      <Root className={cx($p.flex, $p.justifyCenter, $p.itemsCenter)}>
        <div className={cx($g.uppercaseLabel, $p.black20)}>
          {window.innerWidth > 1100 ? 'Try out example:' : 'Try it out'}
        </div>
        <Steps className={cx($p.flex, $p.itemsCenter)}>
          <Step>
            <span className={cx($g.uppercaseLabel, $p.black40)}>Download Code</span>
            <ReactButton href={this.props.reactLink} target='_blank' className={cx($p.ml16)}>
              <Icon
                src={require('../../../assets/icons/react.svg')}
                width={25}
                height={25}
                color='rgba(0, 216, 255, 1)'
              />
              React
            </ReactButton>
            <AngularButton href={this.props.angularLink} target='_blank' className={cx($p.ml10)}>
              <Icon
                src={require('../../../assets/icons/angular.svg')}
                width={25}
                height={25}
                color='rgba(221, 0, 49, 1)'
              />
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
