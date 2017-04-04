import * as React from 'react'

interface Props {
  image: string
  chapter: number
  description: string
}

const Feature = ({image, chapter, description}: Props) => (
  <div className='feature'>
    <style jsx={true}>{`
      .feature {
        width: 290px;
      }
      .feature + .feature {
        margin-left: 50px;
      }
      img {
        @p: .br2, .brTop, .w100;
      }
      .content {
        @p: .pa25, .bWhite10, .br2, .brBottom, .bl, .bb, .br, .relative, .bgDarkBlue;
        top: -7px
      }
      p {
        @p: .f16, .fw3, .white, .lhTitle;
        .b {
          @p: .fw6;
        }
      }
      @media (max-width: 650px) {
        .feature {
          @p: .mt16;
        }
        .feature + .feature {
          @p: .ml0;
        }
      }
    `}</style>
    <img src={image} alt='' />
    <div className='content'>
      <p>
        <span className='b'>Chapter {chapter}: </span>
        <span>{description}</span>
      </p>
    </div>
  </div>
)

export default Feature
