import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, $g, Icon } from 'graphcool-styles'
import styled from 'styled-components'
import Bar from './Bar'
import { breakpoints } from '../../../utils/constants'

const Root = styled.div`
  
  .label {
    color: ${$v.gray30} !important;
  }
  
  @media (min-width: ${breakpoints.p1000}px) {
    position: absolute;
    z-index: 5000;
    left: -15px;
    top: 0;
    right: -15px;
    transform: translate(0, -115px);
  }
  
  @media (min-width: ${breakpoints.p1200}px) {
    transform: translate(0, -127px);
  }
`

const List = styled.div`
  margin: 0;
  padding: 0;
  list-style-type: none;
  
  &:first-child {
    padding-top: 25px;
  }
`

interface Props {
  label: string,
  old: string[],
  new: string[],
  oldSegments: number[],
  newSegments: number[],
  noTime?: boolean,
}

export default class Overlay extends React.Component<Props, {}> {
  render() {
    return (
      <Root className={cx($g.overlay)}>
        <div className={cx($p.ph25, $p.pt25)}>
          <div className={cx('label', $p.pb16, $p.flex, $p.justifyBetween)}>
            <span>{this.props.label}</span>
            {window.innerWidth < breakpoints.p1000 &&
            <span className={cx($p.black50)}>The old way</span>
            }
          </div>
          <List className={cx($p.black50)}>
            {this.props.old.map((x, i) => <li key={i}>{x}</li>)}
          </List>
          <Bar active segments={this.props.oldSegments}/>
        </div>
        <div className={cx($p.bgLightgreen10, $p.ph25, $p.pb25, $p.relative)}>
          <Bar graphcool active noTime={this.props.noTime} segments={this.props.newSegments}/>
          {window.innerWidth < breakpoints.p1000 &&
          <div className={cx($p.absolute, $p.right25, $p.top25)}>
            <Icon
              src={require('../../../assets/icons/graphcool.svg')}
              width={18 * 1.5}
              height={21 * 1.5}
              color={$v.green}
            />
          </div>
          }
          <List className={cx($p.green)}>
            {this.props.new.map((text) => <li key={text}>{text}</li>)}
          </List>
        </div>
      </Root>
    )
  }
}
