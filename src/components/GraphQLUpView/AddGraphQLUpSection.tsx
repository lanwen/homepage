import * as React from 'react'
import {Icon, $v} from 'graphcool-styles'
import * as CopyToClipboard from 'react-copy-to-clipboard'
import styled, { keyframes } from 'styled-components'

interface State {
  schemaUrl: string
  markdown: string
  copied: boolean
}

interface Props {

}

const movingCopyIndicator = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, 0);
  }
  
  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate(-50%, -50px);
  }
`

const CopyIndicator = styled.div`
  top: -20px;
  transform: translate(-50%,0);
  animation: ${movingCopyIndicator} .7s linear
`

const booksEmoji = '📚' // not rendered in webstorm

export default class AddGraphQLUpSection extends React.Component<Props, State> {

  state = {
    schemaUrl: 'https://raw.githubusercontent.com/nikolasburk/ConferencePlanner/master/conference_planner.schema',
    markdown: '',
    copied: false,
    // markdown: ``,
  }

  componentWillMount () {
    this.update(this.state.schemaUrl)
  }

  render() {
    return (
      <div className='add-graphql-root'>
        <style jsx={true}>{`
            .add-graphql-root {
              @p: .w100, .bgDarkBlue;
            }
            .add-graphql {
              @p: .flex, .flexColumn, .itemsCenter, .ph38, .center, .white;
              max-width: 1440px;
            }

            .innerMaxWidth {
              max-width: 750px;
            }

            .title {
              @p: .fw3, .pt60, .tc;
              font-size: 31.5px;
            }

            .subtitle {
              @p: .f20, .fw3, .pt16, .tc, .pb60, .white60;
            }

            .stepInstruction {
              @p: .f14, .fw6, .ttu, .pl16, .white;
              letter-spacing: 0.53px;
            }

            .input {
              @p: .w100, .ph25, .pv16, .bgDarkerBlue, .f14, .fw3, .mt10, .bbox, .white;
              min-height: 60px;
            }

            .copyMarkdown {
              @p: .flex, .itemsCenter, .justifyBetween, .relative;
              padding: 0 !important;
            }

            .copyMarkdownText {
              @p: .w100, .ph25, .pv16, .overflowAuto;
            }

            .copyMarkdown:hover :global(.copyButton) {
              opacity: 1;
            }

            .copyMarkdown :global(.copyButton) {
              @p: .absolute, .top50, .tlVCenter, .pointer, .buttonShadow, .itemsCenter, .bgWhite, .br2, .right16;
              opacity: 0;
            }
          `}</style>
        <div className='add-graphql'>
          <div className='title innerMaxWidth'>
            Add
            <img
              className='mh10'
              src={require('../../assets/graphics/graphqlup/graphql-up_small.svg')}
            />
            to your repositories/docs {booksEmoji}
            </div>
          <div className='subtitle innerMaxWidth'>
            You can add a graphql-up badge to your own repositories or docs to give your users a
            quick way to get their own GraphQL endpoint based on your schema.
          </div>

          <div className='w100 pb60 innerMaxWidth'>
            <div className='stepInstruction'>Step 1: Paste URL to your schema</div>
            <input
              className='input'
              placeholder='Paste your URL here ...'
              value={this.state.schemaUrl}
              onChange={(e: any) => this.update(e.target.value)}
            />

            <div className='stepInstruction pt25'>Step 2: Copy generated markdown</div>
            <div className='input copyMarkdown'>
              <div className='copyMarkdownText'>{this.state.markdown}</div>
              <CopyToClipboard text={this.state.markdown} onCopy={this.onCopy}>
                <div
                  className='copyButton'
                >
                  {this.state.copied &&
                  <CopyIndicator className='absolute f14 fw6 ml16'>
                    Copied
                  </CopyIndicator>
                  }
                  <Icon
                    className=''
                    width={38}
                    height={38}
                    color={$v.darkerBlue}
                    src={require('graphcool-styles/icons/fill/copy.svg')}
                  />
                </div>
              </CopyToClipboard>
              </div>

          </div>

        </div>
      </div>
    )
  }

  private onCopy = () => {
    this.setState({ copied: true } as State)
    setTimeout(() => this.setState({ copied: false } as State), 700)
  }

  private update = (schemaUrl: string) => {
    const url = `https://www.graph.cool/graphql-up/new?source=${encodeURI(schemaUrl)}`
    const markdown = `[![graphql-up](http://static.graph.cool/images/graphql-up.svg)](${url})`
    this.setState({ schemaUrl, markdown } as State)
  }
}
