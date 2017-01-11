import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import { Layout } from '../../../types/types'

interface Props {
  type: Layout
  width?: number
  height?: number
}

export default class CircleIcon extends React.Component<Props, {}> {

  render() {
    const src = {
      'TUTORIAL': require('../../../assets/graphics/categories/guide.svg'),
      'FAQ': require('../../../assets/graphics/categories/faq.svg'),
      'REFERENCE': require('../../../assets/graphics/categories/reference.svg'),
      'BLOG': require('../../../assets/graphics/categories/blog.svg'),
      'EXAMPLE': require('../../../assets/graphics/categories/example.svg'),
      'QUICKSTART': require('../../../assets/graphics/categories/quickstart.svg'),
    }[this.props.type]

    const background = {
      'TUTORIAL': 'rgba(164, 3, 111, 0.2)',
      'FAQ': 'rgba(49, 177, 180, 0.2)',
      'REFERENCE': 'rgba(39, 174, 96, 0.2)',
      'BLOG': 'rgba(42, 126, 211, 0.2)',
      'EXAMPLE': 'rgba(241, 143, 1, 0.2)',
      'QUICKSTART': 'rgba(242, 92, 84, 0.2)',
    }[this.props.type]

    const imageWidth = this.props.width || 25
    const width = imageWidth - 5
    const imageHeight = this.props.height || 25
    const height = imageHeight - 5

    return (
      <div
        style={{background, width, height}}
        className={cx($p.flex, $p.itemsCenter, $p.justifyCenter, $p.mt4, $p.br100)}
      >
        <img src={src} width={imageWidth} height={imageHeight}/>
      </div>
    )
  }
}
