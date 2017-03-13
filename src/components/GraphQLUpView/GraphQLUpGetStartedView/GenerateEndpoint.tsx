import * as React from 'react'
import * as CopyToClipboard from 'react-copy-to-clipboard'

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
            @p: .flex, .flexColumn, .itemsCenter, .ph60;
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

          .endpoint {
            @p: .bgGreen10, .black60, .f14, .br2, .pa10, .tc;
          }

          .infoText {
            @p: .fw3, .f14, .o60, .pt10, .tc, .w100;
          }

          .docsLink {
            @p: .green, .fw6, .noUnderline;
          }

          .button {
            @p: .br2, .ttu, .fw6, .f16, .ph16, .pv10, .pointer, .tc;
          }

          .copyButton {
            @p: .bgGreen, .white, .bbox;
            min-width: 160px;
          }

          .playgroundButton {
            @p: .bgGreen20, .green;
          }

        `}</style>
        <div className='header'>
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
        <div className='endpoint'>{this.getEndpoint()}</div>
        <div className='infoText'>
          The Simple API works best when using Apollo Client
          (<a target='_blank' className='docsLink' href='http://dev.apollodata.com/'>Docs</a>)
        </div>
        <div className='flex mt25 justifyBetween w100'>
          <CopyToClipboard
            text={this.getEndpoint()}
            onCopy={() => this.onCopy()}
          >
            <div className='button copyButton mr4'>{this.state.justCopied ? 'Copied!' : 'Copy Endpoint'}</div>
          </CopyToClipboard>
          <a className='button playgroundButton ml4 noUnderline' target='_blank' href={this.getEndpoint()}>
            <div>Open Playground</div>
          </a>
        </div>

      </div>
    )
  }

  private renderGraphQLButton(): JSX.Element {
    return (
      <div
        className='getGraphQLAPIButton pink'
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

          .rotating {
            animation: spin 1.5s linear infinite;
          }

          @keyframes spin { 100% { transform:rotate(360deg); } }
      `}</style>
        <img
          width={25}
          height={20}
          className={`${this.props.loadingEndpoint && 'rotating'}`}
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
