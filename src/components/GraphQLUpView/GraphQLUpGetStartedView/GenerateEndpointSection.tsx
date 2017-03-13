import * as React from 'react'
import GenerateEndpoint from './GenerateEndpoint'
import * as CodeMirror from 'react-codemirror'

interface State {

}

interface Props {
  schemaLink?: string
  generateProject: () => void
  loadingEndpoint: boolean
  projectId?: string
  schema: string
}

export default class GenerateEndpointSection extends React.Component<Props, State> {

  render() {
    const {schemaLink} = this.props
    const ghPrefix = 'https://raw.githubusercontent.com/'
    const trimmedSchemaLink = schemaLink.startsWith(ghPrefix) ?
      schemaLink.slice(ghPrefix.length, schemaLink.length) : schemaLink

    return (
      <div className='generate-endpoint-section-wrapper'>
        <style jsx={true}>{`
          .generate-endpoint-section-wrapper {
            @p: .w100, .bgBlack02;
          }
          .generate-endpoint-section {
            @p: .flex, .flexColumn, .justifyCenter, .itemsCenter, .center, .pv60;
            max-width: 1440px;
          }

          .schemaImportedFromContainer {
            @p: .flex, .pb60;
          }

          .schemaImportedFromText {
            @p: .f14, .black20;
          }
          .generate-endpoint-section-wrapper :global(.CodeMirror) {
            height: auto !important;
          }
        `}</style>
        <div className='generate-endpoint-section'>
          <div className='schemaImportedFromContainer'>
            <div className='schemaImportedFromText fw3'>Schema imported from</div>
            <a href={schemaLink} className='noUnderline flex' target='_blank'>
              {schemaLink && schemaLink.includes('github') && (
                <img className='ph6' src={require('../../../assets/graphics/graphqlup/github.svg')}/>
              )}
              <div className='schemaImportedFromText fw6'>{trimmedSchemaLink}</div>
            </a>
          </div>

          <div className='flex'>
            <CodeMirror
              className='bgWhite buttonShadow pv38 pl60 pr96'
              value={this.props.schema}
              options={{
                mode: 'graphql',
                theme: 'mdn-like',
                viewportMargin: Infinity,
              }}
            />
            <GenerateEndpoint
              generateProject={this.props.generateProject}
              loadingEndpoint={this.props.loadingEndpoint}
              projectId={this.props.projectId}
            />
          </div>
        </div>
      </div>
    )
  }
}
