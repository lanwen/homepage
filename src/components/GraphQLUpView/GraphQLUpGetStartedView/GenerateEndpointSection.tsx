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
            @p: .f14, .black30;
          }
          .generate-endpoint-section-wrapper :global(.CodeMirror) {
            height: auto !important;
          }
          .codeContainer {
            @p: .bgWhite, .overlayShadow, .br2, .overflowHidden, .relative;
            height: 300px;

            &:after, &:before {
              @p: .absolute, .left0, .right0, .z3;
              content: '';
            }

            &:before {
              @p: .top0, .hS25;
              background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
            }

            &:after {
              @p: .bottom0, .hS38;
              background: linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
            }
          }
        `}</style>
        <div className='generate-endpoint-section'>
          <div className='schemaImportedFromContainer'>
            <div className='schemaImportedFromText fw4'>Schema imported from</div>
            <a href={schemaLink} className='noUnderline flex' target='_blank'>
              {schemaLink && schemaLink.includes('github') && (
                <img className='ph6' src={require('../../../assets/graphics/graphqlup/github.svg')}/>
              )}
              <div className='schemaImportedFromText fw6'>{trimmedSchemaLink}</div>
            </a>
          </div>

          <div className='flex itemsCenter'>
            <div className='codeContainer'>
              <CodeMirror
                className='overflowAuto h100 pv25 ph25 bbox'
                value={this.props.schema}
                options={{
                  mode: 'graphql',
                  theme: 'mdn-like',
                  viewportMargin: Infinity,
                  lineNumbers: true,
                }}
              />
            </div>
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
