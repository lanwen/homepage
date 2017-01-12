import * as React from 'react'
import * as cx from 'classnames'
import { $p, $g, Icon, $v } from 'graphcool-styles'
import styled from 'styled-components'
import CircleIcon from './CircleIcon'
import {Item} from '../../../types/types'
import Tooltip from './Content/Tooltip'
import {Link} from 'react-router'

interface Props {
  item: Item
}

export default class FAQSidebar extends React.Component<Props, {}> {

  render() {
    const RightSection = styled.div`
      flex: 0 0 400px;
      background-color: rgba(0, 0, 0, 0.02);
      padding-top: 196px;
    `
    const LeftSection = styled.div`
      flex: 1 1 100px;
    `
    const NavigationLinks = styled.div`
      color: ${$v.gray30};
      cursor: pointer;
      transition: color ${$v.duration} linear;

      &:hover {
        color: ${$v.gray50};
      }
      `
    const Circle = styled.div`
      background-color: ${props => props.background};
      border-radius: 50%;
      width: 20px;
      height: 20px;
    `
    const Square = styled.div`
      box-shadow:0 8px 18px rgba(0, 0, 0, 0.03),
      0 -8px 18px rgba(0, 0, 0, 0.03);
      margin-left: -${$v.size38}
    `

    const {item} = this.props

    return (
      <RightSection className={cx($p.pl25, $p.pr10, $p.pv38)}>
        <div>
          <Square className={cx($p.flex, $p.flexColumn, $p.bgWhite, $p.mv38)}>
            <div className={cx($p.inlineFlex, $p.bgLightgreen10, $p.pv25)}>
              <p className={cx($p.lightgreen50, $p.fw6, $p.f16, $p.pl25)}>MORE ABOUT</p>
              <p className={cx($p.green, $p.fw6, $p.f16, $p.pl6)}>{item.shorttitle}</p>
              <Tooltip text={this.props.item.description} />
            </div>
            <div className={cx($p.pl25, $p.pb25)}>
              {item.relatedMore.map(moreItem => (
                <Link
                  className={cx($p.flex, $p.pt38, $p.noUnderline)}
                  key={moreItem.alias}
                  to={moreItem.path + '-' + moreItem.alias}
                >
                  <CircleIcon type={moreItem.layout} />
                  <div className={cx($p.ml10)}>
                    <p className={cx($p.black60, $p.f20, $p.fw4)}>{moreItem.title}</p>
                    <p className={cx($p.black30, $p.f14, $p.fw6)}>{moreItem.layout}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Square>
          <p className={cx($p.f16, $p.fw6, $p.black30)}>FURTHER READING</p>
          {item.relatedFurther.map(furtherItem => (
            <Link
              className={cx($p.flex, $p.pv10, $p.noUnderline)}
              key={furtherItem.alias}
              to={furtherItem.path + '-' + furtherItem.alias}
            >
              <CircleIcon type={furtherItem.layout}/>
              <div className={cx($p.ml10)}>
                <p className={cx($p.black60, $p.f20, $p.fw4)}>{furtherItem.title}</p>
                <p className={cx($p.black30, $p.f14, $p.fw6)}>{furtherItem.layout}</p>
              </div>
            </Link>
          ))}
        </div>
      </RightSection>
    )
  }
}
