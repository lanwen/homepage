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
  options: string[],
}

interface State {
  currentIndex: number,
  text: string,
  buildingUp: boolean,
}

export default class Caret extends React.Component<Props, State> {

  private nextStepTimeout: number | null = null

  constructor (props) {
    super(props)

    this.state = {
      currentIndex: 0,
      text: props.options[0],
      buildingUp: false,
    }
  }

  componentDidMount() {
    this.nextStepTimeout = window.setTimeout(this.step, 3000)
  }

  componentWillUnmount() {
    clearTimeout(this.nextStepTimeout!)
  }

  render() {
    return (
      <span>{this.state.text}</span>
    )
  }

  step = () => {
    const fullText = this.props.options[this.state.currentIndex]
    const indexBefore = this.state.text.length
    const indexAfter = this.state.buildingUp ? indexBefore + 1 : indexBefore - 1

    this.setState({ text: fullText.slice(0, indexAfter) } as State)

    // check if step completed
    if (indexAfter === fullText.length) {
      this.setState({ buildingUp: false } as State)
      this.nextStepTimeout = window.setTimeout(this.step, 2000)
      return
    }

    if (indexAfter === 0) {
      this.setState({
        currentIndex: (this.state.currentIndex + 1) % this.props.options.length,
        buildingUp: true,
      } as State)
      this.nextStepTimeout = window.setTimeout(this.step, 300)
      return
    }

    this.nextStepTimeout = window.setTimeout(this.step, 40)
  }
}
