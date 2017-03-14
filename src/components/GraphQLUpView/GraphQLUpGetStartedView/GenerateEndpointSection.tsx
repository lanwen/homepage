import * as React from 'react'
import GenerateEndpoint from './GenerateEndpoint'
import ErrorMessage from './ErrorMessage'
import * as CodeMirror from 'react-codemirror'
import * as Modal from 'react-modal'

interface State {

}

interface Props {
  schemaLink?: string
  generateProject: () => void
  loadingEndpoint: boolean
  projectId?: string
  schema: string
  goBack: () => void
  error?: string
}

export default class GenerateEndpointSection extends React.Component<Props, State> {

  render() {
    const {schemaLink, error} = this.props
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

          .codeEndpointContainer {
            @p: .ph38, .bbox, .flex, .itemsCenter, .mw100;
          }

          .codeContainer {
            @p: .bgWhite, .overlayShadow, .br2, .overflowHidden, .relative;
            height: 300px;

            &:after, &:before {
              @p: .absolute, .left0, .right0, .z5;
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

          .generate-endpoint-section-wrapper :global(.CodeMirror-linenumbers) {
            background: white !important;
          }

          .generate-endpoint-section-wrapper :global(.CodeMirror-sizer) {
            margin-left: 39px !important;
          }

          .modal {
            @p: .pt60, .;
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
          {error && (
            <ErrorMessage>
              {error}
            </ErrorMessage>
          )}
          <div className='codeEndpointContainer'>
            <div className='codeContainer'>
              <CodeMirror
                className='overflowAuto h100 pv16 pr16 bbox'
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
            />
          </div>
        </div>
        {Boolean(this.props.projectId) && (
          <Modal
            isOpen
            contentLabel='GraphQL Endpoint'
            style={modalStyle}
            onRequestClose={this.props.goBack}
          >
            <div className='modal'>
              <GenerateEndpoint
                generateProject={this.props.generateProject}
                loadingEndpoint={this.props.loadingEndpoint}
                projectId={this.props.projectId}
              />
            </div>
          </Modal>
        )}
      </div>
    )
  }
}

const modalStyle = {
  overlay: {
    zIndex: 100,
    backgroundColor: 'rgba(255,255,255,.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    position: 'relative',
    width: 600,
    height: 'auto',
    top: 'initial',
    left: 'initial',
    right: 'initial',
    bottom: 'initial',
    borderRadius: 2,
    padding: 0,
    border: 'none',
    background: 'white',
    boxShadow: '0 1px 7px rgba(0,0,0,.2)',
  },
}
