import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import CircleIcon from '../CircleIcon'
import { Item } from '../../../../types/types'
import BreadCrumb from './BreadCrumb'
import styled from 'styled-components'
import SimpleRelayTwin from './SimpleRelayTwin'
import {breakpoints} from '../../../../utils/constants'

interface Props {
  item: Item
}

const Beta = styled.div`
  padding-top: 2px;
  padding-bottom: 3px;
`

const IconWrapper = styled.div`
  left: -8px;
`

export default class ContentHeader extends React.Component<Props, {}> {
  render() {
    const displayIcon = window.innerWidth > breakpoints.p900
    const {item} = this.props
    const date = new Date(item.lastModified)
    const {simpleRelayTwin, path, layout} = item
    return (
      <div className={cx($p.flex, $p.pt96)}>
        {displayIcon && <IconWrapper className={cx($p.bbox, $p.db, $p.mr10, $p.pt96, $p.relative)}>
          <CircleIcon width={44} height={44} type={item.layout}/>
        </IconWrapper>}
        <div
          className={cx($p.flexColumn, $p.flex, $p.pb60, $p.pt10)}
          style={{
            width: '100%',
          }}
        >
          <div className={cx($p.pb60, $p.ttu, $p.f14, $p.black20, $p.fw6)}>
            <BreadCrumb item={item} />
          </div>
          <div className={cx($p.flex, $p.justifyBetween, $p.itemsStart)}>
            <div className={$p.relative}>
              <h1
                className={cx($p.f38, $p.black80, $p.fw3)}
                style={{
                  flex: 1,
                }}
              >{item.title}</h1>
              {item.beta && (
                <Beta
                  className={cx(
                    $p.f14,
                    $p.ttu,
                    $p.ph6,
                    $p.br2,
                    $p.bgGreen,
                    $p.absolute,
                    $p.top0,
                    $p.right0,
                    $p.fw6,
                    $p.white,
                  )}
                >
                  beta
                </Beta>
              )}
            </div>
            {layout === 'REFERENCE' && simpleRelayTwin && simpleRelayTwin.length > 0 && (
              <SimpleRelayTwin
                targetSimple={!path.includes('simple')}
                twinAlias={simpleRelayTwin}
              />
            )}
          </div>
          <div className={cx($p.inlineFlex, $p.black20, $p.f16, $p.pt6)}>
            <div
              className={cx($p.pr38)}>Last updated {date.getMonth() + 1}/{date.getUTCDate()}/{date.getFullYear()}
            </div>
            {item.tags.map(tag => (
              <div key={tag} className={cx($p.pr16)}>#{tag}</div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
