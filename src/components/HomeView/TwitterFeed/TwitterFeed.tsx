import * as React from 'react'
import { findDOMNode } from 'react-dom'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import Separator from '../../Separator'
import SectionHeader from '../../SectionHeader'
import SecondaryCallToAction from '../../SecondaryCallToAction'
import HorScrollbox from '../../HorScrollbox'
import Post from './Post'
import { breakpoints } from '../../../utils/constants'

const Root = styled.section`

`

const RootContainer = styled.div`
  position: relative;
  width: 100%;
  
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
  
  @media (max-width: ${breakpoints.p500}px) {
    &:before, &:after {
      width: ${$v.size25};
    }
  }
`

const PostsInnerContainer = styled(HorScrollbox)`
  display: flex;
  padding: ${$v.size10} 0;
  margin: -${parseFloat($v.size10)}px 0;
  
  @media (max-width: ${breakpoints.p500}px) {
    padding: ${$v.size10} ${$v.size25};
  }
`

const data = [{
  content: 'Learning & writing @GraphQL for a new project built on @graphcool.' +
    ' So much cleaner and easier to experiment with than a typical REST #API.',
  author: 'Collin Schneider',
  date: '25. Jan',
  profilePicture: 'https://pbs.twimg.com/profile_images/637342545685647360/IQkCLjKQ_bigger.png',
  url: 'https://twitter.com/thinksaydo/status/824107218006052865',
}, {
  content: 'Just went through the super helpful @graphcool onboarding Can\'t wait to build something now with @GraphQL',
  author: 'Joe Seifi',
  date: '20. Jan',
  profilePicture: 'https://pbs.twimg.com/profile_images/565491510041268224/ubH4ju8L_bigger.jpeg',
  url: 'https://twitter.com/joeseifi/status/822331170587164672',
}, {
  content: 'Am getting super productive with @getexponent , @apollographql and @graphcool. Got so much done in a week.',
  author: 'Gopi Donthireddy',
  date: '17. Jan',
  profilePicture: 'https://pbs.twimg.com/profile_images/2936249191/e7fb0e4ad08a621efcdc76f3879190c8_bigger.jpeg',
  url: 'https://twitter.com/gopidon/status/821380260956663808',
}, {
  content: 'Like all the cool kids in 2017, working on an app using GraphQL' +
  ' and backend built on @graphcool and it\'s all super cool so far #graphql',
  author: 'John Valustik',
  date: '4. Jan',
  profilePicture: 'https://pbs.twimg.com/profile_images/453267531407446016/Pddo0NCA_bigger.jpeg',
  url: 'https://twitter.com/honzavalustik/status/816608630258606080',
}, {
  content: '@graphcool thank you so much! I just remade my app backend' +
  'in 20 minutes on the kitchen counter! Took me much thinking without your coolness',
  author: 'emil møller',
  date: '28. Okt 2016',
  profilePicture: 'https://pbs.twimg.com/profile_images/3371016366/1d4f8cc16570baa7fb49963e97655d80_bigger.png',
  url: 'https://twitter.com/emilrmoeller/status/792052354640207876',
}]

export default class TwitterFeed extends React.Component<{}, {}> {

  componentDidMount() {
    if (window.innerWidth > 500) {
      const scrollContainer = findDOMNode(this.refs['scrollContainer'])
      scrollContainer.scrollLeft = 300
    }
  }

  render() {

    return (
      <Root className={cx($p.pb96, $p.overflowHidden, $p.flex, $p.flexColumn, $p.itemsCenter)}>
        <Separator />
        <SectionHeader
          headline='What other people say about Graphcool'
        />
        <SecondaryCallToAction
          className={cx($p.mb60)} text='Follow us on Twitter'
          link='https://twitter.com/graphcool'
          newWindow
        />
        <RootContainer>
          <PostsContainer className={cx($p.flex, $p.itemsStretch)}>
            <PostsInnerContainer ref='scrollContainer'>
              {data.map(node => (
                <Post
                  content={node.content}
                  author={node.author}
                  date={node.date}
                  profilePicture={node.profilePicture}
                  url={node.url}
                />
              ))}
            </PostsInnerContainer>
          </PostsContainer>
        </RootContainer>
      </Root>
    )
  }
}
