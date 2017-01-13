import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../../utils/constants'

const Overlay = styled.div`
  position: absolute;
  left: -3px;
  top: -3px;
  right: -3px;
`

const OverlayHead = styled.header`
  padding: 0 ${parseFloat($v.size16) + 3}px;
  height: ${parseFloat($v.size20) * 2 + parseFloat($v.size14) * 1.5 + 6}px;
  
  @media (min-width: ${breakpoints.p1250}px) {
    padding: 0 ${parseFloat($v.size20) + 3}px;
    height: ${parseFloat($v.size25) * 2 + parseFloat($v.size16) * 1.5 + 6}px;
  }
`

const OverlayBody = styled.div`
  padding: ${parseFloat($v.size16) + 3}px;
  letter-spacing: 0;
  
  @media (min-width: ${breakpoints.p1250}px) {
    padding: ${parseFloat($v.size20) + 3}px;
  }
`

const Rating = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  width: 50px;
  padding-right: ${$v.size10};
`

const RatingBase = styled.div`
  flex: 0 0 auto;
  position: relative;
  width: ${$v.size14};
  height: ${$v.size14};
  margin-right: ${$v.size10};
  
  @media (min-width: ${breakpoints.p1250}px) {
    width: ${$v.size16};
    height: ${$v.size16};
  }
  
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    height: 2px;
    width: 100%;
    transform: translate(0, -50%);
  }
`

const Pro = styled(RatingBase)`
  
  &:before {
    background: ${$v.green};
  }
  
  &:after {
    content: "";
    position: absolute;
    background: ${$v.green};  
    left: 50%;
    top: 0;
    width: 2px;
    height: 100%;
    transform: translate(-50%, 0);
  }
`

const Con = styled(RatingBase)`
  &:before {
    background: ${$v.red};  
  }
`

interface State {
  showOverlay: boolean,
}

interface Props {
  title: string,
  description?: string,
  overlay?: boolean,
  good?: boolean,
  veryGood?: boolean,
  bad?: boolean,
}

export default class Cell extends React.Component<Props, State> {

  state: State = {
    showOverlay: false,
  }

  render() {
    return (
      <div
        className={cx('cell')}
        onMouseEnter={() => this.setState({showOverlay: true} as State)}
        onTouchStart={() => this.setState({showOverlay: true} as State)}
        onMouseLeave={() => this.setState({showOverlay: false} as State)}
        onTouchEnd={() => this.setState({showOverlay: false} as State)}
      >
        <Rating>
          {(this.props.good || this.props.veryGood) && <Pro />}
          {this.props.veryGood && <Pro />}
          {this.props.bad && <Con />}
        </Rating>
        {this.props.title}
        {this.state.showOverlay &&
        <Overlay className={cx($g.overlay)}>
          <OverlayHead className={cx($p.bgLightgreen10, $p.green, $p.flex, $p.itemsCenter)}>
            <Rating>
              {(this.props.good || this.props.veryGood) && <Pro />}
              {this.props.veryGood && <Pro />}
              {this.props.bad && <Con />}
            </Rating>
            {this.props.title}
          </OverlayHead>
          <OverlayBody className={cx($p.ttn, $p.black50, $p.fw4)}>
            {this.props.description}
          </OverlayBody>
        </Overlay>
        }
      </div>
    )
  }
}
