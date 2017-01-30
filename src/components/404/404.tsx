import * as React from 'react'
import Header from '../Header'
import Footer from '../Footer/Footer'
import { $p, $g } from 'graphcool-styles'
import * as cx from 'classnames'
import SectionHeader from '../SectionHeader'
import { Link } from 'react-router'

export default class NotFoundView extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Header/>
        <SectionHeader
          copy='We’re really sorry about this but now that you’re here you can…'
          headline='Uh oh. Looks like this page got lost. 😢'
        />
        <div className={cx($p.pt25, $p.pb96, $p.flex, $p.justifyCenter, $p.itemsCenter)}>
          <a
            className={cx($g.uppercaseButton, $p.bgGreen, $p.white, $p.tc, $p.ph25, $p.pv16, $p.noUnderline)}
            href='https://console.graph.cool/signup'
          >
            Sign up
          </a>
          <Link
            className={cx(
              $g.uppercaseButton,
              $p.bgWhite,
              $p.green,
              $p.tc,
              $p.ba,
              $p.bGreen,
              $p.ml10,
              $p.mr25,
              $p.ph25,
              $p.pv16,
              $p.noUnderline,
            )}
            to='/docs'
          >
            Open Docs
          </Link>
          <div className={cx($p.f16, $p.black20, $p.fw6)}>or</div>
          <div
            className={cx(
              $g.uppercaseButton,
              $p.bgWhite,
              $p.green,
              $p.tc,
              $p.ba,
              $p.bGreen,
              $p.mh25,
              $p.ph25,
              $p.pv16,
            )}
            onClick={this.openChat}
          >
            Tell us what you're looking for
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  private openChat = () => {
    if (typeof Intercom === 'undefined') {
      return
    }
    Intercom('show')
  }

}
