import * as React from 'react'
import { $p, $g } from 'graphcool-styles'
import * as cx from 'classnames'
import styled from 'styled-components'
import 'rc-slider/assets/index.css'
import IncludedInEveryPlanSection from './IncludedInEveryPlanSection'

const Box = styled.div`
  max-width: 1202px;
`

export default class Info extends React.Component<{}, {}> {
  render() {

    return (
      <div className='info'>
        <style jsx={true}>{`
          .info {
            @p: .bgDarkBlue, .pb60, .pt60;
            margin-top: -49px;
          }
          h2 {
            @p: .white, .fw3, .tc;
            @media (max-width: 649px) {
              @p: .pt25;
            }
            @media (min-width: 650px) {
              @p: .pt38;
            }
          }
          .plan {
            @p: .flex, .flexColumn, .ph25;
            @media (max-width: 649px) {
              @p: .mt38;
            }
            @media (min-width: 650px) {
              @p: .mt96;
            }
          }
          .included {
            @p: .flex, .flexColumn;
            @media (max-width: 649px) {
              @p: .itemsStart, .ml4, .mt16;
            }
            @media (min-width: 650px) {
              @p: .justifyEnd, .ml60, .mt0;
            }
          }
        `}</style>
        <Box className={cx($p.flex, $p.flexColumn, $p.justifyBetween, $p.center)}>
          {/* TITLE */}
          <h2>Included in every plan</h2>
          <div className='plan'>
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
                <div className='included'>
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
