import * as React from 'react'
import * as cx from 'classnames'
import { Link } from 'react-router'
import { $p, $g, Icon, $v } from 'graphcool-styles'
import styled from 'styled-components'
import { breakpoints, maxWidth } from '../../../utils/constants'

interface State {
  menuOpened: boolean
}
export default class Header extends React.Component<{}, {}> {
  state: State = {
    menuOpened: false,
  }

  render() {
    const Root = styled.div`
      justify-content: space-between;
      display: flex;
      flex-wrap: wrap;
      padding-right: ${$v.size16};
      
      @media (max-width: ${breakpoints.p1200}px) {
          padding-top: ${$v.size25}
      }
    `
    const NavigationLinks = styled.div`
      color: ${$v.gray30};
      cursor: pointer;
      transition: color ${$v.duration} linear;

      &:hover {
        color: ${$v.gray50};
      }
    `
    const Searchbox = styled.input`
     
      width: 300px;
        box-sizing: border-box;
      box-shadow:0 8px 18px rgba(0, 0, 0, 0.1),
      0 -8px 18px rgba(0, 0, 0, 0.1);
      border-radius: 2px;
      font-size: 16px;
      background-color: #fff;
      background-image: url(${require('../../../assets/graphics/Lupa.png')});
      background-position: 10px 15px; 
      background-repeat: no-repeat;
      padding: 12px 20px 12px 40px;
      
      @media (max-width: ${breakpoints.p1360}px) {
        width: 250px;
      }
    `
    const Hamburger = styled.div`
      position: absolute;
      cursor: pointer;
      top: ${$v.size38};
      right: ${$v.size38};
    `
    const styles = {
      active: {
        display: 'block',
      },
      inactive: {
        display: 'none',
      },
    }
    const FirstUlStyle = styled.div`
      background-color: #fff;
      margin: -${$v.size10} ${$v.size16} ${$v.size38} ${$v.size16};
      box-shadow:0 8px 18px rgba(0, 0, 0, 0.1),
      0 -8px 18px rgba(0, 0, 0, 0.1);
      position: absolute;
      cursor: pointer;
      top: ${$v.size38};
      right: ${$v.size10};

      .border {
        border-left: solid 3px rgba(28, 191, 50, 0.2);
      }
    `
    const Close = styled.div`
      position: absolute;
      top: ${$v.size16};
      right: ${$v.size16};
      width: 36px;
      height: 36px;
      opacity: .2;
      cursor: pointer;
      transition: opacity ${$v.duration} linear;
      
      &:hover {
        opacity: .4;
      }
      
      &:before, &:after {
        content: "";
        position: absolute;
        background: ${$v.black};
        left: 50%;
        top: 50%;
        width: 80%;
        height: 2px;
        transform: translate(-50%, -50%) rotate(45deg);
      }
      
      &:after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    `
    const stateStyles = this.state.menuOpened ? styles.active : styles.inactive
    const linkContent = [
      {src: '/docs/quickstart', title: 'QUICKSTART'},
      {src: '/docs/resources', title: 'RESOURCES'},
      {src: '/docs/reference', title: 'REFERENCE'},
      {src: '/docs/blog', title: 'BLOG'},
      {src: '/docs/community', title: 'COMMUNITY'},
    ]
    const links = (
      <div className={cx($p.flex, $p.flexRow)}>
        {linkContent.map((link, index) => {
          return <Link key={index} className={cx($p.ph25, $p.noUnderline)} to={link.src}>
            <NavigationLinks className={cx($p.mt10, $p.fw6)}>
              {link.title}
            </NavigationLinks>
          </Link>
        })
        }
      </div>
    )

    return (
      <div className={cx($p.absolute, $p.top0, $p.right0)} style={{left: '230px'}}>
        {window.innerWidth > breakpoints.p1200 ? (
          <Root className={cx($p.flex, $p.pv60, $p.ml10)}>
              <form>
                <Searchbox type='text' name='search' placeholder='Search..'/>
              </form>
            {links}
            <NavigationLinks className={cx($p.mt4)}>
              <img className={cx($p.bbox, $p.db)} src={require('../../../assets/graphics/APIEndpoints.png')}/>
            </NavigationLinks>
          </Root>
        ) : (
          <Root className={cx($p.flex, $p.pv60)}>
            <Hamburger>
              <Icon style={stateStyles}
                    onClick={() => this.setState({ menuOpened: !this.state.menuOpened } as State)}
                    src={require('../../../assets/icons/hamburger.svg')} width={36} height={36} color={$v.gray20}
              />
            </Hamburger>
            <FirstUlStyle style={stateStyles} className={cx($p.pa60, $p.bgWhite90, $p.z1)}>
              <Close
                style={stateStyles}
                onClick={() => this.setState({ menuOpened: !this.state.menuOpened } as State)}
              />
              <NavigationLinks>
                <form className={cx($p.pl38, $p.pb16)}>
                  <Searchbox type='text' name='search' placeholder='Search..'
                  />
                </form>
              </NavigationLinks>
              {links}
              <NavigationLinks className={cx($p.mt16)}>
                <img className={cx($p.bbox, $p.db)} src={require('../../../assets/graphics/APIEndpoints.png')}/>
              </NavigationLinks>
            </FirstUlStyle>
          </Root>
        )}
      </div>
    )
  }
}
