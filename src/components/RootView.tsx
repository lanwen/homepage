import * as React from 'react'
import ApolloClient from 'apollo-client'
import { $p } from 'graphcool-styles'
import * as cx from 'classnames'
import LoadingBar from './LoadingBar'
import * as Helmet from 'react-helmet'
import { throttle } from 'lodash'

interface Props {
  children?: JSX.Element
}

interface State {
  isLoading: boolean
}

interface Context {
  client: ApolloClient
}

const meta = [
  {
    name: 'description',
    content: 'Flexible backend platform combining GraphQL & AWS Lambda. The fastest way to build apps with GraphQL and Apollo/Relay, React, VueJS, Angular...', // tslint:disable-line
  },
  {property: 'og:type', content: 'website'},
  {property: 'og:title', content: 'GraphQL Backend as a Service'},
  {property: 'og:description', content: 'Flexible backend platform combining GraphQL & AWS Lambda'},
  {property: 'og:image', content: 'https://graph.cool/images/facebook.png?v2'},
  {property: 'og:image:width', content: '1200'},
  {property: 'og:image:height', content: '630'},
  {property: 'og:site_name', content: 'GRAPHCOOL'},
  {name: 'twitter:card', content: 'summary_large_image'},
  {name: 'twitter:site', content: '@graphcool'},
  {name: 'twitter:title', content: 'Graphcool - GraphQL Backend as a Service'},
  {name: 'twitter:description', content: 'Flexible backend platform combining GraphQL & AWS Lambda'},
  {name: 'twitter:image', content: 'https://graph.cool/images/twitter.png?v2'},
]

export default class RootView extends React.Component<Props, State> {

  static childContextTypes = {
    setIsLoading: React.PropTypes.func.isRequired,
  }

  static contextTypes = {
    client: React.PropTypes.object.isRequired,
  }

  context: Context

  rerender = throttle(
    () => {
      this.forceUpdate()
    },
    100,
  )

  state = {
    isLoading: false,
  }

  componentDidMount() {
    window.addEventListener('resize', this.rerender)

    if (navigator.userAgent !== 'SSR' && window.__APOLLO_STATE__) {
      // TODO https://github.com/apollostack/apollo-client/issues/1186
      // this.context.client.resetStore()
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.rerender)
  }

  getChildContext() {
    return {
      setIsLoading: this.setIsLoading,
    }
  }

  render() {
    return (
      <div className={cx($p.flex, $p.flexColumn, $p.overflowHidden)} id='react-root'>
        <Helmet
          title='Graphcool - GraphQL Backend as a Service'
          meta={meta}
        />
        {this.state.isLoading &&
        <LoadingBar/>
        }
        {this.props.children}
      </div>
    )
  }

  private setIsLoading = (isLoading: boolean): void => {
    this.setState({isLoading} as State)
  }
}
