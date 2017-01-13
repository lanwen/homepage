import * as React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'
import { $p, $v } from 'graphcool-styles'
import * as cx from 'classnames'
import { NestedItem } from '../../../../types/types'

const FirstUlStyle = styled.div`
  margin: -${$v.size38} ${$v.size16} 0 ${$v.size16};
  box-shadow:0 8px 18px rgba(0, 0, 0, 0.1),
  0 -8px 18px rgba(0, 0, 0, 0.1);
  padding-top: 45px;
  border-radius: 3px;
  
  // this is needed for consistent spacing
  .non-border {
    border-left: solid 3px white;
  }

  .border {
    border-left: solid 3px rgba(28, 191, 50, 0.2);
  }
`

const Hline = styled.div`
  &:hover .hl, .hl.active {
    background: rgba(0, 0, 0, 0.03);
    margin-left: -3px;
    border-left: solid 3px rgba(28, 191, 50, 0.7);
    display: block;
    position: relative;
    color: ${$v.gray80};
    
    &:before, &:after {
      content: "";
      position: absolute;
      left: -3px;
      background: #fff;
      height: 4px;
      width: 100%;
    }
    
    &:before {
      top: -2px;
    }
    
    &:after {
      bottom: -2px;
    }
  }
  
  &:focus .hl {
    background: rgba(0, 0, 0, 0.03);
  }
`

interface Props {
  item: NestedItem,
  expanded: boolean,
  currentAlias: string,
}

export default class ListItems extends React.Component<Props, {}> {
  getActiveItemIndex(props: Props) {
    let activeItemIndex = 0
    if (props.item && props.item.children) {
      const findRecursive = (item: NestedItem) => item.alias === props.currentAlias ||
      item.children && !!item.children.find(findRecursive)
      activeItemIndex = props.item.children.findIndex(findRecursive)
    }
    return activeItemIndex
  }

  render() {
    const {currentAlias, expanded} = this.props
    const activeItemIndex = this.getActiveItemIndex(this.props)

    return (
      <div className={cx(
        expanded ? [$p.pt6, $p.mt25] : $p.mt16,
      )}>
        <Link
          to={`${this.props.item.path}-${this.props.item.alias}`}
          className={cx(
            $p.f14, $p.fw6, $p.pl38, $p.pointer, $p.noUnderline, $p.black50, $p.ttu, 'hl', $p.db,
            {
              ['active']: this.props.item.alias === currentAlias,
            },
          )}>
          {this.props.item.shorttitle}
        </Link>
        {this.props.expanded &&
        <FirstUlStyle className={cx($p.pb16, $p.bgWhite90)}>
          <section>
            {this.props.item.children && this.props.item.children.map((itemLvl2, index) => (
              <div key={itemLvl2.alias} className={cx(index === activeItemIndex ? 'border' : 'non-border')}>
                <Hline>
                  <Link
                    to={`${itemLvl2.path}-${itemLvl2.alias}`}
                    className={cx(
                      $p.f14, $p.pointer, $p.noUnderline, 'hl', $p.fw4, $p.db, $p.pv6,
                      index === activeItemIndex ? $p.black80 : $p.black30,
                      {
                        ['active']: itemLvl2.alias === currentAlias,
                      },
                    )}
                    style={{paddingLeft: 20}}
                  >
                    {itemLvl2.shorttitle}
                  </Link>
                </Hline>
                {itemLvl2.children && itemLvl2.children.map(itemLvl3 => (
                  <div key={itemLvl3.alias}>
                    <Hline>
                      <Link
                        to={`${itemLvl3.path}-${itemLvl3.alias}`}
                        className={cx(
                            $p.list, $p.black30, $p.f14, $p.pointer,$p.noUnderline, 'hl', $p.db, $p.pv6,
                            {
                              ['active']: itemLvl3.alias === currentAlias,
                            },
                          )}
                        style={{paddingLeft: 36}}
                      >
                        {itemLvl3.shorttitle}
                      </Link>
                    </Hline>
                    {itemLvl3.children && itemLvl3.children.map(itemLvl4 => (
                      <Hline key={itemLvl4.alias}>
                        <Link
                          className={cx(
                            $p.list, $p.black30, $p.f14, $p.noUnderline, 'hl', $p.db, $p.pv6,
                            {
                              ['active']: itemLvl4.alias === currentAlias,
                            },
                            )}
                          to={`${itemLvl4.path}-${itemLvl4.alias}`}
                          style={{paddingLeft: 52}}
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
    )
  }
}
