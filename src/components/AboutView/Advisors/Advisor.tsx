import * as React from 'react'
import { $p } from 'graphcool-styles'

interface Props {
  name: string,
  title: string,
  image: string,
}

export default class Advisor extends React.Component<Props, {}> {

  render() {

    return (
      <section className='root'>
        <style jsx={true}>{`
          .root {
            @p: .flex, .itemsCenter, .mr60;
          }

          .image {
            @p: .brPill, .mr25;
          }

          .name {
            @p: .white;
          }

          .title {
            @p: .ttu, .fw6, .tracked, .white50, .f14;
          }

        `}</style>
        <img className='image' src={this.props.image} width='96' height='96' />
        <div>
          <h3 className='name'>{this.props.name}</h3>
          <p className='title'>{this.props.title}</p>
        </div>
      </section>
    )
  }
}
