import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import CircleIcon from '../CircleIcon'
import { Item } from '../../../../types/types'
import BreadCrumb from './BreadCrumb'
import styled from 'styled-components'
import SimpleRelayTwin from './SimpleRelayTwin'
import { breakpoints, maxWidth } from '../../../../utils/constants'

interface Props {
  item: Item
}

const Root = styled.div`
  position: relative;
  display: flex;
  max-width: 970px;
  
  @media (max-width: ${breakpoints.p580}px) {
    margin-top: ${$v.size38};
  }
  
  @media (max-width: 1050px) {
    max-width: calc(100vw - 300px);
  }
  
  @media (max-width: 750px) {
    max-width: 750px;
  }
  
`

const RootContainer = styled.div`
  max-width: ${maxWidth}px;
`

const Beta = styled.div`
  padding-top: 1px;
  padding-bottom: 2px;
  vertical-align: super;
`

const BreadCrumbContainer = styled.div`
  padding-bottom: ${$v.size38};
  
  @media (max-width: ${breakpoints.p580}px) {
    padding-bottom: ${$v.size25};
  }
  
`

const IconWrapper = styled.div`
  left: -8px;
  padding-top: 72px;
`

const Sublines = styled.div`
  font-size: ${$v.size16};
  margin-top: ${$v.size16};
  
  @media (max-width: ${breakpoints.p580}px) {
    font-size: ${$v.size14};
    flex-direction: column;
  }
`

const Tag = styled.div `
  margin-right: ${$v.size16};
  @media (max-width: ${breakpoints.p580}px) {
   
   margin-right: ${$v.size10};
  }
  
`

export default class ContentHeader extends React.Component<Props, {}> {

  render() {
    const displayIcon = window.innerWidth > breakpoints.p900
    const {item} = this.props
    const lastModified = new Date(item.lastModified)
    const created = new Date(item.publicationDate)
    const {simpleRelayTwin, path, layout} = item

    const rightPaddingTitle = item.beta ? '50px' : 0

    return (
      <Root>
        {displayIcon && (
          <IconWrapper className={cx($p.bbox, $p.db, $p.mr10, $p.relative)}>
            <CircleIcon width={44} height={44} type={item.layout}/>
          </IconWrapper>
        )}
        <RootContainer
          className={cx($p.pb60, $p.pt10, $p.w100, $p.bbox)}
          style={{
            paddingRight: (layout === 'REFERENCE' && simpleRelayTwin && simpleRelayTwin.length > 0
            && window.innerWidth > 1050) ? '232px' : '',
          }}
        >
          <BreadCrumbContainer className={cx($p.ttu, $p.f14, $p.black20, $p.fw6)}>
            <BreadCrumb item={item} />
          </BreadCrumbContainer>
          <div className={cx($p.flex, $p.justifyBetween, $p.itemsStart)}>
            <div className={$p.relative}>
              <h1
                className={cx(

                )}
                style={{
                  paddingRight: rightPaddingTitle,
                }}
              >
                {item.title} {item.beta && (
                  <Beta
                    className={cx(
                    $p.dib,
                    $p.f14,
                    $p.ttu,
                    $p.ph6,
                    $p.br2,
                    $p.bgGreen,
                    $p.fw6,
                    $p.white,
                  )}
                  >
                    beta
                  </Beta>
                )}
              </h1>

            </div>
            {layout === 'REFERENCE' && simpleRelayTwin && simpleRelayTwin.length > 0 && (
              <SimpleRelayTwin
                targetSimple={!path.includes('simple')}
                twinAlias={simpleRelayTwin}
              />
            )}
          </div>
          <Sublines className={cx(
            $p.inlineFlex,
            $p.black30,
          )}>
            <div
              className={cx($p.pr38, $p.nowrap)}
            >

              {item.layout === 'BLOG' ? (
                `Published at ${created.getMonth() + 1}/${created.getUTCDate()}/${created.getFullYear()}`
              ) : (
                `Last updated ${lastModified.getMonth() + 1}/${lastModified.getUTCDate()}/${lastModified.getFullYear()}`
              )}
            </div>
            <div className={cx(
              $p.flex,
              $p.flexWrap,
              window.innerWidth < breakpoints.p580 && $p.mt6,
              )}>
            {item.tags.map(tag => (
              <Tag key={tag} className={cx($p.nowrap)}>#{tag}</Tag>
            ))}
            </div>
          </Sublines>
        </RootContainer>
      </Root>
    )
  }
}
