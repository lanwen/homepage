import * as React from 'react'
import { $p, $v } from 'graphcool-styles'
import * as cx from 'classnames'
import LoadingBar from './LoadingBar'
import * as Helmet from 'react-helmet'

interface Props {
  children?: JSX.Element
}

interface State {
  isLoading: boolean
}

export default class RootView extends React.Component<Props, State> {

  static childContextTypes = {
    setIsLoading: React.PropTypes.func.isRequired,
  }

  state = {
    isLoading: false,
  }

  getChildContext() {
    return {
      setIsLoading: this.setIsLoading,
    }
  }

  render() {
    return (
      <div className={cx($p.flex, $p.flexColumn)}>
        <Helmet
          title='Graphcool - GraphQL Backend as a Service.'
          meta={[
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
          ]}
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
