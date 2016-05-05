import React from 'react'
import Helmet from 'react-helmet'
import classes from './ImprintView.scss'

export default class ImprintView extends React.Component {

  render () {
    return (
      <div className={classes.root}>
        <Helmet title='Imprint' />
        <div className={classes.sectionTitle}>
          Get In Touch
        </div>
        <div className={classes.sectionSubTitle}>
          Feel free to <a href='mailto:hello@graph.cool'>reach out to us</a> anytime. We'd love to talk to you!
        </div>
        <h3>Copyright</h3>
        <p>
          The copyright of the contents of the graph.cool website lie with graph.cool. Further usage, also in parts, requires the approval by graph.cool.
        </p>
        <h3>Disclaimer</h3>
        <p>
          graph.cool does not assume any liability for the type or correctness of the material available on the graph.cool website.
          graph.cool is not liable for use of this material.
          In case contents of the graph.cool website violate legal regulations, we ask you to inform us immediately.
          The contents will then be removed as quickly as possible.
        </p>
        <h3>Data Protection</h3>
        <p>
          This website makes use of Google Analytics. Therefore, anonymous usage statistics are collected. Data entered into the website is exclusively used for the indicated purposes and not transmitted to 3rd parties.
        </p>
      </div>
    )
  }
}
