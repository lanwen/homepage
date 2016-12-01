import * as React from 'react'
import Header from '../Header'
import Footer from '../Footer/Footer'
import { $p, $v } from 'graphcool-styles'
import styled from 'styled-components'
import * as cx from 'classnames'

export default class AboutView extends React.Component<{}, {}> {

  render() {
    return (
      <div>
        <Header/>
        <div className={cx($p.flex, $p.flexWrap, $p.flexAuto)}>
          <div className={$p.bgBlack40}>
            We want to build the only backend you’ll ever need.
          </div>
          <div className={$p.bgBlack70}>
            We enable frontend developers to build products from scratch without the need to develop their own backend.
We ourselves have built countless backend applications and got tired of reinventing the wheel over and over again. GraphQL is a massive paradigm shift. It finally gives developers the flexibility to do all the work in the frontend. Our job is to take care of the rest and invent the wheel one last time for you. business logic?
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
