import * as React from 'react'
import {$p, $g} from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import 'rc-slider/assets/index.css'
import PricingInfo from './PricingInfo'
import IncludedInEveryPlanSection from './IncludedInEveryPlanSection'

const Box = styled.div`
  max-width: 1202px;
`

export default class Info extends React.Component<{}, {}> {
  render() {

    return (
      <div className={cx($p.bgDarkBlue, $p.pb60)} style={{marginTop: -49}}>
        <Box className={cx($p.flex, $p.flexColumn, $p.justifyBetween, $p.center)}>

          <PricingInfo/>

          {/* TITLE */}
          <h2 className={cx($p.white, $p.fw3, $p.tc, $p.pt38)}>Included in every plan</h2>

          <div className={cx($p.flex, $p.flexColumn, $p.ph25, $p.mt96)}>

            <IncludedInEveryPlanSection
              title='File Storage'
              description={`Graphcool has an integrated file management system. Easily store
              and display your users profile pictures, attachments or any other files.
              Basic usage is free and for more demanding projects you are billed in increments
              of 50¢ / GB / month for additional storage and file transfer.`}
              iconSrc={require('../../assets/icons/pricing/download.svg')}
              iconWidth={28}
              iconHeight={34}
              children={(
                <div className={cx($p.flex, $p.flexColumn, $p.justifyEnd, $p.ml60)}>
                  <div className={cx($p.lightBlue, $p.tr, $p.fw6, $p.nowrap)}>Included for free:</div>
                  <div className={cx($p.lightBlue, $p.tr, $p.nowrap)}>10 GB Volume</div>
                  <div className={cx($p.lightBlue, $p.tr, $p.nowrap)}>10 GB / mo Traffic</div>
                </div>
              )}
            />

            <IncludedInEveryPlanSection
              title='Powerful GraphQL API'
              descriptionElement={(
                <div className={cx($p.white80, $p.f14, $p.mt10)}>
                  Every plan comes with a powerful and developer-friendly GraphQL API.<br />
                  Included features: Subscriptions, data filtering & ordering, pagination,
                  CRUD mutations, nested mutations.
                </div>
              )}
              iconSrc={require('../../assets/icons/pricing/graphql.svg')}
              iconWidth={34}
              iconHeight={34}
              className={$p.mt38}
            />

            <IncludedInEveryPlanSection
              title='Unlimited Integrations'
              descriptionElement={(
                <div className={cx($p.white80, $p.f14, $p.mt10)}>
                  Integrations are a powerful way to add functionality to your project.<br />
                  For example, you can use Auth0 to add Social Login or set up
                  a sophisticated search engine with Algolia.
                </div>
              )}
              iconSrc={require('../../assets/icons/pricing/integrations.svg')}
              iconWidth={34}
              iconHeight={34}
              className={$p.mt38}
            />

            <div className={cx($p.flex, $p.justifyCenter, $p.mt38)}>
              <a
                className={cx($g.uppercaseButton, $p.bgBlue, $p.white, $p.tc, $p.ph38, $p.pv16, $p.noUnderline)}
                href='/'
              >All features</a>
            </div>

          </div>
        </Box>
      </div>
    )
  }
}
