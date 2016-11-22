import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import styled from 'styled-components'
import InteractiveDocs from './InteractiveDocs'
import FlexibleDataModel from './FlexibleDataModel'
import WorksWithYourStack from './WorksWithYourStack'
import NoVendorLockIn from './NoVendorLockIn'
import AutoScaling from './AutoScaling'
import Integrations from './Integrations'
import Extensibility from './Extensibility'
import ZeroMaintenance from './ZeroMaintenance'

export default class Features extends React.Component<{}, {}> {

  render() {
    const Container= styled.div`
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
      margin: 45px auto;
      `
    const SmallContainer = styled.div`
      margin: 5px;
      padding: 15px;
      width: 25%;
      `
    const Icon = styled.div`
      width: 60px;
      height: 60px;
      border-radius: 50%;
      padding: 10px;
      background-color: #C0C0C0;
    `
    return (
      <div>
      <div className={cx($p.pv96, $p.tc, $p.f38, $p.fw3)}>
        Features
      </div>
        <Container>
                          <SmallContainer>
                            <Icon />
                            <InteractiveDocs />
                          </SmallContainer>
            <SmallContainer><FlexibleDataModel /></SmallContainer>
            <SmallContainer><WorksWithYourStack /></SmallContainer>
            <SmallContainer><NoVendorLockIn /></SmallContainer>
            <SmallContainer><AutoScaling /></SmallContainer>
            <SmallContainer><Integrations /></SmallContainer>
            <SmallContainer><Extensibility /></SmallContainer>
            <SmallContainer><ZeroMaintenance /></SmallContainer>
        </Container>
      </div>
    )
  }
}
