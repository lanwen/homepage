import * as React from 'react'
import Footer from '../Footer/Footer'
import { $p } from 'graphcool-styles'
import * as cx from 'classnames'
import Header from './components/Header/Header'
import * as Helmet from 'react-helmet'
import styled from 'styled-components'

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
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.rerender)
  }

  render() {

    const isReference = location.pathname.includes('reference')

    return (
      <div className={cx($p.flex, $p.flexColumn)}>
        <Header/>
        <Helmet titleTemplate='%s | Graphcool Docs' />
        <Content className={cx(
          $p.flex,
          $p.overflowXHidden,
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
