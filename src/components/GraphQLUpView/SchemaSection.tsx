import * as React from 'react'

interface Props {

}

export default class SchemaSection extends React.Component<Props, {}> {

  render() {
    return (
      <section className='root'>
        <style jsx={true}>{`
          .root {
            @p: .flex, .flexColumn, .itemsCenter, .pl96, .pr96, .center, .bgBlack02;
            max-width: 1440px;
          }

          .title {
            @p: .f25, .fw3, .pt60, .pb16;
          }

          .subtitle {
            @p: .f20, .fw3;
          }

          .exampleSchemaContainer {
            @p: .flex, .pt60;
          }

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
        <div className='title'>Example Schema</div>
        <div className='subtitle'>Schema files are written using the <a className='green' href=''>GraphQL IDL notation</a>.</div>
        <div className='subtitle'>This is the quickest to describe the structure of your data model.</div>

        <div className='exampleSchemaContainer'>

          <img
            className=''
            src={require('../../assets/graphics/example_schema.svg')}
          />


          <div className='pl60'>
            <div className='schemaExplanationHeader'>
              <div className='schemaExplanationTitle'>Instagram</div>
              <img
                className=''
                width={109}
                height={20}
                src={require('../../assets/graphics/graphql-up.svg')}
              />
            </div>

            <div className='text pv38'>
              This schema has two types:
              <span className='code'>Post</span>and
              <span className='code'>User</span>.
            </div>
            <div className='text'>
              A <span className='code'>Post</span> has 3 fields:
              <span className='code'>id</span>,
              <span className='code'>title</span> and
              <span className='code'>author</span>.
            </div>
            <div className='text'>
              A <span className='code'>User</span> also has 3 fields:
              <span className='code'>id</span>,
              <span className='code'>name</span> and
              <span className='code'>posts</span>.
            </div>
          </div>

        </div>

      </section>
    )
  }
}