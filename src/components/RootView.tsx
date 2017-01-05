import * as React from 'react'
import { $p, $v } from 'graphcool-styles'
import * as cx from 'classnames'
import LoadingBar from './LoadingBar'

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
