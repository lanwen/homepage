import * as React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import * as Helmet from 'react-helmet'
import IntroSection from './IntroSection'
import GraphQLUpFAQ from '../GraphQLUpFAQ'
import GenerateEndpointSection from './GenerateEndpointSection'
import InvalidSource from './InvalidSource'

interface Project {
  id: string
  alias: string
  name: string
}

interface State {
  project?: Project
  schema: string
  loading: boolean
  invalidSource?: string
}

interface Props {
  location: any
}

export default class GraphQLUpGetStartedView extends React.Component<Props, State> {

  constructor() {
    super()

    this.state = {
      project: undefined,
      schema: 'type Herbert {}',
      loading: false,
      invalidSource: undefined,
    }
  }
  componentWillMount() {
    const schemaLink = this.getSchemaLink()
    if (schemaLink) {
      fetch(schemaLink)
        .then(res => {
          if (!res.ok) {
            throw new Error(res.statusText)
          }
          return res.text()
        })
        .then(schema => {
          this.setState({schema} as State)
        })
        .catch(err => {
          this.setState({invalidSource: err.message} as State)
        })
    }
  }
  render() {
    const schemaLink = this.getSchemaLink()
    const {invalidSource} = this.state

    return (
      <div>
        <Helmet title='graphql-up - Graphcool'/>
        <style jsx={true}>{`

        `}</style>
        <Header
          view='HOMEPAGE'
        />
        <IntroSection />
        {(invalidSource || !schemaLink) ? (
          <InvalidSource schemaLink={schemaLink} message={invalidSource} />
        ) : (
          <GenerateEndpointSection
            schemaLink={schemaLink}
            schema={this.state.schema}
            projectId={this.state.project && this.state.project.alias}
            generateProject={this.generateProject}
            loadingEndpoint={this.state.loading}
          />
        )}
        <GraphQLUpFAQ />
        <Footer />
      </div>
    )
  }
  private getSchemaLink() {
    return this.props.location.query && this.props.location.query.source
  }
  private generateProject = () => {
    const {schema} = this.state

    this.setState({loading: true} as State, () => {
      fetch('https://graphql-up-api.graph.cool/create', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({schema}),
      })
      .then(res => res.json())
      .then((res: any) => {
        this.setState({
          project: res.project,
          loading: false,
        } as State)
      })
      .catch(err => console.error(err))
    })
  }
}
