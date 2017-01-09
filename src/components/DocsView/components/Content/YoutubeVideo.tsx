import * as React from 'react'
import Youtube from 'react-youtube'
import {$p, Icon, $v} from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'

interface Props {
  id: string
}

interface State {
  videoActive: boolean
}

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
`

const VideoWrapper = styled.div`
  padding-bottom: 59.8%; // THIS IS HARDCODED, normally 16:9 has 56.25%, but our videos have this ratio
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Container = styled.div`
  margin-left: -70px;
  margin-right: -70px;
`

export default class YoutubeVideo extends React.Component<Props, {}> {
  state = {
    videoActive: false,
  }

  render() {
    const {id} = this.props
    const {videoActive} = this.state

    return (
      <Container className={$p.mv25}>
        {videoActive ? (
          <VideoWrapper className={cx($p.pt25, $p.relative)}>
            <Youtube
              videoId={id}
              opts={{
                playerVars: {
                  autoplay: 1,
                },
              }}
            />
          </VideoWrapper>
        ) : (
          <div
            className={cx($p.relative, $p.bgBlack, $p.pointer)}
            onClick={this.startVideo}
          >
            <img
              src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
              className={cx($p.o50)}
            />
            <IconWrapper
              className={cx(
                $p.br100,
                $p.absolute,
                $p.top50,
                $p.left50,
                $p.bgLightergreen,
                $p.flex,
                $p.justifyCenter,
                $p.itemsCenter,
                $p.tlCenter,
              )}
            >
              <Icon
                src={require('graphcool-styles/icons/fill/roundedTriangle.svg')}
                width={26}
                height={30}
                color={$v.green}
                className={$p.pl6}
              />
            </IconWrapper>
          </div>
        )}
      </Container>
    )
  }

  private startVideo = () => {
    this.setState({videoActive: true})
  }
}
