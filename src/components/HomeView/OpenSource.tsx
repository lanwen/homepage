import * as React from 'react'
import * as cx from 'classnames'
import {$p} from 'graphcool-styles'
import styled from 'styled-components'
import {breakpoints} from "../../utils/constants";

const Heart=styled.div`
    margin-top: -20px;
`
const Copy=styled.div`
    width: 60%;
    
    @media(max-width: ${breakpoints.p750}px) {
        width: 80%;
    }
    @media(max-width: ${breakpoints.p500}px) {
        width: 90%;
    }
`

export default class OpenSource extends React.Component<{}, {}> {

    render() {
        return (
            <div className={cx($p.justifyCenter, $p.flex, $p.flexColumn, $p.pb96)}>
                <div className={cx($p.pt96, $p.tc, $p.f38, $p.fw3, $p.flex, $p.flexRow, $p.justifyCenter)}>
                    <div>
                        <div className={cx($p.mb0, $p.pb0)}>
                            <span>W </span>
                            <img src={require('../../assets/graphics/Heart.svg')} alt='Heart'/>
                            <span> Open Source</span>
                        </div>
                        <Heart className={$p.tl}>e</Heart>
                    </div>
                </div>
                <Copy className={cx($p.f20, $p.o50, $p.tc, $p.pb16, $p.selfCenter)}>
                    I have hinted that I would often jerk poor Queequeg from between the whale and the ship where he would occasionally fall, from the incessant rolling and swaying of both.
                </Copy>
                <div className={cx($p.flex, $p.justifyCenter, $p.flexWrap, $p.pt38)}>
                    <img className={$p.pr25} src={require('../../assets/graphics/LearnRelay.svg')} alt='Learn Relay'/>
                    <img src={require('../../assets/graphics/LearnApollo.svg')} alt='Learn Apollo'/>
                </div>
            </div>
        )
    }
}
