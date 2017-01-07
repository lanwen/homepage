import * as React from 'react'
import styled from 'styled-components'
import {$p, Icon, $v} from 'graphcool-styles'
import { breakpoints } from '../../../../utils/constants'
import * as algolia from 'algoliasearch'
import * as cx from 'classnames'
import {withRouter} from 'react-router'
import AutoComplete from 'react-algoliasearch'


// const Searchbox = styled.input`
//   width: 300px;
//   box-sizing: border-box;
//   box-shadow: 0 1px 3px rgba(0,0,0,.15);
//   border-radius: 2px;
//   font-size: 16px;
//   background-color: #fff;
//   padding: 12px 20px 12px 46px;
//   transition: all .3s;
//   @media (max-width: ${breakpoints.p1360}px) {
//     width: 250px;
//   }
//
//   ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
//     transition: .3s white;
//   }
//   ::-moz-placeholder { /* Firefox 19+ */
//     transition: .3s white;
//   }
//   :-ms-input-placeholder { /* IE 10+ */
//     transition: .3s white;
//   }
//   :-moz-placeholder { /* Firefox 18- */
//     transition: .3s white;
//   }
// `

interface Props {
  className?: string
  router: ReactRouter.InjectedRouter
}

interface State {
  query: string
}

export default class Search extends React.Component<Props,{}> {
  private client: algolia.AlgoliaClient
  private index: algolia.AlgoliaIndex
  state = {
    query: '',
  }
  componentDidMount() {
    this.client = algolia('MU1EXDJ8LW', '4ac8dd3789c402e98dd0816518e1e842')
    this.index = this.client.initIndex('Simple Search')
  }
  render() {
    const {className} = this.props
    const {query} = this.state
    return (
      <div className={cx($p.relative, className)}>
        <Icon
          width={16}
          height={16}
          src={require('graphcool-styles/icons/stroke/search.svg')}
          stroke={true}
          color={$v.black}
          strokeWidth={2}
          className={cx($p.absolute, $p.left0, $p.pt16, $p.pl16, $p.pointer)}
          onClick={this.search}
        />
        <h1>Hi</h1>
        <AutoComplete
          appId='MU1EXDJ8LW'
          apiKey='4ac8dd3789c402e98dd0816518e1e842'
          indices={[{index: 'Simple Search'}]}
          placeholder='Search ...'
          displayKey='title'
        />
      </div>
    )
  }

// <Searchbox
//   type='text'
//   name='search'
//   placeholder='Search..'
//   value={query}
//   onChange={this.onChange}
// onKeyDown={this.onKeyDown}
// />

  private onChange = (e: any) => this.setState({query: e.target.value})
  private search() {
    this.props.router.push(`/docs/search?q=${encodeURIComponent(this.state.query)}`)
  }
  private onKeyDown = (e: any) => {
    if (e.keyCode === 13 && !e.metaKey) {
      this.search()
    }
  }
}