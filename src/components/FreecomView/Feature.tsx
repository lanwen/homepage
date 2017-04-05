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
    onClick={e => {
      if (!link) {
        e.preventDefault()
      }
    }}
  >
    <style jsx>{`
      .inactiveLink {
        @p: .cursorDefault, .o20;
      }
      .feature {
        @p: .flexFixed, .mr38, .flex, .flexColumn, .mb38;
        width: calc(33% - 25px);
      }
      img {
        @p: .br2, .brTop, .w100, .flexFixed;
      }
      .content {
        @p: .pa25, .bWhite10, .br2, .brBottom, .bl, .bb, .br, .relative, .bgDarkBlue, .flexAuto;
        top: -7px;
      }
      p {
        @p: .f16, .fw3, .white, .lhTitle;
        .b {
          @p: .fw6;
        }
      }
      @media (min-width: 792px) {
        .feature:nth-child(3), .feature:nth-child(6) {
          margin-right: 0;
        }
      }
      @media (max-width: 791px) {
        .feature {
          @p: .mt16;
          width: calc(50% - 38px) !important;
        }
        .feature:nth-child(even) {
          margin-right: 0;
        }
        .feature + .feature {
          @p: .ml0;
        }
      }
      @media (max-width: 480px) {
        .feature {
          @p: .mt16;
          margin-right: 0 !important;
          width: 100% !important;
        }
      }
      .feature:last-child {
        margin-right: 0 !important;
      }
      a {
        @p: .noUnderline;
      }
    `}</style>
    <img src={image} alt='' />
    <div className='content'>
      <p>
        <span className='b'>
          {chapter === 0 ? 'Overview' : `Chapter ${chapter}`}
          : </span>
        <span>{description}</span>
      </p>
    </div>
  </a>
)

export default Feature
