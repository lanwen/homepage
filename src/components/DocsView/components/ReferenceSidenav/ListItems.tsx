import * as React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'
import { $p, $v, $g } from 'graphcool-styles'
import * as cx from 'classnames'
import { ReferenceSidebarElement } from './data'
import { NestedItem } from '../../../../types/types'

interface Props {
  item: NestedItem,
  expanded: boolean,
}

interface State {
  menuOpened: boolean
  subMenuOpened: boolean
  subSubMenuOpened: boolean
}

export default class ListItems extends React.Component<Props, State> {

  state: State = {
    menuOpened: false,
    subMenuOpened: false,
    subSubMenuOpened: false,
  }

  render() {
    const styles = {
      active: {
        display: 'block',
      },
      inactive: {
        display: 'none',
      },
    }
    const text = {
      active: {
        color: 'rgba(0, 0, 0, 0.5)',
      },
      inactive: {
        color: 'rgba(0, 0, 0, 0.3)',
      },
    }
    const FirstUlStyle = styled.div`
      margin: -${$v.size60} ${$v.size16} ${$v.size38} ${$v.size16};
      box-shadow:0 8px 18px rgba(0, 0, 0, 0.1),
      0 -8px 18px rgba(0, 0, 0, 0.1);

      .border {
        border-left: solid 3px rgba(28, 191, 50, 0.2);
      }
    `
    const Hline = styled.div`
      &:hover .hl {
        background: rgba(0, 0, 0, 0.03);
        border-left: solid 3px rgba(28, 191, 50, 0.7);
      }
      
      &:focus .hl {
        background: rgba(0, 0, 0, 0.03);
      }
`
    return (
      <ul>
        <div>
          <Link
            to={`${this.props.item.path}-${this.props.item.alias}`}
            className={cx($p.pv16, $p.pl10, $p.f14, $p.fw6, $p.pl38, $p.pointer, $p.noUnderline)}
            onClick={() => this.setState({ menuOpened: !this.state.menuOpened } as State)}
          >
            {this.props.item.shorttitle}
          </Link>
          {this.props.expanded &&
          <FirstUlStyle className={cx($p.pv60, $p.bgWhite90)}>
            <section className={cx('border')}>
              {this.props.item.children && this.props.item.children.map(itemLvl2 => (
                <div key={itemLvl2.alias}>
                  <Hline>
                    <Link
                      to={`${itemLvl2.path}-${itemLvl2.alias}`}
                      className={cx($p.f14, $p.black30, $p.fw4, $p.pl10, $p.pb10, $p.pointer, $p.pl25, $p.noUnderline, 'hl')}
                      onClick={() => this.setState({ subMenuOpened: !this.state.subMenuOpened } as State)}
                    >
                      {itemLvl2.shorttitle}
                    </Link>
                  </Hline>
                  {itemLvl2.children && itemLvl2.children.map(itemLvl3 => (
                    <div key={itemLvl3.alias}>
                      <Hline>
                        <Link
                          to={`${itemLvl3.path}-${itemLvl3.alias}`}
                          onClick={() => this.setState({ subSubMenuOpened: !this.state.subSubMenuOpened } as State)}
                          className={cx($p.pl38, $p.list, $p.black30, $p.f14, $p.pb10, $p.pointer, $p.noUnderline, 'hl')}
                        >
                          {itemLvl3.shorttitle}
                        </Link>
                      </Hline>
                      {itemLvl3.children && itemLvl3.children.map(itemLvl4 => (
                        <Hline key={itemLvl4.alias}>
                          <Link
                            className={cx($p.pl60, $p.list, $p.black30, $p.f14, $p.pb10, $p.noUnderline, 'hl')}
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
