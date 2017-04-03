import * as React from 'react'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import CircleIcon from '../CircleIcon'
import { Item } from '../../../../types/types'
import BreadCrumb from './BreadCrumb'
import styled from 'styled-components'
import SimpleRelayTwin from './SimpleRelayTwin'
import { breakpoints, maxWidth } from '../../../../utils/constants'
const TimeAgo = require('javascript-time-ago').default
import * as MediaQuery from 'react-responsive'

require('javascript-time-ago/intl-messageformat-global')
TimeAgo.locale(require('../../../../utils/locale'))

interface Props {
  item: Item
}

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
    const {item} = this.props
    const lastModified = new Date(item.lastModified)
    const created = new Date(item.publicationDate)
    const {simpleRelayTwin, path, layout} = item

    const rightPaddingTitle = item.beta ? '50px' : 0
    const timeAgo = new TimeAgo('en-US')

//    const title = (() => {
//      const backtickMatches = item.title.match(/.*(\`.*\`).*/)
//      if (backtickMatches && backtickMatches.length > 1) {
//        const [,...matches] = backtickMatches
//        let title = item.title as any
//        for (const match of matches) {
//          const replacement = (
//            <span className='code'>match.substring(1, match.length - 1)</span>
//          )
//          title = title.replace(match, replacement)
//        }
//
//        return title
//      } else {
//        return item.title
//      }
//    })()

    return (
      <div className='root'>
        <style>{`
          .root {
            @p: .relative, .flex;
            max-width: 970px;

            @media (max-width: 580px) {
              @p: .mt38;
            }

            @media (max-width: 1050px) {
              max-width: calc(100vw - 300px);
            }

            @media (max-width: 750px) {
              max-width: 750px;
            }
          }
          .root-container {
            @p: .pb60, .pt10, .w100, .bbox;
            max-width: ${maxWidth}px;
          }
          @media (min-width: 1050px) {
            .root-container.twin {
              paddingRight: 232px;
            }
          }
          .tag {
            @p: .flex, .flexWrap;
            @media (max-width: 580px) {
              @p: .mt6;
            }
          }
        `}</style>
        <MediaQuery minWidth={900}>
          <IconWrapper className={cx($p.bbox, $p.db, $p.mr10, $p.relative)}>
            <CircleIcon width={44} height={44} type={item.layout}/>
          </IconWrapper>
        </MediaQuery>
        <div
          className={cx(
            'root-container',
            {twin: layout === 'REFERENCE' && simpleRelayTwin && simpleRelayTwin.length > 0},
          )}
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
                `Last updated ${timeAgo.format(lastModified)}`
              )}
            </div>
            <div className='tag'>
              {item.tags.map(tag => (
                <Tag key={tag} className={cx($p.nowrap)}>#{tag}</Tag>
              ))}
            </div>
          </Sublines>
        </div>
      </div>
    )
  }
}
