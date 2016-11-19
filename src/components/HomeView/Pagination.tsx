import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../utils/constants'

interface Props {
  bullets: number,
  grayscale?: boolean,
}

export default class Pagination extends React.Component<Props, {}> {

  render() {

    const ActiveGrayscaleBullet = `
      background: ${$v.gray30};
    `

    const GrayscaleBullet = `
      background: ${$v.gray10};
      
      &:hover {
        background: ${$v.gray20};
      }
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
    `

    let bullets = []
    for (let i = 0; i < this.props.bullets; i++) {
      bullets.push(<Bullet grayscale={this.props.grayscale} key={i}/>)
    }

    return (
      <div className={cx($p.flex)}>
        {bullets}
      </div>
    )
  }
}
