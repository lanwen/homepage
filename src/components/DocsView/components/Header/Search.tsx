import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components'
import {$p, Icon, $v} from 'graphcool-styles'
import { breakpoints } from '../../../../utils/constants'
import * as algolia from 'algoliasearch'
import * as cx from 'classnames'
import {Item} from '../../../../types/types'
import {Link, withRouter} from 'react-router'
import {throttle} from 'lodash'
import {connect} from 'react-redux'

const Searchbox = styled.input`
  width: 300px;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(0,0,0,.15);
  border-radius: 2px;
  font-size: 16px;
  background-color: #fff;
  padding: 12px 20px 12px 46px;
  transition: all .3s;
  @media (max-width: ${breakpoints.p1360}px) {
    width: 250px;
  }
  
  @media (max-width: ${breakpoints.p500}px) {
    width: 180px;
  }
  
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    transition: .3s white;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    transition: .3s white;
  }
  :-ms-input-placeholder { /* IE 10+ */
    transition: .3s white;
  }
  :-moz-placeholder { /* Firefox 18- */
    transition: .3s white;
  }
`

const Results = styled.div`
  top: 46px;
  left: 0;
  width: 300px;
  z-index: 50;
  > a {
    &:hover {
      background-color: ${$v.gray04};
    }
    &:last-child {
      border: none;
    }
  }
  em {
    font-style: normal;
    font-weight: bold;
    color: ${$v.green};
    background-color: ${$v.lightGreen20};
  }
`

interface Props {
  className?: string
  router: ReactRouter.InjectedRouter
}

interface State {
  query: string
  activeIndex: number
  results: Item[]
  resultsActive: boolean
}

class Search extends React.Component<Props,{}> {
  state = {
    query: '',
    activeIndex: 0,
    results: [],
    resultsActive: true,
  }
  private client: algolia.AlgoliaClient
  private index: algolia.AlgoliaIndex
  private ref: HTMLElement
  private inputRef: HTMLElement
  private search = throttle(
    (q: string) => {
      this.index.search(
        {
          query: q,
          attributesToHighlight: ['title'],
          hitsPerPage: 10,
        },
        (err, data) => {
          if (err) {
            console.error(err)
          } else {
            this.setState({results: data.hits.slice(0, 10)})
          }
        },
      )
    },
    500,
    {
      // this is very important as otherwise the last change would be ignored
      trailing: true,
    },
  )
  constructor(props) {
    super(props)

    this.refs = {}
  }
  componentDidMount() {
    this.client = algolia('MU1EXDJ8LW', '4ac8dd3789c402e98dd0816518e1e842')
    this.index = this.client.initIndex('Simple Search')
  }
  render() {
    const {className} = this.props
    const {query, results, activeIndex, resultsActive} = this.state
    const autoFocus = location.pathname === '/docs'
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
          onClick={this.focusInput}
        />
        <Searchbox
          type='text'
          name='search'
          placeholder='Search..'
          value={query}
          className='search-input'
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          onBlur={this.hideResults}
          onFocus={this.showResults}
          autoFocus={autoFocus}
          ref={this.setInputRef}
        />
        {results.length > 0 && query.length > 0 && resultsActive && (
          <Results
            className={cx($p.absolute, $p.bgWhite, $p.br2, $p.bBlack10, $p.ba, $p.overflowScroll)}
            ref={this.setRef}
          >
            {results.map((result: any, index) => (
              <Link
                key={result.alias}
                className={cx(
                  $p.pa6, $p.ma6, $p.bb, $p.bBlack05, $p.noUnderline, $p.db, $p.toe, $p.overflowHidden,
                  {
                    [$p.blue]: index === activeIndex,
                  },
                )}
                to={result.path + '-' + result.alias}
                dangerouslySetInnerHTML={{__html: result._highlightResult.title.value}}
              >
              </Link>
            ))}
          </Results>
        )}
      </div>
    )
  }

  private hideResults = () => {
    setTimeout(
      () => {
        this.setState({resultsActive: false} as State)
      },
      100,
    )
  }
  private showResults = () => {
    this.setState({resultsActive: true} as State)
  }
  private focusInput = () => {
    if (this.inputRef) {
      (ReactDOM.findDOMNode(this.inputRef) as HTMLElement).focus()
    }
  }
  private setRef = (ref: HTMLElement) => {
    this.ref = ref
  }
  private setInputRef = (ref: HTMLElement) => {
    this.inputRef = ref
  }
  private onChange = (e: any) => {
    this.setState({query: e.target.value})
    this.search(e.target.value)
    if (e.target.value.length === 0) {
      this.setState({activeIndex: 0})
    }
  }

  private moveCursor(by: number) {
    this.setState((state: State) => {
      const newIndex = (state.activeIndex + by + state.results.length) % state.results.length
      const ELEMENT_HEIGHT = 37

      if (this.ref) {
        this.ref.scrollTop = newIndex * ELEMENT_HEIGHT
      }

      return {
        ...state,
        activeIndex: newIndex,
      }
    })
  }
  private gotoSelectedItem = () => {
    this.setState({query: ''} as State)
    const {results, activeIndex} = this.state
    const item = results[activeIndex]

    this.props.router.push(item.path + '-' + item.alias)
  }
  private onKeyDown = (e: any) => {
    if (e.keyCode === 13 && !e.metaKey) {
      this.gotoSelectedItem()
    }
    if (e.keyCode === 38) {
      this.moveCursor(-1)
    }
    if (e.keyCode === 40) {
      this.moveCursor(1)
    }
  }
}

export default connect()(withRouter(Search))
