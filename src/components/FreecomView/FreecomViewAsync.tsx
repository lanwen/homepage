import * as React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {Helmet} from 'react-helmet'
import Intro from './Intro'
import Technologies from './Technologies'
import Learn from './Learn'

interface Props {

}

export default class GraphQLUpViewAsync extends React.Component<Props, {}> {

  render() {
    const description = 'Throughout this course you’ll learn everything you need to build a' +
                        ' functional Intercom clone with cutting-edge technologies. Throughout' +
                        ' this course you’ll learn everything you need to build a functional Intercom clone.'
    const title = 'Freecom - Full-stack GraphQL tutorial'
    const image = 'https://www.graph.cool/images/freecom.png?v2'

    return (
      <div>
        <Helmet
          title='Freecom, build a modern Intercom alternative'
          meta={[
            { name: 'description', content: 'Freecom, build a modern Intercom alternative.' },
            { property: 'og:type', content: 'article' },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:image', content: image },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: image },
          ]}
        />
        <style jsx={true}>{`

        `}</style>
        <Header
          view='HOMEPAGE'
        />
        <Intro />
        <Learn />
        <Technologies />
        <Footer />
      </div>
    )
  }
}
