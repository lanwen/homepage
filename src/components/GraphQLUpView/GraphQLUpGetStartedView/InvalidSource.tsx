/* tslint:disable */
import * as React from 'react'

interface Props {
  schemaLink?: string
  message?: string
}

const InvalidSource = ({schemaLink, message}: Props) => (
  <div className='invalid-source'>
    <style jsx>{`
      .invalid-source {
        @p: .pa16, .center;
        max-width: 700px;
      }
      .title {
        @p: .f25, .red, .mv10;
      }
      .text {
        @p: .f16, .black60;
      }
      pre {
        @p: .br2, .bgBlack04, .pa4, .dib, .black60, .f12;
        font-family: monospace;
      }
      pre.error {
        @p: .red, .f14;
      }
    `}</style>
    <div className='title'>Error</div>
    {!schemaLink ? (
      <div className='text'>
        You didn't provide a source in the url. <br/>
        Please try a valid source like
        <div>
          <a href='https://www.graph.cool/graphql-up/new/?source=https://raw.githubusercontent.com/graphcool-examples/worldchat-subscriptions-example/master/Worldchat.schema'> {/* tslint:disable-line */}
            <pre>https://raw.githubusercontent.com/graphcool-examples/worldchat-subscriptions-example/master/Worldchat.schema</pre> {/* tslint:disable */}
          </a>
        </div>
      </div>
    ) : (
      <div className='text'>
        The source <pre>{schemaLink}</pre> is invalid. <br/>:36
        The response is:
        <div>
          <pre className='error'>{message}</pre>
        </div>
        Please try a valid source like
        <div>
          <a href='https://www.graph.cool/graphql-up/new/?source=https://raw.githubusercontent.com/graphcool-examples/worldchat-subscriptions-example/master/Worldchat.schema'> {/* tslint:disable-line */}
            <pre>https://raw.githubusercontent.com/graphcool-examples/worldchat-subscriptions-example/master/Worldchat.schema</pre> {/* tslint:disable-line */}
          </a>
        </div>
      </div>
    )}
  </div>
)

export default InvalidSource
