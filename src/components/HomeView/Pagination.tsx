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
  background: ${$v.gray30};
`

const GrayscaleBullet = `
  background: ${$v.gray10};
  
  &:hover {
    background: ${$v.gray20};
  }
`

const ActiveWhiteBullet = `
  background: ${$v.white70};
`

const WhiteBullet = `
  background: ${$v.white30};
  
  &:hover {
    background: ${$v.white50};
  }
  
  ${props => props.active && ActiveWhiteBullet}
`

const ActiveBullet = `
  background: ${$v.green};
  
  &:hover {
    background: ${$v.green};
  }
  
  ${props => props.active && ActiveGrayscaleBullet}
`

const Bullet = styled.div`
  width: ${$v.size10};
  height: ${$v.size10};
  border-radius: 500px;
  margin-left: ${$v.size10}
  background: ${$v.lightGreen20};
  cursor: pointer;
  transition: background ${$v.duration} linear;
  
  &:hover {
    background: ${$v.lightGreen50};
  }
  
  &:first-child {
    margin-left: 0;
  }

  @media (min-width: ${breakpoints.p1200}px) {
    margin-left: ${$v.size16};
  }
 
  ${props => props.active && ActiveBullet}
  ${props => props.grayscale && GrayscaleBullet}
  ${props => props.white && WhiteBullet}
`

export default class Pagination extends React.Component<Props, {}> {

  render() {
    return (
      <div className={cx($p.flex)}>
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
