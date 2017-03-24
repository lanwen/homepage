import * as React from 'react'
// import {$p, $v, $g, Icon} from 'graphcool-styles'
import * as cx from 'classnames'
import {QuickExample} from '../../../../types/types'
// import CircleIcon from '../CircleIcon'
// import styled from 'styled-components'

interface Props {
  quickExample: QuickExample
  className?: string
  onClick: () => void
  selected?: boolean
}

export default class Example extends React.Component<Props, {}> {

  render() {
    const {type} = this.props.quickExample
    const {selected} = this.props

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
      <button
        className={cx(
          'example',
          {
            'selected': selected === true,
            'unselected': selected === false,
          },
        )}
        onClick={this.props.onClick}
      >
        <style jsx={true}>{`
          .example {
            @p: .bgNone, .pa0, .flex, .flexColumn, .itemsCenter, .mr60, .relative, .pointer;
            transition: opacity .2s linear, filter .2s linear;

            &:last-child {
              @p: .mr0;
            }
          }

          .example.selected {
            &:before {
              content: '';
              @p: .hS25, .wS25, .absolute, .left50, .br, .bt, .bBlack10;
              background: #fafafa;
              transform: translate(-50%, 50%) rotate(-45deg);
              bottom: -60px;
            }
          }

          .example.unselected {
            @p: .o50;
            filter: blur(6px);
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
