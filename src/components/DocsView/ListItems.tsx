import * as React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'
import { $p, $v, $g } from 'graphcool-styles'
import * as cx from 'classnames'

interface State {
  menuOpened: boolean
  subMenuOpened: boolean
  subSubMenuOpened: boolean
}
interface Props {
  title: string
  subtitle1: string
  subsubtitle1: string
  subsubsubtitle1: string
  subtitle2: string
  subsubtitle2: string
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
        // borderLeft: 'solid 3px rgba(28, 191, 50, 0.7)',
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
    let stateStyles = this.state.menuOpened ? styles.active : styles.inactive
    let stateTitles = this.state.menuOpened ? text.active : text.inactive
    let stateSubTitles = this.state.subMenuOpened ? text.active : text.inactive
    let stateSubSubTitles = this.state.subSubMenuOpened ? text.active : text.inactive
    let stateSubStyles = this.state.subMenuOpened ? styles.active : styles.inactive
    let stateSubSubStyles = this.state.subSubMenuOpened ? styles.active : styles.inactive
    return (
      <ul>
        <div>
          <div style={stateTitles} className={cx($p.pv16, $p.pl10, $p.f14, $p.fw6, $p.pl38, $p.pointer)}
               onClick={() => this.setState({ menuOpened: !this.state.menuOpened } as State)}>
            {this.props.title}
          </div>
          <FirstUlStyle style={stateStyles} className={cx($p.pv60, $p.bgWhite90)}>
            <section className={cx('border')}>
              <Hline>
                <p
                  className={cx($p.f14, $p.black30, $p.fw4, $p.pl10, $p.pb10, $p.pointer, $p.pl25, 'hl')}
                  onClick={() => this.setState({ subMenuOpened: !this.state.subMenuOpened } as State)}
                  style={stateSubTitles}
                >
                  {this.props.subtitle1}
                </p>
              </Hline>
              <Hline>
                <ul style={stateSubStyles}>
                  <li
                    onClick={() => this.setState({ subSubMenuOpened: !this.state.subSubMenuOpened } as State)}
                    className={cx($p.pl38, $p.list, $p.black30, $p.f14, $p.pb10, $p.pointer, 'hl')}
                    style={stateSubSubTitles}
                  >
                    {this.props.subsubtitle1}</li>
                </ul>
              </Hline>
              <Hline>
                <ul style={stateSubSubStyles}>
                  <li className={cx($p.pl60, $p.list, $p.black30, $p.f14, $p.pb10, 'hl')}>
                    {this.props.subsubsubtitle1}</li>
                </ul>
              </Hline>
            </section>
          </FirstUlStyle>
        </div>
      </ul>
    )
  }
}
