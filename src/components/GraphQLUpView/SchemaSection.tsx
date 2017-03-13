import * as React from 'react'
import { Link } from 'react-router'
import {breakpoints} from '../../utils/constants'
import * as CodeMirror from 'react-codemirror'

interface Field {
  name: string
  type: string
}

interface Type {
  name: string
  fields: [Field]
}

interface Example {
  title: string
  link: string
  types: [Type]
  schema: string
}

interface State {
  selectedExampleIndex: number
}

const instagramSchema = `type Post {
  id: ID!
  title: String!
  author: User!
}

type User {
  id: ID!
  name: String!
  posts: [Post!]!
}`

const conferencePlannerSchema = `type Conference {
  id: ID!
  name: String!
  city: String!
  attendees: [Attendee!]!
}

type Attendee {
  id: ID!
  name: String!
  conferences: [Conference!]!
}`

const examples: [Example] = [
  {
    title: 'Instagram',
    link: '',
    schema: instagramSchema,
    types: [
      {
        name: 'Post',
        fields: [
          {
            name: 'id',
            type: 'ID!',
          },
          {
            name: 'title',
            type: 'String!',
          },
          {
            name: 'author',
            type: 'User!',
          },
        ],
      },
      {
        name: 'User',
        fields: [
          {
            name: 'id',
            type: 'ID!',
          },
          {
            name: 'name',
            type: 'String!',
          },
          {
            name: 'posts',
            type: '[Post!]!',
          },
        ],
      },
    ],
  },
  {
    title: 'Conference Planner',
    link: '',
    schema: conferencePlannerSchema,
    types: [
      {
        name: 'Conference',
        fields: [
          {
            name: 'id',
            type: 'ID!',
          },
          {
            name: 'name',
            type: 'String!',
          },
          {
            name: 'city',
            type: 'String!',
          },
          {
            name: 'date',
            type: 'DateTime!',
          },
          {
            name: 'attendees',
            type: '[Attendee!]!',
          },
        ],
      },
      {
        name: 'Attendee',
        fields: [
          {
            name: 'id',
            type: 'ID!',
          },
          {
            name: 'name',
            type: 'String!',
          },
          {
            name: 'conferences',
            type: '[Conference!]!',
          },
        ],
      },
    ],
  },
]

export default class SchemaSection extends React.Component<{}, State> {

  state = {
    selectedExampleIndex: 0,
  }

  render() {
    const shouldRenderForMobile = window.innerWidth < breakpoints.p500

    return (
      <section className='root'>
        <style jsx={true}>{`
          .root {
            @p: .flex, .flexColumn, .itemsCenter, .ph38, .pb96, .center, .bgBlack02;
          }

          .title {
            @p: .f25, .fw3, .pt60, .pb16, .tc;
          }

          .subtitle {
            @p: .f20, .fw3, .tc;
          }

          .exampleSchemaContainer {
            @p: .flex, .pt60;
          }

        `}</style>
        <div className='title'>Example Schema</div>
        <div className='subtitle'>
          Schema files are written using the <Link className='green' to='/docs/faq/graphql-schema-definition-idl-kr84dktnp0/'>GraphQL IDL notation</Link>.
        </div>
        <div className='subtitle'>This is the quickest to describe the structure of your data model.</div>

        <div className={`exampleSchemaContainer ${shouldRenderForMobile && 'flexColumn'}`}>

          <CodeMirror
            className='bgWhite buttonShadow pv38 pl60 pr96'
            value={examples[this.state.selectedExampleIndex].schema}
            options={{
              mode: 'graphql',
              theme: 'mdn-like',
            }}
          />

          {this._renderExample(examples[this.state.selectedExampleIndex])}

        </div>

      </section>
    )
  }

  private _renderExample = (example: Example): JSX.Element => {

    const shouldRenderForMobile = window.innerWidth < breakpoints.p500

    return (
      <div className={`${shouldRenderForMobile ? 'pt38 ph16' : 'pl60'}`}>
        <style jsx={true}>{`

          .schemaExplanationHeader {
            @p: .flex, .itemsCenter;
          }

          .schemaExplanationTitle {
            @p: .f20, .fw6, .o60, .pr16;
          }

          .code {
            @p: .br2, .pv4, .ph6, .mh4, .bgBlack07, .black60;
          }

          .text {
            @p: .f20, .fw3;
            max-width: 450px;
          }

        `}</style>
        <div className='schemaExplanationHeader'>
          <div className='schemaExplanationTitle'>{example.title}</div>
          <img
            className=''
            src={require('../../assets/graphics/graphqlup/graphql-up_small.svg')}
          />
          <img
            className='mh16 pointer'
            onClick={() => {
              if (this.state.selectedExampleIndex === 0) {
                this.setState({selectedExampleIndex: examples.length - 1} as State)
              } else {
                this.setState({selectedExampleIndex: this.state.selectedExampleIndex - 1} as State)
              }
            }}
            src={require('../../assets/graphics/graphqlup/left_arrow.svg')}
          />
          <img
            className='ml16 pointer'
            onClick={() => {
              if (this.state.selectedExampleIndex === examples.length - 1) {
                this.setState({selectedExampleIndex: 0} as State)
              } else {
                this.setState({selectedExampleIndex: this.state.selectedExampleIndex + 1} as State)
              }
            }}
            src={require('../../assets/graphics/graphqlup/right_arrow.svg')}
          />
        </div>

        <div className='text pv38'>
          This schema has {example.types.length} {example.types.length === 1 ? 'type' : 'types'}:
          {example.types.map((type, i) => {
            if (i === example.types.length - 1) {
              return (
                <span key={i}>{this._renderCodeElement(type.name)}</span>
              )
            } else if (i === example.types.length - 2) {
              return (
                <span key={i}>{this._renderCodeElement(type.name)} and </span>
              )
            } else {
              return (
                <span key={i}>{this._renderCodeElement(type.name)}, </span>
              )
            }
          })}
          .
        </div>
        {example.types.map(this._renderType)}
      </div>
    )
  }

  private _renderType = (type: Type, i: number): JSX.Element => {
    return (
      <div key={i} className='text'>
        <style jsx={true}>{`

          .code {
            @p: .br2, .pv4, .ph6, .mh4, .bgBlack07, .black60;
          }

          .text {
            @p: .f20, .fw3;
            max-width: 450px;
          }

      `}</style>
        A <span className='code'>{type.name}</span> has {type.fields.length} fields:
        {type.fields.map((field, i) => {
          if (i === type.fields.length - 1) {
            return (
              <span key={i}>{this._renderCodeElement(field.name)}</span>
            )
          } else if (i === type.fields.length - 2) {
            return (
              <span key={i}>{this._renderCodeElement(field.name)} and </span>
            )
          } else {
            return (
              <span key={i}>{this._renderCodeElement(field.name)}, </span>
            )
          }
        })}.
      </div>
    )
  }

  private _renderCodeElement = (text: string): JSX.Element => {
    return (
      <span className='code'>
        <style jsx={true}>{`
        .code {
            @p: .br2, .pv4, .ph6, .mh4, .bgBlack07, .black60;
          }
        `}</style>
        {text}
      </span>
    )
  }

}
