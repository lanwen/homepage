import * as React from 'react'
import {breakpoints} from '../../utils/constants'

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
}

interface Props {
}

const examples: [Example] = [
  {
    title: 'Instagram',
    link: '',
    types: [
      {
        name: 'Post',
        fields: [
          {
            name: 'id',
            type: 'ID!'
          },
          {
            name: 'title',
            type: 'String!'
          },
          {
            name: 'author',
            type: 'User!'
          },
        ],
      },
      {
        name: 'User',
        fields: [
          {
            name: 'id',
            type: 'ID!'
          },
          {
            name: 'name',
            type: 'String!'
          },
          {
            name: 'posts',
            type: '[Post!]!'
          },
        ],
      }
    ]
  },
  {
    title: 'Conference Planner',
    link: '',
    types: [
      {
        name: 'Conference',
        fields: [
          {
            name: 'id',
            type: 'ID!'
          },
          {
            name: 'name',
            type: 'String!'
          },
          {
            name: 'city',
            type: 'String!'
          },
          {
            name: 'date',
            type: 'DateTime!'
          },
          {
            name: 'attendees',
            type: '[Attendee!]!'
          },
        ],
      },
      {
        name: 'Attendee',
        fields: [
          {
            name: 'id',
            type: 'ID!'
          },
          {
            name: 'name',
            type: 'String!'
          },
          {
            name: 'conferences',
            type: '[Conference!]!'
          },
        ],
      }
    ]
  },
]


export default class SchemaSection extends React.Component<Props, {}> {

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
          Schema files are written using the <a className='green' href=''>GraphQL IDL notation</a>.
        </div>
        <div className='subtitle'>This is the quickest to describe the structure of your data model.</div>

        <div className={`exampleSchemaContainer ${shouldRenderForMobile && 'flexColumn'}`}>

          <img
            className=''
            src={require('../../assets/graphics/graphqlup/example_schema.svg')}
          />

          {this._renderExample(examples[0])}

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
          }

        `}</style>
        <div className='schemaExplanationHeader'>
          <div className='schemaExplanationTitle'>{example.title}</div>
          <img
            className=''
            width={109}
            height={20}
            src={require('../../assets/graphics/graphqlup/graphql-up.svg')}
          />
        </div>

        <div className='text pv38'>
          This schema has {example.types.length} {example.types.length === 1 ? 'type' : 'types'}:
          {example.types.map((type, i) => {
            if (i === example.types.length-1) {
              return (
                <span>{this._renderCodeElement(type.name)}</span>
              )
            } else if (i === example.types.length-2) {
              return (
                <span>{this._renderCodeElement(type.name)} and </span>
              )
            } else {
              return (
                <span>{this._renderCodeElement(type.name)}, </span>
              )
            }
          })}
          .
        </div>
        {example.types.map(this._renderType}
      </div>
    )
  }

  _renderType = (type: Type): JSX.Element => {
    return (
      <div className='text'>
        <style jsx={true}>{`
          .code {
            @p: .br2, .pv4, .ph6, .mh4, .bgBlack07, .black60;
          }

          .text {
            @p: .f20, .fw3;
          }
      `}</style>
        A <span className='code'>{type.name}</span> has {type.fields.length} fields:
        {type.fields.map((field, i) => {
          if (i === type.fields.length-1) {
            return (
              <span>{this._renderCodeElement(field.name)}</span>
            )
          } else if (i === type.fields.length-2) {
            return (
              <span>{this._renderCodeElement(field.name)} and </span>
            )
          } else {
            return (
              <span>{this._renderCodeElement(field.name)}, </span>
            )
          }
        })}.
      </div>
    )
  }

  _renderCodeElement = (text: string) : JSX.Element => {
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

  _generateJSXForItems = (items: [string]): JSX.Element => {
    const result = items.reduce((previous, current, i) => {
      if (i === 0) {
        return current
      } else if (i < items.length -1) {
        return previous + ', ' + current
      } else {
        // last item
        return previous + ' and ' + current + '.'
      }

    }, '')

    return (<div>{result}</div>)
  }

  _generateSentenceForItems = (items: [string]): string => {
    const result = items.reduce((previous, current, i) => {
      if (i === 0) {
        return current
      } else if (i < items.length -1) {
        return previous + ', ' + current
      } else {
        // last item
        return previous + ' and ' + current + '.'
      }

    }, '')
    return result
  }
}
