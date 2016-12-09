import * as React from 'react'
import * as cx from 'classnames'
import { $p } from 'graphcool-styles'
import styled from 'styled-components'
import { maxWidth } from '../../../utils/constants'
import Reference from './Reference'
import Pagination from '../Pagination'
import { references } from './data'

const Container = styled.div`
  max-width: ${maxWidth}px;
  margin: 0 auto;
`

interface Props {
  inViewPort: boolean
}

interface State {
  currentIndex: number
  hover: boolean
}

export default class References extends React.Component<Props, State> {

  state = {
    currentIndex: 0,
    hover: false,
  }

  private rotateInterval: number | null

  componentDidMount() {
    this.rotateInterval = window.setInterval(this.rotate, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.rotateInterval!)
  }

  render() {
    const reference = references[this.state.currentIndex]
    return (
      <section className={cx($p.bgLightgreen10, $p.pa60, $p.pb38, $p.tc)}>
        <Container>
          <Reference
            quote={reference.quote}
            author={reference.who}
            link={reference.url}
          />
        </Container>
        <div
          className={cx($p.flex, $p.justifyCenter)}
          onMouseOver={() => this.setState({ hover: true } as State)}
          onMouseOut={() => this.setState({ hover: false } as State)}
        >
          <Pagination
            bullets={references.length}
            active={this.state.currentIndex}
            onSelect={this.forceSetIndex}
          />
        </div>
      </section>
    )
  }

  private rotate = () => {
    if (this.state.hover || !this.props.inViewPort) {
      return
    }

    const currentIndex = (this.state.currentIndex + 1) % references.length
    this.setState({currentIndex} as State)
  }

  private forceSetIndex = (currentIndex) => {
    this.setState({currentIndex} as State)
    clearInterval(this.rotateInterval!)
    this.rotateInterval = window.setInterval(this.rotate, 5000)
  }
}
