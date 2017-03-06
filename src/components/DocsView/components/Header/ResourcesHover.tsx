import * as React from 'react'
import { Link } from 'react-router'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import CircleIcon from '../CircleIcon'
import { breakpoints } from '../../../../utils/constants'

const ContainerActive = `
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

const Container = styled.div`
  margin-right: 23px;
  ${props => props.active && ContainerActive}
  .overlay {
    display: none;
  }
  
  &:hover .overlay {
    display: flex;
  }
`

const NavigationLink = styled(Link)`
  transition: color ${$v.duration} linear;

  &:hover {
    color: ${$v.gray50};
  }
`

const HoveredA = styled.a`
  transition: color ${$v.duration} linear;

  &:hover {
    color: ${$v.gray50};
  }
`

const Headline = styled.div`
  padding: calc(${$v.size16} + 10px) calc(${$v.size16} * 2);
`

const Overlay = styled.div`
  min-width: ${$v.size96};
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1), 0 -8px 18px rgba(0, 0, 0, 0.1);
  top: -16px;
  left: -22px;
`

export default class ResourcesHover extends React.Component<{}, {}> {

  render() {
    return (
      <Container
        className={cx($p.relative, $p.overflowVisible)}
        active={location.pathname.startsWith('/docs/tutorials/') || location.pathname.startsWith('/docs/faq/') }
      >
        <div
          className={cx(
            $p.mt10,
            $p.fw6,
            $p.noUnderline,
            $p.ttu,
            $p.black30,
            window.innerWidth >= breakpoints.p1000 && $p.ph10,
          )}
        >
          Resources
        </div>
        <Overlay className={cx($p.bgWhite, $p.absolute, $p.flexColumn, $p.flex, $p.flex1, $p.z5, 'overlay')}>
          <Headline
            className={cx($p.bgLightgreen10, $p.f16, $p.fw6, $p.green, $p.ttu, $p.noUnderline)}
          >
            Resources
          </Headline>
          <div className={cx($p.pv16, $p.ph25)}>
            <NavigationLink className={cx($p.flex, $p.pv10, $p.noUnderline, $p.black30)} to='/docs/tutorials/'>
              <CircleIcon type='TUTORIAL'/>
              <div className={cx($p.pl16, $p.pr38, $p.f20)}>Tutorials</div>
            </NavigationLink>
            <HoveredA
              className={cx($p.flex, $p.pv10, $p.noUnderline, $p.black30)}
              href='https://github.com/graphcool-examples'
              target='_blank'
            >
              <CircleIcon type='EXAMPLE'/>
              <div className={cx($p.pl16, $p.pr38, $p.f20)}>Examples</div>
            </HoveredA>
            <NavigationLink className={cx($p.flex, $p.pv10, $p.noUnderline, $p.black30)} to='/docs/faq/'>
              <CircleIcon type='FAQ'/>
              <div className={cx($p.pl16, $p.pr38, $p.f20)}>FAQ</div>
            </NavigationLink>
          </div>
        </Overlay>
      </Container>
    )
  }
}
