import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g, Icon } from 'graphcool-styles'
import styled from 'styled-components'

const Root = styled.div`
  &:first-child {
    border: none;
    padding-top: 0;
  } 
`

interface Props {
  title: string,
  type: string,
  required?: boolean,
  system?: boolean,
  relation?: boolean
}

export default class SchemaSection extends React.Component<Props, {}> {

  render() {
    return (
      <Root className={cx($p.flex, $p.justifyBetween, $p.itemsCenter, $p.pa25, $p.white, $p.bt, $p.bw2, $p.bWhite10)}>
        <h4 className={cx($p.fw6, $p.lhSolid)}>
          {this.props.title}
          {this.props.system &&
          <span className={cx($p.ttu, $p.f12, $p.dib, $p.ml10, $p.fw4, $p.br2, $p.lhSolid, $p.pa6, $p.bgWhite07, $p.white50)}>System</span>
          }
        </h4>
        <div className={cx($p.flex, $p.pa10, $p.bgWhite07, $p.br2, $p.lhSolid)}>
          {this.props.relation &&
            <Icon stroke className={cx($p.mr6)} color={$v.white} strokeWidth={4} src={require('graphcool-styles/icons/stroke/relationsSmall.svg')} />
          }
          {this.props.type}
          {this.props.required ? ' !' : ''}
          </div>
      </Root>
    )
  }
}
