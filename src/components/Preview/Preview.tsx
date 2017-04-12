import * as React from 'react'
import Markdown from '../DocsView/components/Content/Markdown'
import {Parser} from 'commonmark'
import {fakeItem} from '../../utils/fakeItem'
import {withRouter} from 'react-router'
// const text = require('../../../../content/content/blog/2017-02-08-announcing-integrations-collaboration-pricing-updates/2017-02-08-announcing-integrations-collaboration-pricing-updates.md')

const localhost = 'http://localhost:5001'

function stripFace(md) {
  return md.split('---')[2]
}

function getBaseName(path) {
  const lastSlash = path.lastIndexOf('/')
  return path.slice(0, lastSlash)
}

interface Props {
  location: any
  router: any
}

interface State {
  ast: any
}

class Preview extends React.Component<Props, State> {

  constructor(props) {
    super(props)

    this.state = {
      ast: null,
    }
  }

  ws: any = new WebSocket('ws://localhost:5002')

  componentDidMount() {
    // do not allow this component from the production build
    if (this.props.location.pathname.includes('graph.cool')) {
      return this.props.router.push('/404/')
    }
    this.fetch()
    document.addEventListener('keydown', this.keyDown)
    this.ws.onopen = () => {
    }
    this.ws.onmessage = () => {
      console.log('got message, fetching')
      this.fetch()
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDown)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.hash !== nextProps.location.hash) {
      this.fetch()
    }
  }

  keyDown = e => {
    if ([13,32].includes(e.keyCode)) {
      this.fetch()
      e.preventDefault()
    }
  }

  fetch() {
    const path = this.props.location.query.p
    const randomNumber = Math.random() * 10000 | 0
    fetch(localhost + path + `?random=${randomNumber}`)
      .then(res => res.text())
      .then(text => {
        const md = this.rewriteImageUrlsForBody(stripFace(text))
        const ast = new Parser().parse(md)
        this.setState({ast})
      })
      .catch(e => console.error(e))
  }

  getImageBaseUrl() {
    const path = this.props.location.query && this.props.location.query.p
    return localhost + getBaseName(path)
  }

  render() {
    const {ast} = this.state
    const path = this.props.location.query && this.props.location.query.p
    if (!path) {
      return (
        <div>
          <h1>You didn't provide a valid url.
            <a
              href={'/preview/?p=/blog/2017-02-08-announcing-integrations-collaboration-pricing-updates/' +
               '2017-02-08-announcing-integrations-collaboration-pricing-updates.md'}>Try this one</a>
          </h1>
        </div>
      ) 
    }
    return (
      <div>
        <style jsx={true}>{`
        div {
          @p: .mt60, .w100, .flex, .justifyCenter;
        }
      `}</style>
        {ast ? (
          <Markdown
            ast={ast}
            layout='EXAMPLE'
            item={fakeItem}
            onChangeHeadings={() => console.log('')}
            loading={false}
            markdownConfig={{displayLineNumbers: false, displayLinkOnHeadings: false, lineWrapping: false}}
            noResize
          />
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    )
  }

  getImages(body: string): string[] | null {
    return body.match(/(\!\[(.*?)\]\()(\..*\.(png|jpg|gif|svg)(\?width=\d+)?)(\))/g)
  }

  rewriteImageUrlsForBody(body: string): string {
    const foundImages = this.getImages(body)

    if (foundImages) {
      for (const image of foundImages) {
        const [, caption, relativeImagePath, , imageWidth] = image.match(/\[(.*)\]\(([\w\/\.\-]*)(\?width=(\d+))?\)/)!
        const imageBaseUrl = this.getImageBaseUrl()
        const randomNumber = Math.random() * 1000 | 0
        const url = imageBaseUrl + this.removeLeadingDot(relativeImagePath) + `?=${randomNumber}`

        const newData = `<!-- IMAGE(${JSON.stringify({url, width: imageWidth, caption})}) -->`
        body = body.replace(image, newData)
      }
    }
    return body
  }

  removeLeadingDot(url) {
    if (url[0] === '.') {
      return url.slice(1, url.length)
    }
    return url
  }

}

export default withRouter(Preview)
