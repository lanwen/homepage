import * as React from 'react'
import { Link } from 'react-router'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import CircleIcon from '../CircleIcon'
import isValidElement = React.isValidElement
import {breakpoints} from '../../../../utils/constants'

const NavigationActive = `
  &:before {
    content: "";
    position: absolute;
    top: calc(-${$v.size38} - 6px);
    left: 0;
    border: 6px solid ${$v.green};
    border-radius: 2px;
    width: 100%;
    height: 0px;
  }
`

const NavigationLink = styled(Link)`
  transition: color ${$v.duration} linear;

  &:hover {
    color: ${$v.gray50};
  }
`

const Container = styled.div`
  ._headline {
    padding: calc(${$v.size16} + 10px) calc(${$v.size16} * 2);
  }

  ._nested {
    display: none;
    min-width: ${$v.size96};
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1), 0 -8px 18px rgba(0, 0, 0, 0.1);
    top: -${$v.size16};
    left: -${$v.size16};
  }
  
  &:hover ._nested {
    display: flex;
    flex: 1;
    z-index: 10;
  }
  
  ${props => props.active && NavigationActive}
`

export default class ResourcesHover extends React.Component<{}, {}> {
  render() {
    return (
      <Container
        className={cx($p.relative, $p.overflowVisible)}
        active={location.pathname === '/docs/resources'}
      >
        <div
          className={cx(
            $p.mt10,
            $p.fw6,
            $p.noUnderline,
            $p.ttu,
            $p.black30,
            {
              [$p.ph16]: window.innerWidth >= breakpoints.p1200,
            },
          )}
        >Resources</div>
        <div className={cx('_nested', $p.bgWhite, $p.absolute, $p.flexColumn)}>
          <NavigationLink
            to='/docs/resources'
            className={cx('_headline', $p.bgLightgreen10, $p.f16, $p.fw6, $p.green, $p.ttu, $p.noUnderline)}
          >Resources</NavigationLink>
          <div className={cx($p.pv16, $p.ph25)}>
            <NavigationLink className={cx($p.flex, $p.pv10, $p.noUnderline, $p.black30)} to='/docs/tutorials'>
              <CircleIcon type='TUTORIAL'/>
              <div className={cx($p.pl16, $p.pr38, $p.f20)}>Tutorials</div>
            </NavigationLink>
            <a
              className={cx($p.flex, $p.pv10, $p.noUnderline, $p.black30)}
              href='https://github.com/graphcool-examples'
            >
              <CircleIcon type='EXAMPLE'/>
              <div className={cx($p.pl16, $p.pr38, $p.f20)}>Examples</div>
            </a>
            <NavigationLink className={cx($p.flex, $p.pv10, $p.noUnderline, $p.black30)} to='/docs/faq'>
              <CircleIcon type='FAQ'/>
              <div className={cx($p.pl16, $p.pr38, $p.f20)}>FAQ</div>
            </NavigationLink>
          </div>
        </div>
      </Container>
    )
  }
}
