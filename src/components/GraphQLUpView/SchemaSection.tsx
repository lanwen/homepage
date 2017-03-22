import * as React from 'react'
import { Link } from 'react-router'
import { breakpoints } from '../../utils/constants'
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

const twitterSchema = `type Tweet {
  id: ID!
  title: String!
  author: User! @relation(name: "Tweets")
}

type User {
  id: ID!
  name: String!
  tweets: [Tweet!]! @relation(name: "Tweets")
}`

const conferencePlannerSchema = `type Conference {
  id: ID!
  name: String!
  city: String!
  attendees: [Attendee!]! @relation(name: "Attendees")
}

type Attendee {
  id: ID!
  name: String!
  conferences: [Conference!]! @relation(name: "Attendees")
}`

const examples: Example[] = [
  {
    title: 'Twitter',
    link: 'https://raw.githubusercontent.com/schickling/Twitter/master/twitter.schema',
    schema: twitterSchema,
    types: [
      {
        name: 'Tweet',
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
            name: 'tweets',
            type: '[Tweet!]!',
          },
        ],
      },
    ],
  },
  {
    title: 'Conference Planner',
    link: 'https://raw.githubusercontent.com/nikolasburk/ConferencePlanner/master/conference_planner.schema',
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
    const shouldRenderForMobile = window.innerWidth < breakpoints.p750

    return (
      <section className='root'>
        <style jsx={true}>{`
          .root :global(.CodeMirror) {
            height: auto !important;
          }

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
            @p: .flex, .pt60, .w100, .bbox, .justifyCenter;
          }

          .circle {
            @p: .br100, .mh4, .pointer;
            width: 10px;
            height: 10px;
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

        `}</style>
        <div className='title'>Example Schema</div>
        <div className='subtitle'>
          Schema files are written using the&nbsp;
          <Link className='green' to='/docs/faq/graphql-schema-definition-idl-kr84dktnp0/'>GraphQL IDL notation</Link>.
        </div>
        <div className='subtitle'>This is the quickest way to describe the structure of your data model.</div>

        <div className={`exampleSchemaContainer ${shouldRenderForMobile && 'flexColumn'}`}>
          <div className='codeContainer'>
            <CodeMirror
              className='overflowAuto h100 pv16 pr16 bbox'
              value={examples[this.state.selectedExampleIndex].schema}
              options={{
              mode: 'graphql',
              theme: 'mdn-like',
              viewportMargin: Infinity,
              lineNumbers: true,
            }}
            />
          </div>
          {this._renderExample(examples[this.state.selectedExampleIndex])}

        </div>

        <div className='flex justifyCenter itemsCenter mt25'>
          {examples.map((example, i) => {
            const active = i === this.state.selectedExampleIndex
            return (
              <div
                key={example.title}
                className={`circle ${active ? 'bgGreen' : 'bgGreen20'}`}
                onClick={() => this.setState({selectedExampleIndex: i} as State)}
              />
            )
          })}
        </div>
      </section>
    )
  }

  private _renderExample = (example: Example): JSX.Element => {

    const shouldRenderForMobile = window.innerWidth < breakpoints.p750

    return (
      <div className={`${shouldRenderForMobile ? 'pa25' : 'pl60'}`}>
        <style jsx={true}>{`

          .schemaExplanationHeader {
            @p: .flex, .itemsCenter;
          }

          .schemaExplanationTitle {
            @p: .f20, .fw6, .o60, .pr16;
          }

          .code {
            @p: .br2, .pv4, .ph6, .mh4, .bgBlack07, .black60, .f14;
          }

          .text {
            @p: .f16, .fw3;
            max-width: 550px;
            line-height: 2;
          }

        `}</style>
        <div className='schemaExplanationHeader'>
          <div className='schemaExplanationTitle'>{example.title}</div>
          <Link
            className='flex'
            target='_blank'
            to={`/graphql-up/new/?source=${example.link}`}
          >
            <img
              className=''
              src={require('../../assets/graphics/graphqlup/graphql-up_small.svg')}
            />
          </Link>
        </div>

        <div className='text pv16'>
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
            @p: .br2, .pv4, .ph6, .mh4, .bgBlack07, .black60, .f14;
          }

          .text {
            @p: .f16, .fw3;
            max-width: 550px;
            line-height: 2;
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
