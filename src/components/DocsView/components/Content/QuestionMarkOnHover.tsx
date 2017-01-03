import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import Icon from 'graphcool-styles/dist/components/Icon/Icon';

const Circle = styled.div`
  height: ${$v.size38};
  width: ${$v.size38};
  -webkit-transition: background .5s ease-out;
  -moz-transition: background .5s ease-out;
  -o-transition: background .5s ease-out;
  transition: background .5s ease-out;
  
  .mark {
    color: ${$v.green50}
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
    height: ${$v.size38};
    width: ${$v.size38};
    display: none;
  }
`

export default class QuestionMarkOnHover extends React.Component<{}, {}> {

  render() {
    return (
      <Container className={cx($p.relative)}>
        <Circle className={cx($p.bgLightgreen10, $p.br100, $p.flex, $p.itemsCenter, $p.justifyCenter)}>
          <p className={cx($p.f25, $p.fw6, 'mark')}>?</p>
          <img className={cx('chat-logo')} src={require('../../../../assets/graphics/categories/chatLogo.svg')}
          />
        </Circle>
      </Container>
    )
  }
}
