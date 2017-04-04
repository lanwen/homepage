import * as React from 'react'

interface Props {
  image: string
  chapter: number
  description: string
  link?: string
}

const Feature = ({image, chapter, description, link}: Props) => (
  <a
    target='_blank'
    href={link || ''}
    className={`feature ${link || 'inactiveLink'}`}
  >
    <style jsx={true}>{`
      .inactiveLink {
        @p: .cursorDefault, .o20;
      }
      .feature + .feature {
        margin-left: 38px;
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
      a {
        @p: .noUnderline;
      }
    `}</style>
    <img src={image} alt='' />
    <div className='content'>
      <p>
        <span className='b'>Chapter {chapter}: </span>
        <span>{description}</span>
      </p>
    </div>
  </a>
)

export default Feature
