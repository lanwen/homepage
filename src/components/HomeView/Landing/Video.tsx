import * as React from 'react'
import { findDOMNode } from 'react-dom'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'

interface Props {
  step: number
  setStep: (step: number) => void
  markers: number[],
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
    const markers = this.props.markers
    const seconds = this.video!.currentTime
    const closestMarkerIndex = markers.length - 1 - markers.slice(0).reverse().findIndex(m => m < seconds)
    if (props.step !== closestMarkerIndex) {
      this.video!.currentTime = props.markers[props.step]
    }
  }

  render() {
    return (
      <video
        ref='video'
        className={cx($p.w100)}
        src='/videos/landing.mp4'
        autoPlay
        loop
      />
    )
  }

  private onProgress = () => {
    const markers = this.props.markers
    const seconds = this.video!.currentTime
    const closestMarkerIndex = markers.length - 1 - markers.slice(0).reverse().findIndex(m => m < seconds)
    if (this.props.step !== closestMarkerIndex) {
      this.props.setStep(closestMarkerIndex)
    }
  }
}
