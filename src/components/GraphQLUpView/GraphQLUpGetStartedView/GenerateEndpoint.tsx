import * as React from 'react'
import * as CopyToClipboard from 'react-copy-to-clipboard'
import { Icon, $v } from 'graphcool-styles'

type EndpointType = 'SIMPLE' | 'RELAY'

interface State {
  projectId?: string
  selectedEndpointType: EndpointType
  justCopied: boolean
}

interface Props {
  generateProject: () => void
  loadingEndpoint: boolean
  projectId?: string
}

export default class GenerateEndpoint extends React.Component<Props, State> {

  copyTimer = null

  state = {
    selectedEndpointType: 'SIMPLE' as EndpointType,
    justCopied: false,
  }

  render() {

    const projectIdAvailable = Boolean(this.props.projectId)

    return (
      <div className='generate-endpoint'>
        <style jsx={true}>{`

          .generate-endpoint {
            @p: .flex, .flexColumn, .itemsCenter, .flexFixed;
          }

          .instructions {
            @p: .flex, .itemsCenter, .justifyCenter, .pb60;
          }

          .step {
            @p: .flex, .flexColumn, .itemsCenter, .justifyCenter;
            max-width: 110px;
          }

          .stepDescription {
            @p: .black50, .pt16, .tc;
          }

          .arrow {
            @p: .mh16;
          }

        `}</style>
        <div className='instructions'>

          <div className={`step ${projectIdAvailable && 'o30'}`}>
            <img src={require('../../../assets/graphics/graphqlup/graphql_endpoint.svg')}/>
            <div className='stepDescription'>Get GraphQL endpoint</div>
          </div>
          <img className='arrow' src={require('../../../assets/graphics/graphqlup/arrow_right.svg')}/>
          <div className={`step ${!projectIdAvailable && 'o30'}`}>
            <img src={require('../../../assets/graphics/graphqlup/connect.svg')}/>
            <div className='stepDescription'>Connect with your app</div>
          </div>
        </div>

        {projectIdAvailable ? this.renderEndpoint() : this.renderGraphQLButton() }

      </div>
    )
  }

  private renderEndpoint(): JSX.Element {
    return (
      <div>
        <style jsx={true}>{`
          .container {
            @p: .flex, .flexColumn, .w100;
          }

          .header {
            @p: .flex, .ttu, .green, .fw6, .f14, .itemsCenter, .justifyCenter, .pb10;
          }

          .tabBar {
            @p: .flex, .relative, .justifyCenter, .itemsCenter, .list;
          }

          .tab {
            @p: .black30, .tracked, .f12, .ttu, .nowrap, .pa10, .lhSolid, .bgBlack04, .pointer;

            transition: background .2s linear, color .2s linear;

            &:first-child {
              border-top-left-radius: 2px;
              border-bottom-right-radius: 2px;
            }

            &:last-child {
              border-top-right-radius: 2px;
              border-bottom-right-radius: 2px;
            }

            &.active {
              @p: .pa12, .bgGreen, .br2, .cursorDefault, .white;

              &:hover {
                @p: .bgGreen, .white;
              }
            }
          }

          .endpoint {
            @p: .bgBlack04, .black60, .f16, .br2, .pa10, .relative;
          }

          .infoText {
            @p: .f14, .o60, .pt16, .tc, .w100;
          }

          .docsLink {
            @p: .fw6, .noUnderline;
          }

          .playgroundButton {
            @p: .buttonShadow, .bgGreen, .white, .br2, .ttu, .fw6, .f14, .tracked, .pv10, .ph12, .pointer;
          }

          .copyButton {
            @p: .bgGreen, .white, .bbox, .pointer;
            min-width: 160px;
          }

          .copy {
            @p: .absolute, .br2, .right10, .top10, .bottom10, .flex, .itemsCenter, .buttonShadow, .bgWhite, .hS38;
            @p: .pointer;
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
        <div className='header'>
          <div className='tabBar'>
            <div
              className={`pointer ${this.state.selectedEndpointType !== 'SIMPLE' && 'o50'}`}
              onClick={() => this.setState({selectedEndpointType: 'SIMPLE' as EndpointType} as State)}
            >
              Simple API
            </div>
            <div
              className={`pointer ml16 ${this.state.selectedEndpointType !== 'RELAY' && 'o50'}`}
              onClick={() => this.setState({selectedEndpointType: 'RELAY' as EndpointType} as State)}
            >
              Relay API
            </div>
          </div>
        </div>
        <div className='endpoint'>
          {this.getEndpoint()}
          <CopyToClipboard
            text={this.getEndpoint()}
            onCopy={() => this.onCopy()}
          >
            <div className='copy'>
              {this.state.justCopied &&
              <div className='copyIndicator'>
                Copied
              </div>
              }
              <Icon
                width={38}
                height={38}
                color={$v.darkerBlue}
                src={require('graphcool-styles/icons/fill/copy.svg')}
              />
            </div>
          </CopyToClipboard>
        </div>
        <div className='infoText'>
          The Simple API works best when using Apollo Client
          (<a target='_blank' className='docsLink' href='http://dev.apollodata.com/'>Docs</a>)
        </div>
        <div className='flex mt25 justifyCenter w100'>
          <a className=' playgroundButton noUnderline dim' target='_blank' href={this.getEndpoint()}>
            Open Playground
          </a>
        </div>
      </div>
    )
  }

  private renderGraphQLButton(): JSX.Element {
    return (
      <div
        className={`getGraphQLAPIButton pink ${this.props.loadingEndpoint && 'pulsating'}`}
        onClick={this.props.generateProject}
      >
        <style jsx={true}>{`
          .getGraphQLAPIButton {
            @p: .flex, .itemsCenter, .justifyCenter, .br2, .ph10, .pv10, .pointer, .f16;
          }

          .pink {
            @p: .white;
            background-color: rgba(224, 0, 151, 1);
          }

          .pulsating {
            animation: pulsate 1.5s ease infinite;
          }

          @keyframes pulsate {
            0% {
              transform: scale(1);
              opacity: 1;
            }

            50% {
              transform: scale(1.02);
              opacity: 0.8;
            }

            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
      `}</style>
        <img
          width={25}
          height={20}
          src={require('../../../assets/graphics/graphqlup/nodes.svg')}/>
        <div className='pl10'>{this.props.loadingEndpoint ? 'Creating GraphQL API ...' : 'Get GraphQL API'}</div>
      </div>
    )
  }

  private onCopy() {
    this.setState({justCopied: true} as State)
    this.copyTimer = window.setTimeout(
      () => this.setState({justCopied: false} as State),
      1000,
    )
  }

  private getEndpoint(): string {
    const baseURL = 'https://api.graph.cool'
    const endpoint = (this.state.selectedEndpointType as String).toLowerCase()
    return `${baseURL}/${endpoint}/v1/${this.props.projectId}`
  }
}
