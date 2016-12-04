import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints, maxWidth } from '../../../utils/constants'

const Root = styled.span`
   &:before {
    content: '?'
    display: inline-block;
    vertical-align: text-top;
    font-size: ${$v.size12};
    font-weight: 600;
    height: 18px;
    width: 18px;
    background: ${$v.lightGreen20};
    color: ${$v.green};
    border-radius: 500px;
   }
`

const Overlay = styled.span`
  top: 21px;
  width: 150px;
  white-space: initial;
  overflow: visible;
  
  &:before {
    content: "";
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translate(-50%,0);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 6px 6px 6px;
    border-color: transparent transparent ${$v.white} transparent;
  }
`

interface Props {
  text: string,
}

interface State {
  showOverlay: boolean,
}

export default class Hint extends React.Component<Props, State> {

  state: State = {
    showOverlay: false,
  }

  render() {
    return (
      <Root
        className={cx($p.relative, $p.tc, $p.dib)}
        onMouseEnter={() => this.setState({showOverlay: true} as State)}
        onMouseLeave={() => this.setState({showOverlay: false} as State)}
      >
        {this.state.showOverlay &&
        <Overlay className={cx($g.overlay, $p.absolute, $p.f12, $p.fw4, $p.pa10, $p.left50, $p.tlHCenter, $p.tc)}>
          {this.props.text}
        </Overlay>
        }
      </Root>
    )
  }
}
