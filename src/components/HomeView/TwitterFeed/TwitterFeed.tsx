import * as React from 'react'
import * as cx from 'classnames'
import { $p, $g, $v } from 'graphcool-styles'
import styled from 'styled-components'
import Separator from '../../Separator'
import SectionHeader from '../../SectionHeader'
import SecondaryCallToAction from '../../SecondaryCallToAction'
import Post from './Post'

const Root = styled.div`

`

const RootContainer = styled.div`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: ${$v.size10};
    bottom: ${$v.size10};
    left: 0;
    width: 100%;
    background: rgba(0,0,0,0.02);
  }
`

const PostsContainer = styled.div`
  position: relative;
  &:before, &:after {
    content: "";
    position: absolute;
    z-index: 2;
    top: 0;
    height: 100%;
    width: ${$v.size96};
  }
  
  &:before {
    background: linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
    left: 0;
  }
  
  &:after {
    background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
    right: 0;
  }
`

export default class TwitterFeed extends React.Component<{}, {}> {

  render() {

    const data = [{
      content: 'Learning & writing @GraphQL for a new project built on @graphcool. So much cleaner and easier to experiment with than a typical REST #API.',
      author: 'Collin Schneider',
      date: '25. Jan',
      profilePicture: 'https://pbs.twimg.com/profile_images/637342545685647360/IQkCLjKQ_400x400.png'
    }, {
      content: 'Learning & writing @GraphQL for a new project built on @graphcool.',
      author: 'Collin Schneider',
      date: '25. Jan',
      profilePicture: 'https://pbs.twimg.com/profile_images/637342545685647360/IQkCLjKQ_400x400.png'
    }, {
      content: 'Learning & writing @GraphQL for a new project built on @graphcool. So much cleaner and easier to experiment with than a typical REST #API.',
      author: 'Collin Schneider',
      date: '25. Jan',
      profilePicture: 'https://pbs.twimg.com/profile_images/637342545685647360/IQkCLjKQ_400x400.png'
    }]

    return (
      <Root className={cx($p.pb96, $p.overflowHidden, $p.flex, $p.flexColumn)}>
        <Separator />
        <SectionHeader
          headline='We have the best Customers'
        />
        <SecondaryCallToAction
          className={cx($p.mb60)} text='See all our twitter'
          link='https://twitter.com/graphcool'
        />
        <RootContainer>
          <PostsContainer className={cx($p.flex, $p.itemsStretch)}>
            {data.map(node => {
              return (
                <Post
                  content={node.content}
                  author={node.author}
                  date={node.date}
                  profilePicture={node.profilePicture}
                />
              )
            })}
          </PostsContainer>
        </RootContainer>
      </Root>
    )
  }
}
