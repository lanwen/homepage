import * as React from 'react'
import Header from '../Header'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import Footer from '../Footer/Footer'
import FooterCTA from '../FooterCTA'
import QueryEditor from './QueryEditor/QueryEditor'
import FAQ from '../PricingView/FAQ'

export default class FeaturesGraphQLView extends React.Component<{}, {}> {
  componentDidMount() {
    window.addEventListener('resize', this.rerender)
  }

  render() {
    return (
      <div>
        <Header/>
        <QueryEditor ref='queryEditor' inViewPort={true}/>
        <FooterCTA
          headline1='Ready to get started?'
          headline2='Set up a GraphQL backend or read the docs'
          button1Text='Create GraphQL Backend'
          button1Link='https://graph.cool/docs'
          button2Text='Open Docs'
          button2Link='https://graph.cool/quickstart'
          className={cx($p.mt96)}
        />
        <Footer/>
      </div>
    )
  }

  private rerender = () => {
    this.forceUpdate()
  }
}
