import * as React from 'react'
import AnnoucementIcon from './AnnouncementIcon'
import {$p, $v} from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import {selfStart} from 'graphcool-styles/dist/particles.css'

const Author = styled.img`
  width: 90px;
  height: 90px;
`
const Article = styled.div`
  flex: 0 0 600px;
`
export default class BlogPost extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <div
          className={cx(
            $p.flex,
            $p.flexColumn,
            $p.bgBlack04,
            $p.contentCenter,
            $p.itemsCenter,
            $p.mt38,
            $p.ph96,
            $p.flexWrap,
            $p.mb60,
          )}
        >
          <AnnoucementIcon/>
          <div className={cx($p.flex, $p.mt60, $p.flexWrap, $p.contentBetween)}>
            <Article className={cx($p.mla)}>
              <h1 className={cx($p.f38, $p.fw3, $p.mb16)}>User authentication in GraphQL with Auth0 and Digits</h1>
              <div className={cx($p.flex, $p.black20, $p.itemsCenter, $p.mb38)}>
                <p className={cx($p.f20, $p.pr25, $p.fw4)}>5 Nov 2016</p>
                <p className={cx($p.f16, $p.ph16, $p.fw4)}>#platform / api /authentication</p>
              </div>
            </Article>
            <Author src={require('../../../../assets/graphics/team/nilan.png')}
                    className={cx($p.selfStart)}/>
          </div>
          <p className={cx($p.black60, $p.fw4, $p.f20, $p.mb60, $p.ph25)}>
            Authenticating users is an integral part of most applications with the goal to make it as easy as
            possible for users to sign-in while enforcing security. Implementing this process manually can be very
            challenging while integrating external authentication services into your own application also takes
            a lot of time.
          </p>
          <p className={cx($p.f25, $p.fw7, $p.mb38)}>Graphcool now works out-of-the-box with Auth0 and Digits</p>
          <p className={cx($p.black60, $p.fw4, $p.f20, $p.mb60, $p.ph25)}>
            Authenticating users is an integral part of most applications with the goal to make it as easy as
            possible for users to sign-in while enforcing security. Implementing this process manually can be very
            challenging while integrating external authentication services into your own application also takes
            a lot of time.
          </p>
          <img
            src={require('../../../../assets/graphics/BlogPostExampleIMG.png')}
            className={cx($p.w100)}
          />
        </div>
        <p className={cx($p.green, $p.f20, $p.fw4, $p.tc, $p.mb60)}>Read more</p>
      </div>
    )
  }
}
