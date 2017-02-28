import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from 'styled-components'
import {$p, Icon, $v} from 'graphcool-styles'
import * as algolia from 'algoliasearch'
import * as cx from 'classnames'
import {Item} from '../../../../types/types'
import {Link, withRouter} from 'react-router'
import {throttle} from 'lodash'
import {connect} from 'react-redux'

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
    const {query, results, activeIndex, resultsActive} = this.state
    const autoFocus = location.pathname === '/docs'
    return (
      <div className='root'>
        <style jsx={true}>{`
          .root {
            @p: .bgWhite, .br2, .overflowVisible, .relative, .buttonShadow, .w100, .pa16, .flex, .itemsCenter, .pointer;
            @p: .z999;

            &:after {
              content: '';
              @p: .absolute, .right16, .top0, .bottom0, .wS10;
              background: linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
            }
          }

          .searchbarInput {
            @p: .black80, .pa0, .pl12, .w100, .pointer, .bgWhite;
          }

          @media (max-width: 899px) {
            .root {
              @p: .mr25;
              min-width: 0;
            }

            .searchbarInput {
              @p: .f14;
            }
          }

          @media (min-width: 900px) {
            .root {
              @p: .mr38;
              min-width: 100px;
            }

            .searchbarInput {
              @p: .f16;
            }
          }
        `}</style>
        <Icon
          width={16}
          height={16}
          src={require('graphcool-styles/icons/stroke/search.svg')}
          stroke={true}
          color={$v.gray80}
          strokeWidth={4}
          className='searchbarIcon'
          onClick={this.focusInput}
        />
        <input
          type='text'
          name='search'
          placeholder='Search for references, resources or articles...'
          value={query}
          className='searchbarInput'
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
            <div className={cx($p.flex, $p.pa6, $p.ma6, $p.itemsCenter)}>
              <div className={cx($p.black50, $p.f14)}>Powered by</div>
              <img
                className={cx($p.ml6)}
                style={{
                  width: 50,
                }}
                src={require('../../../../assets/graphics/docs/algolia.svg')}
              />
            </div>
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
