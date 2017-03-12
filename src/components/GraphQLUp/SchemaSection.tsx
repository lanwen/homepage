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

          .exampleSchema {
            @p: .flex;
          }

          .schemaExplanationHeader {
            @p: .flex;
          }

        `}</style>
        <div>Example Schema</div>
        <div>Schema files are written using the <a href=''>GraphQL IDL notation</a></div>
        <div>This is the quickest to describe the structure of your data model.</div>

        <div className='exampleSchema'>

          <img
            className=''
            src={require('../../assets/graphics/example_schema.svg')}
          />

          <div className='schemaExplanationHeader'>
            <div>Instagram</div>
            <img
              className=''
              src={require('../../assets/graphics/graphql-up.svg')}
            />
          </div>

          <div>This schema has two types: Post and User.</div>
          <div>A Post has 3 fields: id, title and author.</div>
          <div>A User also has 3 fields: id, name and posts.</div>


        </div>

      </section>
    )
  }
}