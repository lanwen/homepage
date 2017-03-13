import * as React from 'react'

interface State {

}

interface Props {

}

export default class GenerateEndpointSection extends React.Component<Props, State> {

  render() {
    return (
      <div>
        <style jsx={true}>{`
          .root {
            @p: .flex, .justifyCenter, .pa96, .center;
            max-width: 1440px;
          }

          .schemaImportedFromContainer {
            @p: .flex, .pv60;
          }

        `}</style>
        <div className='schemaImportedFromContainer'>


        </div>
      </div>
    )
  }
}