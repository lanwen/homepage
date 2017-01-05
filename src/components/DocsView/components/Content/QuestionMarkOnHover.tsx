import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, Icon } from 'graphcool-styles'
import styled from 'styled-components'

const Circle = styled.div`
  height: 40px;
  width: 40px;
  -webkit-transition: background .5s ease-out;
  -moz-transition: background .5s ease-out;
  -o-transition: background .5s ease-out;
  transition: background .5s ease-out;
  
  .mark {
    color: ${$v.green50};
  }
  
  &:hover {
    background: ${$v.lightGreen30};
    .mark {
      display: none;
    }
    .chat-logo {
      display: flex;
    }
  }
`

const Container = styled.div`
  .chat-logo {
    height: 40px;
    width: 40px;
    display: none;
  }
`

interface Props {
  onClick: (e: any) => void
}

export default class QuestionMarkOnHover extends React.Component<Props, {}> {

  render() {
    return (
      <Container
        className={cx($p.pointer)}
        onClick={this.props.onClick}
      >
        <Circle className={cx($p.bgLightgreen10, $p.br100, $p.flex, $p.itemsCenter, $p.justifyCenter)}>
          <p className={cx($p.f25, $p.fw6, 'mark')}>?</p>
          <div className={cx('chat-logo', $p.flex, $p.justifyCenter, $p.itemsCenter)}>
            <Icon
              src={require('graphcool-styles/icons/fill/docsChat.svg')}
              width={50}
              height={50}
              fill={true}
              color={$v.green}
            />
          </div>
        </Circle>
      </Container>
    )
  }
}
