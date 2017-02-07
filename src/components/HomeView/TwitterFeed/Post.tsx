import * as React from 'react'
import * as cx from 'classnames'
import { $p, $g, $v, Icon } from 'graphcool-styles'
import styled from 'styled-components'

const Root = styled.div`
  z-index: 1;
  min-width: 300px;
  max-width: 400px;
  flex: 0 0 auto;
`

const ProfilePicture = styled.img`
  width: 35px;
  height: 35px;
`

const TwitterLogo = styled.div`
  
`

interface Props {
  content: string,
  author: string,
  date: string,
  profilePicture: string,
}

export default class Post extends React.Component<Props, {}> {

  render() {
    return (
      <Root className={cx($g.overlay, $p.mr25)}>
        <header className={cx($p.flex, $p.itemsCenter, $p.pa16, $p.pb0)}>
          <ProfilePicture
            src={this.props.profilePicture}
            className={cx($p.brPill)}
          />
          <p className={cx($p.fw6, $p.pl10, $p.f16, $p.lhSolid)}>
            {this.props.author}
            <span className={cx($p.f12, $p.ttu, $p.fw6, $p.tracked, $p.black30, $p.ml16)}>
              {this.props.date}
            </span>
          </p>
          <TwitterLogo className={cx($p.absolute, $p.right16, $p.top16)}>
            <Icon
              src={require('../../../assets/icons/logos/twitter.svg')}
              width={25}
              height={20}
              color={$v.lightGreen20}
            />
          </TwitterLogo>
        </header>
        <p className={cx($p.pa25, $p.f16, $p.fw4, $p.black50)}>
          {this.props.content}
        </p>
      </Root>
    )
  }
}
