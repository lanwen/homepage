import * as React from 'react'
import styled from 'styled-components'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'

const TextUnderLines = styled.textarea`
  background-image:
    repeating-linear-gradient(white, white 30px, rgba(0, 0, 0, 0.07) 30px, rgba(0, 0, 0, 0.07) 31px, white 31px);
  line-height: 32px;
  border: none;
  min-height: ${$v.size96};
  resize: none;
`
const SendMessage = styled.a`
  border-radius: 3px;
`
export default class NegativeFeedback extends React.Component<{}, {}> {
  render() {
    return (
      <div className={cx($p.flex, $p.justifyCenter, $p.mb60, $p.flexColumn, $p.ph96)}>
        <TextUnderLines className={cx($p.f20, $p.ph16, $p.o50, $p.blue)}>
          This is the text that will be showing
        </TextUnderLines>
        <SendMessage
          className={cx($p.ttu, $p.db, $p.selfEnd, $p.mt25, $p.bgLightgreen20, $p.green, $p.pa10, $p.f16, $p.fw6)}
        >
          Send Message
        </SendMessage>
      </div>
    )
  }
}
