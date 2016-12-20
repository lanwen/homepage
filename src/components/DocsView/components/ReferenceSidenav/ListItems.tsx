import * as React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'
import { $p, $v, $g } from 'graphcool-styles'
import * as cx from 'classnames'
import { NestedItem } from '../../../../types/types'


const FirstUlStyle = styled.div`
  margin: -${$v.size38} ${$v.size16} ${$v.size38} ${$v.size16};
  box-shadow:0 8px 18px rgba(0, 0, 0, 0.1),
  0 -8px 18px rgba(0, 0, 0, 0.1);
  padding-top: 45px;

  .border {
    border-left: solid 3px rgba(28, 191, 50, 0.2);
  }
`

const Hline = styled.div`
  &:hover .hl {
    background: rgba(0, 0, 0, 0.03);
    margin-left: -3px;
    border-left: solid 3px rgba(28, 191, 50, 0.7);
    display: block;
  }
  
  &:focus .hl {
    background: rgba(0, 0, 0, 0.03);
  }
`

interface Props {
  item: NestedItem,
  expanded: boolean,
}

export default class ListItems extends React.Component<Props, {}> {

  render() {
    return (
      <ul>
        <div className={cx($p.mv38, 'hl')}>
          <Hline>
            <Link
              to={`${this.props.item.path}-${this.props.item.alias}`}
              className={cx($p.f14, $p.fw6, $p.pl38, $p.pointer, $p.noUnderline, $p.black50, $p.ttu, 'hl', $p.db)}
            >
              {this.props.item.shorttitle}
            </Link>
          </Hline>
          {this.props.expanded &&
          <FirstUlStyle className={cx($p.pb60, $p.bgWhite90)}>
            <section className={cx('border')}>
              {this.props.item.children && this.props.item.children.map(itemLvl2 => (
                <div key={itemLvl2.alias}>
                  <Hline>
                    <Link
                      to={`${itemLvl2.path}-${itemLvl2.alias}`}
                      className={cx($p.f14, $p.black30, $p.pl16, $p.pointer, $p.noUnderline, 'hl', $p.fw4, $p.db)}
                    >
                      {itemLvl2.shorttitle}
                    </Link>
                  </Hline>
                  {itemLvl2.children && itemLvl2.children.map(itemLvl3 => (
                    <div key={itemLvl3.alias}>
                      <Hline>
                        <Link
                          to={`${itemLvl3.path}-${itemLvl3.alias}`}
                          className={cx($p.pl38, $p.list, $p.black30, $p.f14, $p.pointer,$p.noUnderline, 'hl', $p.db)}
                        >
                          {itemLvl3.shorttitle}
                        </Link>
                      </Hline>
                      {itemLvl3.children && itemLvl3.children.map(itemLvl4 => (
                        <Hline key={itemLvl4.alias}>
                          <Link
                            className={cx($p.pl60, $p.list, $p.black30, $p.f14, $p.noUnderline, 'hl', $p.db)}
                            to={`${itemLvl4.path}-${itemLvl4.alias}`}
                          >
                            {itemLvl4.shorttitle}
                          </Link>
                        </Hline>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </section>
          </FirstUlStyle>
          }
        </div>
      </ul>
    )
  }
}
