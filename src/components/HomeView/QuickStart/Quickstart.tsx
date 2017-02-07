import * as React from 'react'
import * as cx from 'classnames'
import { $v, $p, $g, Icon } from 'graphcool-styles'
import Separator from '../../Separator'
import SectionHeader from '../../SectionHeader'
import QuickstartTechnology from './QuickstartTechnology'




export default class Quickstart extends React.Component<{}, {}> {
  render() {

    const frontendTech = [{
      technology: 'react',
      color: '#00D8FF',
      opacity: 0.1
    }, {
      technology: 'angular',
      color: '#DD0031',
      opacity: 0.1
    }, {
      technology: 'react',
      color: '#1A7F91',
      opacity: 0.1
    }, {
      technology: 'ios',
      color: '#000',
      opacity: 0.06
    }, {
      technology: 'android',
      color: '#A4C439',
      opacity: 0.1
    }, {
      technology: 'vue',
      color: '#41B883',
      opacity: 0.1
    }]

    const clientTech = [{
      technology: 'apollo',
      color: '#0A2C49',
      opacity: 0.08
    }, {
      technology: 'relay',
      color: '#EF6005',
      opacity: 0.1
    }]

    return (
      <section>
        <Separator />
        <SectionHeader
          headline='Have a Quick Start'
          copy='This really is the fastest way we can offer to get a fully functional backend'
        />
        <div className={cx($p.flex, $p.itemsCenter, $p.justifyCenter, $p.center)}>
          <div className={cx($p.flex)}>
            {frontendTech.map((node, count) => {
              return (
                <QuickstartTechnology
                  key={count}
                  technology={node.technology}
                  color={node.color}
                  opacity={node.opacity}
                />
              )
            })}
          </div>
          <div className={cx($p.mh25)}>
            <Icon
              src={require('graphcool-styles/icons/stroke/addFull.svg')}
              width={25}
              height={25}
              color={$v.gray20}
              stroke
              strokeWidth={5}
            />
          </div>
          <div className={cx($p.flex)}>
            {clientTech.map((node, count) => {
              return (
                <QuickstartTechnology
                  key={count}
                  technology={node.technology}
                  color={node.color}
                  opacity={node.opacity}
                />
              )
            })}
          </div>
          <CallToAction className={cx($g.uppercaseButton)}>Select your Quickstart</CallToAction>
        </div>
      </section>
    )
  }
}
