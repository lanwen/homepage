import * as React from 'react'
import { Link } from 'react-router'
import * as cx from 'classnames'
import { $p, $g, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../../../utils/constants'
import CircleIcon from '../CircleIcon'
import { Item } from '../../../../types/types'
import Tooltip from './Tooltip'

const ContainerContainer = styled.div`
    padding-bottom: ${$v.size60};
    
    &:before {
      content: "";
      position: absolute;
      top: ${$v.size10};
      bottom: ${$v.size10};
      background: rgba(0,0,0,0.02);
      width: 100%;
    }
    
    @media (max-width: ${breakpoints.p1000}px) {
      &:before {
        bottom: 0;
      }    
    }
        
    @media (max-width: ${breakpoints.p580}px) {
      padding-bottom: ${$v.size38};
    }
`

const Container = styled.div`
  max-width: 920px;
  flex: 1;
`

const More = styled.div`
  // box-shadow:0 8px 18px rgba(0, 0, 0, 0.03), 0 -8px 18px rgba(0, 0, 0, 0.03);
  max-width: 470px;
  // min-height: 350px;
    
  @media(max-width: ${breakpoints.p1000}px) {
    margin: 25px;
  }
  
  @media (max-width: ${breakpoints.p580}px) {
    margin: 0px;
  }
`

const MoreItem = styled(Link)`
  padding: ${$v.size38} ${$v.size25} 0;
  
  &:last-child {
    padding-bottom: ${$v.size38};
  }
  
  @media (max-width: ${breakpoints.p580}px) {
    padding: ${$v.size25} ${$v.size25} 0;
    
    &:last-child {
      padding-bottom: ${$v.size25};
    }
  }
`

const Further = styled.div`
  margin-top: 50px;
  max-width: 300px;
  
  @media(max-width: ${breakpoints.p1000}px) {
    margin: 25px 25px 0;
  }

  @media(max-width: ${breakpoints.p500}px) {
    margin: ${$v.size38} ${$v.size25} 0;
  }
  
`

const FakeSidebar = styled.div`
  flex: 0 0 250px;
`

interface Props {
  item: Item
  displayAsColumns?: boolean
}

export default class RelatedContentFooter extends React.Component<Props, {}> {

  render() {

    const {relatedMoreTitle, title, relatedMoreDescription, description} = this.props.item

    return (
      <ContainerContainer className={cx(
        $p.flex,
        $p.justifyCenter,
        $p.relative,
        $p.w100,
      )}>
        {(this.props.item.layout === 'REFERENCE' && window.innerWidth > breakpoints.p750) && (
          <FakeSidebar />
        )}
        <Container
          className={cx(
            $p.flex,
            this.props.displayAsColumns && $p.flexColumn,
            this.props.displayAsColumns && $p.itemsStart,
            $p.ph10,
            $p.relative,
            $p.justifyCenter,
          )}
        >
          {this.props.item.relatedMore.length > 0 && (
            <More
              className={cx($p.flex, $p.flexColumn, $p.bgWhite, $p.mr25, $g.overlay)}
            >
              <div
                className={cx(
                  $p.inlineFlex,
                  $p.bgLightgreen10,
                  $p.pa16,
                  $p.justifyBetween,
                  window.innerWidth >= breakpoints.p580 && $p.itemsCenter,
                )}
              >
                <div
                  className={cx(
                    $p.flex,
                    window.innerWidth < breakpoints.p580 && $p.flexColumn,
                  )}
                >
                  <span className={cx($p.lightgreen50, $p.pr6, $p.fw6, $p.f16, $p.ttu, $p.nowrap)}>More about</span>
                  <span
                    className={cx(
                      $p.green,
                      $p.fw6,
                      $p.f16,
                      $p.ttu,
                      $p.mr16,
                    )}
                  >
                    {relatedMoreTitle || title}
                  </span>
                </div>
                <Tooltip text={relatedMoreDescription || description} right={-3} />
              </div>
              {this.props.item.relatedMore.map(item => (
                <MoreItem
                  to={`${item.path}-${item.alias}`}
                  key={item.alias}
                  className={cx($p.flex, $p.noUnderline)}
                >
                  <div className={cx($p.bbox, $p.db, $p.mr16, $p.mt4)}>
                    <CircleIcon type={item.layout} />
                  </div>
                  <div>
                    <p className={cx($p.black60, $p.f20, $p.fw4)}>{item.shorttitle}</p>
                    <p className={cx($p.black30, $p.f14, $p.fw6)}>{item.layout}</p>
                  </div>
                </MoreItem>
              ))}
            </More>
          )}
          {this.props.item.relatedFurther.length > 0 && (
            <Further className={cx(
              $p.flex1,
              window.innerWidth > breakpoints.p1000 && $p.pl25,
            )}>
              <p className={cx(
                $p.fw6,
                $p.f16,
                $p.black30,
                $p.pb25,
                $p.ttu,
              )}>
                Further reading
              </p>
              {this.props.item.relatedFurther.map(item => (
                <Link
                  to={`${item.path}-${item.alias}`}
                  key={item.alias}
                  className={cx($p.flex, $p.pv10, $p.noUnderline)}
                >
                  <div className={cx($p.bbox, $p.db, $p.mr16, $p.mt4)}>
                    <CircleIcon type={item.layout} />
                  </div>
                  <div>
                    <p className={cx($p.black60, $p.f20, $p.fw4)}>{item.shorttitle}</p>
                    <p className={cx($p.black30, $p.f14, $p.fw6)}>{item.layout}</p>
                  </div>
                </Link>
              ))}
            </Further>
          )}
        </Container>
      </ContainerContainer>
    )
  }
}
