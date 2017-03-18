import * as React from 'react'
import ExampleStep from './ExampleStep'
import * as CopyToClipboard from 'react-copy-to-clipboard'
import { $v, Icon } from 'graphcool-styles'

interface Props {
  name?: string
}

interface State {
  copied: boolean
}

export default class ExampleContent extends React.Component<Props,State> {

  state = {
    copied: false
  }

  render() {
    return (
      <article className='exampleContent'>
        <style jsx={true}>{`
              .exampleContent {
                @p: .relative, .bt, .bBlack10, .ph60, .pv96;
                background: #fafafa;
              }

              .exampleContentContainer {
                @p: .center;
                max-width: 800px;
              }

              .exampleContentHeader {
                @p: .overlayShadow, .bgWhite, .br2, .mb60, .overflowHidden;
              }

              .title {
                @p: .f25, .black80, .fw6, .mb25;
              }

              .content {
                @p: .f16, .fw4, .black60;
                line-height: 1.9;
              }

              .cloneExampleProject {
                @p: .bgBlue10, .pa16, .blue, .relative;
              }

              .copy {
                @p: .absolute, .top50, .right10, .tlVCenter, .br2, .ml10, .flex, .itemsCenter, .buttonShadow, .bgWhite, .hS38, .pointer;
              }

              .copyIndicator {
                @p: .o0, .absolute, .f14, .fw6, .blue;
                top: -20px;
                left: 50%;
                transform: translate(-50%,0);
                animation-duration: 0.7s;
                animation-name: movingCopyIndicator;
                animation-timing-function: linear;
              }

              @keyframes movingCopyIndicator {
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
              }
            `}</style>
        <div className='exampleContentContainer'>
          <header className='exampleContentHeader'>
            <div className='pa25'>
              <h2 className='title'>First, you need to download the example.</h2>
              <p className='content'>
                We have all in the github repository. Clone it or download it:<br />
                <a href='https://github.com/graphcool-examples/react-native-apollo-instagram-example'>
                  github.com/graphcool-examples/react-native-apollo-instagram-example
                </a>
              </p>
            </div>
            <div className='cloneExampleProject'>
              <code>git clone git@github.com:graphcool-examples/react-apollo-pokedex-example.git</code>
              <CopyToClipboard text='asf' onCopy={this.onCopy}>
                <div
                  className='copy'
                >
                  {this.state.copied &&
                  <div className='copyIndicator'>
                    Copied
                  </div>
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
          </header>
          <ExampleStep />
          <ExampleStep />
        </div>
      </article>
    )
  }

  private onCopy = () => {
    this.setState({ copied: true } as State)
    setTimeout(() => this.setState({ copied: false } as State), 700)
  }
}