import * as React from 'react'
// import {$p, $v, $g, Icon} from 'graphcool-styles'
// import * as cx from 'classnames'
import {QuickExample} from '../../../../types/types'
// import CircleIcon from '../CircleIcon'
// import styled from 'styled-components'

interface Props {
  quickExample: QuickExample
  className?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export default class Example extends React.Component<Props, {}> {

  render() {
    const {type} = this.props.quickExample

    let imageSrc
    let title

    if (type === 'POKEDEX') {
      imageSrc = 'pokedex.svg'
      title = 'Pokedex'
    }

    if (type === 'INSTAGRAM') {
      imageSrc = 'instagram.svg'
      title = 'Instagram'
    }

    if (type === 'TODOAPP') {
      imageSrc = 'todoapp.svg'
      title = 'Todo App'
    }

    return (
      <button className='root'>
        <style jsx={true}>{`
          .root {
            @p: .bgNone, .pa0, .flex, .flexColumn, .itemsCenter, .mr60;

            &:last-child {
              @p: .mr0;
            }
          }

          .exampleIcon {
            @p: .db;
          }

          .title {
            @p: .fw6, .mt25, .f20, .black60;
          }
        `}</style>
        <img
          src={require(`../../../../assets/graphics/docs/quickstart/${imageSrc}`)}
          className='exampleIcon'
          width='96'
          height='96'
        />
        <p className='title'>{title}</p>
      </button>
    )
  }
}
