import * as React from 'react'
import Footer from '../Footer/Footer'
import { $p } from 'graphcool-styles'
import * as cx from 'classnames'
import Header from '../Header/Header'
import * as Helmet from 'react-helmet'
import styled from 'styled-components'
import drumstick from 'drumstick'
import * as cookiestore from 'cookiestore'

interface Props {
  location: any
  children?: JSX.Element
}

const Content = styled.div`
  min-height: 50vh;
`

export default class DocsView extends React.Component<Props, {}> {
  componentDidMount() {
    window.addEventListener('resize', this.rerender)

    if (
      __HEARTBEAT_ADDR__ &&
      cookiestore.has('graphcool_auth_token') &&
      cookiestore.has('graphcool_last_used_project_id')
    ) {
      drumstick.start({
        endpoint: __HEARTBEAT_ADDR__,
        payload: () => ({
          resource: 'docs',
          token: cookiestore.get('graphcool_auth_token'),
          projectId: cookiestore.get('graphcool_last_used_project_id'),
        }),
        frequency: 60 * 1000,
      })
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.rerender)

    if (
      __HEARTBEAT_ADDR__ &&
      cookiestore.has('graphcool_auth_token') &&
      cookiestore.has('graphcool_last_used_project_id')
    ) {
      drumstick.pause()
    }
  }

  render() {

    const isReference = location.pathname.includes('reference')

    return (
      <div className={cx($p.flex, $p.flexColumn, $p.overflowHidden)}>
        <Header view='DOCS' />
        <Helmet titleTemplate='%s - Graphcool' />
        <Content className={cx(
          $p.flex,
          !isReference && $p.justifyCenter,
        )}>
          {this.props.children}
        </Content>
        <Footer/>
      </div>
    )
  }

  private rerender = () => {
    this.forceUpdate()
  }
}
