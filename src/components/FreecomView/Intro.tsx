import * as React from 'react'
import FreecomSignup from './FreecomSignup'

interface Props {

}

const Intro = ({}: Props) => (
  <div className='intro'>
    <style jsx>{`
      .intro {
        @p: .center, .mt38, .mb96, .ph25;
        max-width: 1025px;
      }
      .title {
        @p: .hf30, .lhTitle, .pl38;
        .top {
          @p: .black80;
        }
        .b {
          @p: .fw6;
        }
      }
      .preview {
        @p: .mt60, .w100;
      }
      p {
        @p: .mt60, .center, .f20, .black50, .tc, .mb38;
        max-width: 800px;
      }

      .titleContainer {
        @p: .flex, .itemsCenter, .justifyCenter;
      }

      .freecomLogo {
        width: 85px;
        height: 85px;
      }

    `}</style>
    <div className='titleContainer'>
      <img
        className='freecomLogo'
        src={require('../../assets/graphics/freecom/freecom.png')}
        alt='Freecom Logo'
      />
      <div className='title'>
        <div className='top'>
          <span className='b'>Freecom</span>, build a modern Intercom alternative.
        </div>
        <div className='blue'>
          Full-stack tutorial series to build your own customer support chat.
        </div>
      </div>
    </div>

    <img className='preview' src={require('assets/graphics/freecom/intro.png')} alt='Freecom Chat in Action' />
    <p>
      Throughout this course you’ll learn everything you need to build a
      functional Intercom clone with cutting-edge technologies. We'll cover how
      to get started with your own Graphcool backend and interact with it
      using Apollo Client and React.

    </p>
    <FreecomSignup />
  </div>
)

export default Intro
