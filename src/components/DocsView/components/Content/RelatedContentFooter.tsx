import * as React from 'react'
import { Link } from 'react-router'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../../../utils/constants'
import CircleIcon from '../CircleIcon'
import { Item } from '../../../../types/types'
import Tooltip from './Tooltip'

const Container = styled.div`
  max-width: 920px;
`

const ContainerContainer = styled.div`
  background: linear-gradient(to top, #fff 3%, rgba(0, 0, 0, 0.02) 3%,rgba(0, 0, 0, 0.02) 97%,#fff 97%);
  
  @media(max-width: ${breakpoints.p1000}px) {
    background: linear-gradient(to top, #fff 5%, rgba(0, 0, 0, 0.02) 5%,rgba(0, 0, 0, 0.02) 95%,#fff 95%);
  }
`

const More = styled.div`
  box-shadow:0 8px 18px rgba(0, 0, 0, 0.03), 0 -8px 18px rgba(0, 0, 0, 0.03);
    
  @media(max-width: ${breakpoints.p1000}px) {
    margin: 0;
  }
`

const Further = styled.div`
  @media(max-width: ${breakpoints.p1000}px) {
    margin-bottom: ${$v.size25};
    margin-top: ${$v.size25};
  }

  @media(max-width: ${breakpoints.p900}px) {
    padding-left: 0;
  }
`

interface Props {
  item: Item,
}

export default class RelatedContentFooter extends React.Component<Props, {}> {

  render() {

    const {relatedMoreTitle, title, relatedMoreDescription, description} = this.props.item

    return (
      <ContainerContainer className={cx($p.flex, $p.justifyCenter)}>
        <Container
          className={cx($p.flex, $p.justifyCenter, $p.flexWrap, $p.ph10, $p.mb25, $p.pb38)}
        >
          <div className={cx($p.flex, $p.flexColumn, $p.flex1)}>
            {this.props.item.relatedMore.length > 0 && (
              <More
                className={cx($p.flex, $p.flexColumn, $p.pb25, $p.bgWhite, $p.mr25, $p.mb16)}
              >
                <div className={cx($p.inlineFlex, $p.bgLightgreen10, $p.pa16, $p.justifyBetween, $p.itemsCenter)}>
                  <div className={cx($p.flex)}>
                    <span className={cx($p.lightgreen50, $p.pr6, $p.fw6, $p.f16, $p.ttu, $p.nowrap)}>More about</span>
                    <span className={cx($p.green, $p.fw6, $p.f16, $p.ttu, $p.ml6)}>{relatedMoreTitle || title}</span>
                  </div>
                  <Tooltip text={relatedMoreDescription || description} />
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
          </div>
          {this.props.item.relatedFurther.length > 0 && (
            <Further className={cx($p.mt96, $p.pl25, $p.flex1)}>
              <p className={cx($p.fw6, $p.f16, $p.black30, $p.pb25, $p.ttu)}>Further reading</p>
              {this.props.item.relatedFurther.map(item => (
                <Link to={`${item.path}-${item.alias}`} className={cx($p.flex, $p.pv10, $p.noUnderline)}>
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
