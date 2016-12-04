import * as React from 'react'
import {findDOMNode} from 'react-dom'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'

const VideoContainer = styled.div`
  position: absolute;
  width: 98.4%;
  height: auto;
  top: 4.7%;
  left: 50%;
  transform: translate(-50%,0);
`

const markers = [0, 23, 49, 72]

interface Props {
  step: number
  setStep: (step: number) => void
}

interface State {
}

export default class Video extends React.Component<Props, State> {

  state: State = {}

  private video: HTMLVideoElement | null

  componentDidMount() {
    this.video = findDOMNode<HTMLVideoElement>(this.refs['video'])

    this.video.addEventListener('timeupdate', this.onProgress)
  }

  componentWillUnmount() {
    this.video!.removeEventListener('timeupdate', this.onProgress)
  }

  componentWillReceiveProps(props: Props) {
    const seconds = this.video!.currentTime
    const closestMarkerIndex = markers.length - 1 - markers.slice(0).reverse().findIndex(m => m < seconds)
    if (props.step !== closestMarkerIndex) {
      this.video!.currentTime = markers[props.step]
    }
  }

  render() {
    return (
      <VideoContainer>
        <img className={cx($p.w100)} src='https://placehold.it/761x550/ffffff/000000' />
        <video
          ref='video'
          className={cx($p.w100, $p.dn)}
          src='http://graphcool-random.s3.amazonaws.com/header.mp4'
          autoPlay
          loop
        />
      </VideoContainer>
    )
  }

  private onProgress = () => {
    const seconds = this.video!.currentTime
    const closestMarkerIndex = markers.length - 1 - markers.slice(0).reverse().findIndex(m => m < seconds)
    if (this.props.step !== closestMarkerIndex) {
      this.props.setStep(closestMarkerIndex)
    }
  }
}
