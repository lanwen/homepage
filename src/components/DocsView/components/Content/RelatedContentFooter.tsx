import * as React from 'react'
import {Link} from 'react-router'
import * as cx from 'classnames'
import {$p} from 'graphcool-styles'
import styled from 'styled-components'
import {breakpoints} from '../../../../utils/constants'
import CircleIcon from '../CircleIcon'
import {Item} from '../../../../types/types'
import Tooltip from './Tooltip'

const ContainerContainer = styled.div`
    &:before {
      content: "";
      position: absolute;
      height: calc(100% - 20px);
      background: rgb(250,250,250);
      width: 100%;
    }
`

const Container = styled.div`
  top: -10px;
  bottom: -10px;
  max-width: 920px;
  flex: 1;
`

const More = styled.div`
  box-shadow:0 8px 18px rgba(0, 0, 0, 0.03), 0 -8px 18px rgba(0, 0, 0, 0.03);
  max-width: 470px;
  min-height: 350px;
    
  @media(max-width: ${breakpoints.p1000}px) {
    margin: 25px;
  }
  
  @media (max-width: ${breakpoints.p500}px) {
  }
`

const Further = styled.div`
  margin-top: 50px;
  max-width: 300px;
  
  @media(max-width: ${breakpoints.p1000}px) {
    margin: 25px;
  }

  @media(max-width: ${breakpoints.p500}px) {
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
        $p.mb60,
        $p.w100,
      )}>
        {(this.props.item.layout === 'REFERENCE' && window.innerWidth > breakpoints.p750) && (
          <FakeSidebar></FakeSidebar>
        )}
        {(this.props.item.layout !== 'REFERENCE' && window.innerWidth > breakpoints.p1000) && (
          <FakeSidebar></FakeSidebar>
        )}
        <Container
          className={cx(
            $p.flex,
            this.props.displayAsColumns && $p.flexColumn,
            this.props.displayAsColumns && $p.itemsCenter,
            $p.ph10,
            $p.relative,
            $p.justifyCenter,
          )}
        >
          {this.props.item.relatedMore.length > 0 && (
            <More
              className={cx($p.flex, $p.flexColumn, $p.bgWhite, $p.mr25)}
            >
              <div className={cx($p.inlineFlex, $p.bgLightgreen10, $p.pa16, $p.justifyBetween, $p.itemsCenter)}>
                <div className={cx($p.flex)}>
                  <span className={cx($p.lightgreen50, $p.pr6, $p.fw6, $p.f16, $p.ttu, $p.nowrap)}>More about</span>
                  <span
                    className={cx($p.green, $p.fw6, $p.f16, $p.ttu, $p.ml6, $p.mr16)}>{relatedMoreTitle || title}</span>
                </div>
                <Tooltip text={relatedMoreDescription || description} right={-3}/>
              </div>
              {this.props.item.relatedMore.map(item => (
                <Link
                  to={`${item.path}-${item.alias}`}
                  key={item.alias}
                  className={cx($p.flex, $p.pb10, $p.pt25, $p.ph25, $p.noUnderline)}
                >
                  <div className={cx($p.bbox, $p.db, $p.mr16, $p.mt4)}>
                    <CircleIcon type={item.layout}/>
                  </div>
                  <div>
                    <p className={cx($p.black60, $p.f20, $p.fw4)}>{item.shorttitle}</p>
                    <p className={cx($p.black30, $p.f14, $p.fw6)}>{item.layout}</p>
                  </div>
                </Link>
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
                    <CircleIcon type={item.layout}/>
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
