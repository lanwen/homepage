import * as React from 'react'
import SectionHeader from '../../SectionHeader'
import Examples from './Examples'
import Fields from './Fields'

interface Props {
  inViewPort: boolean
}

export default class Functions extends React.Component<Props, {}> {

  render() {
    return (
      <section>
        <SectionHeader
          headline='Extend your backend with AWS Lambda using any language'
          copy='With Serverless Functions you can implement any feature you need. Graphcool automatically fetches the data you need and invokes your function at the right time.' // tslint:disable-line
        />
        <Examples inViewPort={this.props.inViewPort} />
        <Fields />
      </section>
    )
  }
}
