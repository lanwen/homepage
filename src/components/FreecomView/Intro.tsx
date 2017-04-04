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
        @p: .hf30, .lhTitle, .tc;
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
    `}</style>
    <div className='title'>
      <div className='top'>
        <span className='b'>Freecom</span>, build a modern Intercom alternative.
      </div>
      <div className='green'>
        Join our 7 week course to build your own customer chat.
      </div>
    </div>
    <img className='preview' src={require('assets/graphics/freecom/intro.png')} alt='Freecom Chat in Action' />
    <p>
      Throughout this course you’ll learn everything you need to build a
      functional Intercom clone with cutting-edge technologies. Throughout
      this course you’ll learn everything you need to build a functional Intercom clone.
    </p>
    <FreecomSignup />
  </div>
)

export default Intro
