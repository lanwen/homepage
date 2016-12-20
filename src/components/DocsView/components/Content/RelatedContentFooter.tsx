import * as React from 'react'
import { Link } from 'react-router'
import * as cx from 'classnames'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints } from '../../../../utils/constants'
import CircleIcon from '../CircleIcon'
import { Item } from '../../../../types/types'

const Container = styled.div`
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
    return (
      <Container className={cx($p.flex, $p.justifyCenter, $p.flexWrap, $p.ph10, $p.mb60)}>
        <More
          className={cx($p.flex, $p.flexColumn, $p.pb25, $p.bgWhite, $p.mr25)}
        >
          <div className={cx($p.inlineFlex, $p.bgLightgreen10, $p.pa16, $p.justifyBetween, $p.itemsCenter)}>
            <div>
              <span className={cx($p.lightgreen50, $p.pr6, $p.fw6, $p.f16, $p.ttu)}>More about</span>
              <span className={cx($p.green, $p.fw6, $p.f16)}>AUTHENTICATION</span>
            </div>
            <img
              src={require('../../../../assets/graphics/info.svg')}
              className={cx($p.bbox, $p.db, $p.ph10)}
            />
          </div>
          {this.props.item.relatedMore.map(item => (
            <Link
              to={`${item.path}-${item.alias}`}
              key={item.alias}
              className={cx($p.flex, $p.pb10, $p.pt25, $p.ph25, $p.noUnderline)}
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
        </More>
        <Further className={cx($p.mt96, $p.pl25)}>
          <p className={cx($p.fw6, $p.f16, $p.black30, $p.pb25, $p.ttu)}>Further reading</p>
          {this.props.item.relatedFurther.map(item => (
            <Link to={`${item.path}-${item.alias}`} className={cx($p.flex, $p.pv10, $p.noUnderline)}>
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
      </Container>
    )
  }
}
