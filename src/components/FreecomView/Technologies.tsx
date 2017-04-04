import * as React from 'react'

interface Props {

}

const Technologies = ({}: Props) => (
  <div className='technologies-wrapper'>
    <style jsx>{`
      .technologies-wrapper {
        @p: .center, .mv96, .ph25;
        max-width: 675px;
      }
      .technologies {
        @p: .flex, .justifyCenter, .flexWrap;
      }
      h1 {
        @p: .f38, .fw3, .black80, .tc;
      }
      p {
        @p: .f20, .mt25, .black50, .mb60, .tc;
      }
      .technology {
        @p: .noUnderline, .flex, .flexColumn, .itemsCenter;
      }
      .technology + .technology {
        @p: .ml60;
      }
      .name {
        @p: .mt38, .black80, .fw3, .f16, .tc;
      }
      img {
        height: 60px;
      }
      .logo {
        @p: .flex, .itemsCenter, .justifyCenter;
        height: 80px;
      }
      @media (max-width: 650px) {
        .name {
          margin-top: 16px !important;
        }
        .technologies {
          justify-content: flex-start !important;
        }
        .technology {
          margin-right: 25px !important;
        }
        .technology + .technology {
          margin-left: 0 !important;
          margin-bottom: 38px !important;
        }
      }
    `}</style>
    <h1>Based on the newest technologies</h1>
    <p>
     To build Freecom, we're using cutting-edge technologies. The frontend will be built with React and Apollo.
      On the backend, we're using Graphcool and integrate serverless functions with StdLib.
    </p>
    <div className='technologies'>
      {data.map(technology => (
        <a key={technology.name} className='technology' target='_blank' href={technology.link}>
          <div className='logo'>
            <img src={technology.logo} />
          </div>
          <div className='name'>{technology.name}</div>
        </a>
      ))}
    </div>
  </div>
)

export default Technologies

const data = [
  {
    name: 'React',
    logo: require('assets/graphics/logos/react.svg'),
    link: 'https://facebook.github.io/react/',
  },
  {
    name: 'GraphQL',
    logo: require('assets/graphics/logos/graphql.svg'),
    link: 'http://graphql.org/',
  },
  {
    name: 'Apollo',
    logo: require('assets/graphics/logos/apollo.svg'),
    link: 'http://dev.apollodata.com/',
  },
  {
    name: 'Graphcool',
    logo: require('assets/graphics/logos/graphcool.svg'),
    link: 'https://www.graph.cool',
  },
  {
    name: 'stdlib',
    logo: require('assets/graphics/logos/stdlib.png'),
    link: 'https://stdlib.com/',
  },
]
