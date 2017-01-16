import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import NegativeFeedback from './NegativeFeedback'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Item } from '../../../../types/types'
import {breakpoints} from '../../../../utils/constants'

interface State {
  showInput: boolean
  showThanks: boolean
  sending: boolean
  text: string
}

interface Props {
  submitFeedback: (itemAlias: string, text: string | null, wasHelpful: boolean) => Promise<{}>
  item: Item
}

class Feedback extends React.Component<Props, State> {
  state = {
    showInput: false,
    showThanks: false,
    text: '',
    sending: false,
  }
  render() {
    const {showInput, showThanks, text, sending} = this.state

    if (showThanks) {
      return (
        <div className={cx($p.mv38, $p.flex, $p.justifyCenter)}>
          <h2>Thanks for your feedback 💖</h2>
        </div>
      )
    }

    if (sending) {
      return (
        <div className={cx($p.mv38, $p.flex, $p.justifyCenter)}>
          <h2>Sending Feedback 🌹</h2>
        </div>
      )
    }

    return (
      <div>
        <div className={cx($p.bt, $p.bBlack10, $p.mt60, $p.mh96)}/>
        {!showInput ? (
            <div
              className={cx(
                $p.flex,
                window.innerWidth < breakpoints.p500 && $p.flexColumn,
                window.innerWidth < breakpoints.p500 && $p.itemsCenter,
                window.innerWidth > breakpoints.p500 && $p.justifyCenter,
                $p.mb38,
                $p.pv38,
            )}>
              <div className={cx(
                $p.flex,
                $p.o40,
                $p.f20,
                $p.fw4,
                $p.pt4,
              )}>Was this helpful?</div>
              <div className={cx(
                $p.flex,
                window.innerWidth < breakpoints.p500 && $p.mt25,
              )}>
                <div
                  onClick={() => this.sendFeedback(true)}
                  className={cx($p.flex, $p.pointer)}
                >
                  <img
                    src={require('../../../../assets/graphics/docs/Yes.svg')}
                    className={cx(
                      $p.bbox,
                      $p.db,
                      window.innerWidth > breakpoints.p500 && $p.pl38,
                      window.innerWidth > breakpoints.p500 && $p.pr10,
                    )}/>
                  <div
                    className={cx(
                      $p.o40,
                      $p.f20,
                      $p.fw4,
                      $p.pt4,
                  )}>Yes</div>
                </div>
                <div
                  onClick={this.showInput}
                  className={cx($p.flex, $p.pointer)}
                >
                  <img
                    src={require('../../../../assets/graphics/docs/No.svg')}
                    className={cx($p.bbox, $p.db, $p.pl38, $p.pr10)}
                  />
                  <div
                    className={cx($p.o40, $p.f20, $p.fw4, $p.pt4)}
                  >No</div>
                </div>
              </div>
            </div>
          ) : (
            <NegativeFeedback
              text={text}
              onChange={this.setText}
              onSubmit={() => this.sendFeedback(false)}
            />
          )}
      </div>
    )
  }
  private showInput = () => {
    this.setState({showInput: true} as State)
  }
  private showThanks = () => {
    this.setState({showThanks: true} as State)
  }
  private setText = (e: any) => {
    this.setState({text: e.target.value} as State)
  }
  private showSending = () => {
    this.setState({sending: true} as State)
  }
  private sendFeedback = (helpful: boolean) => {
    const {item, submitFeedback} = this.props
    const {text} = this.state

    this.showSending()
    submitFeedback(item.alias, text, helpful)
      .then(() => {
        this.showThanks()
      })
      .catch(err => console.error(err))
  }
}

const mutation = gql`
    mutation createItemFeedback($itemAlias: String!, $text: String, $wasHelpful: Boolean!) {
        createItemFeedback(itemAlias: $itemAlias, text: $text, wasHelpful: $wasHelpful) {
            id
        }
    }
`

export default graphql(mutation, {
  props: ({ mutate }) => ({
    submitFeedback: (itemAlias: string, text: string | null, wasHelpful: boolean) =>
      mutate({ variables: { itemAlias, text, wasHelpful }}),
  }),
})(Feedback)
