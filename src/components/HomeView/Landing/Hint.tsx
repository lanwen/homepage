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
  font-size: ${$v.size12};
  padding: ${$v.size10};
  
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
  
  @media (min-width: ${breakpoints.p750}px) {
    font-size: ${$v.size14};
    padding: ${$v.size16};
  }
`

interface Props {
  text: string,
  linkText?: string,
  linkUrl?: string,
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
        onClick={() => this.setState({showOverlay: !this.state.showOverlay} as State)}
      >
        {this.state.showOverlay &&
        <Overlay className={cx($g.overlay, $p.absolute, $p.fw4, $p.left50, $p.tlHCenter, $p.tc)}>
          {this.props.text}
          <a className={cx($p.db, $p.pt10)} href={this.props.linkUrl} target='_blank'>
            {this.props.linkText}
          </a>
        </Overlay>
        }
      </Root>
    )
  }
}
