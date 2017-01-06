import * as React from 'react'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router'
import { getItemsByLayout } from '../../fragments/getItemsByLayout'
import * as cx from 'classnames'
import { $p, Icon, $v } from 'graphcool-styles'
import styled from 'styled-components'
import TutorialsContent from './TutorialsContent'
import TopicSeeAll from './TopicSeeAll'
import { breakpoints } from '../../../../utils/constants'

const CircleTutorial = styled.div`
  width: ${$v.size38};
  height: ${$v.size38};
  background-color: rgba(241, 143, 1, 0.2);
  `

const Basis = styled.div`  
    @media (max-width: ${breakpoints.p750}px) {
    justify-content: center;
}
`

export default class ChooseTechnology extends React.Component<{}, {}> {
  render() {
    return (
      <div className={cx($p.pb16, $p.mb60)}>
        <Basis className={cx($p.flex, $p.itemsCenter, $p.mb60)}>
          <CircleTutorial className={cx($p.flex, $p.justifyCenter, $p.itemsCenter, $p.br100)}>
            <Icon
              src={require('graphcool-styles/icons/fill/docsExample.svg')}
              width={50}
              height={50}
              fill={true}
              color='#F18F01'
            />
          </CircleTutorial>
          <div className={cx($p.black30, $p.f25, $p.fw4, $p.pa10)}>Examples</div>
        </Basis>
        <div>
          <div className={cx($p.hf32, $p.tc, $p.mt16, $p.fw3)}>Choose your favourite technology</div>
          <div className={cx($p.flex, $p.flexWrap, $p.justifyCenter, $p.pv60)}>
            <img src={require('../../../../assets/graphics/ResourcesOverview/angular-icon.svg')}
                 height={90}
                 width={90}
                 className={cx($p.ma25)}
            />
            <img src={require('../../../../assets/graphics/ResourcesOverview/apollostack.svg')}
                 height={90}
                 width={90}
                 className={cx($p.ma25)}
            />
            <img src={require('../../../../assets/graphics/ResourcesOverview/react.svg')}
                 height={90}
                 width={90}
                 className={cx($p.ma25)}
            />
            <img src={require('../../../../assets/graphics/ResourcesOverview/vue.svg')}
                 height={90}
                 width={90}
                 className={cx($p.ma25)}
            />
            <img src={require('../../../../assets/graphics/ResourcesOverview/relay.svg')}
                 height={90}
                 width={90}
                 className={cx($p.ma25)}
            />
          </div>
          <p className={cx($p.black60, $p.f25, $p.tc)}>or see <a href='/'>all examples</a></p>
        </div>
      </div>
    )
  }
}
