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
  border: none;
  outline: none;

  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: ${$v.blue};
  }
  &::-moz-placeholder { /* Firefox 19+ */
    color: ${$v.blue};
  }
  &:-ms-input-placeholder { /* IE 10+ */
    color: ${$v.blue};
  }
  &:-moz-placeholder { /* Firefox 18- */
    color: ${$v.blue};
  }
`

const SendMessage = styled.a`
  border-radius: 3px;
`

interface Props {
  text: string
  onChange: (e: any) => void
  onSubmit: () => void
}

export default class NegativeFeedback extends React.Component<Props, {}> {
  render() {
    const {onSubmit, onChange, text} = this.props
    return (
      <div className={cx($p.flex, $p.justifyCenter, $p.mb60, $p.flexColumn, $p.ph96)}>
        <TextUnderLines
          className={cx($p.f20, $p.ph10, $p.o50, $p.blue)}
          onChange={onChange}
          onKeyDown={this.keyDown}
          value={text}
          placeholder={`We’re sorry about that! How can we improve?`}
          autoFocus
        />
        <SendMessage
          className={cx($p.ttu, $p.db, $p.selfEnd, $p.mt25, $p.bgLightgreen20, $p.green, $p.pa10, $p.f16, $p.fw6, $p.pointer)}
          onClick={onSubmit}
        >
          Send Message
        </SendMessage>
      </div>
    )
  }

  private keyDown = (e: any) => {
    if (e.keyCode === 13 && !e.metaKey) {
      this.props.onSubmit()
    }
  }
}
