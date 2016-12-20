import * as React from 'react'
import { Link } from 'react-router'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import CircleIcon from '../CircleIcon'
import isValidElement = React.isValidElement

const NavigationLinkActive = `
  &:before {
    content: "";
    position: absolute;
    top: calc(-${$v.size38} - ${$v.size10} - 6px);
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
  
  ${props => props.active && NavigationLinkActive}
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
`

interface Props {
  active: boolean,
}

export default class ResourcesHover extends React.Component<Props, {}> {
  render() {
    return (
      <Container className={cx($p.relative, $p.overflowVisible)}>
        <div className={cx($p.ph16, $p.mt10, $p.fw6, $p.pointer, $p.ttu, $p.black30)}>Resources</div>
        <div className={cx('_nested', $p.bgWhite, $p.absolute, $p.flexColumn)}>
          <div className={cx('_headline', $p.bgLightgreen10, $p.f16, $p.fw6, $p.green, $p.ttu)}>Resources</div>
          <div className={cx($p.pv16, $p.ph25)}>
            <NavigationLink className={cx($p.flex, $p.pv10, $p.noUnderline, $p.black30)} to='/docs/tutorials'>
              <CircleIcon type='TUTORIAL'/>
              <div className={cx($p.pl16, $p.pr38, $p.f20)}>Tutorials</div>
            </NavigationLink>
            <NavigationLink className={cx($p.flex, $p.pv10, $p.noUnderline, $p.black30)} to='/docs/examples'>
              <CircleIcon type='EXAMPLE'/>
              <div className={cx($p.pl16, $p.pr38, $p.f20)}>Examples</div>
            </NavigationLink>
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
