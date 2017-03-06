import * as React from 'react'
import Icon from 'graphcool-styles/dist/components/Icon/Icon'
import {$v} from 'graphcool-styles'
import {Item} from '../../../types/types'
import {Link} from 'react-router'

interface Props {
  items: Item[]
  currentAlias: string
}

export default class ContentPagination extends React.Component<Props,{}> {
  render() {
    const {items, currentAlias} = this.props
    const index = items.findIndex(item => item.alias === currentAlias)

    // in the basic version we don't provide prev/next for aliases that are not references in the sidebar
    if (index === -1) {
      return null
    }

    const beforeItem = items[(index - 1 + items.length) % items.length]
    const afterItem = items[(index + 1) % items.length]

    return (
      <div className='content-pagination'>
        <style jsx>{`
          .content-pagination {
            @p: .w100, .flex, .justifyBetween, .mt38;
          }
          .text {
            @p: .ph6, .blue, .ttu, .fw6;
          }
          .content-pagination :global(.col.left) {
            @p: .o60;
          }
          .content-pagination :global(.col) {
            @p: .flex, .itemsCenter, .pointer, .noUnderline;
          }
        `}</style>
        <Link
          to={`${beforeItem.path}-${beforeItem.alias}`}
          className='col left'
        >
          <Icon src={require('graphcool-styles/icons/fill/fullArrowRight.svg')} color={$v.blue} rotate={180} />
          <div className='text'>{beforeItem.shorttitle}</div>
        </Link>
        <Link
          to={`${afterItem.path}-${afterItem.alias}`}
          className='col'
        >
          <div className='text'>{afterItem.shorttitle}</div>
          <Icon src={require('graphcool-styles/icons/fill/fullArrowRight.svg')} color={$v.blue} />
        </Link>
      </div>
    )
  }
}
