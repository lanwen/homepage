import * as React from 'react'
import GenerateEndpoint from './GenerateEndpoint'

interface State {

}

interface Props {
  schemaLink: string
}

export default class GenerateEndpointSection extends React.Component<Props, State> {

  render() {
    return (
      <div className='root'>
        <style jsx={true}>{`
          .root {
            @p: .flex, .flexColumn, .justifyCenter, .itemsCenter, .center, .pv60, .bgBlack02;
            max-width: 1440px;
          }

          .schemaImportedFromContainer {
            @p: .flex, .pb60;
          }

          .schemaImportedFromText {
            @p: .f14, .black20;
          }

        `}</style>
        <div className='schemaImportedFromContainer'>
          <div className='schemaImportedFromText fw3'>Schema imported from</div>
          <img className='ph6' src={require('../../../assets/graphics/graphqlup/github.svg')}/>
          <div className='schemaImportedFromText fw6'>{this.props.schemaLink}</div>
        </div>

        <div className='flex'>
          <img src={require('../../../assets/graphics/graphqlup/example_schema.svg')}/>
          <GenerateEndpoint />
        </div>
      </div>
    )
  }
}
