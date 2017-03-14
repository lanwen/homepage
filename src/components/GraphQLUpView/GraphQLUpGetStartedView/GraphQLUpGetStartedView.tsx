import * as React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import * as Helmet from 'react-helmet'
import IntroSection from './IntroSection'
import GraphQLUpFAQ from '../GraphQLUpFAQ'
import GenerateEndpointSection from './GenerateEndpointSection'
import ErrorMessage from './ErrorMessage'

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
  error?: string
}

interface Props {
  location: any
}

export default class GraphQLUpGetStartedView extends React.Component<Props, State> {

  constructor() {
    super()

    this.state = {
      project: undefined,
      schema: 'type Graphcool {}',
      loading: false,
      invalidSource: undefined,
      error: undefined,
    }
  }

  componentWillMount() {
    this.fetchSchema(this.props.location.query)
  }

  componentWillReceiveProps(nextProps) {
    this.fetchSchema(nextProps.location.query)
  }

  render() {
    const schemaLink = this.getSchemaLink(this.props.location.query)
    const {invalidSource, error} = this.state

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
          <ErrorMessage
            invalidSource
            schemaLink={schemaLink}
            errorType={invalidSource}
          />
        ) : (
          <GenerateEndpointSection
            schemaLink={schemaLink}
            schema={this.state.schema}
            projectId={this.state.project && this.state.project.alias}
            generateProject={this.generateProject}
            loadingEndpoint={this.state.loading}
            goBack={this.goBack}
            error={error}
          />
        )}
        <GraphQLUpFAQ />
        <Footer />
      </div>
    )
  }

  private goBack = () => {
    this.setState({
      project: undefined,
      loading: false,
    } as State)
  }

  private getSchemaLink(query: any) {
    return query && query.source
  }
  //
  // private generateMockProject = () => {
  //   this.setState({loading: true} as State, () => {
  //     setTimeout(
  //       () => {
  //         this.setState({
  //           project: {
  //             id: "asdf",
  //             alias: "asdf",
  //             name: "asdf",
  //           },
  //           loading: false,
  //         } as State)
  //       },
  //       500,
  //     )
  //   })
  // }

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
        if (res.code) {
          this.setState({
            loading: false,
            error: res.message,
          } as State)
        } else {
          this.setState({
            project: res.project,
            loading: false,
          } as State)
        }
      })
      .catch(err => {
        console.error(err)
      })
    })
  }

  private fetchSchema = async(query: string | undefined) => {
    const schemaLink = this.getSchemaLink(query)

    if (schemaLink) {
      try {
        const res = await fetch(schemaLink)

        if (!res.ok) {
          throw new Error(res.statusText)
        }

        const schema = await res.text()
        this.setState({schema} as State)

      } catch (err) {
        this.setState({invalidSource: err.message} as State)
      }
    }
  }
}
