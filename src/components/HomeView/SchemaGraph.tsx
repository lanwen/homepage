import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../utils/constants'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  background-color: rgba(0, 0, 0, 0.03);
  padding: 20px 300px;
      
    @media (max-width: ${breakpoints.p1200}px) {
      padding: 50px 150px;
      background-color: violet;
    }
    @media (max-width: ${breakpoints.p1000}px) {
      padding: 50px 100px;
      background-color: red;
    }
    @media (max-width: ${breakpoints.p750}px) {
      padding: 25px 40px;
      background-color: blue;
    }
    @media (max-width: ${breakpoints.p580}px) {
      background-color: green;
      padding: 15px 15px;
    }
    @media (max-width: ${breakpoints.p500}px) {
      background-color: yellow;
      padding: 10px 10px;
    }
`
export default class SchemaGraph extends React.Component<{}, {}> {

  render() {
    return (
      <Root>
        <div className={cx($p.pt38, $p.pb38, $p.tc, $p.f38, $p.fw3)}>
          How it works
        </div>
        <div className={cx($p.f20, $p.o50, $p.tc, $p.pb16)}>
          {
            `I have hinted that I would often jerk poor Queequeg from between the whale and the ship where he would occasionally fall, from the incessant rolling and swaying of both.` // tslint:disable-line
          }
        </div>
        <img className={cx($p.w100)} src={require('../../assets/graphics/architecture.svg')} alt='Architecture'/>
      </Root>
    )
  }
}
