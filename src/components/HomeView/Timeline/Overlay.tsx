import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v, Icon } from 'graphcool-styles'
import styled from 'styled-components'
import Bar from './Bar'
import { breakpoints } from '../../../utils/constants'

const Root = styled.div`
  background: ${$v.white};
  border-radius: 2px;
  box-shadow: 0 1px 10px 0 rgba(0,0,0,0.15);
  overflow: hidden;
  
  .label {
    color: ${$v.gray30} !important;
  }
  
  @media (min-width: ${breakpoints.p1200}px) {
    transform: translate(0, -127px);
  }
  
  @media (min-width: ${breakpoints.p1000}px) {
    position: absolute;
    z-index: 5000;
    left: -15px;
    top: 0;
    right: -15px;
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
}

export default class Overlay extends React.Component<Props, {}> {
  render() {
    return (
      <Root>
        <div className={cx($p.ph25, $p.pt25)}>
          <div className={cx('label', $p.pb16, $p.flex, $p.justifyBetween)}>
            <span>{this.props.label}</span>
            {window.innerWidth < breakpoints.p1000 &&
            <span className={cx($p.black50)}>The old way</span>
            }
            </div>
          <List className={cx($p.black50)}>
            <li>Database migration</li>
            <li>Test in staging</li>
            <li>Adjust endpoint-database mapping</li>
            <li>Deploy</li>
          </List>
          <Bar active />
        </div>
        <div className={cx($p.bgLightgreen10, $p.ph25, $p.pb25, $p.relative)}>
          <Bar graphcool active />
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
            <li>Clone project</li>
            <li>Adjust datamodel</li>
            <li>Configure Permissions</li>
          </List>
        </div>
      </Root>
    )
  }
}