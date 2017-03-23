import * as React from 'react'
import ExampleStep from './ExampleStep'
import * as CopyToClipboard from 'react-copy-to-clipboard'
import { $v, Icon } from 'graphcool-styles'
import {QuickExample} from '../../../../types/types'

interface Props {
  frontendTechnologyId: string
  clientTechnologyId: string
  example: QuickExample
}

interface State {
  copied: boolean
}

export default class ExampleContent extends React.Component<Props,State> {

  state = {
    copied: false,
  }

  private markdownPaths = {
    'react-apollo-instagram': [
      require('./steps/react-apollo-instagram/react-apollo-instagram-1.md'),
      require('./steps/react-apollo-instagram/react-apollo-instagram-2.md'),
      require('./steps/react-apollo-instagram/react-apollo-instagram-3.md'),
    ],
    'react-apollo-todoapp': [
      require('./steps/react-apollo-todoapp/react-apollo-todoapp-1.md'),
      require('./steps/react-apollo-todoapp/react-apollo-todoapp-2.md'),
      require('./steps/react-apollo-todoapp/react-apollo-todoapp-3.md'),
    ],
    'react-relay-instagram': [
      require('./steps/react-relay-instagram/react-relay-instagram-1.md'),
      require('./steps/react-relay-instagram/react-relay-instagram-2.md'),
      require('./steps/react-relay-instagram/react-relay-instagram-3.md'),
    ],
    'react-relay-todoapp': [
      require('./steps/react-relay-todoapp/react-relay-todoapp-1.md'),
      require('./steps/react-relay-todoapp/react-relay-todoapp-2.md'),
      require('./steps/react-relay-todoapp/react-relay-todoapp-3.md'),
    ],
    'rn-apollo-instagram': [
      require('./steps/rn-apollo-instagram/rn-apollo-instagram-1.md'),
      require('./steps/rn-apollo-instagram/rn-apollo-instagram-2.md'),
      require('./steps/rn-apollo-instagram/rn-apollo-instagram-3.md'),
    ],
    'angular-apollo-instagram': [
      require('./steps/angular-apollo-instagram/angular-apollo-instagram-1.md'),
      require('./steps/angular-apollo-instagram/angular-apollo-instagram-2.md'),
      require('./steps/angular-apollo-instagram/angular-apollo-instagram-3.md'),
    ],
    'angular-apollo-todoapp': [
      require('./steps/angular-apollo-todoapp/angular-apollo-todoapp-1.md'),
      require('./steps/angular-apollo-todoapp/angular-apollo-todoapp-2.md'),
      require('./steps/angular-apollo-todoapp/angular-apollo-todoapp-3.md'),
    ],
    'vue-apollo-instagram': [
      require('./steps/vue-apollo-instagram/vue-apollo-instagram-1.md'),
      require('./steps/vue-apollo-instagram/vue-apollo-instagram-2.md'),
      require('./steps/vue-apollo-instagram/vue-apollo-instagram-3.md'),
    ],
  }

  render() {

    const {frontendTechnologyId, clientTechnologyId, example} = this.props
    const lowercaseExampleType = example.type.toLowerCase()
    const exampleName = `${frontendTechnologyId}-${clientTechnologyId}-${lowercaseExampleType}`
    console.log(exampleName)
    const markdownPaths = this.markdownPaths[exampleName]
    console.log(markdownPaths)

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
                @p: .absolute, .top50, .right10, .tlVCenter, .br2, .ml10, .flex, .itemsCenter;
                @p: .buttonShadow, .bgWhite, .hS38, .pointer;
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
                We manage all of our examples on GitHub. Clone it or download it:<br />
                <a href={this.props.example.link}>
                  {this.props.example.link}
                </a>
              </p>
            </div>
            <div className='cloneExampleProject'>
              <code>git clone {this.props.example.link}.git</code>
              <CopyToClipboard text={`git clone ${this.props.example.link}.git`} onCopy={this.onCopy}>
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
          {markdownPaths.map((markdownPath, index) => (
            <ExampleStep
              key={index}
              markdownFile={markdownPath}
              stepIndex={index + 1}
            />
          ))}
        </div>
      </article>
    )
  }

  private onCopy = () => {
    this.setState({ copied: true } as State)
    setTimeout(() => this.setState({ copied: false } as State), 700)
  }

}
