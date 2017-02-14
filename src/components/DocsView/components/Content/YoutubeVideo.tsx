import * as React from 'react'
import Youtube from 'react-youtube'
import {$p, Icon, $v} from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import { breakpoints } from '../../../../utils/constants'

interface Props {
  id: string
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

const ImageWrapper = styled.div`
  img {
    transition: opacity 0.2s;
  }
  
  &:hover img {
    opacity: 0.6;
  }
`

const Container = styled.div`
  margin-left: -70px;
  margin-right: -70px;
  
  &:first-child {
    margin-top: 0;
    
    img {
      margin-top: 0;
    }
  }
  
  @media (max-width: ${breakpoints.p580}px) {
    margin-left: -25px;
    margin-right: -25px;
  }
  
  
  
`

export default class YoutubeVideo extends React.Component<Props, {}> {
  state = {
    videoActive: false,
  }

  render() {
    const {id} = this.props
    const {videoActive} = this.state

    return (
      <Container className={cx($p.mv25, $p.bgBlack)}>
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
          <ImageWrapper
            className={cx($p.relative, $p.pointer)}
            onClick={this.startVideo}
          >
            <img
              src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
              className={cx($p.o50, $p.ma0, $p.db)}
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
          </ImageWrapper>
        )}
      </Container>
    )
  }

  private startVideo = () => {
    this.setState({videoActive: true})
  }
}
