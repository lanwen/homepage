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
              @p: .flex, .itemsCenter, .ttu, .tracked, .fw6, .pt10, .ph12;
            }

            .errorType {
              @p: .bgRed, .white, .br2, .lhSolid, .pa4, .ml10, .fw5;
              font-family: 'Source Code Pro', monospace;
            }

            .schemaLink {
              @p: .bgRed10, .ph12, .mt25, .pv10;

              code {
                @p: .f14;
              }
            }

            .message {
              @p: .f16, .ph12, .mt25;
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
            Error
            <span className='errorType'>{this.props.errorType}</span>
          </header>
          <div className='schemaLink'>
            <code>{this.props.schemaLink}</code>
          </div>
          <div className='message'>
            Seems like your source is invalid. Please try a valid source like our Worldchat-Example,
            or check out our docs for further information.
          </div>
          <div className='buttonBar'>
            <Link
              to={'/graphql-up/new/?source=https://raw.githubusercontent.com/graphcool-examples/' +
               'worldchat-subscriptions-example/master/Worldchat.schema'}
              className='button primary'
            >Use Worldchat Example</Link>
            <Link to='/docs/faq/graphql-schema-definition-idl/' className='button'>Open Docs</Link>
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
            color={$v.red}
            src={require('../../../assets/icons/errorSign.svg')}
          />
          {this.props.children}
        </div>
      )
    }

    return (
      <div className='root'>
        <div className='rootContainer'>
          <style jsx={true}>{`
            .root {
              @p: .pv60, .ph96;
            }

            .rootContainer {
              @p: .bgRed10, .br2, .bSolid, .bw1, .bRed30, .red, .mb38;
              max-width: 700px;
              margin: 0 auto;
            }
          `}</style>
          {messageContent}
        </div>
      </div>
    )
  }
}
