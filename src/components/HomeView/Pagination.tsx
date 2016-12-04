import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../utils/constants'

interface Props {
  bullets: number,
  grayscale?: boolean,
  onDark?: boolean,
  active: number,
  onSelect: (index: number) => void,
}

const ActiveGrayscaleBullet = `
  &:before {
    background: ${$v.gray30};
  }
`

const GrayscaleBullet = `
  &:before {
    background: ${$v.gray10};
  }
  
  &:hover:before {
    background: ${$v.gray20};
  }
`

const ActiveWhiteBullet = `
  &:before {
    background: ${$v.white70};
  }
`

const WhiteBullet = `
  &:before {
    background: ${$v.white30};
  }
  
  &:hover:before {
    background: ${$v.white50};
  }
  
  ${props => props.active && ActiveWhiteBullet}
`

const ActiveBullet = `

  &:before {
    background: ${$v.green};
  }
  
  &:hover:before {
    background: ${$v.green};
  }
  
  ${props => props.active && ActiveGrayscaleBullet}
`

const Bullet = styled.div`
  padding: ${parseFloat($v.size10) * 0.5}px;
  cursor: pointer;
  
  &:before {
    content: "";
    display: block;
    width: ${$v.size10};
    height: ${$v.size10};
    border-radius: 500px;
    background: ${$v.lightGreen20};
    transition: background ${$v.duration} linear;
  }
  
  &:hover:before {
    background: ${$v.lightGreen50};
  }

  @media (min-width: ${breakpoints.p1200}px) {
    padding: ${parseFloat($v.size16) * 0.5}px;
  }
 
  ${props => props.active && ActiveBullet}
  ${props => props.grayscale && GrayscaleBullet}
  ${props => props.white && WhiteBullet}
`

export default class Pagination extends React.Component<Props, {}> {

  render() {
    return (
      <div className={cx($p.flex, $p.relative)}>
        {Array.from(Array(this.props.bullets)).map((b, i) => (
          <Bullet
            key={i}
            grayscale={this.props.grayscale}
            white={this.props.onDark}
            active={this.props.active === i}
            onClick={() => this.props.onSelect(i)}
          />
        ))}
      </div>
    )
  }
}
