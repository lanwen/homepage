import * as React from 'react'
import * as cx from 'classnames'
import { Link } from 'react-router'
import { $p, $g, Icon, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints, maxWidth } from '../../../utils/constants'
import { fw6 } from 'graphcool-styles/dist/particles.css';
import isValidElement = React.isValidElement;


export default class ContentHeader extends React.Component<{}, {}> {
  render() {
    const Circle = styled.div`
      background-color: ${(props) => props.background};
      border-radius: 50%;
      width: 25px;
      height: 25px;
    `
    return (
      <div>
        <section className={cx($p.ttu, $p.f14, $p.black20, $p.fw6, $p.pv38, $p.ml38)}>
          Tutorials > Usage Guide
        </section>
        <div className={cx($p.flex)}>
          <Circle
            background='rgba(49, 177, 180, 0.2)'
            className={cx($p.bbox, $p.db, $p.mr16, $p.mt16)}
          >
            <img
              src={require('../../../assets/graphics/QuestionMark.svg')}
              width={30}
              height={30}
            />
          </Circle>
          <p className={cx($p.f38, $p.black80, $p.fw3)}>Declaring Relations between your Models</p>
        </div>
        <div className={cx($p.flex, $p.black20, $p.f16, $p.pt6, $p.pb38, $p.ml38)}>
          <p className={cx($p.pr38)}>Last updated 11/22/2016</p>
          <p className={cx($p.pr25)}>#platform / api /authentication</p>
          <p className={cx($p.pr25)}>#graphql</p>
          <p>#apollostack</p>
        </div>
      </div>
    )
  }
}
