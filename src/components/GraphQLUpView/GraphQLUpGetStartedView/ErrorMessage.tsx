import * as React from 'react'
import { $v, Icon } from 'graphcool-styles'
import { Link } from 'react-router'

interface State {

}

interface Props {
  message?: string
  invalidSource?: boolean
  errorType?: string
  schemaLink?: string
}

export default class ErrorMessage extends React.Component<Props, State> {

  render() {

    let messageContent

    if (this.props.invalidSource) {
      messageContent = (
        <div className='complexMessage'>
          <style jsx={true}>{`
            .complexMessage {
              @p: .f16, .pb38, .relative;
            }

            .header {
              @p: .flex, .itemsCenter, .ttu, .tracked, .fw6, .pt12, .ph16;
            }

            .errorType {
              @p: .bgRed, .white, .br2, .lhSolid, .pa4, .ml10, .fw5;
              font-family: 'Source Code Pro', monospace;
            }

            .schemaLink {
              @p: .bgRed10, .ph16, .mt25, .pv10, .overflowHidden;

              code {
                @p: .f14;
              }
            }

            .message {
              @p: .f16, .ph16, .mt25;
            }

            .buttonBar {
              @p: .flex, .absolute, .left16, .bottom0;
              transform: translate(0, 50%);
            }

            .buttonBar :global(.button) {
              @p: .noUnderline, .tracked, .fw6, .ttu, .pa10, .lhSolid, .buttonShadow, .bgWhite, .br2, .f14, .black50;
              @p: .mr10;
            }

            .buttonBar :global(.button):last-child {
              @p: .mr0;
            }

            .buttonBar :global(.button.primary) {
              @p: .blue;
            }
          `}</style>
          <header className='header'>
            <Icon
              className='mr10'
              width={20}
              height={20}
              color={$v.red}
              src={require('../../../assets/icons/errorSign.svg')}
            />
            {this.props.schemaLink ? 'Error' : 'You need a schema first'}
            {this.props.schemaLink && <span className='errorType'>{this.props.errorType}</span>}
          </header>
          {this.props.schemaLink &&
          <div className='schemaLink'>
            <code>{this.props.schemaLink}</code>
          </div>
          }
          <div className='message'>
            {this.props.schemaLink
              ? 'Seems like your source is invalid. Please try a valid source like our Worldchat-Example, or check out our docs for further information.'
              : 'Seems like you don’t have a schema yet. Try out our Worldchat Example to get started :)'
            }
          </div>
          <div className='buttonBar'>
            <Link
              to={'/graphql-up/new/?source=https://raw.githubusercontent.com/graphcool-examples/' +
               'worldchat-subscriptions-example/master/Worldchat.schema'}
              className='button primary'
            >Use Worldchat Example</Link>
            <Link to='/docs/faq/graphql-schema-definition-idl/' target='_blank' className='button'>Read in Docs</Link>
          </div>
        </div>
      )
    } else {
      messageContent = (
        <div className='simpleMessage'>
          <style jsx={true}>{`
            .simpleMessage {
              @p: .flex, .pv10, .ph12, .f14;
            }
          `}</style>
          <Icon
            className='mr10'
            width={20}
            height={20}
            color={this.props.schemaLink ? $v.red : $v.lightOrange}
            src={require('../../../assets/icons/errorSign.svg')}
          />
          {this.props.children}
        </div>
      )
    }

    return (
      <div className='root'>
        <style jsx={true}>{`
            .root {
              @p: .pv60, .ph96;
            }

            .rootContainer {
              @p: .br2, .bSolid, .bw1, .mb38;
              max-width: 700px;
              margin: 0 auto;

              &.error {
                @p: .bgRed10, .bRed20, .red;
              }

              &.warning {
                @p: .bgLightOrange10, .bLightOrange20, .lightOrange;
              }
            }
          `}</style>
        <div className={`rootContainer ${this.props.schemaLink ? 'error' : 'warning'}`}>
          {messageContent}
        </div>
      </div>
    )
  }
}
