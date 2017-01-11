import * as React from 'react'
import {$p, Icon} from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import {renderColor} from '../../../../utils/index'

const Circle = styled.div`
  width: 96px;
  height: 96px;
  flex: 0 0 96px;
`

interface Props {
  title: string
  logoName: string
  logoColor: string
  logoWidth: number
  logoHeight: number
  backgroundColor: string
  isPopular?: boolean
}

export default class Technology extends React.Component<Props, {}> {

  render() {

    const {title, logoName, logoColor, logoWidth, logoHeight, backgroundColor} = this.props

    return (
      <div className={cx($p.flex, $p.flexColumn, $p.itemsCenter)}>
        <Circle className={cx($p.br100, $p.flex, $p.justifyCenter, $p.itemsCenter)} style={{background: `${backgroundColor}`}}>
          <Icon
              src={require(`../../../assets/icons/docs/${logoName}.svg`)}
              color={logoColor}
              height={logoWidth}
              width={logoHeight}
          />
        </Circle>
        <div className={cx($p.flex, $p.black60, $p.f20, $p.fw6, $p.mt25)}>
          {title}
        </div>
      </div>
    )
  }
}


