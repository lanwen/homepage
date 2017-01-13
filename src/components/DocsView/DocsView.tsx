import * as React from 'react'
import Footer from '../Footer/Footer'
import { $p } from 'graphcool-styles'
import * as cx from 'classnames'
import Header from './components/Header/Header'
import * as Helmet from 'react-helmet'

interface Props {
  location: any
  children?: JSX.Element
}

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
        <div className={cx(
          $p.flex,
          !isReference && $p.justifyCenter,
        )}>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }

  private rerender = () => {
    this.forceUpdate()
  }
}
